import styles from "./Products.module.scss";
import foot from "../../assets/images/img-footprint.png";
import {
  FaBrain,
  FaChartBar,
  FaRecycle,
  FaShieldAlt,
  FaUpload,
} from "react-icons/fa";
import master from "../../assets/images/img-master.png";
import { FaPlug, FaChartLine } from "react-icons/fa";

function Products() {
  const features = [
    {
      id: "01",
      icon: <FaBrain />,
      title: "AI-Driven Intelligence",
      description:
        "Caly intelligently maps lifecycle stages to emission factors—no manual setup required.",
    },
    {
      id: "02",
      icon: <FaChartBar />,
      title: "Built-In Item Master Assessment (IMA)",
      description:
        "Enrich your Item Master with embedded emissions data for every part, material, and supplier.",
    },
    {
      id: "03",
      icon: <FaRecycle />,
      title: "Scope 3 Ready",
      description: "Capture upstream and downstream emissions effortlessly.",
    },
    {
      id: "04",
      icon: <FaShieldAlt />,
      title: "Audit-Ready Reports",
      description:
        "Instantly generate PCF reports for internal, customer, or regulatory needs.",
    },
  ];

  const asses = [
    {
      icon: <FaUpload />,
      title: "BOM Upload",
      description:
        "Upload your Bill of Materials and initiate the sustainability workflow.",
    },

    {
      icon: <FaBrain />,
      title: "Smart Mapping",
      description:
        "Caly maps each item using IMA intelligence for better traceability.",
    },

    {
      icon: <FaChartBar />,
      title: "PCF Analysis",
      description: "PCF is calculated across the full product lifecycle.",
    },

    {
      icon: <FaUpload />,
      title: "Export Reports",
      description: "Export reports aligned with CSRD, ISO 14067, and more",
    },
  ];

  const cards = [
    {
      icon: <FaBrain />,
      title: "AI-Powered Product Carbon Footprint Software",
      features: [
        "BOM-Driven Analysis: Upload your Bill of Materials (BOM) to map emissions from raw materials, manufacturing, and logistics.",
        "AI-Powered Supplier Data: Fill gaps in supplier data with industry benchmarks and predictive modeling.",
        "ISO 14067 Compliance: Generate audit-ready reports aligned with global standards.",
      ],
    },
    {
      icon: <FaBrain />,
      title: "Track & Optimize Your Product’s Carbon Footprint",
      features: [
        "Lifecycle Stage Breakdown: Compare emissions from R&D, production, shipping, and disposal.",
        "Scenario Modeling: Test eco-friendly materials, suppliers, or logistics routes.",
        "Real-Time Dashboards: Track progress toward reduction goals with KPIs like kg CO2e per unit.",
      ],
    },
    {
      icon: <FaBrain />,
      title: "Automated Product Carbon Footprint Tools for Efficient Reporting",
      features: [
        "Caly simplifies the process of gathering emission data by automating the carbon footprint calculation and reporting tasks.",
        "This tool ensures effortless report generation, real-time data, and regulation compliance.",
        "Automation reduces the risk of errors and allows more focus on sustainability efforts.",
      ],
    },
  ];
  return (
    <>
      <section className={styles.footprint}>
        <div className={styles.carbon}>
          <div className={styles.cartext}>
            <h4>Automate Product Carbon Footprint Calculation with Caly</h4>
            <p className={styles.godtext}>
              Say goodbye to spreadsheets and guesswork. Caly, your AI
              Sustainability Assistant, radically simplifies product carbon
              footprint (PCF) assessments. Designed for manufacturers and
              suppliers, Caly uses your BOMs and supplier data to deliver
              real-time, audit-ready PCF reports aligned with ISO 14067 and the
              GHG Protocol.
            </p>
            <p className={styles.btnbok}>
              <a href="#">Book a Demo</a>{" "}
            </p>
          </div>
          <div className={styles.footpic}>
            <img src={foot} alt="..."></img>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <h2 className={styles.heading}>
          Why Choose Caly? Because Manual PCF Is Broken
        </h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.number}>{feature.id}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  {feature.icon} {feature.title}
                </h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.master}>
        <h2>Item Master Assessment (IMA)</h2>
        <p>
          IMA supercharges your supply chain intelligence. It evaluates
          emissions at the part level, combining supplier facility data,
          region-specific emission factors, and material footprints to give you
          precise product-level insights. No more guessing. No more chasing
          data.
        </p>
        <div className={styles.piechart}>
          <div className={styles.pieone}>
            <img src={master} alt="..."></img>
          </div>
          <div className={styles.pietwo}>
            <h6>How It Works</h6>
            <div className={styles.load}>
              {asses.map((ass) => (
                <div className={styles.cardass}>
                  <div className={styles.content}>
                    <h3 className={styles.title}>
                      {ass.icon} {ass.title}
                    </h3>
                    <p className={styles.description}>{ass.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <h3>{card.title}</h3>
            <ul>
              {card.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.smeSection}>
        <div className={styles.textContent}>
          <h2>Scalable Carbon Footprint Solutions for SMEs</h2>
          <p>Enterprise-grade tools without the complexity.</p>

          <div className={styles.card}>
            <FaPlug className={styles.icon} />
            <p>
              <strong>No-Code Integration with ERP & PLM Systems:</strong> Sync
              with OpenBOM for seamless data flow and simplified product
              lifecycle management.
            </p>
          </div>

          <div className={styles.card}>
            <FaChartLine className={styles.icon} />
            <p>
              <strong>Affordable Plans for Startups & Scaling Brands:</strong>{" "}
              Start with a single product line and expand as you grow—perfect
              for SMEs looking to scale sustainability without breaking the
              budget.
            </p>
          </div>
        </div>

        <div className={styles.graphicBox}>
          {/* You can place an illustration, video, or chart here */}
        </div>
      </section>
    </>
  );
}

export default Products;
