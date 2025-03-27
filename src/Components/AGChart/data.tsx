import axios from "axios";

export const getAreaChartData = async (value:string) => {
  const data: Array<{ amount:number, date: string }> = [];
    const res = await axios.get(`http://localhost:3000/transactions/${value}`);

    res.data.forEach((record: { amount: string; date: string }) => {
      data.push({ amount: parseFloat(record.amount), date: record.date});
    });
  return data;

};

export function pieChartData(numRecords: number = 5) {
  const assets = [
    "Stocks",
    "Bonds",
    "Cash",
    "Real Estate",
    "Commodities",
    "Gold",
    "Crypto",
    "Mutual Funds",
    "ETFs",
    "Precious Metals",
  ];

  // ✅ Generate random data
  const data = Array.from({ length: numRecords }, () => {
    const asset = assets[Math.floor(Math.random() * assets.length)];
    const amount = Math.floor(Math.random() * 100000) + 1000; // Amount between 1000 and 100000

    return { asset, amount };
  });

  return data;
}
