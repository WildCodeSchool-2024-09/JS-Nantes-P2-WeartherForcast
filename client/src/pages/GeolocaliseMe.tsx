import "/src/style/animationCircle.css";
// client\src\style\animationCircle.css

export default function GeolocaliseMe() {
  return (
    <section className="circleContainer">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg className="circle1" height="30rem" width="30rem">
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="0%" stop-color="#826CA0" />
            <stop offset="25%" stop-color="#AC8FD3" />
            <stop offset="50%" stop-color="#FF8768" />
            <stop offset="60%" stop-color="#ECC36D" />
            <stop offset="85%" stop-color="#61AEFF" />
            <stop offset="100%" stop-color="#61AEFF" />
          </linearGradient>
        </defs>
        <circle
          className="circleStroke circle1__Stroke animationCircles"
          stroke="url(#MyGradient)"
          stroke-width="15px"
          stroke-linecap="round"
          r="192px"
          cx="240px"
          cy="240px"
          fill="transparent"
        />
      </svg>
      <div className="circle2" />
    </section>
  );
}
