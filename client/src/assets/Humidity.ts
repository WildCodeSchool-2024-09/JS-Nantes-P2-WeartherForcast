const humidityRanges = [
  {
    humidity: "Tight-fitting clothing is OK",
    start: 0,
    end: 40,
    advice:
      "any clothing will be generally comfortable, for the majority of activities.",
  },
  {
    humidity: "Layered tight-fitting clothing is OK",
    start: 41,
    end: 60,
    advice:
      "layered, tight fitting clothing will be manageable for short periods, but be mindful of overheating.",
  },
  {
    humidity: "Looser fitting layers are recommended",
    start: 61,
    end: 75,
    advice:
      "breathable clothing becomes crucial. Loose-fitting layers allow air to circulate, helping to wick away moisture and keep you cool.",
  },
  {
    humidity: "Single layer is recommended",
    start: 76,
    end: 84,
    advice:
      "opt for lightweight, loose-fitting clothing made from breathable fabrics like cotton or linen. Avoid synthetic materials that can trap heat and moisture.",
  },
  {
    humidity: "Very difficult to cool down once moving",
    start: 85,
    end: 150,
    advice:
      "even with the best clothing choices, it can be challenging to regulate body temperature. Consider limiting intense outdoor activity when wearing several, non-breathable layers and staying hydrated.",
  },
];
export default humidityRanges;
