import { useState } from 'react';

function Contact() {
  const [showMap, setShowMap] = useState(false);
  const address = "Tehtaankatu 2b, 67100 Kokkola";

  return (
    <section id="contact-info">
      <h2>Yhteystiedot</h2>
      <div className="contact-details">
        <p><strong>Osoite:</strong> {address}
          <button className="open-map" onClick={() => setShowMap(true)}>Näytä reitti</button>
        </p>
        <div className="opening-hours">
          <h3>Aukioloajat</h3>
          <ul>
            <li><strong>Ma–Pe:</strong> 10:00–17:00</li>
            <li><strong>La:</strong> 10:00–15:00</li>
            <li><strong>Su:</strong> Suljettu</li>
          </ul>
        </div>
        <p><strong>Puhelin:</strong> <a href="tel:+358453191110">+358 45 3191110</a></p>
        <p><strong>Sähköposti:</strong> <a href="mailto:kulmakaappi@kulmakaappi.fi">kulmakaappi@kulmakaappi.fi</a></p>
      </div>

      {showMap && (
        <div className="map-modal show" onClick={() => setShowMap(false)}>
          <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="map-close" onClick={() => setShowMap(false)}>✕</button>
            <div className="map-wrapper">
              <iframe 
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                title="Kartta"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Contact;