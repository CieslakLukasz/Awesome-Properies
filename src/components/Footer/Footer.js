import React from "react";
import "./Footer.less";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Sekcja logo */}
        <div className="footer__logo-section">
          <img
            src="/path-to-your-logo/logo.png"
            alt="Logo"
            className="footer__logo"
          />
          <p className="footer__tagline">Twój slogan lub tagline tutaj.</p>
        </div>

        {/* Kolumny linków */}
        <div className="footer__columns">
          <div className="footer__column">
            <h3 className="footer__column-title">O nas</h3>
            <ul className="footer__links">
              <li>
                <a href="/about">Nasza historia</a>
              </li>
              <li>
                <a href="/team">Zespół</a>
              </li>
              <li>
                <a href="/careers">Kariera</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">Kontakt</h3>
            <ul className="footer__links">
              <li>
                <a href="/contact">Formularz kontaktowy</a>
              </li>
              <li>
                <a href="mailto:kontakt@example.com">
                  Email: kontakt@example.com
                </a>
              </li>
              <li>
                <a href="tel:+48123456789">Telefon: +48 123 456 789</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">Pomoc</h3>
            <ul className="footer__links">
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/support">Wsparcie techniczne</a>
              </li>
              <li>
                <a href="/returns">Zwroty i reklamacje</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Dolny pasek */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Twoja Firma. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
