import React from "react";

const sponsors = [
  "/sponsors/binance.png",
  "/sponsors/coinbase.png",
  "/sponsors/kraken.png",
  "/sponsors/bitfinex.png",
  "/sponsors/ripple.png",
  "/sponsors/bitmex.png",
  "/sponsors/binance.png",
  "/sponsors/coinbase.png",
  "/sponsors/kraken.png",
  "/sponsors/bitfinex.png",
  "/sponsors/ripple.png",
  "/sponsors/bitmex.png",
  "/sponsors/kraken.png",
  "/sponsors/bitfinex.png",
  "/sponsors/ripple.png",
  "/sponsors/bitmex.png",
];

const SponsorsSlider = () => {
  return (
    <div className="overflow-hidden py-6">
      <h1 className="text-3xl font-bold text-center mb-7">Our Sponsors</h1>
      <div className="whitespace-nowrap animate-slide">
        {sponsors.concat(sponsors).map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Sponsor"
            className="inline-block mx-6 h-12 opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorsSlider;
