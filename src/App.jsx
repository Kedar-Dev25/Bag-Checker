import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import airlines from "./data/data";
import "./App.css";

function App() {
  const { airline: airlineParam } = useParams();

  const [airline, setAirline] = useState("indigo");
  const [bagtype, setBagtype] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  /*
    If URL contains an airline like /indigo,
    automatically select that airline.
  */
  const navigate = useNavigate();

  useEffect(() => {
    if (!airlineParam) {
      setAirline("indigo");
      return;
    }

    const matchedAirline = airlines.find(
      (item) => item.id === airlineParam
    );

    if (matchedAirline) {
      setAirline(matchedAirline.id);
    } else {
      navigate("/");
    }
  }, [airlineParam, navigate]);
  /*
    Update page SEO based on the selected airline.
  */
useEffect(() => {
  const selected = airlines.find(
    (item) => item.id === airline
  );

  if (!selected) return;

  const airlineName = selected.name;

if (!airlineParam) {
  document.title =
      "Airline Baggage Size Checker – Bag Size & Weight | BagChecker"
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Check your bag size and weight against airline baggage limits. Compare cabin and checked baggage rules for popular airlines with BagChecker."    );
} else {
  document.title = selected.seo.title;

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      selected.seo.description
    );
}

  const canonicalUrl = `https://bag-checker-omega.vercel.app${
    airlineParam ? `/${airlineParam}` : "/"
  }`;

  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", canonicalUrl);

  const existingSchema = document.getElementById("webapp-schema");

if (!existingSchema) {
  const script = document.createElement("script");

  script.id = "webapp-schema";
  script.type = "application/ld+json";

  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BagChecker",
    url: "https://bag-checker-omega.vercel.app/",
    description:
      "Check airline baggage size and weight limits before you travel.",
    applicationCategory: "TravelApplication",
    operatingSystem: "Any",
  });

  document.head.appendChild(script);
}

const existingFaqSchema =
  document.getElementById("faq-schema");

if (existingFaqSchema) {
  existingFaqSchema.remove();
}

if (airlineParam) {
  const faqScript = document.createElement("script");

  faqScript.id = "faq-schema";
  faqScript.type = "application/ld+json";

  faqScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: selected.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });

  document.head.appendChild(faqScript);
}

const existingBreadcrumbSchema = document.getElementById(
  "breadcrumb-schema"
);

const urlAirline = airlines.find(
  (item) => item.id === airlineParam
);

const script =
  existingBreadcrumbSchema || document.createElement("script");

script.id = "breadcrumb-schema";
script.type = "application/ld+json";

script.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "BagChecker",
      item: "https://bag-checker-omega.vercel.app/",
    },
    ...(urlAirline
      ? [
          {
            "@type": "ListItem",
            position: 2,
            name: `${urlAirline.name} Baggage`,
            item: `https://bag-checker-omega.vercel.app/${airlineParam}`,
          },
        ]
      : []),
  ],
});

