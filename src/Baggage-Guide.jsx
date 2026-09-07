import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BaggageGuide.css";
import Navbar from "./components/NavBar";
import "./App.css";


const airlines = [
  { name: "IndiGo", path: "/indigo" },
  { name: "Air India", path: "/airindia" },
  { name: "SpiceJet", path: "/spicejet" },
  { name: "Akasa Air", path: "/akasa" },
  { name: "Alliance Air", path: "/allianceair" },
  { name: "FLY91", path: "/fly91" },
  { name: "Air India Express", path: "/airindiaexpress" },
];

const faqs = [
  {
    question: "What is the standard cabin baggage size for flights?",
    answer:
      "There is no single cabin baggage size for every airline. Many major Indian airlines use dimensions around 55 × 35 × 25 cm, but the exact size and weight limit can vary by airline, fare, route and aircraft. Check your airline's current baggage policy before travelling.",
  },
  {
    question: "What is the cabin baggage weight limit?",
    answer:
      "A 7 kg cabin baggage limit is common among several Indian airlines, but it is not universal. Your airline, fare and journey can determine the actual allowance.",
  },
  {
    question: "How do I check my cabin bag size?",
    answer:
      "Measure the actual outside length, width and height of your bag in centimetres. Compare each measurement with your airline's permitted cabin baggage dimensions and check the applicable weight limit.",
  },
  {
    question: "How is checked baggage size measured?",
    answer:
      "When an airline uses a total-dimension limit, add the length, width and height of the bag. For example, 70 cm + 50 cm + 38 cm equals 158 cm. Always confirm that your airline uses this measurement method.",
  },
  {
    question: "What is 158 cm baggage size?",
    answer:
      "A 158 cm checked baggage limit commonly means the total of length + width + height must not exceed 158 cm. The exact dimensions and exceptions can vary by airline and aircraft.",
  },
  {
    question: "Can I take the same cabin bag on every airline?",
    answer:
      "No. Airlines can have different cabin baggage dimensions and weight limits. A bag accepted by one airline may be too large or heavy for another airline.",
  },
  {
    question: "What is the difference between cabin baggage and checked baggage?",
    answer:
      "Cabin baggage travels with you in the aircraft cabin, while checked baggage is handed to the airline before boarding and transported in the baggage hold. They normally have separate size, weight and item restrictions.",
  },
  {
    question: "What items are not allowed in cabin baggage?",
    answer:
      "Certain dangerous goods, weapons, explosives, some sharp objects, prohibited chemicals and other security-sensitive items may not be allowed in cabin baggage. Liquid restrictions and battery rules can also apply. Always check the current airport security and airline requirements.",
  },
  {
    question: "Can I carry a power bank in my luggage?",
    answer:
      "Power banks are generally treated as spare batteries and must be carried in cabin baggage rather than checked baggage. Capacity and quantity limits can apply, so check your airline's current battery rules before travelling.",
  },
  {
    question: "Can I carry liquids in cabin baggage?",
    answer:
      "Liquids, gels, pastes and aerosols in cabin baggage are subject to airport security restrictions. In India, common security guidance allows small quantities in containers of up to 100 ml inside a transparent resealable 1-litre bag, with exceptions such as medicines and baby food subject to the applicable rules.",
  },
  {
    question: "What should I do if my bag is over the airline limit?",
    answer:
      "Check the airline's current baggage policy before travelling. Depending on the journey, you may need to repack the bag, move items between bags, check the bag in, or pay an applicable excess baggage charge.",
  },
  {
    question: "Are prohibited items the same for every airline?",
    answer:
      "Not always. Aviation security requirements apply broadly, but airlines and destinations can have additional restrictions. The safest approach is to check the current rules for your airline, departure airport and destination.",
  },
];

