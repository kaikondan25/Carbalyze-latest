import styles from './Footer.module.scss';
import foot from "../../assets/images/img-footlogo.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandSection}>
          <div className={styles.logo}><img src={foot} alt='...'></img> </div>
          <p>Carbon Accounting & Product Carbon Footprint</p>
          <a href="#" target="_blank" rel="noreferrer" className={styles.linkedin}>
            
            <span>Follow us on LinkedIn</span>
          </a>
        </div>

        <div className={styles.linkSection}>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Careers</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Product News</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms and conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>

      <hr/>

      <div className={styles.bottom}>
        <p>An AI carbon solution from Forza Techlabs</p>
        <p>© 2025 Carbalyze. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
