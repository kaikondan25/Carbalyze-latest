import styles from "./AboutUs.module.scss";

function AboutUs() {
  return (
    <div className={styles.AboutUsPage}>
      <section className={styles.hero}>
        <h1>
          Meet Carbalyze: AI Agents for Carbon Tracking & Sustainable Innovation
        </h1>
        <p>
          Carbalyze is building the future of climate technology with powerful
          AI agents for carbon tracking. Our platform empowers businesses to
          monitor and reduce their environmental impact using automation,
          intelligent data analysis, and sustainable practices.
        </p>
      </section>
      <section className={styles.innovation}>
        <h2>Innovating Carbon Accountability with AI Agents</h2>
        <p>
          Transform how you measure emissions—automate BOM analysis, track
          product footprints, and simplify reporting. Our platform simplifies
          carbon accountability by using AI agents for carbon tracking to
          automate complex processes like BOM (Bill of Materials) analysis and
          emissions mapping.
        </p>
        <p>
          With Carbalyze, you don’t need a full sustainability team—we help you
          generate accurate insights, fast. Designed to support AI for
          decarbonization initiatives, our tools reduce manual work and increase
          your ability to act on real data.
        </p>
      </section>
      <section className={styles.whyChoose}>
        <h2>Why Choose Carbalyze?</h2>
        <ul>
          <li>
            Pioneering AI tools for SMEs and manufacturers committed to
            sustainability
          </li>
          <li>
            Filling the Sustainability Tech Gap: Helping companies without
            massive resources embrace clean operations
          </li>
          <li>
            Automation & Precision: AI tools for sustainability bring automation
            and precision to businesses at any stage
          </li>
          <li>
            Easy & Actionable: Carbalyze makes it easy to get started with
            sustainable AI built for modern businesses
          </li>
        </ul>
      </section>
      <section className={styles.vision}>
        <h2>Our Vision: A World Powered by Smarter Carbon Data</h2>
        <p>
          Empowering businesses to turn emissions insights into actionable
          climate strategies. We believe data can drive real change—especially
          when it’s smart, accessible, and automated. Our vision is to make AI
          for decarbonization a practical solution for businesses worldwide.
        </p>
        <p>
          At Carbalyze, we’re committed to building sustainable AI systems that
          promote transparency and empower companies to lead with purpose.
          Together, we can transform the way industries respond to climate
          challenges—starting with intelligent carbon tracking.
        </p>
      </section>
      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>What are AI agents for carbon tracking?</strong> AI agents
            for carbon tracking are intelligent tools that automatically collect
            and analyze data to measure emissions from manufacturing, logistics,
            and supply chains.
          </li>
          <li>
            <strong>How does Carbalyze use AI for decarbonization?</strong>{" "}
            Carbalyze leverages AI for decarbonization by analyzing product data
            and identifying emissions hotspots. Our platform delivers clear,
            actionable strategies that help businesses reduce their carbon
            footprint effectively and at scale.
          </li>
          <li>
            <strong>
              Why is sustainable AI important for carbon tracking?
            </strong>{" "}
            Sustainable AI ensures that the tools used to fight climate change
            don't create unnecessary environmental impact themselves.
            Carbalyze's platform is designed to be energy-efficient while
            delivering high-accuracy carbon data insights.
          </li>
          <li>
            <strong>
              Can AI tools for sustainability help small manufacturers?
            </strong>{" "}
            Absolutely. Carbalyze’s AI tools for sustainability are built to
            support both large enterprises and small-to-medium manufacturers. We
            help businesses of all sizes automate complex emissions calculations
            and reduce manual errors.
          </li>
          <li>
            <strong>
              What makes Carbalyze different from other carbon tracking
              platforms?
            </strong>{" "}
            Carbalyze stands out with its intelligent AI agents, real-time BOM
            analysis, and focus on actionable carbon data. Unlike traditional
            tools, we simplify carbon tracking without requiring deep expertise
            or lengthy implementation.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
