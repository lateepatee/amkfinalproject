function Header() {
  return (
    <header>
      <nav>
        <h1><a href="/" className="logo-link">Kulmakaappi Oy</a></h1>
        <ul>
          <li><a href="#about">Tietoa meistä</a></li>
          <li><a href="#">Tuotteet</a></li>
          <li><a href="#features">Palvelut</a></li>
          <li><a href="#">Ota yhteyttä</a></li>
          <li><a href="#contact-info">Yhteystiedot</a></li>
        </ul>
        <a className="instagram-link" href="https://www.instagram.com/kulmakaappi_oy" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span className="inst-text">Seuraa</span>
        </a>
      </nav>
    </header>
  );
}
export default Header;