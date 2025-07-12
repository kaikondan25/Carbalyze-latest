import styles from "./Content.module.scss";
import * as motion from "motion/react-client";
import ai from "../../assets/images/img-AI.png";
import expert from "../../assets/images/img-experts.png";
import supplier from "../../assets/images/img-supplier.png";
import action from "../../assets/images/img-action.png";
import consis from "../../assets/images/img-consis.png";
import slow from "../../assets/images/img-slow.png";
import messy from "../../assets/images/img-messy.png";
import team from "../../assets/images/img-team.png";
import tick from "../../assets/images/img-tick.png";

function Content() {
  const steps = [
    {
      title: "Upload Your Bill of Materials (BOM)",
      icon: "🏗️", // replace with actual icons/images if needed

      description:
        "Kickstart your carbon footprint journey by uploading your BOM in seconds. No manual entry or complex spreadsheets required—just drag, drop, and let automation handle the rest.",
    },
    {
      icon: "📊",
      title: "Caly Auto-Maps Material-Level Emissions",
      description:
        "Our AI engine analyzes thousands of data points to auto-calculate emissions for every material in your supply chain, identifying hotspots and reduction opportunities.",
    },
    {
      icon: "📄",
      title: "Get Compliant Reports & Score Improvement Recommendations",
      description:
        "Generate audit-ready reports aligned with ISO and GHG Protocol. Get intelligent recommendations to improve your sustainability score.",
    },
  ];

  return (
    <>
      <section className={styles.caly}>
        <h2 className={styles.maktext}>What Makes Caly Different?</h2>
        <div className={styles.flipcardGrid}>
          <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
              <div className={styles.flipcardfront}>
                <div className={styles.content_section}>
                  <img src={ai} alt="..." />
                  <h2>Fast, AI-Powered PCF Estimates</h2>
                  <p className={styles.tintext}>
                    No more waiting weeks — Caly gets you results in minutes.
                  </p>
                </div>
              </div>
              <div className={styles.flipcardback}>
                <h2>Back Side</h2>
                <p>More info here</p>
              </div>
            </div>
          </div>
          <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
              <div className={styles.flipcardfront}>
                <div className={styles.content_section}>
                  <img src={expert} alt="..." />
                  <h2>Built for Non-LCA Experts</h2>
                  <p className={styles.tectext}>
                    No technical background needed. Caly speaks your language.
                  </p>
                </div>
              </div>
              <div className={styles.flipcardback}>
                <h2>Back Side</h2>
                <p>More info here</p>
              </div>
            </div>
          </div>
          <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
              <div className={styles.flipcardfront}>
                <div className={styles.content_section}>
                  <img src={supplier} alt="..." />
                  <h2>Supplier-Friendly Workflow</h2>
                  <p className={styles.eastext}>
                    Easily collect and verify Scope 3 data from your value
                    chain.
                  </p>
                </div>
              </div>
              <div className={styles.flipcardback}>
                <h2>Back Side</h2>
                <p>More info here</p>
              </div>
            </div>
          </div>
          <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
              <div className={styles.flipcardfront}>
                <div className={styles.content_section}>
                  <img src={action} alt="..." />
                  <h2>Actionable Sustainability Intelligence</h2>
                  <p>
                    Beyond carbon scores — Caly recommends ways to reduce
                    emissions.
                  </p>
                </div>
              </div>
              <div className={styles.flipcardback}>
                <h2>Back Side</h2>
                <p>More info here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.manual}>
        <h5>Manual Sustainability Workflows Are Holding You Back</h5>
        <p className={styles.nabtext}>
          If you're a sustainability leader, you're likely stuck in a
          frustrating cycle:
        </p>

        <div className={styles.sustain}>
          <div className={styles.stuck}>
            <div className={styles.consis}>
              <div className={styles.both}>
                <img src={consis} alt="..." />
                <h3>Inconsistent Data</h3>
              </div>
              <p>Excel sheets from suppliers are inconsistent</p>
              <div className={styles.mismat}>
                <p className={styles.mistext}>
                  Mismatched formats and missing fields
                </p>
              </div>
            </div>
            <div className={styles.consis}>
              <div className={styles.both}>
                <img src={slow} alt="..." />
                <h3>Slow Processes</h3>
              </div>
              <p>Life Cycle Assessments take weeks</p>
              <div className={styles.mismat}>
                <p className={styles.mistext}>
                  Manual data collection & analysis
                </p>
              </div>
            </div>
            <div className={styles.consis}>
              <div className={styles.both}>
                <img src={messy} alt="..." />
                <h3>Messy Verification</h3>
              </div>
              <p>Scope 3 data is hard to verify</p>
              <div className={styles.mismat}>
                <p className={styles.mistext}>No centralized tracking system</p>
              </div>
            </div>
            <div className={styles.consis}>
              <div className={styles.both}>
                <img src={team} alt="..." />
                <h3>Team Strain</h3>
              </div>
              <p>Your team is stretched thin</p>
              <div className={styles.mismat}>
                <p className={styles.mistext}>Repetitive manual work</p>
              </div>
            </div>
          </div>
          <div className={styles.admin}>
            <div className={styles.grey}>
              <h6>You need answers, not admin work</h6>
              <p>That's where Caly comes in</p>
            </div>
            <div className={styles.blank}>
              <div className={styles.bom}>
                <h6>Drag Your BOM Here and Watch the Magic Happen</h6>
                <div className={styles.boxblue}></div>
                <div className={styles.blueone}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles["timeline-container"]}>
          <div className={styles["timeline-line"]} />
          {steps.map((step, index) => (
            <div
              className={`${styles["timeline-item"]} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
              key={index}
            >
              <div className={styles["timeline-content"]}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className={styles["timeline-icon"]}>{step.icon}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.bomSection}>
        <div className={styles.bomWrapper}>
          <div className={styles.left}>
            <h2>Automated BOM Carbon Footprint Analysis</h2>
            <p>
              Transform Bill of Materials (BOM) data into actionable
              decarbonization strategies
            </p>
            <ul className={styles.features}>
              <li>
                <span className={styles.icon}>🤖</span>
                <div>
                  <strong>AI-Powered Supplier Insights</strong>
                  <p>
                    Identify high-emission suppliers and compare alternatives
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.icon}>📦</span>
                <div>
                  <strong>Supplier-Specific Emissions</strong>
                  <p>Use actual supplier data or global emission factors</p>
                </div>
              </li>
              <li>
                <span className={styles.icon}>⚡</span>
                <div>
                  <strong>70% Faster Reporting</strong>
                  <p>Automate manual data entry and complex formulas</p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.metric}>
                <div className={styles.labelRow}>
                  <span>Scope 3 Emission</span>
                  <span className={styles.percent}>65%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.labelRow}>
                  <span>Reporting Time Saved</span>
                  <span className={styles.percent}>70%</span>
                </div>
                <div className={styles.progressBarPurple}>
                  <div
                    className={styles.progressFillPurple}
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              <div className={styles.letterMarkers}>
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>
              <div className={styles.chartIcon}>📈</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trust}>
        <h5>Why Manufacturers Trust Carbalyze</h5>
        <p>Reduce manual errors by 80% and cut carbon reporting time by 50%</p>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <div className={styles.manufact}>
            <div className={styles.manuone}>
              <h6>Manufacturers using Caly report:</h6>
              <ul>
                <li>
                  <img src={consis} alt="..."></img> 50% reduction in carbon
                  reporting time
                </li>
                <li>
                  <img src={slow} alt="..."></img> 3x faster compliance with
                  CSRD, Ecodesign, and SEC rules
                </li>
                <li>
                  <img src={messy} alt="..."></img> 90% accuracy using
                  AI-enriched emission factors
                </li>
              </ul>
            </div>
            <div className={styles.manutwo}>
              <div className={styles.innerone}>
                <h4>Precision at Scale</h4>
                <p>
                  Our AI cross-references more(Need to add number like 1000+)
                  emission factors and supplier datasets to ensure accuracy,
                  minimizing compliance risks.
                </p>
              </div>
              <div className={styles.innertwo}>
                <h4>Built for SMEs</h4>
                <p>
                  No PhD required. Carbalyze simplifies complex calculations
                  with intuitive dashboards, automated data validation, and
                  step-by-step guidance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className={styles.ditch}>
        <div className={styles.greyditch}>
          <h1>Ready to Ditch the Spreadsheet and Scale Climate Action?</h1>
          <p>
            Try Caly — the AI Sustainability Assistant built for speed,
            accuracy, and impact.
          </p>

          <ul>
            <li>
              <img src={tick} alt="..." />
              No Setup
            </li>
            <li>
              <img src={tick} alt="..." />
              No Pressure
            </li>
            <li>
              <img src={tick} alt="..." />
              Just Smarter Sustainability
            </li>
          </ul>
          <p className={styles.btnbok}>
            <a href="#">Book a Call</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Content;
