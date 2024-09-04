import React from "react";

const rewards = [
  { title: "Pulseira Branca Cartpanda", value: "R$ 10.000", image: "/images/pulseira_branca.svg" },
  { title: "Placa Diamond Panda", value: "R$ 5.000.000", image: "/images/placa_diamond.svg" },
  { title: "BMW 320i", value: "R$ 30.000.000", image: "/images/bmw_320i.svg" },
  // Adicione mais prêmios se necessário
];

const RewardsCarousel = () => {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {rewards.map((reward, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-64 flex-shrink-0">
          <img src={reward.image} alt={reward.title} className="w-full h-auto mb-4" />
          <p className="font-bold">{reward.title}</p>
          <p className="text-sm text-gray-500">{reward.value}</p>
        </div>
      ))}
    </div>
  );
};

export default RewardsCarousel;
