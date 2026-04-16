import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactFormPage from './pages/ContactFormPage' // Luodaan tämä seuraavaksi

function HomePage() {
  return (
    <>
      <Hero />
      <section id="about">
        <h2>Me yrityksenä</h2>
        <p>Kulmakaappi on kodin sisustamisen, muodin ja lahjatavaroiden tasokas erikoisliike Kokkolassa...</p>
      </section>
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<ContactFormPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App