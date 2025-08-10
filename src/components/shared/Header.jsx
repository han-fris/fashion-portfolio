import './Header.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Při změně velikosti okna zavřeme menu, pokud jsme na desktopu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            HAN FRISONSOVA
          </Link>

          <nav className="nav-desktop">
            <Link to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/info" className="nav-link" onClick={() => setMenuOpen(false)}>
              Info
            </Link>
          </nav>
        </div>
      </header>

      <button
        className={`toggle-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="fullscreen-menu">
          <div className="fullscreen-header">
            <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
              HAN FRISONSOVA
            </Link>
          </div>
          <nav className="nav-mobile">
            <Link to="/portfolio" className="nav-link-mobile" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link to="/info" className="nav-link-mobile" onClick={() => setMenuOpen(false)}>
              Info
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
