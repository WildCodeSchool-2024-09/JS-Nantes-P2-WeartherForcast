export const windRanges = [
  {
    beaufort: 2,
    start: 0,
    end: 20,
    effect:
      "gentle, soft breeze. At these levels, the wind will be barely perceptible, and you should feel free to forego your wind protection.",
    bike: " ideal for bike riding.",
  },
  {
    beaufort: 3,
    start: 21,
    end: 29,
    effect:
      "moderate breeze. You might start to feel the wind's chill, especially if the temperature is cold.",
    bike: "comfortable for most bike riders. May require slightly more effort, especially on exposed stretches.",
  },
  {
    beaufort: 4,
    start: 30,
    end: 39,
    effect:
      "fresh breeze. Definitely a good idea to wear a scarf, as the wind can feel quite brisk.",
    bike: "can be challenging for some bike riders, especially on exposed roads. Consider seeking shelter or adjusting your route if the wind is head-on.",
  },
  {
    beaufort: 5,
    start: 40,
    end: 63,
    effect:
      "strong breeze. A scarf is highly recommended to protect your neck and face from the wind.",
    bike: "difficult for most bike riders, especially on exposed roads. Strong headwinds can significantly slow you down and increase fatigue. It's advisable to find alternative routes or postpone your ride until the wind subsides.",
    walk: "at this speed, the wind can significantly impede your movement and make it difficult to walk comfortably.",
  },
  {
    beaufort: 6,
    start: 64,
    end: 100,
    effect:
      "the current wind speeds mean it is unsafe to leave shelter. Please recondsider any outdoor activity and remain in a secure location.",
    bike: "too dangerous. Please stay indoors in a safe location until the wind subsides.",
  },
];

export const windDirectionRanges = [
  { Direction: "Northerly,", start: 292, end: 360 },
  { Direction: "Northerly,", start: 0, end: 22.4 },
  { Direction: "North-Northeasterly,", start: 22.5, end: 67.5 },
  { Direction: "Northeasterly,", start: 67.5, end: 112.5 },
  { Direction: "East-Northeasterly,", start: 112.5, end: 157.5 },
  { Direction: "Easterly,", start: 157.5, end: 202.5 },
  { Direction: "East-Southeasterly,", start: 202.5, end: 247.5 },
  { Direction: "Southeasterly,", start: 247.5, end: 292.5 },
  { Direction: "South-Southeasterly,", start: 292.5, end: 337.5 },
  { Direction: "Southerly,", start: 337.5, end: 22.5 },
  { Direction: "South-Southwesterly,", start: 22.5, end: 67.5 },
  { Direction: "Southwesterly,", start: 67.5, end: 112.5 },
  { Direction: "West-Southwesterly,", start: 112.5, end: 157.5 },
  { Direction: "Westerly,", start: 157.5, end: 202.5 },
  { Direction: "West-Northwesterly,", start: 202.5, end: 247.5 },
  { Direction: "Northwesterly,", start: 247.5, end: 292.5 },
  { Direction: "North-Northwesterly,", start: 292.5, end: 337.5 },
];
