export function getAreaChartData(value: number) {
  const generateRandomValue = (base: number, variation: number): number => {
    return Math.floor(base + Math.random() * variation - variation / 2);
  };

  const generateData = (
    numRecords: number
  ): Array<{
    value: string;
    subscriptions: number;
    services: number;
    // products: number;
  }> => {
    const data: Array<{
      value: string;
      subscriptions: number;
      services: number;
      // products: number;
    }> = [];

    for (let i = 0; i < numRecords; i++) {
      // const monthIndex = i % months.length;

      data.push({
        value: `${i}`,
        subscriptions: generateRandomValue(50, 50),
        services: generateRandomValue(150, 100),
        // products: generateRandomValue(100, 100),
      });
    }

    return data;
  };

  // Invoke the function and return the result
  const result = generateData(value);
  console.log("getData***", result);

  return result;
}

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
