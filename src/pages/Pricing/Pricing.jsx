import styles from "./Pricing.module.scss";
import { FaUser } from "react-icons/fa";

function Pricing() {
  return (
    <>
      <section className={styles.power}>
        <h6>Powerful Climate Tools. One Clear Price.</h6>
        <p className={styles.pertext}>
          {" "}
          No per-seat fees. Just team-based access that scales with your
          journey.
        </p>
        <div className={styles.ampli}>
          <div className={styles.launch}>
            <h5>Launch</h5>
            <p className={styles.fecttext}>Perfect for getting started</p>
            <h3>Starts with $3,700/year</h3>
            <div className={styles.carbon}>
              <p>Carbon Management</p>
              <ul>
                <li>
                  <FaUser /> Product Carbon Footprint (PCF) Calculation
                </li>
                <li>
                  <FaUser /> Multi-Level BOM PCF Assessment
                </li>
                <li>
                  <FaUser /> Supplier PCF Data Request Workflow
                </li>
                <li>
                  <FaUser /> Data Upload (BOMs, Emission Factors)
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>AI Intelligence</p>
              <ul>
                <li>
                  <FaUser /> Caly – Sustainability Assistant (AI-guided)
                </li>
                <li>
                  <FaUser /> Smart Recommendations (emission hotspots)
                </li>
                <li>
                  <FaUser /> Predictive Analysis for PCF Improvement
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Reporting & Compliance</p>
              <ul>
                <li>
                  <FaUser /> Automated Carbon Reports (CSV, PDF)
                </li>
                <li>
                  <FaUser /> Audit-Ready Data Exports
                </li>
                <li>
                  <FaUser /> Basic Carbon Disclosure (Scope 1, 2 Support)
                </li>
                <li>
                  <FaUser /> Advanced Scope 3 Reporting (Purchased Goods Focus)
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Integration</p>
              <ul>
                <li>
                  <FaUser /> Emission Factor Database Integration
                </li>
                <li>
                  <FaUser /> ERP / PLM Systems Integration
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Customization & Support</p>
              <ul>
                <li>
                  <FaUser /> Basic Workspace Branding
                </li>
                <li>
                  <FaUser /> Advanced Custom Branding (Logo, Themes)
                </li>
                <li>
                  <FaUser /> Dedicated Customer Success Manager
                </li>
                <li>
                  <FaUser /> Priority Support SLA
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Security & Access</p>
              <ul>
                <li>
                  <FaUser /> Single Sign-On (SSO) Support
                </li>
                <li>
                  <FaUser /> Role-based Access Control
                </li>
              </ul>
            </div>
            <p className={styles.artext}>
              Get started with transparent pricing
            </p>
            <p className={styles.demo}>
              <a href="#">Book a Demo</a>{" "}
            </p>
          </div>
          <div className={styles.ascend}>
            <h5>Ascend</h5>
            <p className={styles.liftext}>Amplify your sustainability impact</p>
            <h3>Let's Talk</h3>
            <div className={styles.carbon}>
              <p>Carbon Management</p>
              <ul>
                <li>
                  <FaUser /> Product Carbon Footprint (PCF) Calculation
                </li>
                <li>
                  <FaUser /> Multi-Level BOM PCF Assessment
                </li>
                <li>
                  <FaUser /> Supplier PCF Data Request Workflow
                </li>
                <li>
                  <FaUser /> Data Upload (BOMs, Emission Factors)
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>AI Intelligence</p>
              <ul>
                <li>
                  <FaUser /> Caly – Sustainability Assistant (AI-guided)
                </li>
                <li>
                  <FaUser /> Smart Recommendations (emission hotspots)
                </li>
                <li>
                  <FaUser /> Predictive Analysis for PCF Improvement
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Reporting & Compliance</p>
              <ul>
                <li>
                  <FaUser /> Automated Carbon Reports (CSV, PDF)
                </li>
                <li>
                  <FaUser /> Audit-Ready Data Exports
                </li>
                <li>
                  <FaUser /> Basic Carbon Disclosure (Scope 1, 2 Support)
                </li>
                <li>
                  <FaUser /> Advanced Scope 3 Reporting (Purchased Goods Focus)
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Integration</p>
              <ul>
                <li>
                  <FaUser /> Emission Factor Database Integration
                </li>
                <li>
                  <FaUser /> ERP / PLM Systems Integration
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Customization & Support</p>
              <ul>
                <li>
                  <FaUser /> Basic Workspace Branding
                </li>
                <li>
                  <FaUser /> Advanced Custom Branding (Logo, Themes)
                </li>
                <li>
                  <FaUser /> Dedicated Customer Success Manager
                </li>
                <li>
                  <FaUser /> Priority Support SLA
                </li>
              </ul>
            </div>
            <div className={styles.carbon}>
              <p>Security & Access</p>
              <ul>
                <li>
                  <FaUser /> Single Sign-On (SSO) Support
                </li>
                <li>
                  <FaUser /> Role-based Access Control
                </li>
              </ul>
            </div>
            <p className={styles.artext}>Custom pricing for scaling teams</p>
            <p className={styles.demone}>
              <a href="#">Book a Demo</a>{" "}
            </p>
          </div>
        </div>

        <div className={styles.price}>
          <h6 className={styles.vetext}>Every Plan Includes Caly</h6>
          <p className={styles.tertext}>
            No matter which plan you choose, you'll get access to Caly, our
            AI-powered Sustainability Assistant that makes carbon management
            intuitive from day one.
          </p>
        </div>
      </section>
    </>
  );
}

export default Pricing;
