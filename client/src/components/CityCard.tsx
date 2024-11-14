interface cityProps {
  City: {
    first: string;
    last: string;
  };
}

function CityCard({ City }: cityProps) {
  return (
    <figcaption>
      <strong>{City.first}</strong>
    </figcaption>
  );
}

export default CityCard;
