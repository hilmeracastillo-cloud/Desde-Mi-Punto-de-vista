async function fetchAllMonthly() {
  const url = 'https://fred.stlouisfed.org/graph/fredgraph.csv?id=ICSA&cosd=2021-01-01&fq=Monthly&fam=avg';
  try {
    const res = await fetch(url);
    const text = await res.text();
    const lines = text.trim().split('\n');
    console.log(`Row count: ${lines.length}`);
    const results: { month: string, value: number, original_text: string }[] = [];
    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(',');
      if (parts.length >= 2) {
        const date = parts[0];
        const val = parseFloat(parts[1]);
        results.push({
          month: date.substring(0, 7),
          value: parseFloat((val / 1000).toFixed(1)),
          original_text: parts[1]
        });
      }
    }
    console.log("ALL MONTHLY VALUES FROM FRED (in thousands):");
    console.log(JSON.stringify(results));
  } catch (err) {
    console.error("Error fetching FRED monthly:", err);
  }
}
fetchAllMonthly();
