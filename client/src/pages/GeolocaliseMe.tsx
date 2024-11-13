import "/src/style/animationCircle.css";
// client\src\style\animationCircle.css

export default function GeolocaliseMe() {
  return (
    <section className="circleContainer">
      <svg className="circle1" height="30rem" width="30rem">
        <title>animated circle</title>
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="30.2%" stop-color="#572a6d" />
            <stop offset="49.7%" stop-color="#e67226" />
            <stop offset="57.1%" stop-color="#ecc36d " />
            <stop offset="67.4%" stop-color="#6bb3d6 " />
          </linearGradient>
        </defs>
        <circle
          className="circle1__Stroke animationCircles"
          stroke="url(#MyGradient)"
          stroke-width="15px"
          stroke-linecap="round"
          r="117px"
          cx="50%"
          cy="50%"
          fill="transparent"
        />
      </svg>
      <div className="circle2" />
    </section>
  );
}
