import "/src/style/animationCircle.css";
// client\src\style\animationCircle.css

export default function GeolocaliseMe() {
  return (
    <section className="circleContainer">
      <svg className="circle1" height="30rem" width="30rem">
        <title>animated circle</title>
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="0%" stop-color="#572a6d" />
            <stop offset="25%" stop-color="#572a6d" />
            <stop offset="50%" stop-color="#e67226 " />
            <stop offset="60%" stop-color="#ecc36d " />
            <stop offset="85%" stop-color="#61AEFF" />
            <stop offset="100%" stop-color="#6bb3d6 " />
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
