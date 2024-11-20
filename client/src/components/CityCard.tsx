interface CityProps {
  city: {
    first: string;
    last: string;
  };
}

function CityCard({ city }: CityProps) {
  return (
    <figcaption>
      <strong>{city.first}</strong>
    </figcaption>
  );
}

export default CityCard;
