import './Header.css';
import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Portfolio', 'Info'];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="./" className="logo">
            HAN FRISONSOVA
          </a>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a key={item} href={`${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            &#9776;
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fullscreen-menu">
          <div className="fullscreen-header">
            <a href="./" className="logo" onClick={() => setMenuOpen(false)}>
              HAN FRISONSOVA
            </a>
            <button
              className="close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="nav-mobile">
            {navItems.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="nav-link-mobile"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
