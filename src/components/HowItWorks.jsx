import React from "react";

const steps = [
  { icon: "👤", title: "Create an Account" },
  { icon: "💳", title: "Fund Your Wallet" },
  { icon: "📈", title: "Choose a Plan" },
  { icon: "📊", title: "Track Your Growth" },
];

const HowItWorks = () => (
  <section className="py-12 text-center">
    <h2 className="text-3xl font-bold mb-8">How It Works</h2>
    <div className="flex justify-center gap-6 flex-wrap">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center w-40">
          <div className="text-4xl mb-2">{step.icon}</div>
          <p className="font-medium">{step.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
