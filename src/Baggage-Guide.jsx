import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BaggageGuide.css";
import Navbar from "./components/NavBar";
import "./App.css";

const PAGE_URL = "https://baginair.vercel.app/baggage-guide";
const SITE_URL = "https://baginair.vercel.app/";

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
    question: "What is airline baggage allowance?",
    answer:
      "Airline baggage allowance is the amount of cabin, personal-item and checked baggage a passenger is permitted to carry under an airline's rules. The allowance can vary by airline, fare type, travel class, route and aircraft.",
  },
  {
    question: "What is the standard cabin baggage size?",
    answer:
      "There is no single cabin baggage size that applies to every airline. Many airlines use dimensions around 55 cm by 35 cm by 25 cm, while other airlines use different dimensions. Always check the exact cabin baggage size for your airline and journey.",
  },
  {
    question: "What is the cabin baggage weight limit?",
    answer:
      "Cabin baggage weight limits vary by airline, fare and travel class. A 7 kg limit is common on several airlines, but it is not a universal rule.",
  },
  {
    question: "What is the difference between cabin baggage and checked baggage?",
    answer:
      "Cabin baggage is carried with the passenger into the aircraft cabin, while checked baggage is handed to the airline before boarding and transported in the aircraft hold. They normally have separate size, weight and item restrictions.",
  },
  {
    question: "What is a personal item on a flight?",
    answer:
      "A personal item is a smaller item that an airline may allow in addition to cabin baggage. Examples can include a small handbag or laptop bag. Its permitted size and whether it is included in the allowance depend on the airline and fare.",
  },
  {
    question: "How do I measure my luggage?",
    answer:
      "Measure the actual outside length, width and height of the packed bag and compare those measurements with your airline's published baggage limits. Check whether the airline includes wheels, handles, pockets or other external parts when measuring.",
  },
  {
    question: "What does 158 cm baggage size mean?",
    answer:
      "A 158 cm baggage limit generally refers to the total of the bag's length, width and height. For example, a bag measuring 70 cm by 50 cm by 38 cm has total dimensions of 158 cm.",
  },
  {
    question: "Is 158 cm the same as 62 linear inches?",
    answer:
      "Yes. 158 cm is approximately 62 linear inches. Linear dimensions are calculated by adding the length, width and height of the bag.",
  },
  {
    question: "Does baggage allowance depend on fare type?",
    answer:
      "Yes. An airline's baggage allowance can depend on fare family, travel class, route and other journey-specific conditions. A basic or promotional fare may have different checked baggage rules from another fare.",
  },
  {
    question: "Are wheels and handles included in baggage dimensions?",
    answer:
      "It depends on the airline's measurement rules. Some airlines explicitly include wheels and handles, so passengers should check the airline's published baggage dimensions rather than relying only on the suitcase manufacturer's advertised size.",
  },
  {
    question: "Can I carry a power bank in checked baggage?",
    answer:
      "Power banks and spare lithium batteries are generally required to be carried in cabin baggage rather than checked baggage. Battery capacity, quantity and handling requirements can vary, so check the current airline and airport rules before travelling.",
  },
  {
    question: "Can I carry liquids in cabin baggage?",
    answer:
      "Cabin liquids are subject to airport security restrictions. In India, common security guidance uses containers of up to 100 ml inside a transparent resealable 1-litre bag, with applicable exceptions such as medicines and baby food.",
  },
  {
    question: "What items are not allowed in baggage?",
    answer:
      "Some dangerous goods and security-sensitive items are prohibited or restricted in passenger baggage. Rules can differ depending on whether an item is carried in the cabin or checked baggage and may also depend on the airport, airline and destination.",
  },
  {
    question: "Can I take the same cabin bag on every airline?",
    answer:
      "No. Airlines can have different cabin baggage dimensions, weight limits and personal-item rules. A bag that complies with one airline may not comply with another.",
  },
  {
    question: "What should I do if my bag is over the airline limit?",
    answer:
      "If your bag exceeds the airline's size or weight allowance, you may need to repack it, move items between bags, check the bag in or pay an applicable excess baggage charge. Check the airline's current policy before travelling.",
  },
];

