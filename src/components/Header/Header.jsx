import logo from "../../assets/images/img-logo-cablayze.webp";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <header>
          <NavLink to="/" className={styles.logoLink}>
            <img className={styles.logopic} src={logo} alt="logo" />{" "}
            <span>Carbalyze</span>
          </NavLink>
          <nav className={styles.primary}>
            <ul className={styles.list}>
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
    </>
  );
}

export default Header;
