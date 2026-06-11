import fs from 'fs';

async function verifyRaw() {
  const url = 'https://fred.stlouisfed.org/graph/fredgraph.csv?id=ICSA&cosd=2021-01-01';
  try {
    const res = await fetch(url);
    const text = await res.text();
    const lines = text.split('\n');
    console.log(`Downloaded ${text.length} bytes.`);
    console.log(`First 30 lines of raw CSV:`);
    console.log(lines.slice(0, 30).join('\n'));
    
    console.log(`\nLast 15 lines of raw CSV:`);
    console.log(lines.slice(-15).join('\n'));
  } catch (e) {
    console.error('Fetch failed:', e);
  }
}
verifyRaw();
