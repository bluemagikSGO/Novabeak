import React from "react";

const coins = [
  { name: "Bitcoin", price: "$46,250", change: "+3.5%" },
  { name: "Ethereum", price: "$3,520", change: "+2.1%" },
  { name: "Cardano", price: "$1.31", change: "+1.8%" },
];

const MarketStats = () => (
  <section className="py-12 text-center">
    <h2 className="text-2xl font-bold mb-6">Live Market Stats</h2>
    <div className="flex justify-center gap-10 flex-wrap">
      {coins.map((coin, i) => (
        <div key={i} className="bg-white shadow-md p-6 rounded-md w-48">
          <h3 className="text-lg font-semibold">{coin.name}</h3>
          <p className="text-xl font-bold">{coin.price}</p>
          <p className="text-green-500 font-medium">{coin.change}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MarketStats;