if (!existingBreadcrumbSchema) {
  document.head.appendChild(script);
}
}, [airline, airlineParam]);

  const selectedAirline = airlines.find(
    (item) => item.id === airline
  );

  const handleCheckBag = () => {
    if (!bagtype || !length || !width || !height || !weight) {
      setResult({
        status: "error",
        message: "Please enter all bag details.",
      });
      return;
    }

    const bagLength = Number(length);
    const bagWidth = Number(width);
    const bagHeight = Number(height);
    const bagWeight = Number(weight);

    if (
      !Number.isFinite(bagLength) ||
      !Number.isFinite(bagWidth) ||
      !Number.isFinite(bagHeight) ||
      !Number.isFinite(bagWeight) ||
      bagLength < 0 ||
      bagWidth < 0 ||
      bagHeight < 0 ||
      bagWeight < 0
    ) {
      setResult({
        status: "error",
        message: "Please enter valid bag measurements.",
      });
      return;
    }

    const rule =
      bagtype === "cabin"
        ? selectedAirline.cabin
        : selectedAirline.checked;

    const totalDimensions =
      bagLength + bagWidth + bagHeight;

    const problems = [];

    if (
      rule.maxWeight !== null &&
      bagWeight > rule.maxWeight
    ) {
      problems.push("heavy");
    }

    if (bagtype === "cabin") {
      if (
        bagLength > rule.length ||
        bagWidth > rule.width ||
        bagHeight > rule.height
      ) {
        problems.push("large");
      }
    }

    if (totalDimensions > rule.maxTotalDimensions) {
      if (!problems.includes("large")) {
        problems.push("large");
      }
    }

    if (problems.length === 0) {
      setResult({
        status: "allowed",
      });
    } else {
      setResult({
        status: "not-allowed",
        problems,
      });
    }

    if (!airlineParam) {
      navigate(`/${airline}`);
    }
  };

  const resetResult = () => {
    setResult(null);
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="header-inner">

          <a
            href="/"
            className="brand"
            aria-label="BagChecker home"
          >
            <div className="brand-mark">B</div>
            <span>BagChecker</span>
          </a>

          <nav
            className="nav"
            aria-label="Main navigation"
          >
            <a href="#checker">
              Baggage Checker
            </a>

            <a href="#baggage-info">
              Baggage Guide
            </a>

            <a href="#faq">
              FAQ
            </a>
          </nav>

        </div>
      </header>


      <main className="container">

        {/* Hero */}
        <section className="hero">

          <p className="eyebrow">
            AIRLINE BAGGAGE CHECKER
          </p>

<h1 className="hero-title">
{airlineParam
  ? `${selectedAirline.name} Baggage Size Checker`
  : "Check Your Bag Size & Weight Against Airline Limits"}
</h1>

          <p className="hero-text">
            Check your cabin or checked baggage size and
            weight before you fly.
          </p>

        </section>


        {/* Checker */}
        <section
          id="checker"
          className="product-layout"
          aria-label="Baggage size and weight checker"
        >

          {/* Form */}
          <section className="card">

            <div className="checker-heading">

          <h2>
            Check your bag
          </h2>

              <p>
                Enter your bag measurements to compare them
                with your airline's baggage limits.
              </p>

            </div>


            {/* Airline */}
            <div className="form-group">

              <label htmlFor="airline">
                Airline
              </label>

              <select
                id="airline"
                value={airline}
              onChange={(e) => {
                const selected = e.target.value;

                setAirline(selected);
                resetResult();
                navigate(`/${selected}`);
              }}
              >
                {airlines.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </select>

            </div>


            {/* Bag Type */}
            <div className="form-group">

              <label>
                Bag type
              </label>

              <div className="bag-types">

                <label
                  className={`bag-option ${
                    bagtype === "cabin"
                      ? "active"
                      : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="bagtype"
                    value="cabin"
                    checked={bagtype === "cabin"}
                    onChange={(e) => {
                      setBagtype(e.target.value);
                      resetResult();
                    }}
                  />

                  <span>
                    <strong>Cabin bag</strong>
                    <small>Carry-on</small>
                  </span>

                </label>


                <label
                  className={`bag-option ${
                    bagtype === "checked"
                      ? "active"
                      : ""
                  }`}
                >

                  <input
                    type="radio"
                    name="bagtype"
                    value="checked"
                    checked={bagtype === "checked"}
                    onChange={(e) => {
                      setBagtype(e.target.value);
                      resetResult();
                    }}
                  />

                  <span>
                    <strong>Checked bag</strong>
                    <small>Checked in</small>
                  </span>

                </label>

              </div>

            </div>


            {/* Dimensions */}
            <div className="form-group">

              <label>
                Bag dimensions
              </label>

              <div className="dimensions">

                <input
                  type="number"
                  min="0"
                  placeholder="Length"
                  aria-label="Bag length in centimetres"
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                    resetResult();
                  }}
                />

                <input
                  type="number"
                  min="0"
                  placeholder="Width"
                  aria-label="Bag width in centimetres"
                  value={width}
                  onChange={(e) => {
                    setWidth(e.target.value);
                    resetResult();
                  }}
                />

                <input
                  type="number"
                  min="0"
                  placeholder="Height"
                  aria-label="Bag height in centimetres"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                    resetResult();
                  }}
                />

              </div>

              <span className="input-help">
                Measurements in cm
              </span>

            </div>


            {/* Weight */}
            <div className="form-group">

              <label htmlFor="weight">
                Weight
              </label>

              <div className="weight-input">

                <input
                  id="weight"
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="e.g. 7"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    resetResult();
                  }}
                />

                <span>kg</span>

              </div>

            </div>


            {/* Check Button */}
            <button
              className="check-button"
              onClick={handleCheckBag}
            >
              Check my bag
            </button>

          </section>


          {/* Result */}
          {result && (
            <section
              className={`result ${
                result.status === "allowed"
                  ? "result-success"
                  : "result-error"
              }`}
              aria-live="polite"
            >

              {result.status === "allowed" ? (

                <div className="result-header">

                  <span className="result-icon">
                    ✓
                  </span>

                  <div>

                    <h2>
                      Bag is allowed
                    </h2>

                    <p>
                      Your bag meets the{" "}
                      {selectedAirline.name}{" "}
                      {bagtype === "cabin"
                        ? "cabin"
                        : "checked"}{" "}
                      baggage limits.
                    </p>

                  </div>

                </div>

              ) : result.status === "not-allowed" ? (

                <div className="result-header">

                  <span className="result-icon">
                    !
                  </span>

                  <div>

                    <h2>
                      Bag is not allowed
                    </h2>

                    <p>
                      {result.problems.includes("large") &&
                      result.problems.includes("heavy")
                        ? "Your bag is too large and too heavy."
                        : result.problems.includes("large")
                        ? "Your bag is too large."
                        : "Your bag is too heavy."}
                    </p>

                  </div>

                </div>

              ) : (

                <div className="result-header">

                  <span className="result-icon">
                    !
                  </span>

                  <div>

                    <h2>
                      Missing bag details
                    </h2>

                    <p>
                      {result.message}
                    </p>

                  </div>

                </div>

              )}


              {result.status !== "error" && (
                <>

                  <div className="result-details">

                    <div className="detail-block">

                      <span className="detail-label">
                        Your bag
                      </span>

                      <p>
                        {length} × {width} × {height} cm
                      </p>

                      <p>
                        {weight} kg
                      </p>

                    </div>


                    <div className="detail-block">

                      <span className="detail-label">
                        Allowed
                      </span>

                      {bagtype === "cabin" ? (
                        <>
                          <p>
                            {selectedAirline.cabin.length} ×{" "}
                            {selectedAirline.cabin.width} ×{" "}
                            {selectedAirline.cabin.height} cm
                          </p>

                          <p>
                            {selectedAirline.cabin.maxWeight} kg
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            {selectedAirline.checked.maxTotalDimensions}{" "}
                            cm total
                          </p>

                          <p>
                            {selectedAirline.checked.maxWeight !== null
                              ? `${selectedAirline.checked.maxWeight} kg`
                              : "Varies by fare"}
                          </p>
                        </>
                      )}

                    </div>

                  </div>


                  <a
                    className="policy-link"
                    href={selectedAirline.baggagePolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check official{" "}
                    {selectedAirline.name} baggage rules ↗
                  </a>

                </>
              )}

            </section>
          )}

        </section>


        {/* Disclaimer */}
        <p className="disclaimer">
          Baggage rules can vary by fare, route and flight.
          Always check the airline's official policy before
          travelling.
        </p>


    {airlineParam && (
  <section
    id="baggage-info"
    className="seo-content"
  >

    <div className="seo-intro">

      <p className="eyebrow">
        BEFORE YOU FLY
      </p>

      <h2>
        {selectedAirline.name} baggage size and weight limits
      </h2>

      <p>
        {selectedAirline.content.intro}
      </p>

    </div>

    <div className="seo-guides">

      <article className="seo-card">

        <span className="seo-card-label">
          CABIN BAGGAGE
        </span>

        <h3>
          {selectedAirline.content.cabinTitle}
        </h3>

        <p>
          {selectedAirline.content.cabinText}
        </p>

      </article>

      <article className="seo-card">

        <span className="seo-card-label">
          CHECKED BAGGAGE
        </span>

        <h3>
          {selectedAirline.content.checkedTitle}
        </h3>

        <p>
          {selectedAirline.content.checkedText}
        </p>

      </article>

    </div>

  </section>
)}

          {/* How It Works */}
          <div className="seo-how">

            <div className="seo-how-header">

              <p className="eyebrow">
                HOW IT WORKS
              </p>

              <h2>
                How to check your baggage size and weight
              </h2>

              <p>
                You don't need to search through long baggage
                policies just to find out if your bag is
                within the available limit.
              </p>

            </div>


            <div className="seo-steps">

              <div className="seo-step">

                <span>01</span>

                <div>

                  <h3>
                    Select your airline
                  </h3>

                  <p>
                    Choose the airline you are travelling with.
                  </p>

                </div>

              </div>


              <div className="seo-step">

                <span>02</span>

                <div>

                  <h3>
                    Choose your bag type
                  </h3>

                  <p>
                    Select cabin bag or checked bag.
                  </p>

                </div>

              </div>


              <div className="seo-step">

                <span>03</span>

                <div>

                  <h3>
                    Enter your measurements
                  </h3>

                  <p>
                    Add your bag's dimensions and weight.
                  </p>

                </div>

              </div>


              <div className="seo-step">

                <span>04</span>

                <div>

                  <h3>
                    Check the result
                  </h3>

                  <p>
                    See whether your bag meets the available
                    baggage limits.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Important Note */}
          <div className="seo-note">

            <strong>
              Important:
            </strong>

            <p>
              Baggage allowances can vary by airline, route,
              fare type and travel class. BagChecker is a
              quick reference tool. Always confirm the final
              baggage allowance with your airline before
              travelling.
            </p>

          </div>


          {/* Generic Baggage Guide - Homepage */}
{!airlineParam && (
  <section className="homepage-guide">

    <div className="homepage-guide-header">

      <p className="eyebrow">
        BAGGAGE GUIDE
      </p>

      <h2>
        Understand your baggage limits before you fly
      </h2>

      <p>
        Baggage rules can be confusing. Your allowed bag size
        and weight can depend on the airline, fare, route and
        type of baggage. Here are the basics you should know
        before packing.
      </p>

    </div>


    <div className="homepage-guide-grid">

      <article className="seo-card">

        <span className="seo-card-label">
          BAG DIMENSIONS
        </span>

        <h3>
          How is baggage size measured?
        </h3>

        <p>
          Bag dimensions are normally measured as length,
          width and height. For checked baggage, airlines may
          also use total dimensions, calculated as length +
          width + height.
        </p>

      </article>


      <article className="seo-card">

        <span className="seo-card-label">
          CABIN BAGGAGE
        </span>

        <h3>
          What size bag can I take into the cabin?
        </h3>

        <p>
          Cabin baggage size and weight limits vary between
          airlines. Always check both the dimensions and
          maximum weight allowed for your flight.
        </p>

      </article>


      <article className="seo-card">

        <span className="seo-card-label">
          CHECKED BAGGAGE
        </span>

        <h3>
          How does checked baggage work?
        </h3>

        <p>
          Checked baggage is stored in the aircraft's hold.
          Airlines may specify a maximum weight as well as a
          maximum total dimension for each bag.
        </p>

      </article>

    </div>


    {/* Common Questions */}
    <div className="homepage-faq">

      <div className="faq-header">

        <p className="eyebrow">
          COMMON QUESTIONS
        </p>

        <h2>
          Baggage questions people ask before flying
        </h2>

        <p>
          Quick answers to common questions about airline
          baggage size, weight and allowances.
        </p>

      </div>


      <div className="faq-list">

        <details>
          <summary>
            What size bag can I take on a flight?
          </summary>

          <p>
            There is no single baggage size that applies to
            every airline. Cabin and checked baggage limits
            vary, so check the rules for the airline you are
            travelling with.
          </p>
        </details>


        <details>
          <summary>
            What is the standard cabin baggage size?
          </summary>

          <p>
            Cabin baggage dimensions vary by airline. Common
            limits are around 55 cm in length, but the allowed
            width, height and weight can be different for each
            airline.
          </p>
        </details>


        <details>
          <summary>
            What does 158 cm total dimensions mean?
          </summary>

          <p>
            It means the length, width and height of the bag
            together should not exceed 158 cm. For example,
            70 + 50 + 38 cm equals 158 cm.
          </p>
        </details>


        <details>
          <summary>
            Is baggage allowance the same for every airline?
          </summary>

          <p>
            No. Airlines can have different baggage size and
            weight limits. Allowances can also change depending
            on your fare, route and travel class.
          </p>
        </details>


        <details>
          <summary>
            Does baggage allowance depend on my fare?
          </summary>

          <p>
            Yes. Some fares include different baggage
            allowances, particularly for checked baggage.
            Your booking confirmation and the airline's
            official baggage policy are the best sources for
            your exact allowance.
          </p>
        </details>


        <details>
          <summary>
            Should I check my airline's baggage policy before flying?
          </summary>

          <p>
            Yes. BagChecker is designed as a quick reference,
            but baggage rules can change and may depend on your
            specific flight. Always confirm the final allowance
            with the airline.
          </p>
        </details>

      </div>

    </div>

  </section>
)}


<div className="airline-links">
  <div className="airline-links-header">
    <p className="eyebrow">AIRLINES</p>

    <h2>Airline baggage checkers</h2>

    <p>
      Check baggage size and weight limits for popular airlines.
    </p>
  </div>

  <div className="airline-grid">

    <a href="/indigo" className="airline-card">
      <span className="airline-card-name">IndiGo</span>
      <span className="airline-card-action">
        Check baggage <span>→</span>
      </span>
    </a>

    <a href="/airindia" className="airline-card">
      <span className="airline-card-name">Air India</span>
      <span className="airline-card-action">
        Check baggage <span>→</span>
      </span>
    </a>

    <a href="/spicejet" className="airline-card">
      <span className="airline-card-name">SpiceJet</span>
      <span className="airline-card-action">
        Check baggage <span>→</span>
      </span>
    </a>

    <a href="/akasa" className="airline-card">
      <span className="airline-card-name">Akasa Air</span>
      <span className="airline-card-action">
        Check baggage <span>→</span>
      </span>
    </a>

    <a href="/allianceair" className="airline-card">
      <span className="airline-card-name">Alliance Air</span>
      <span className="airline-card-action">
        Check baggage <span>→</span>
      </span>
    </a>

    <a href="/fly91" className="airline-card">
      <span className="airline-card-name">FLY91</span>
      <span className="airline-card-action">
        Check baggage <span>→</span>
      </span>
    </a>

    <a href="/airindiaexpress" className="airline-card">
      <span className="airline-card-name">Air India Express</span>
      <span className="airline-card-action">
        Check baggage <span>→</span>
      </span>
    </a>

  </div>
</div>

{/* FAQ */}
{/* FAQ */}
{airlineParam && (
<section
  id="faq"
  className="faq-section"
>

  <div className="faq-header">

    <p className="eyebrow">
      FAQ
    </p>

    <h2>
      Frequently asked questions
    </h2>

    <p>
      Common questions about {airlineParam
        ? `${selectedAirline.name} baggage size, weight limits and baggage rules.`
        : "airline baggage size, weight limits and baggage rules."}
    </p>

  </div>


  <div className="faq-list">

    {selectedAirline.faq.map((item, index) => (

      <details key={index}>

        <summary>
          {item.question}
        </summary>

        <p>
          {item.answer}
        </p>

      </details>

    ))}

  </div>

</section>

)}
        {/* Footer */}
        <footer className="footer">

          <div className="footer-brand">

            <div className="brand-mark">
              B
            </div>

            <div>

              <strong>
                BagChecker
              </strong>

              <p>
                Airline baggage size and weight checker.
              </p>

            </div>

          </div>


          <nav
            className="footer-links"
            aria-label="Footer navigation"
          >

            <a href="#checker">
              Baggage Checker
            </a>

            <a href="#baggage-info">
              Baggage Guide
            </a>

            <a href="#faq">
              FAQ
            </a>

          </nav>


          <p className="footer-copy">
            © {new Date().getFullYear()} BagChecker.
            Always verify baggage rules with your airline.
          </p>

        </footer>

      </main>

    </div>
  );
}

export default App;