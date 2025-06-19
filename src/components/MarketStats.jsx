import axios from "axios";
import React, { useEffect, useState } from "react";

const MarketStats = () => {
  const [cryptodata, setCryptodata] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets",
      params: {
        vs_currency: "usd",
        ids: "bitcoin,ethereum,cardano,solana",
        order: "market_cap_desc",
        per_page: 4,
        page: 1,
        sparkline: false,
        x_cg_demo_api_key: "CG-e1ayxFRMm6ggXPnFofLqGmm4",
      },
      headers: {
        accept: "application/json",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setCryptodata(res.data);
      })
      .catch((err) => console.error("Error fetching crypto data:", err));
  }, []);

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Live Market Stats</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {cryptodata.map((coin, i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-md w-48">
            <img
              src={coin.image}
              alt={`${coin.name} logo`}
              className="w-8 h-8 mr-2 rounded-full"
            />
            <h3 className="text-lg font-semibold">{coin.name}</h3>
            <p className="text-xl font-bold">${coin.current_price}</p>
            <p
              className={
                coin.price_change_percentage_24h >= 0
                  ? "text-green-500 font-medium"
                  : "text-red-500 font-medium"
              }
            >
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketStats;
