import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Banner.module.scss";
import { Typewriter } from "react-simple-typewriter";
import prot from "../../assets/images/img-protocal.webp";
import cert from "../../assets/images/img-certified.png";
import iso from "../../assets/images/img-iso.webp";
import ParticleBackground from "../Particles/Particles";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      delay: 200,
    });
  }, []);

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className={styles.mainBanner}
        >
          <ParticleBackground />
          <h4 className={styles.titletext}>Chat with Caly AI</h4>
          <p className={styles.paraone}>Your Sustainability AI Assistant</p>
          <h2>Transform Your Bill Of Materials Into Sustainability Insights</h2>
          <p className={styles.paratwo}>
            Ask about material sustainability, carbon footprints and
            eco-friendly alternatives
          </p>

          <div className={styles.card}>
            <p className="text-3xl font-bold text-white">
              <Typewriter
                words={["Start with your Bill Of Materials"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
          </div>

          <div className={styles.mainbox}>
            <div className={styles.boxone}>
              <p>Try with a sample BOM</p>
            </div>
            <div className={styles.boxtwo}>
              <p>Upload your own BOM</p>
            </div>
          </div>
          <p className={styles.parafour}>
            Try Caly for Free - No Signup, No Credit Card
          </p>
        </div>

        <div className={styles.complie}>
          <h6 className={styles.comptext}>Our Compliance Standards</h6>
          <p className={styles.parafive}>
            Adhering to global standards for environmental responsibility and
            carbon footprint
            <br />
            management.
          </p>
          <div className={styles.bothcards}>
            <div className={styles.cardone}>
              <div className={styles.prot}>
                <img className={styles.proto} src={prot} alt="..." />
                <p>GHG Protocol</p>
                <img className={styles.certif} src={cert} alt="..." />
              </div>
              <p className={styles.parasix}>
                Comprehensive global standardized frameworks to measure and
                manage
                <br />
                greenhouse gas emissions.
              </p>
              <ul>
                <li>Scope 1-3 Emissions Tracking</li>
                <li>Carbon Footprint Calculation</li>
              </ul>
            </div>
            <div className={styles.cardtwo}>
              <div className={styles.protone}>
                <img className={styles.iso} src={iso} alt="..." />
                <p>GHG Protocol</p>
                <img className={styles.certif} src={cert} alt="..." />
              </div>
              <p className={styles.paraseven}>
                International standard for quantifying and reporting product
                carbon
                <br />
                footprint.
              </p>
              <ul>
                <li>Product Lifecycle Assessment</li>
                <li>Third-party Verified Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
