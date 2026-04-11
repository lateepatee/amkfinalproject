function Hero() {
  return (
    <section id="hero">
      <h2>Laadukasta designia Kokkolan ytimessä.</h2>
      <p>Tule vierailulle ja ihastu!</p>
      <div className="hero-media">
        <figure className="hero-image single-image">
          <img src="/kuvat/firma.jpeg" alt="Kulmakaapin näyteikkuna" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
export default Hero;