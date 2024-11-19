function ClothingPreferences() {
  return (
    <div>
      <h3>Warmth</h3>

      <input type="Range" className="temperature" />
      <section className="slider-descriptions">
        <p>Cooler</p>
        <p>Warmer</p>
      </section>
    </div>
  );
}

export default ClothingPreferences;
