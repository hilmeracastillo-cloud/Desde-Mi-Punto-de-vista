export interface Footnote {
  id: number;
  title: string;
  description: string;
  readings?: string[];
  links?: { label: string; url: string }[];
}

export interface ReferenceItem {
  citation: string;
  url?: string;
}

export interface ChapterSection {
  id: string;
  title: string;
  subtitle?: string;
  quote?: string;
  paragraphs: string[]; // Can include markdown or footnote markers like (1)
}

export type ViewTab = 'intro' | 'cap1' | 'cap2' | 'cap3' | 'cap4' | 'cap5' | 'estructura';

export interface ReadingPosition {
  chapter: ViewTab;
  sectionId?: string;
}
