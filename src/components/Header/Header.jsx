import logo from "../../assets/images/img-logo-cablayze.webp";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);
  return (
    <nav>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logoLink} onClick={handleClose}>
          <img className={styles.logopic} src={logo} alt="logo" />{" "}
          <span>Carbalyze</span>
        </NavLink>
        <button
          className={styles.hamburger}
          onClick={handleToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={
            menuOpen ? `${styles.primary} ${styles.open}` : styles.primary
          }
        >
          <ul className={styles.list} onClick={handleClose}>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book-demo"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Book a Demo
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}

export default Header;
