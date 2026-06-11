async function testMonthlyParams() {
  const url = 'https://fred.stlouisfed.org/graph/fredgraph.csv?id=ICSA&cosd=2021-01-01&fq=Monthly&fam=avg';
  console.log(`Fetching from: ${url}`);
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log(`Success! Length: ${text.length} characters.`);
    console.log(`First 20 lines:`);
    console.log(text.split('\n').slice(0, 20).join('\n'));
    console.log(`\nLast 10 lines:`);
    console.log(text.split('\n').slice(-10).join('\n'));
  } catch (e) {
    console.error('Fetch failed:', e);
  }
}
testMonthlyParams();
