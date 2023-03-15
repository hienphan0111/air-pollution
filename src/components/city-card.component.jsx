function CityCard({city}) {
  const { name, aqi, time } = city;

  return (
    <div className="city-card">
      <h3>{name}</h3>
    </div>
  );
}

export default CityCard;
