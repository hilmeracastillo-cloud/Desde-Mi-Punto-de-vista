import fs from 'fs';

async function generateWeeklyDataset() {
  const url = 'https://fred.stlouisfed.org/graph/fredgraph.csv?id=ICSA&cosd=2021-01-01';
  try {
    const res = await fetch(url);
    const text = await res.text();
    const lines = text.trim().split('\n').slice(1);
    
    const monthsEs = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    
    const records: { date: string, label: string, value: number }[] = [];
    
    for (const line of lines) {
      const [date, valStr] = line.split(',');
      const val = parseFloat(valStr);
      if (isNaN(val)) continue;
      
      // We parse date "YYYY-MM-DD"
      const parts = date.split('-');
      const yearShort = parts[0].substring(2); // "21", "22", etc.
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parts[2];
      const monthLabel = monthsEs[monthIdx];
      
      // Label like "02 Ene 21"
      const label = `${day} ${monthLabel} ${yearShort}`;
      
      records.push({
        date,
        label,
        value: parseFloat((val / 1000).toFixed(1)) // in thousands
      });
    }
    
    // Split into administrations to compute exact stats
    // Biden: Jan 2, 2021 to Jan 18, 2025
    // Trump II: Jan 25, 2025 onwards
    const bidenRecords = records.filter(r => r.date <= '2025-01-18');
    const trumpRecords = records.filter(r => r.date >= '2025-01-19');
    
    const bidenSum = bidenRecords.reduce((s, r) => s + r.value, 0);
    const bidenAvg = parseFloat((bidenSum / bidenRecords.length).toFixed(1));
    
    const trumpSum = trumpRecords.reduce((s, r) => s + r.value, 0);
    const trumpAvg = parseFloat((trumpSum / trumpRecords.length).toFixed(1));
    
    const initial = records[0].value;
    const latest = records[records.length - 1].value;
    const changeK = latest - initial;
    const changePct = (changeK / initial) * 100;
    
    console.log(`Weekly Records count: ${records.length}`);
    console.log(`Biden: ${bidenRecords.length} weeks, Avg: ${bidenAvg}K`);
    console.log(`Trump II: ${trumpRecords.length} weeks, Avg: ${trumpAvg}K`);
    console.log(`Initial (Jan 2, 2021): ${initial}K`);
    console.log(`Latest (${records[records.length - 1].date}): ${latest}K`);
    console.log(`Total variation: ${changeK.toFixed(1)}K (${changePct.toFixed(1)}%)`);
    
    // Write full dataset structure to a TS file so we can read it easily
    const dataStructure = {
      labels: records.map(r => r.label),
      values: records.map(r => r.value),
      stats: {
        bidenAvg: bidenAvg,
        trumpAvg: trumpAvg,
        totalChange: `${changeK.toFixed(1)} K (${changePct.toFixed(1)}%)`,
        source: "U.S. Department of Labor (FRED: ICSA)",
        unit: "Miles de Solicitudes/Semana"
      }
    };
    
    fs.writeFileSync('weekly_icsa_data.json', JSON.stringify(dataStructure, null, 2));
    console.log("Success! Written to weekly_icsa_data.json");
    
  } catch (err) {
    console.error(err);
  }
}
generateWeeklyDataset();
