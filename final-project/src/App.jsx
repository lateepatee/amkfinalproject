import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about">
          <h2>Me yrityksenä</h2>
          <p>Kulmakaappi on kodin sisustamisen, muodin ja lahjatavaroiden tasokas erikoisliike Kokkolassa...</p>
          <div className="hero-secondary-video about-video">
            <video controls>
              <source src="/videot/VaakavideoReggaemusa.mp4" type="video/mp4" />
              Selaimesi ei tue videota.
            </video>
          </div>
          <div className="cta-container">
            <a href="#" className="hero-cta">Katso tuotteet</a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features">
          <h2>Palvelut</h2>
          <ul>
            <li>Tarjoamme paikan päällä ompelupalvelua...</li>
            <li>Tuotteitamme on mahdollista tilata toimitusmyyntinä...</li>
            <li>Vuokraamme tyylikkäät laukut ja iltapuvut juhliin.</li>
            <li className="school-project-note">HUOM: EMME OIKEASTI TARJOA VUOKRAPALVELUITA...</li>
          </ul>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App