function BaggageGuide() {
  useEffect(() => {
    document.title =
      "Airline Baggage Guide – Size, Weight, Allowance & Restricted Items | BagInAir";

    const description =
      "Complete airline baggage guide covering cabin and checked baggage size, weight limits, luggage dimensions, restricted items, liquids, batteries and common baggage questions.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href =
      "https://baginair.vercel.app/baggage-guide";

    const existingSchema =
      document.getElementById("baggage-guide-schema");

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "baggage-guide-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Airline Baggage Guide",
          url: "https://baginair.vercel.app/baggage-guide",
          description,
          isPartOf: {
            "@type": "WebSite",
            name: "BagInAir",
            url: "https://baginair.vercel.app/",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "BagInAir",
              item: "https://baginair.vercel.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Baggage Guide",
              item: "https://baginair.vercel.app/baggage-guide",
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    });

    document.head.appendChild(schema);

    return () => {
      const currentSchema = document.getElementById(
        "baggage-guide-schema"
      );

      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, []);

  return (
    <>
    <Navbar />
    <main className="baggage-guide-page">

      {/* HERO */}
      <section className="guide-hero">
        <p className="guide-eyebrow">BAGGAGE GUIDE</p>

        <h1>
          Airline Baggage Size, Weight & Allowance Guide - 2026
        </h1>

        <p className="guide-lead">
          Find answers to common airline baggage questions,
          including cabin bag size, checked luggage dimensions,
          baggage weight limits, restricted items, liquids,
          batteries and how to check your bag before flying.
        </p>

        <div className="guide-actions">
          <Link to="/" className="guide-primary-btn">
            Check Your Bag
          </Link>

          <Link to="/airlines" className="guide-secondary-btn">
            Compare Airlines
          </Link>
        </div>
      </section>

      {/* QUICK ANSWERS */}
      <section className="guide-section">
        <div className="section-heading">
          <p className="guide-eyebrow">QUICK ANSWERS</p>

          <h2>
            What are the most common airline baggage limits?
          </h2>

          <p>
            There is no single baggage allowance that applies to
            every airline. However, several major Indian airlines
            use cabin baggage limits around 55 × 35 × 25 cm and
            7 kg. Checked baggage rules are different and can depend
            on the airline, fare and route.
          </p>
        </div>

        <div className="answer-grid">
          <article className="answer-card">
            <span>01</span>
            <h3>Cabin baggage size</h3>
            <p>
              Many airlines use cabin dimensions around
              55 × 35 × 25 cm, but always verify your airline's
              current limit.
            </p>
          </article>

          <article className="answer-card">
            <span>02</span>
            <h3>Cabin baggage weight</h3>
            <p>
              7 kg is common among several Indian airlines,
              but your actual allowance depends on the airline
              and journey.
            </p>
          </article>

          <article className="answer-card">
            <span>03</span>
            <h3>Checked baggage</h3>
            <p>
              Checked luggage can have separate weight and
              total-dimension limits.
            </p>
          </article>
        </div>
      </section>

      {/* CABIN VS CHECKED */}
      <section className="guide-section">
        <div className="section-heading">
          <p className="guide-eyebrow">
            CABIN VS CHECKED BAGGAGE
          </p>

          <h2>
            What is the difference between cabin and checked baggage?
          </h2>

          <p>
            Cabin baggage and checked baggage are treated
            differently by airlines. Understanding the difference
            helps you choose the correct bag and avoid problems
            at the airport.
          </p>
        </div>

        <div className="comparison-grid">
          <article className="info-card">
            <div className="card-number">01</div>

            <h3>Cabin baggage</h3>

            <p>
              Cabin baggage is the luggage you take with you into
              the aircraft cabin.
            </p>

            <ul>
              <li>Must fit within cabin baggage dimensions</li>
              <li>Usually has a specific weight limit</li>
              <li>Stored in an overhead compartment or under-seat area</li>
              <li>Security screening applies</li>
              <li>Restricted-item rules apply</li>
            </ul>
          </article>

          <article className="info-card">
            <div className="card-number">02</div>

            <h3>Checked baggage</h3>

            <p>
              Checked baggage is handed to the airline before
              boarding and transported in the aircraft's baggage hold.
            </p>

            <ul>
              <li>Has separate weight and size limits</li>
              <li>May use a total dimension limit</li>
              <li>Allowance can depend on fare and route</li>
              <li>Excess baggage charges may apply</li>
              <li>Some items are still prohibited</li>
            </ul>
          </article>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section className="guide-section">
        <div className="section-heading">
          <p className="guide-eyebrow">MEASURE YOUR LUGGAGE</p>

          <h2>How to measure your luggage size correctly</h2>

          <p>
            Before flying, measure the actual bag you plan to carry.
            Do not rely only on the manufacturer's advertised size.
          </p>
        </div>

        <div className="measurement-steps">
          <article>
            <span>01</span>
            <h3>Length</h3>
            <p>
              Measure the longest side of the luggage.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Width</h3>
            <p>
              Measure the side-to-side dimension.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Height</h3>
            <p>
              Measure the remaining vertical dimension.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Compare</h3>
            <p>
              Compare your measurements with your airline's
              published baggage limits.
            </p>
          </article>
        </div>

        <div className="measurement-note">
          <strong>Important:</strong>

          <span>
            Some airline dimensions include wheels, handles or
            other parts of the bag. Follow the airline's stated
            measurement method.
          </span>
        </div>
      </section>

      {/* 158 CM */}
      <section className="guide-section">
        <div className="section-heading">
          <p className="guide-eyebrow">
            CHECKED BAGGAGE DIMENSIONS
          </p>

          <h2>What does 158 cm baggage size mean?</h2>

          <p>
            A 158 cm total-dimension limit generally means that
            the length, width and height of a checked bag are
            added together.
          </p>
        </div>

        <div className="formula-card">
          <div>
            <span>COMMON TOTAL-DIMENSION METHOD</span>

            <h3>
              Length + Width + Height
            </h3>
          </div>

          <div className="formula-example">
            <strong>Example</strong>

            <p>
              70 cm + 50 cm + 38 cm = 158 cm
            </p>
          </div>
        </div>

        <p className="small-note">
          This is an explanation of the total-dimension method.
          Always check whether your airline uses a 158 cm limit
          and whether any aircraft or route-specific exceptions apply.
        </p>
      </section>

      {/* WHAT IS NOT ALLOWED */}
      <section className="guide-section restriction-section">
        <div className="section-heading">
          <p className="guide-eyebrow">
            BEFORE YOU PACK
          </p>

          <h2>
            What is not allowed in cabin or checked baggage?
          </h2>

          <p>
            Baggage size is only one part of airline travel.
            Some items are prohibited completely, while others
            have special rules depending on whether they are carried
            in cabin or checked baggage.
          </p>
        </div>

        <div className="restriction-grid">

          <article className="restriction-card prohibited">
            <div className="restriction-label">
              GENERALLY PROHIBITED
            </div>

            <h3>
              Dangerous goods
            </h3>

            <p>
              Explosives, dangerous flammable materials, certain
              compressed gases, corrosive substances, radioactive
              materials, toxic or infectious materials and other
              dangerous goods can be prohibited from passenger baggage.
            </p>
          </article>

          <article className="restriction-card restricted">
            <div className="restriction-label">
              CABIN RESTRICTIONS
            </div>

            <h3>
              Sharp and security-sensitive items
            </h3>

            <p>
              Certain sharp objects, tools, weapon-like items and
              other security-sensitive articles may not be permitted
              in cabin baggage. Airport security screening determines
              whether an item can proceed.
            </p>
          </article>

          <article className="restriction-card restricted">
            <div className="restriction-label">
              SPECIAL RULES
            </div>

            <h3>
              Batteries and power banks
            </h3>

            <p>
              Spare batteries and power banks are commonly required
              to travel in cabin baggage rather than checked baggage.
              Battery capacity, quantity and packaging requirements
              can apply.
            </p>
          </article>

          <article className="restriction-card restricted">
            <div className="restriction-label">
              SECURITY RULES
            </div>

            <h3>
              Liquids, gels and aerosols
            </h3>

            <p>
              Liquids, gels, pastes and aerosols in cabin baggage
              are subject to airport security restrictions. In India,
              common security guidance uses containers of up to
              100 ml inside a transparent resealable 1-litre bag,
              with applicable exceptions.
            </p>
          </article>

          <article className="restriction-card prohibited">
            <div className="restriction-label">
              CHECK BEFORE TRAVEL
            </div>

            <h3>
              Weapons and dangerous articles
            </h3>

            <p>
              Items that could endanger passengers, crew or an
              aircraft may be prohibited. Do not assume that an item
              is permitted simply because it fits inside your luggage.
            </p>
          </article>

          <article className="restriction-card restricted">
            <div className="restriction-label">
              AIRLINE-SPECIFIC
            </div>

            <h3>
              Special and unusual items
            </h3>

            <p>
              Sports equipment, medical equipment, musical instruments,
              mobility devices and other unusual items can have
              special packing or approval requirements.
            </p>
          </article>

        </div>

        <div className="warning-box">
          <strong>Important safety and security note</strong>

          <p>
            This section is a general guide, not a complete
            prohibited-items list. Aviation security rules, airline
            policies, departure airports and destination countries
            can differ. Always check the current official requirements
            before travelling.
          </p>
        </div>
      </section>

      {/* POWER BANK */}
      <section className="guide-section">
        <div className="section-heading">
          <p className="guide-eyebrow">
            COMMON QUESTION
          </p>

          <h2>
            Can I carry a power bank in my luggage?
          </h2>

          <p>
            Power banks are treated as spare batteries by many
            airlines and should generally be carried in cabin
            baggage rather than checked baggage. Airline-specific
            limits on capacity, quantity and handling can apply.
          </p>
        </div>

        <div className="battery-grid">
          <article className="info-card">
            <h3>
              Carry-on baggage
            </h3>

            <p>
              Power banks and spare lithium batteries are commonly
              required to remain with the passenger in cabin baggage.
            </p>
          </article>

          <article className="info-card">
            <h3>
              Checked baggage
            </h3>

            <p>
              Power banks and loose spare lithium batteries should
              not be placed in checked baggage unless the applicable
              airline rules specifically state otherwise.
            </p>
          </article>
        </div>

        <div className="measurement-note">
          <strong>Always verify:</strong>

          <span>
            Battery capacity, number of batteries and airline-specific
            requirements can differ. Check the current rules before
            travelling.
          </span>
        </div>
      </section>

      {/* LIQUIDS */}
      <section className="guide-section">
        <div className="section-heading">
          <p className="guide-eyebrow">
            COMMON QUESTION
          </p>

          <h2>
            Can I carry liquids in cabin baggage?
          </h2>

          <p>
            Cabin liquids are subject to airport security screening.
            Common Indian security guidance allows small liquid,
            gel, paste and aerosol containers of up to 100 ml in a
            transparent resealable 1-litre bag, with applicable
            exceptions such as medicines and baby food.
          </p>
        </div>

        <div className="liquid-grid">
          <article className="answer-card">
            <span>100 ML</span>

            <h3>
              Container limit
            </h3>

            <p>
              Common security guidance uses containers of no more
              than 100 ml for cabin liquids.
            </p>
          </article>

          <article className="answer-card">
            <span>1 LITRE</span>

            <h3>
              Transparent bag
            </h3>

            <p>
              Small liquid containers are commonly placed in one
              transparent resealable 1-litre bag.
            </p>
          </article>

          <article className="answer-card">
            <span>EXCEPTIONS</span>

            <h3>
              Essential items
            </h3>

            <p>
              Medicines and baby food can have specific exceptions,
              subject to the applicable security requirements.
            </p>
          </article>
        </div>
      </section>

      {/* AIRLINE DIFFERENCES */}
      <section className="guide-section">
        <div className="section-heading">
          <p className="guide-eyebrow">
            AIRLINE-SPECIFIC CHECKERS
          </p>

          <h2>
            Check your airline's exact baggage allowance
          </h2>

          <p>
            Baggage dimensions, weight allowances and special
            restrictions can vary between airlines. Use the
            airline-specific BagInAir checker before travelling.
          </p>
        </div>

        <div className="airline-links">
          {airlines.map((airline) => (
            <Link
              key={airline.path}
              to={airline.path}
              className="airline-link"
            >
              <span>
                {airline.name} baggage checker
              </span>

              <span>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CHECKER CTA */}
      <section className="guide-cta">
        <p className="guide-eyebrow">
          CHECK YOUR BAG
        </p>

        <h2>
          Know your bag size before you reach the airport
        </h2>

        <p>
          Enter your luggage dimensions and weight to compare
          your bag with the available airline baggage limits.
        </p>

        <div className="guide-actions">
          <Link to="/" className="guide-primary-btn">
            Check My Bag
          </Link>

          <Link
            to="/airlines"
            className="guide-secondary-btn"
          >
            Compare All Airlines
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="guide-section faq-section">
        <div className="section-heading">
          <p className="guide-eyebrow">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2>
            Airline baggage questions answered
          </h2>

          <p>
            Quick answers to common questions about baggage size,
            weight, dimensions, restricted items and preparing
            luggage for a flight.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article
              className="faq-item"
              key={index}
            >
              <h3>
                {faq.question}
              </h3>

              <p>
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="guide-final-note">
        <p className="guide-eyebrow">
          BEFORE YOU FLY
        </p>

        <h2>
          Check the latest official baggage policy
        </h2>

        <p>
          Airline baggage allowances and security requirements
          can change. BagInAir helps you check luggage dimensions
          and weight, but your airline's latest official policy and
          the applicable airport security requirements should always
          be treated as the final authority for your journey.
        </p>

        <div className="guide-actions">
          <Link
            to="/airlines"
            className="guide-secondary-btn"
          >
            View Airline Checkers
          </Link>

          <Link
            to="/"
            className="guide-primary-btn"
          >
            Check My Bag
          </Link>
        </div>
      </section>

    </main>
    </>
  );
}

export default BaggageGuide;