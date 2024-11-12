interface CityProps {
  City: {
    first: string;
    last: string;
  };
}

function CityCard({ City }: CityProps) {
  return (
    <figcaption>
      <strong>{City.first}</strong>
    </figcaption>
  );
}

export default CityCard;
