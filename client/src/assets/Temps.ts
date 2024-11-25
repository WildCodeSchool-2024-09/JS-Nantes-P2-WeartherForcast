// // To edit the ranges:
// tempRanges.veryWarm[0].start = 3;
// tempRanges.veryWarm[0].end = 7;
const tempRanges = [
  {
    temp: "very warm",
    start: 25,
    end: 250,
    imgSrc: [
      "/./src/assets/images/T-VWTop.png",
      "/./src/assets/images/T-VW_WBottom.png",
    ],
  },

  {
    temp: "warm",
    start: 20,
    end: 24,
    imgSrc: [
      "/./src/assets/images/T-WTop.png",
      "/./src/assets/images/T-VW_WBottom.png",
    ],
  },

  {
    temp: "cool",
    start: 10,
    end: 19,
    imgSrc: [
      "/./src/assets/images/T-CTop.png",
      "/./src/assets/images/T-CBottom.png",
    ],
  },

  {
    temp: "cold",
    start: 0,
    end: 9,
    imgSrc: [
      "/./src/assets/images/T-CLDTop.png",
      "/./src/assets/images/T-CLDBottom.png",
    ],
  },

  {
    temp: "very cold",
    start: -300,
    end: 0,
    imgSrc: [
      "/./src/assets/images/T-VCLDTop.png",
      "/./src/assets/images/T-VCLDBottom.png",
    ],
  },
];

export default tempRanges;
