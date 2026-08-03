import { jsPDF } from "jspdf";
import { bookMetadata, invitationText, whyThisBookText, purposeText, bookStructure } from "../data/bookIntro";
import { chapter1Header, chapter1Sections, chapter1Footnotes, chapter1References } from "../data/chapter1";
import { chapter2Header, chapter2Sections, chapter2Footnotes, chapter2References } from "../data/chapter2";
import { chapter3Header, chapter3Sections, chapter3Footnotes, chapter3References } from "../data/chapter3";
import { chapter4Header, chapter4Sections, chapter4Footnotes, chapter4References } from "../data/chapter4";
import { Footnote, ReferenceItem } from "../types";

function sanitize(text: string): string {
  if (!text) return "";
  return text
    .replace(/—/g, "-")
    .replace(/–/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\r\n/g, "\n");
}

export async function generateBookPdf(
  scope: "all" | "intro" | "cap1" | "cap2" | "cap3" | "cap4" | "estructura",
  onProgress?: (status: string, percent: number) => void
): Promise<void> {
  if (onProgress) onProgress("Iniciando generación de PDF...", 10);

  // Give UI time to render loading state
  await new Promise((resolve) => setTimeout(resolve, 50));

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 20;
  const marginTop = 22;
  const marginBottom = 22;
  const contentWidth = pageWidth - marginX * 2; // 170 mm

  let y = marginTop;

  const addHeaderFooter = () => {
    const totalPages = doc.getNumberOfPages();
    if (totalPages === 1 && scope === "all") return; // Cover page

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(140, 140, 140);
    doc.text("Arquitectura del Aprendizaje - Hilmer Castillo Bescanza", marginX, 12);
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.line(marginX, 14, pageWidth - marginX, 14);

    doc.line(marginX, pageHeight - 14, pageWidth - marginX, pageHeight - 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(`Página ${totalPages}`, pageWidth - marginX, pageHeight - 9, { align: "right" });
  };

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
      addHeaderFooter();
    }
  };

  const renderSectionHeader = (chapterNum: string, title: string, subtitle?: string, epigraph?: string) => {
    checkPageBreak(40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(79, 70, 229); // Indigo
    doc.text(sanitize(chapterNum.toUpperCase()), marginX, y);
    y += 7;

    doc.setFont("times", "bold");
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42); // Slate 900
    const titleLines = doc.splitTextToSize(sanitize(title), contentWidth);
    doc.text(titleLines, marginX, y);
    y += titleLines.length * 9;

    if (subtitle) {
      doc.setFont("times", "italic");
      doc.setFontSize(13);
      doc.setTextColor(71, 85, 105);
      const subLines = doc.splitTextToSize(sanitize(subtitle), contentWidth);
      doc.text(subLines, marginX, y);
      y += subLines.length * 6 + 4;
    }

    if (epigraph) {
      y += 2;
      checkPageBreak(25);
      doc.setFont("times", "italic");
      doc.setFontSize(10.5);
      doc.setTextColor(100, 116, 139);
      const epiLines = doc.splitTextToSize(`"${sanitize(epigraph)}"`, contentWidth - 10);
      doc.setDrawColor(99, 102, 241);
      doc.setLineWidth(0.8);
      doc.line(marginX, y, marginX, y + epiLines.length * 5);
      doc.text(epiLines, marginX + 4, y + 4);
      y += epiLines.length * 5 + 8;
    }

    y += 6;
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 8;
  };

  const renderParagraphs = (paragraphs: string[]) => {
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);

    paragraphs.forEach((p) => {
      const isMultilineList = p.includes("\n");
      if (isMultilineList) {
        const lines = p.split("\n");
        lines.forEach((line) => {
          if (!line.trim()) return;
          const formattedLine = sanitize(line);
          const splitLines = doc.splitTextToSize(formattedLine, contentWidth - 6);
          checkPageBreak(splitLines.length * 5.5 + 2);

          doc.setFont("times", "normal");
          doc.setTextColor(51, 65, 85);
          doc.text(splitLines, marginX + 4, y);
          y += splitLines.length * 5.5 + 2;
        });
        y += 2;
      } else {
        const formattedP = sanitize(p);
        const splitLines = doc.splitTextToSize(formattedP, contentWidth);
        checkPageBreak(splitLines.length * 5.5 + 4);

        doc.setFont("times", "normal");
        doc.setTextColor(30, 41, 59);
        doc.text(splitLines, marginX, y, { align: "justify", maxWidth: contentWidth });
        y += splitLines.length * 5.5 + 4;
      }
    });
  };

  const renderSections = (sections: { id: string; title: string; paragraphs: string[] }[]) => {
    sections.forEach((sec) => {
      checkPageBreak(20);
      doc.setFont("times", "bold");
      doc.setFontSize(14);
      doc.setTextColor(15, 23, 42);
      const titleLines = doc.splitTextToSize(sanitize(sec.title), contentWidth);
      doc.text(titleLines, marginX, y);
      y += titleLines.length * 6 + 4;

      renderParagraphs(sec.paragraphs);
      y += 4;
    });
  };

  const renderFootnotesAndReferences = (footnotes: Footnote[], references: ReferenceItem[]) => {
    if (footnotes && footnotes.length > 0) {
      checkPageBreak(25);
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(79, 70, 229);
      doc.text("Notas y Aparato Crítico", marginX, y);
      y += 6;
      doc.setDrawColor(199, 210, 254);
      doc.setLineWidth(0.4);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 6;

      footnotes.forEach((fn) => {
        const fnHeader = `(${fn.id}) ${sanitize(fn.title)}`;
        const fnBody = sanitize(fn.description);
        const splitHeader = doc.splitTextToSize(fnHeader, contentWidth);
        const splitBody = doc.splitTextToSize(fnBody, contentWidth);

        checkPageBreak(splitHeader.length * 5 + splitBody.length * 4.5 + 4);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(30, 41, 59);
        doc.text(splitHeader, marginX, y);
        y += splitHeader.length * 5;

        doc.setFont("times", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        doc.text(splitBody, marginX, y);
        y += splitBody.length * 4.5 + 4;
      });
      y += 6;
    }

    if (references && references.length > 0) {
      checkPageBreak(25);
      doc.setFont("times", "bold");
      doc.setFontSize(13);
      doc.setTextColor(79, 70, 229);
      doc.text("Referencias Bibliográficas", marginX, y);
      y += 6;
      doc.setDrawColor(199, 210, 254);
      doc.setLineWidth(0.4);
      doc.line(marginX, y, pageWidth - marginX, y);
      y += 6;

      references.forEach((ref) => {
        const refText = sanitize(ref.citation);
        const splitRef = doc.splitTextToSize(refText, contentWidth);
        checkPageBreak(splitRef.length * 4.5 + 3);

        doc.setFont("times", "normal");
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        doc.text(splitRef, marginX, y);
        y += splitRef.length * 4.5 + 3;
      });
      y += 6;
    }
  };

  // COVER PAGE (If full book or intro)
  if (scope === "all") {
    if (onProgress) onProgress("Generando Portada e Índice...", 25);

    // Book Cover (Clean white background)
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(79, 70, 229); // Indigo 600
    doc.text("BORRADOR DE TRABAJO - REVISIÓN ACADÉMICA", marginX, 45);

    doc.setFont("times", "bold");
    doc.setFontSize(28);
    doc.setTextColor(15, 23, 42); // Slate 900
    const titleLines = doc.splitTextToSize("ARQUITECTURA DEL APRENDIZAJE", contentWidth);
    doc.text(titleLines, marginX, 65);

    doc.setFont("times", "italic");
    doc.setFontSize(13);
    doc.setTextColor(51, 65, 85); // Slate 700
    const subLines = doc.splitTextToSize(sanitize(bookMetadata.subtitle), contentWidth);
    doc.text(subLines, marginX, 90);

    doc.setDrawColor(79, 70, 229); // Indigo line
    doc.setLineWidth(1);
    doc.line(marginX, 120, marginX + 40, 120);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.text(bookMetadata.author, marginX, 140);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139); // Slate 500
    doc.text(`${bookMetadata.version} | 2026`, marginX, 150);

    // New page for Table of Contents
    doc.addPage();
    y = marginTop;
    addHeaderFooter();

    doc.setFont("times", "bold");
    doc.setFontSize(18);
    doc.setTextColor(15, 23, 42);
    doc.text("ÍNDICE GENERAL", marginX, y);
    y += 10;

    doc.setDrawColor(226, 232, 240);
    doc.line(marginX, y, pageWidth - marginX, y);
    y += 8;

    const toc = [
      { title: "Presentación e Introducción", desc: "El propósito de la obra e invitación a la lectura" },
      { title: "Capítulo 1: La arquitectura invisible", desc: "Las organizaciones como estructuras deliberadamente diseñadas" },
      { title: "Capítulo 2: Cuando el diseño deja de responder al propósito", desc: "De la era industrial a la era de la inteligencia artificial" },
      { title: "Capítulo 3: El fracaso de las reformas aisladas", desc: "Por qué las iniciativas fragmentadas no transforman las instituciones" },
      { title: "Capítulo 4: Arquitectura del Aprendizaje", desc: "Aprender a diseñar organizaciones que aprenden, sus leyes y principios" },
      { title: "Estructura Preliminar de la Obra", desc: "Visión sistemática de las Partes I, II, III y IV" },
    ];

    toc.forEach((item, idx) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(79, 70, 229);
      doc.text(`${idx + 1}. ${sanitize(item.title)}`, marginX, y);
      y += 6;

      doc.setFont("times", "italic");
      doc.setFontSize(10);
      doc.setTextColor(100, 116, 139);
      doc.text(sanitize(item.desc), marginX + 6, y);
      y += 8;
    });

    doc.addPage();
    y = marginTop;
    addHeaderFooter();
  }

  // 1. PRESENTACIÓN E INTRODUCCIÓN
  if (scope === "all" || scope === "intro") {
    if (onProgress) onProgress("Procesando Presentación e Introducción...", 40);

    renderSectionHeader("PRESENTACIÓN", bookMetadata.title, bookMetadata.subtitle);

    // Invitation
    checkPageBreak(15);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text(sanitize(invitationText.title), marginX, y);
    y += 6;

    renderParagraphs(invitationText.paragraphs);

    // Why this book
    checkPageBreak(15);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text(sanitize(whyThisBookText.title), marginX, y);
    y += 6;

    renderParagraphs(whyThisBookText.paragraphs);

    // Purpose
    checkPageBreak(15);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.setTextColor(15, 23, 42);
    doc.text(sanitize(purposeText.title), marginX, y);
    y += 6;

    renderParagraphs(purposeText.paragraphs);

    if (scope === "all") {
      doc.addPage();
      y = marginTop;
      addHeaderFooter();
    }
  }

  // 2. CAPÍTULO 1
  if (scope === "all" || scope === "cap1") {
    if (onProgress) onProgress("Procesando Capítulo 1...", 55);

    renderSectionHeader(chapter1Header.number, chapter1Header.title, undefined, chapter1Header.epigraph);
    renderSections(chapter1Sections);
    renderFootnotesAndReferences(chapter1Footnotes, chapter1References);

    if (scope === "all") {
      doc.addPage();
      y = marginTop;
      addHeaderFooter();
    }
  }

  // 3. CAPÍTULO 2
  if (scope === "all" || scope === "cap2") {
    if (onProgress) onProgress("Procesando Capítulo 2...", 70);

    renderSectionHeader(chapter2Header.number, chapter2Header.title, chapter2Header.subtitle, chapter2Header.epigraph);
    renderSections(chapter2Sections);
    renderFootnotesAndReferences(chapter2Footnotes, chapter2References);

    if (scope === "all") {
      doc.addPage();
      y = marginTop;
      addHeaderFooter();
    }
  }

  // 4. CAPÍTULO 3
  if (scope === "all" || scope === "cap3") {
    if (onProgress) onProgress("Procesando Capítulo 3...", 82);

    renderSectionHeader(chapter3Header.number, chapter3Header.title, chapter3Header.subtitle, chapter3Header.epigraph);
    renderSections(chapter3Sections);
    renderFootnotesAndReferences(chapter3Footnotes, chapter3References);

    if (scope === "all") {
      doc.addPage();
      y = marginTop;
      addHeaderFooter();
    }
  }

  // 5. CAPÍTULO 4
  if (scope === "all" || scope === "cap4") {
    if (onProgress) onProgress("Procesando Capítulo 4...", 90);

    renderSectionHeader(chapter4Header.number, chapter4Header.title, chapter4Header.subtitle, chapter4Header.epigraph);
    renderSections(chapter4Sections);
    renderFootnotesAndReferences(chapter4Footnotes, chapter4References);

    if (scope === "all") {
      doc.addPage();
      y = marginTop;
      addHeaderFooter();
    }
  }

  // 6. ESTRUCTURA GENERAL DE LA OBRA
  if (scope === "all" || scope === "estructura") {
    if (onProgress) onProgress("Procesando Estructura de la Obra...", 95);

    renderSectionHeader("ESTRUCTURA GENERAL", "Estructura Preliminar de la Obra");

    bookStructure.forEach((part) => {
      checkPageBreak(20);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(79, 70, 229);
      const splitPart = doc.splitTextToSize(sanitize(part.part), contentWidth);
      doc.text(splitPart, marginX, y);
      y += splitPart.length * 6 + 3;

      part.chapters.forEach((ch) => {
        checkPageBreak(12);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59);
        doc.text(`${sanitize(ch.number)}: ${sanitize(ch.title)}`, marginX + 4, y);
        y += 5;

        doc.setFont("times", "normal");
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        const splitDesc = doc.splitTextToSize(sanitize(ch.description), contentWidth - 8);
        doc.text(splitDesc, marginX + 8, y);
        y += splitDesc.length * 4.5 + 4;
      });
      y += 4;
    });
  }

  if (onProgress) onProgress("Finalizando PDF...", 98);

  const filename = scope === "all"
    ? "Arquitectura_del_Aprendizaje_Libro_Completo.pdf"
    : `Arquitectura_del_Aprendizaje_${scope.toUpperCase()}.pdf`;

  doc.save(filename);

  if (onProgress) onProgress("¡PDF descargado con éxito!", 100);
}
