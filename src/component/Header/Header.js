import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <div className="logo-img">
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </Link>
        </div>
        <span className="logo-title">COZ Shopping</span>
      </div>
      <div className={`dropdown ${isMenuOpen ? "open" : ""}`}>
        <button onClick={toggleMenu}>
          <img src="/hamburger button.png" alt="button" />
          <div className="dropdown-options">
            <ul>
              <li>OOO님, 안녕하세요!</li>
              <li
                className="headerOnclick"
                onClick={() => {
                  window.location.href = "/products/list";
                }}
              >
                <Link to="/products/list">상품리스트 페이지</Link>
              </li>
              <li
                className="headerOnclick"
                onClick={() => {
                  window.location.href = "/bookmark";
                }}
              >
                <Link to="/bookmark">북마크 페이지</Link>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
