import { useState } from 'react';
import { z } from 'zod';

// 1. Zod-skeema validointia varten (vaaditaan 2 pisteeseen)
const contactSchema = z.object({
  name: z.string().min(2, "Nimen pitää olla vähintään 2 merkkiä pitkä"),
  email: z.string().email("Virheellinen sähköpostiosoite"),
  visitDate: z.string().min(1, "Valitse päivämäärä"),
});

function ContactFormPage() {
  const [formData, setFormData] = useState({ name: '', email: '', visitDate: '' });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 2. Validointi Zodilla
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        name: formattedErrors.name?._errors[0],
        email: formattedErrors.email?._errors[0],
        visitDate: formattedErrors.visitDate?._errors[0],
      });
      return;
    }

    // 3. Lähetys httpbin-palveluun
    setErrors({});
    try {
      const res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResponse(data); // Tallennetaan vastaus näytettäväksi
    } catch (error) {
      console.error("Virhe lähetyksessä:", error);
    }
  };

  return (
    <section id="cta">
      <h2>Ota yhteyttä</h2>
      <p>Täytä lomake varataksesi henkilökohtaisen esittelyajan.</p>
      
      <form onSubmit={handleSubmit} id="contact-form">
        <div className="form-grid">
          {/* Tyyppi 1: Text */}
          <div className="form-row">
            <label>Nimi</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          {/* Tyyppi 2: Email */}
          <div className="form-row">
            <label>Sähköposti</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Tyyppi 3: Date */}
          <div className="form-row">
            <label>Toivottu päivämäärä</label>
            <input 
              type="date" 
              value={formData.visitDate}
              onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
            />
            {errors.visitDate && <span className="error-text">{errors.visitDate}</span>}
          </div>
        </div>
        <button type="submit">Lähetä tiedot</button>
      </form>

      {/* 4. Näytetään httpbin-vastaus selaimeen */}
      {response && (
        <div className="response-view">
          <h3>Palvelimen vastaus (httpbin):</h3>
          <pre>{JSON.stringify(response.json, null, 2)}</pre>
          <p>Tiedot vastaanotettu onnistuneesti!</p>
        </div>
      )}
    </section>
  );
}

export default ContactFormPage;