import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1><Link to="/" className="logo-link">Kulmakaappi Oy</Link></h1>
        <ul>
          <li><Link to="/">Etusivu</Link></li>
          <li><Link to="/form">Ota yhteyttä</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;