function BaggageGuide() {
  useEffect(() => {
    const title =
      "Airline Baggage Allowance Guide | Size, Weight & Rules";

    const description =
      "Complete airline baggage allowance guide covering cabin baggage, carry-on size, checked baggage, weight limits, 158 cm luggage, personal items, liquids and batteries.";

    document.title = title;

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    const setProperty = (property, content) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    setMeta("description", description);

    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "article");
    setProperty("og:url", PAGE_URL);
    setProperty("og:site_name", "BagInAir");

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = PAGE_URL;

    const existingSchema = document.getElementById(
      "baggage-guide-schema"
    );

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
          "@id": `${PAGE_URL}#webpage`,
          name: "Airline Baggage Allowance Guide",
          url: PAGE_URL,
          description,
          isPartOf: {
            "@type": "WebSite",
            "@id": `${SITE_URL}#website`,
            name: "BagInAir",
            url: SITE_URL,
          },
          about: [
            {
              "@type": "Thing",
              name: "Airline baggage allowance",
            },
            {
              "@type": "Thing",
              name: "Cabin baggage",
            },
            {
              "@type": "Thing",
              name: "Checked baggage",
            },
            {
              "@type": "Thing",
              name: "Luggage dimensions",
            },
          ],
          dateModified: "2026-09-08",
        },

        {
          "@type": "BreadcrumbList",
          "@id": `${PAGE_URL}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "BagInAir",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Baggage Guide",
              item: PAGE_URL,
            },
          ],
        },

        {
          "@type": "FAQPage",
          "@id": `${PAGE_URL}#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },

        {
          "@type": "ItemList",
          "@id": `${PAGE_URL}#airline-checkers`,
          name: "Airline Baggage Checkers",
          itemListElement: airlines.map((airline, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `${airline.name} baggage checker`,
            url: `${SITE_URL.replace(/\/$/, "")}${airline.path}`,
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
          <p className="guide-eyebrow">
            AIRLINE BAGGAGE GUIDE
          </p>

          <h1>
            Airline Baggage Allowance Guide: Cabin, Checked Baggage,
            Size & Weight
          </h1>

          <p className="guide-lead">
            Learn how airline baggage allowance works, including
            cabin baggage size, carry-on weight, personal items,
            checked baggage dimensions, 158 cm luggage limits and
            common baggage restrictions.
          </p>

          <div className="guide-actions">
            <Link to="/" className="guide-primary-btn">
              Check Your Bag
            </Link>

            <Link
              to="/airlines"
              className="guide-secondary-btn"
            >
              Compare Airlines
            </Link>
          </div>

          <p className="small-note">
            Updated September 8, 2026 · Always confirm the latest
            airline and airport requirements before travelling.
          </p>
        </section>

        {/* QUICK ANSWER */}
        <section className="guide-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              QUICK ANSWER
            </p>

            <h2>
              What is airline baggage allowance?
            </h2>

            <p>
              Airline baggage allowance is the amount of luggage
              a passenger can carry under an airline's rules.
              It can include cabin baggage, a personal item and
              checked baggage. The permitted size, weight and number
              of bags can vary by airline, fare, route and travel
              class.
            </p>
          </div>

          <div className="answer-grid">
            <article className="answer-card">
              <span>01</span>

              <h3>Cabin baggage</h3>

              <p>
                Check the permitted cabin bag dimensions and
                maximum weight before taking a bag onboard.
              </p>
            </article>

            <article className="answer-card">
              <span>02</span>

              <h3>Personal item</h3>

              <p>
                Some airlines allow a smaller handbag, laptop bag
                or similar personal item in addition to cabin baggage.
              </p>
            </article>

            <article className="answer-card">
              <span>03</span>

              <h3>Checked baggage</h3>

              <p>
                Checked baggage normally has separate weight,
                piece and dimension restrictions.
              </p>
            </article>
          </div>
        </section>

        {/* CABIN BAGGAGE */}
        <section className="guide-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              CABIN BAGGAGE
            </p>

            <h2>
              What is cabin baggage allowance?
            </h2>

            <p>
              Cabin baggage, also called carry-on or hand baggage,
              is luggage that you take with you into the aircraft
              cabin. Airlines can set limits for its dimensions,
              weight and number of pieces.
            </p>
          </div>

          <div className="comparison-grid">
            <article className="info-card">
              <div className="card-number">
                01
              </div>

              <h3>
                Cabin baggage size
              </h3>

              <p>
                There is no universal cabin baggage size for every
                airline. Different carriers can publish different
                length, width and height limits.
              </p>
            </article>

            <article className="info-card">
              <div className="card-number">
                02
              </div>

              <h3>
                Cabin baggage weight
              </h3>

              <p>
                Weight limits also vary. A 7 kg allowance is common
                on several airlines, but passengers should always
                verify the rule for their specific flight.
              </p>
            </article>

            <article className="info-card">
              <div className="card-number">
                03
              </div>

              <h3>
                Personal item
              </h3>

              <p>
                A personal item may include a small handbag or
                laptop bag. Its size and whether it is included
                separately depend on the airline and fare.
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
              What is the difference between cabin and checked
              baggage?
            </h2>

            <p>
              Cabin baggage stays with the passenger in the aircraft
              cabin, while checked baggage is handed to the airline
              before boarding and transported in the baggage hold.
              The two types normally have different size, weight and
              item restrictions.
            </p>
          </div>

          <div className="comparison-grid">
            <article className="info-card">
              <div className="card-number">
                01
              </div>

              <h3>
                Cabin baggage
              </h3>

              <p>
                Luggage carried into the aircraft cabin.
              </p>

              <ul>
                <li>Cabin size limits apply</li>
                <li>Weight limits can apply</li>
                <li>Stored overhead or under the seat</li>
                <li>Security screening applies</li>
                <li>Cabin restricted-item rules apply</li>
              </ul>
            </article>

            <article className="info-card">
              <div className="card-number">
                02
              </div>

              <h3>
                Checked baggage
              </h3>

              <p>
                Luggage handed to the airline before boarding.
              </p>

              <ul>
                <li>Separate weight allowance</li>
                <li>Size or total-dimension limits</li>
                <li>Piece limits may apply</li>
                <li>Fare and route can affect allowance</li>
                <li>Excess baggage charges may apply</li>
              </ul>
            </article>
          </div>
        </section>

        {/* CHECKED BAGGAGE */}
        <section className="guide-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              CHECKED BAGGAGE
            </p>

            <h2>
              What is checked baggage allowance?
            </h2>

            <p>
              Checked baggage allowance describes the luggage a
              passenger can hand over to the airline for transport
              in the aircraft hold. Depending on the airline and
              journey, the allowance can be defined by weight,
              number of pieces, dimensions or a combination of these.
            </p>
          </div>

          <div className="answer-grid">
            <article className="answer-card">
              <span>WEIGHT</span>

              <h3>
                Kilograms
              </h3>

              <p>
                Airlines can specify a maximum weight for each
                bag or for the passenger's total allowance.
              </p>
            </article>

            <article className="answer-card">
              <span>PIECES</span>

              <h3>
                Number of bags
              </h3>

              <p>
                Some routes use a piece concept, where the number
                of permitted checked bags matters.
              </p>
            </article>

            <article className="answer-card">
              <span>SIZE</span>

              <h3>
                Dimensions
              </h3>

              <p>
                Airlines can also specify maximum dimensions or
                a total length + width + height limit.
              </p>
            </article>
          </div>
        </section>

        {/* MEASUREMENT */}
        <section className="guide-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              MEASURE YOUR LUGGAGE
            </p>

            <h2>
              How to measure your luggage correctly
            </h2>

            <p>
              Measure the actual packed bag you plan to travel with.
              Do not rely only on the manufacturer's advertised
              suitcase size. Check your airline's measurement method,
              including whether wheels and handles are included.
            </p>
          </div>

          <div className="measurement-steps">
            <article>
              <span>01</span>

              <h3>
                Length
              </h3>

              <p>
                Measure the longest outside dimension of the bag.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>
                Width
              </h3>

              <p>
                Measure the side-to-side outside dimension.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>
                Height
              </h3>

              <p>
                Measure the remaining outside dimension.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>
                Compare
              </h3>

              <p>
                Compare all three measurements with your airline's
                published baggage limits.
              </p>
            </article>
          </div>

          <div className="measurement-note">
            <strong>
              Important:
            </strong>

            <span>
              Some airlines include wheels, handles or other
              external parts when measuring baggage. Follow the
              airline's stated measurement method.
            </span>
          </div>
        </section>

        {/* 158 CM */}
        <section className="guide-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              158 CM BAGGAGE
            </p>

            <h2>
              What does 158 cm baggage size mean?
            </h2>

            <p>
              A 158 cm baggage limit generally means that the
              length, width and height of a checked bag add up to
              no more than 158 cm. It is a total-dimension limit,
              not a 158 cm limit on one side of the suitcase.
            </p>
          </div>

          <div className="formula-card">
            <div>
              <span>
                TOTAL DIMENSIONS
              </span>

              <h3>
                Length + Width + Height
              </h3>
            </div>

            <div className="formula-example">
              <strong>
                Example
              </strong>

              <p>
                70 cm + 50 cm + 38 cm = 158 cm
              </p>
            </div>
          </div>

          <div className="answer-grid">
            <article className="answer-card">
              <span>
                158 CM
              </span>

              <h3>
                Metric
              </h3>

              <p>
                Add length, width and height to calculate total
                dimensions.
              </p>
            </article>

            <article className="answer-card">
              <span>
                62 IN
              </span>

              <h3>
                Linear inches
              </h3>

              <p>
                158 cm is approximately 62 linear inches.
              </p>
            </article>
          </div>

          <p className="small-note">
            Not every airline or route uses the same checked baggage
            rules. Confirm the current limit for your flight.
          </p>
        </section>

        {/* PERSONAL ITEM */}
        <section className="guide-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              PERSONAL ITEM
            </p>

            <h2>
              What is a personal item on a flight?
            </h2>

            <p>
              A personal item is a smaller bag or item that some
              airlines allow in addition to cabin baggage. It may
              include a laptop bag, handbag or small personal bag,
              but the permitted size and conditions vary by airline.
            </p>
          </div>

          <div className="comparison-grid">
            <article className="info-card">
              <h3>
                Examples
              </h3>

              <ul>
                <li>Small laptop bag</li>
                <li>Handbag or purse</li>
                <li>Small personal bag</li>
                <li>Other airline-approved items</li>
              </ul>
            </article>

            <article className="info-card">
              <h3>
                Check before flying
              </h3>

              <p>
                Do not assume that every airline treats a personal
                item separately from the cabin baggage allowance.
                Check the exact policy for your fare and flight.
              </p>
            </article>
          </div>
        </section>

        {/* WHAT CAN I CARRY */}
        <section className="guide-section restriction-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              BEFORE YOU PACK
            </p>

            <h2>
              What can I carry in cabin and checked baggage?
            </h2>

            <p>
              Baggage allowance is only one part of air travel.
              Some items have additional security or airline
              restrictions, and the rules can differ between cabin
              and checked baggage.
            </p>
          </div>

          <div className="restriction-grid">
            <article className="restriction-card restricted">
              <div className="restriction-label">
                BATTERIES
              </div>

              <h3>
                Power banks and spare batteries
              </h3>

              <p>
                Power banks and spare lithium batteries are generally
                carried in cabin baggage rather than checked baggage.
                Capacity and quantity limits can apply.
              </p>
            </article>

            <article className="restriction-card restricted">
              <div className="restriction-label">
                LIQUIDS
              </div>

              <h3>
                Liquids, gels and aerosols
              </h3>

              <p>
                Cabin liquids are subject to airport security
                restrictions. Common Indian security guidance uses
                containers of up to 100 ml inside a transparent
                resealable 1-litre bag, with applicable exceptions.
              </p>
            </article>

            <article className="restriction-card restricted">
              <div className="restriction-label">
                SECURITY
              </div>

              <h3>
                Restricted items
              </h3>

              <p>
                Some items may be restricted or prohibited depending
                on whether they are carried in the cabin or checked
                baggage. Airport security requirements must be followed.
              </p>
            </article>

            <article className="restriction-card restricted">
              <div className="restriction-label">
                SPECIAL ITEMS
              </div>

              <h3>
                Sports and special equipment
              </h3>

              <p>
                Sports equipment, musical instruments, mobility
                equipment and other unusual items can have separate
                packing, size or approval requirements.
              </p>
            </article>
          </div>

          <div className="warning-box">
            <strong>
              Important safety and security note
            </strong>

            <p>
              This is a general baggage guide, not a complete
              prohibited-items list. Airline policies, airport
              security rules and destination requirements can differ.
              Always check the current official requirements before
              travelling.
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
              Power banks are generally treated as spare batteries
              and are normally carried in cabin baggage rather than
              checked baggage. Always verify the current capacity,
              quantity and handling requirements for your airline.
            </p>
          </div>

          <div className="comparison-grid">
            <article className="info-card">
              <h3>
                Cabin baggage
              </h3>

              <p>
                Spare batteries and power banks are generally kept
                with the passenger in cabin baggage.
              </p>
            </article>

            <article className="info-card">
              <h3>
                Checked baggage
              </h3>

              <p>
                Spare lithium batteries and power banks generally
                should not be placed in checked baggage.
              </p>
            </article>
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
              In India, common security guidance allows small liquid,
              gel, paste and aerosol containers of up to 100 ml in a
              transparent resealable 1-litre bag, with applicable
              exceptions such as medicines and baby food.
            </p>
          </div>

          <div className="liquid-grid">
            <article className="answer-card">
              <span>
                100 ML
              </span>

              <h3>
                Container limit
              </h3>

              <p>
                Common security guidance uses containers of no more
                than 100 ml for cabin liquids.
              </p>
            </article>

            <article className="answer-card">
              <span>
                1 LITRE
              </span>

              <h3>
                Transparent bag
              </h3>

              <p>
                Small liquid containers are commonly placed in one
                transparent resealable 1-litre bag.
              </p>
            </article>

            <article className="answer-card">
              <span>
                EXCEPTIONS
              </span>

              <h3>
                Essential items
              </h3>

              <p>
                Medicines and baby food can have applicable
                exceptions subject to security requirements.
              </p>
            </article>
          </div>
        </section>

        {/* AIRLINE DIFFERENCES */}
        <section className="guide-section">
          <div className="section-heading">
            <p className="guide-eyebrow">
              AIRLINE-SPECIFIC RULES
            </p>

            <h2>
              Does baggage allowance vary by airline?
            </h2>

            <p>
              Yes. Airline baggage allowances can differ by carrier,
              fare, route, travel class and aircraft. Even when two
              airlines have similar cabin bag dimensions, their
              weight, personal-item or checked baggage rules may differ.
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
                  {airline.name} baggage allowance checker
                </span>

                <span aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* AIRLINE CHECKER CTA */}
        <section className="guide-cta">
          <p className="guide-eyebrow">
            CHECK YOUR AIRLINE
          </p>

          <h2>
            Check your exact airline baggage allowance
          </h2>

          <p>
            Baggage rules vary between airlines. Use BagInAir to
            check your luggage size and weight against available
            airline baggage limits before travelling.
          </p>

          <div className="guide-actions">
            <Link
              to="/airlines"
              className="guide-secondary-btn"
            >
              Compare All Airlines
            </Link>

            <Link
              to="/"
              className="guide-primary-btn"
            >
              Check My Bag
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
              Find quick answers about airline baggage allowance,
              cabin baggage, checked luggage, dimensions, weight,
              personal items and common travel restrictions.
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
            Airline baggage allowances and airport security
            requirements can change. BagInAir helps you compare
            luggage dimensions and weight, but the airline's latest
            official baggage policy and applicable airport security
            requirements should always be treated as the final
            authority for your journey.
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