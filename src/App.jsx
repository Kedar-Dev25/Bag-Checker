import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import airlines from "./data/data";
import "./App.css";
import Navbar from "./components/NavBar";

const BASE_URL = "https://baginair.vercel.app";

function App() {
  const { airline: airlineParam } = useParams();

  const [airline, setAirline] = useState("indigo");
  const [bagtype, setBagtype] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);
  const [allAirlineResults, setAllAirlineResults] = useState(null);

  const resultRef = useRef(null);
  const navigate = useNavigate();

  const isAllAirlinesPage = airlineParam === "airlines";

  /* =====================================================
     LOAD SAVED BAG DATA
  ===================================================== */

  useEffect(() => {
    const savedBag = localStorage.getItem("bagData");

    if (!savedBag) return;

    try {
      const data = JSON.parse(savedBag);

      setBagtype(data.bagtype || "");
      setLength(data.length || "");
      setWidth(data.width || "");
      setHeight(data.height || "");
      setWeight(data.weight || "");
    } catch {
      localStorage.removeItem("bagData");
    }
  }, []);

  /* =====================================================
     URL → AIRLINE
  ===================================================== */

  useEffect(() => {
    if (!airlineParam) {
      setAirline("indigo");
      return;
    }

    if (airlineParam === "airlines") {
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

  /* =====================================================
     SEO
  ===================================================== */

  useEffect(() => {
    const selected = airlines.find(
      (item) => item.id === airline
    );

    if (!selected) return;

    if (isAllAirlinesPage) {
      document.title =
        "Compare Airline Baggage Size & Weight | BagInAir";

      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Compare cabin and checked baggage size and weight limits across supported airlines with BagInAir."
        );
    } else if (!airlineParam) {
      document.title =
        "Baggage Size Checker – Check Bag Size & Weight | BagInAir";

      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Check your cabin or checked bag size and weight against airline baggage limits. Compare baggage rules for popular airlines with BagInAir."
        );
    } else {
      document.title = selected.seo.title;

      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          selected.seo.description
        );
    }

    /* Canonical */

    const canonicalUrl = `${BASE_URL}${
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

    /* WebApplication Schema */

    const existingSchema =
      document.getElementById("webapp-schema");

    if (existingSchema) {
      existingSchema.remove();
    }

    const webAppScript = document.createElement("script");

    webAppScript.id = "webapp-schema";
    webAppScript.type = "application/ld+json";

    webAppScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "BagInAir",
      url: canonicalUrl,
      description:
        "Check airline baggage size and weight limits before you travel.",
      applicationCategory: "TravelApplication",
      operatingSystem: "Any",
    });

    document.head.appendChild(webAppScript);

    /* FAQ Schema */

    const existingFaqSchema =
      document.getElementById("faq-schema");

    if (existingFaqSchema) {
      existingFaqSchema.remove();
    }

    if (airlineParam && !isAllAirlinesPage) {
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

    /* Breadcrumb Schema */

    const existingBreadcrumbSchema =
      document.getElementById("breadcrumb-schema");

    const urlAirline = airlines.find(
      (item) => item.id === airlineParam
    );

    const script =
      existingBreadcrumbSchema ||
      document.createElement("script");

    script.id = "breadcrumb-schema";
    script.type = "application/ld+json";

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "BagInAir",
          item: `${BASE_URL}/`,
        },

        ...(isAllAirlinesPage
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: "All Airlines",
                item: `${BASE_URL}/airlines`,
              },
            ]
          : urlAirline
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: `${urlAirline.name} Baggage`,
                item: `${BASE_URL}/${airlineParam}`,
              },
            ]
          : []),
      ],
    });

    if (!existingBreadcrumbSchema) {
      document.head.appendChild(script);
    }
  }, [airline, airlineParam, isAllAirlinesPage]);

  /* =====================================================
     SELECTED AIRLINE
  ===================================================== */

  const selectedAirline = airlines.find(
    (item) => item.id === airline
  );

  /* =====================================================
     RESULT SCROLL
  ===================================================== */

  useEffect(() => {
    if (!result) return;

    const timer = setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [result]);

  /* =====================================================
     CHECK BAG
  ===================================================== */

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

    const totalDimensions =
      bagLength + bagWidth + bagHeight;

    localStorage.setItem(
      "bagData",
      JSON.stringify({
        bagtype,
        length,
        width,
        height,
        weight,
      })
    );

    /* =====================================================
       ALL AIRLINES
    ===================================================== */

    if (isAllAirlinesPage) {
      const results = airlines.map((item) => {
        const rule =
          bagtype === "cabin"
            ? item.cabin
            : item.checked;

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

        if (
          totalDimensions > rule.maxTotalDimensions
        ) {
          if (!problems.includes("large")) {
            problems.push("large");
          }
        }

        return {
          id: item.id,
          name: item.name,
          allowed: problems.length === 0,
          problems,
          rule,
        };
      });

      setAllAirlineResults(results);
      return;
    }

    /* =====================================================
       SINGLE AIRLINE
    ===================================================== */

    const rule =
      bagtype === "cabin"
        ? selectedAirline.cabin
        : selectedAirline.checked;

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

    if (
      totalDimensions > rule.maxTotalDimensions
    ) {
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

  /* =====================================================
     HELPERS
  ===================================================== */

  const resetResult = () => {
    setResult(null);
  };

  const handleModeChange = (mode) => {
    if (mode === "all") {
      navigate("/airlines");
      return;
    }

    if (airlineParam === "airlines") {
      navigate(`/${airline}`);
    }
  };

  const saveBagData = (updates = {}) => {
    localStorage.setItem(
      "bagData",
      JSON.stringify({
        bagtype,
        length,
        width,
        height,
        weight,
        ...updates,
      })
    );
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="app">

      <Navbar />

      <main className="container">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className={`hero ${
            isAllAirlinesPage
              ? "all-airlines-hero"
              : ""
          }`}
        >

          <p className="eyebrow">
            {isAllAirlinesPage
              ? "AIRLINE BAGGAGE COMPARISON"
              : "AIRLINE BAGGAGE CHECKER"}
          </p>

          <h1 className="hero-title">
            {isAllAirlinesPage
              ? bagtype === "cabin"
                ? "Find Airlines That Fit Your Cabin Bag"
                : bagtype === "checked"
                ? "Find Airlines That Fit Your Checked Bag"
                : "Compare Your Bag Across Airlines"
              : airlineParam
              ? `${selectedAirline.name} Baggage Size Checker`
              : "Check Your Bag Size & Weight Against Airline Limits"}
          </h1>

          <p className="hero-text">
            {isAllAirlinesPage
              ? "Compare your bag size and weight with baggage limits across supported airlines."
              : `Check your ${selectedAirline.name} cabin or checked baggage size and weight before you fly.`}
          </p>

        </section>


        {/* =================================================
            MODE SWITCH
        ================================================= */}

        <div
          className="mode-switch"
          role="tablist"
          aria-label="Baggage checking mode"
        >

          <button
            type="button"
            className={`mode-option ${
              !isAllAirlinesPage
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleModeChange("single")
            }
          >
            Check against 1 airline
          </button>

          <button
            type="button"
            className={`mode-option ${
              isAllAirlinesPage
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleModeChange("all")
            }
          >
            Check against all airlines
          </button>

        </div>


        {/* =================================================
            ALL AIRLINES CHECKER
        ================================================= */}

        {isAllAirlinesPage ? (

          <section
            id="checker"
            className="product-layout all-airlines-product-layout"
            aria-label="All airline baggage size and weight checker"
          >

            {/* FORM */}

            <section className="card">

              <div className="checker-heading">
                <h2>Check your bag</h2>

                <p>
                  Enter your bag details to compare it
                  across supported airlines.
                </p>
              </div>


              {/* BAG TYPE */}

              <div className="form-group">

                <label>Bag type</label>

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
                      name="all-airlines-bagtype"
                      value="cabin"
                      checked={
                        bagtype === "cabin"
                      }
                      onChange={(e) => {
                        const value =
                          e.target.value;

                        setBagtype(value);
                        resetResult();
                        saveBagData({
                          bagtype: value,
                        });
                      }}
                    />

                    <span>
                      <strong>
                        Cabin bag
                      </strong>

                      <small>
                        Carry-on
                      </small>
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
                      name="all-airlines-bagtype"
                      value="checked"
                      checked={
                        bagtype === "checked"
                      }
                      onChange={(e) => {
                        const value =
                          e.target.value;

                        setBagtype(value);
                        resetResult();
                        saveBagData({
                          bagtype: value,
                        });
                      }}
                    />

                    <span>
                      <strong>
                        Checked bag
                      </strong>

                      <small>
                        Checked in
                      </small>
                    </span>

                  </label>

                </div>

              </div>


              {/* DIMENSIONS */}

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
                      const value =
                        e.target.value;

                      setLength(value);
                      resetResult();

                      saveBagData({
                        length: value,
                      });
                    }}
                  />

                  <input
                    type="number"
                    min="0"
                    placeholder="Width"
                    aria-label="Bag width in centimetres"
                    value={width}
                    onChange={(e) => {
                      const value =
                        e.target.value;

                      setWidth(value);
                      resetResult();

                      saveBagData({
                        width: value,
                      });
                    }}
                  />

                  <input
                    type="number"
                    min="0"
                    placeholder="Height"
                    aria-label="Bag height in centimetres"
                    value={height}
                    onChange={(e) => {
                      const value =
                        e.target.value;

                      setHeight(value);
                      resetResult();

                      saveBagData({
                        height: value,
                      });
                    }}
                  />

                </div>

                <span className="input-help">
                  Measurements in cm
                </span>

              </div>


              {/* WEIGHT */}

              <div className="form-group">

                <label htmlFor="all-airlines-weight">
                  Weight
                </label>

                <div className="weight-input">

                  <input
                    id="all-airlines-weight"
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="e.g. 7"
                    value={weight}
                    onChange={(e) => {
                      const value =
                        e.target.value;

                      setWeight(value);
                      resetResult();

                      saveBagData({
                        weight: value,
                      });
                    }}
                  />

                  <span>kg</span>

                </div>

              </div>


              <button
                type="button"
                className="all-airlines-check-button"
                onClick={handleCheckBag}
              >
                Check my bag
              </button>

            </section>


            {/* RESULTS */}

            <section
              className="result all-airlines-result-panel"
              aria-live="polite"
            >

              {!allAirlineResults ? (

                <div className="result-placeholder">

                  <span className="detail-label">
                    BAGGAGE CHECK RESULT
                  </span>

                  <h2>
                    Your result will appear here
                  </h2>

                  <p>
                    Enter your bag details to compare
                    your baggage allowance across
                    airlines.
                  </p>

                </div>

              ) : (

                <div className="all-airlines-result-content">

                  <span className="detail-label">
                    BAGGAGE CHECK RESULT
                  </span>

                  <h2>
                    {
                      allAirlineResults.filter(
                        (item) =>
                          item.allowed
                      ).length
                    }{" "}
                    of{" "}
                    {allAirlineResults.length}{" "}
                    airlines fit your bag
                  </h2>


                  <div className="all-airlines-results-grid">

                    {allAirlineResults.map(
                      (item) => (

                        <a
                          key={item.id}
                          href={`/${item.id}`}
                          className={`airline-result-card ${
                            item.allowed
                              ? "airline-result-allowed"
                              : "airline-result-not-allowed"
                          }`}
                        >

                          <div className="airline-result-top">

                            <span className="airline-result-icon">
                              {item.allowed
                                ? "✓"
                                : "×"}
                            </span>

                            <strong>
                              {item.name}
                            </strong>

                          </div>


                          <div className="airline-result-details">

                            {bagtype ===
                            "cabin" ? (

                              <>
                                <span>
                                  {
                                    item.rule
                                      .length
                                  }{" "}
                                  ×{" "}
                                  {
                                    item.rule
                                      .width
                                  }{" "}
                                  ×{" "}
                                  {
                                    item.rule
                                      .height
                                  }{" "}
                                  cm
                                </span>

                                <span>
                                  {
                                    item.rule
                                      .maxWeight
                                  }{" "}
                                  kg
                                </span>
                              </>

                            ) : (

                              <>
                                <span>
                                  {
                                    item.rule
                                      .maxTotalDimensions
                                  }{" "}
                                  cm total
                                </span>

                                <span>
                                  {item.rule
                                    .maxWeight !==
                                  null
                                    ? `${item.rule.maxWeight} kg`
                                    : "Varies by fare"}
                                </span>
                              </>

                            )}

                          </div>


                          <span className="airline-result-status">
                            {item.allowed
                              ? "Your bag fits"
                              : "Does not fit"}
                          </span>

                        </a>

                      )
                    )}

                  </div>

                </div>

              )}

            </section>


            {/* TABLE */}

            <div className="standard-table-wrapper">

              <div className="standard-table-heading">

                <div>

                  <span className="standard-table-label">
                    SUPPORTED AIRLINES
                  </span>

                  <h3>
                    Cabin baggage limits
                  </h3>

                </div>

                <span className="standard-table-unit">
                  Dimensions in cm
                </span>

              </div>


              <div className="standard-table-scroll">

                <table className="standard-baggage-table">

                  <thead>
                    <tr>
                      <th>Airline</th>
                      <th>Cabin bag size</th>
                      <th>Weight</th>
                    </tr>
                  </thead>


                  <tbody>

                    {airlines.map(
                      (item) => (

                        <tr key={item.id}>

                          <td>
                            <a
                              href={`/${item.id}`}
                            >
                              {item.name}
                            </a>
                          </td>

                          <td>
                            {item.cabin.length} ×{" "}
                            {item.cabin.width} ×{" "}
                            {item.cabin.height} cm
                          </td>

                          <td>
                            {item.cabin.maxWeight} kg
                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

              <p className="standard-table-note">
                These limits are provided as a quick
                reference. Airline rules can change and
                may vary by fare, route or travel class.
                Always confirm the final allowance with
                your airline.
              </p>

            </div>

          </section>

        ) : (

          /* =================================================
             SINGLE AIRLINE CHECKER
          ================================================= */

          <section
            id="checker"
            className="product-layout"
            aria-label="Baggage size and weight checker"
          >

            {/* FORM */}

            <section className="card">

              <div className="checker-heading">

                <h2>
                  Check your bag
                </h2>

                <p>
                  Enter your bag measurements and
                  compare them with{" "}
                  {selectedAirline.name}'s
                  available baggage limits.
                </p>

              </div>


              {/* AIRLINE */}

              <div className="form-group">

                <label htmlFor="airline">
                  Airline
                </label>

                <select
                  id="airline"
                  value={airline}
                  onChange={(e) => {
                    const selected =
                      e.target.value;

                    setAirline(selected);
                    resetResult();

                    navigate(
                      `/${selected}`
                    );
                  }}
                >

                  {airlines.map(
                    (item) => (

                      <option
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>

                    )
                  )}

                </select>

              </div>


              {/* BAG TYPE */}

              <div className="form-group">

                <label>Bag type</label>

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
                      checked={
                        bagtype === "cabin"
                      }
                      onChange={(e) => {
                        setBagtype(
                          e.target.value
                        );
                        resetResult();
                      }}
                    />

                    <span>
                      <strong>
                        Cabin bag
                      </strong>

                      <small>
                        Carry-on
                      </small>
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
                      checked={
                        bagtype === "checked"
                      }
                      onChange={(e) => {
                        setBagtype(
                          e.target.value
                        );
                        resetResult();
                      }}
                    />

                    <span>
                      <strong>
                        Checked bag
                      </strong>

                      <small>
                        Checked in
                      </small>
                    </span>

                  </label>

                </div>

              </div>


              {/* DIMENSIONS */}

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
                      setLength(
                        e.target.value
                      );
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
                      setWidth(
                        e.target.value
                      );
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
                      setHeight(
                        e.target.value
                      );
                      resetResult();
                    }}
                  />

                </div>

                <span className="input-help">
                  Measurements in cm
                </span>

              </div>


              {/* WEIGHT */}

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
                      setWeight(
                        e.target.value
                      );
                      resetResult();
                    }}
                  />

                  <span>kg</span>

                </div>

              </div>


              {/* BUTTON */}

              <button
                type="button"
                className="check-button"
                onClick={handleCheckBag}
              >
                Check my bag
              </button>

            </section>


            {/* =================================================
                RESULT
            ================================================= */}

            {!result && (

              <section
                className="result homepage-result-placeholder"
                aria-hidden="true"
              >

                <div className="result-placeholder">

                  <span className="detail-label">
                    BAGGAGE CHECK RESULT
                  </span>

                  <h2>
                    Your result will appear here
                  </h2>

                  <p>
                    Enter your bag details to check
                    whether your bag meets the{" "}
                    {selectedAirline.name} baggage
                    limits.
                  </p>

                </div>

              </section>

            )}


            {result && (

              <section
                ref={resultRef}
                className={`result ${
                  result.status ===
                  "allowed"
                    ? "result-success"
                    : "result-error"
                }`}
                aria-live="polite"
              >

                {/* RESULT HEADER */}

                {result.status ===
                "allowed" ? (

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
                        {
                          selectedAirline.name
                        }{" "}
                        {bagtype ===
                        "cabin"
                          ? "cabin"
                          : "checked"}{" "}
                        baggage limits.
                      </p>

                    </div>

                  </div>

                ) : result.status ===
                  "not-allowed" ? (

                  <div className="result-header">

                    <span className="result-icon">
                      !
                    </span>

                    <div>

                      <h2>
                        Bag is not allowed
                      </h2>

                      <p>
                        {result.problems.includes(
                          "large"
                        ) &&
                        result.problems.includes(
                          "heavy"
                        )
                          ? "Your bag is too large and too heavy."
                          : result.problems.includes(
                              "large"
                            )
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


                {/* RESULT DETAILS */}

                {result.status !==
                  "error" && (

                  <>

                    <div className="result-details">

                      <div className="detail-block">

                        <span className="detail-label">
                          Your bag
                        </span>

                        <p>
                          {length} ×{" "}
                          {width} ×{" "}
                          {height} cm
                        </p>

                        <p>
                          {weight} kg
                        </p>

                      </div>


                      <div className="detail-block">

                        <span className="detail-label">
                          Allowed
                        </span>

                        {bagtype ===
                        "cabin" ? (

                          <>

                            <p>
                              {
                                selectedAirline
                                  .cabin
                                  .length
                              }{" "}
                              ×{" "}
                              {
                                selectedAirline
                                  .cabin
                                  .width
                              }{" "}
                              ×{" "}
                              {
                                selectedAirline
                                  .cabin
                                  .height
                              }{" "}
                              cm
                            </p>

                            <p>
                              {
                                selectedAirline
                                  .cabin
                                  .maxWeight
                              }{" "}
                              kg
                            </p>

                          </>

                        ) : (

                          <>

                            <p>
                              {
                                selectedAirline
                                  .checked
                                  .maxTotalDimensions
                              }{" "}
                              cm total
                            </p>

                            <p>
                              {
                                selectedAirline
                                  .checked
                                  .maxWeight !==
                                null
                                  ? `${selectedAirline.checked.maxWeight} kg`
                                  : "Varies by fare"
                              }
                            </p>

                          </>

                        )}

                      </div>

                    </div>


                    <a
                      className="policy-link"
                      href={
                        selectedAirline.baggagePolicyUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check official{" "}
                      {
                        selectedAirline.name
                      }{" "}
                      baggage rules ↗
                    </a>

                  </>

                )}

              </section>

            )}

          </section>

        )}


        {/* =================================================
            DISCLAIMER
        ================================================= */}

        {!isAllAirlinesPage && (

          <p className="disclaimer">
            Baggage rules can vary by fare, route and
            flight. Always check the airline's official
            policy before travelling.
          </p>

        )}


        {/* =================================================
            HOMEPAGE STANDARD BAGGAGE
        ================================================= */}

        {!airlineParam && (

          <section className="standard-baggage-section">

            <div className="standard-baggage-header">

              <p className="standard-baggage-eyebrow">
                STANDARD CABIN BAGGAGE
              </p>

              <h2>
                What is the standard cabin baggage
                size in India?
              </h2>

              <div className="standard-answer">

                <span className="standard-answer-label">
                  QUICK ANSWER
                </span>

                <p>
                  Many major Indian airlines allow a
                  cabin bag around{" "}
                  <strong>
                    55 × 35 × 25 cm
                  </strong>{" "}
                  with a{" "}
                  <strong>
                    7 kg
                  </strong>{" "}
                  weight limit. However, baggage
                  dimensions can differ between
                  airlines.
                </p>

              </div>

              <p className="standard-baggage-description">
                Cabin baggage rules are not identical
                across every airline. The allowed
                dimensions and weight can depend on
                the airline, route, fare and travel
                class. Before travelling, measure your
                bag and check the rules for your
                specific airline.
              </p>

            </div>


            <div className="standard-table-wrapper">

              <div className="standard-table-heading">

                <div>

                  <span className="standard-table-label">
                    AIRLINE COMPARISON
                  </span>

                  <h3>
                    Cabin baggage limits by airline
                  </h3>

                </div>

                <span className="standard-table-unit">
                  Dimensions in cm
                </span>

              </div>


              <div className="standard-table-scroll">

                <table className="standard-baggage-table">

                  <thead>

                    <tr>
                      <th>Airline</th>
                      <th>Cabin bag size</th>
                      <th>Weight</th>
                    </tr>

                  </thead>


                  <tbody>

                    {airlines.map(
                      (item) => (

                        <tr key={item.id}>

                          <td>
                            <a
                              href={`/${item.id}`}
                            >
                              {item.name}
                            </a>
                          </td>

                          <td>
                            {
                              item.cabin
                                .length
                            }{" "}
                            ×{" "}
                            {
                              item.cabin
                                .width
                            }{" "}
                            ×{" "}
                            {
                              item.cabin
                                .height
                            }{" "}
                            cm
                          </td>

                          <td>
                            {
                              item.cabin
                                .maxWeight
                            }{" "}
                            kg
                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>


              <p className="standard-table-note">
                These limits are provided as a quick
                reference. Airline rules can change
                and may vary by fare, route or travel
                class. Always confirm the final
                allowance with your airline.
              </p>

            </div>

          </section>

        )}


        {/* =================================================
            AIRLINE-SPECIFIC SEO CONTENT
        ================================================= */}

        {airlineParam &&
          !isAllAirlinesPage && (
            <>
              <section
                id="baggage-info"
                className="seo-content"
              >

                {/* INTRO */}

                <div className="seo-intro">

                  <p className="eyebrow">
                    {selectedAirline.name.toUpperCase()} BAGGAGE GUIDE
                  </p>

                  <h2>
                    {
                      selectedAirline.name
                    } baggage size, weight and allowance
                  </h2>

                  <p>
                    {
                      selectedAirline
                        .content.intro
                    }
                  </p>

                </div>


                {/* QUICK ANSWER */}

                <div className="seo-guides">

                  <article className="seo-card">

                    <span className="seo-card-label">
                      QUICK ANSWER
                    </span>

                    <h3>
                      {
                        selectedAirline.name
                      } baggage limits at a glance
                    </h3>

                    <p>
                      <strong>
                        Cabin:
                      </strong>{" "}
                      {
                        selectedAirline.cabin
                          .length
                      }{" "}
                      ×{" "}
                      {
                        selectedAirline.cabin
                          .width
                      }{" "}
                      ×{" "}
                      {
                        selectedAirline.cabin
                          .height
                      }{" "}
                      cm, up to{" "}
                      {
                        selectedAirline.cabin
                          .maxWeight
                      }{" "}
                      kg.
                    </p>

                    <p>
                      <strong>
                        Checked:
                      </strong>{" "}
                      {
                        selectedAirline
                          .checked
                          .maxTotalDimensions
                      }{" "}
                      cm total dimensions
                      {selectedAirline
                        .checked
                        .maxWeight !==
                      null
                        ? `, up to ${selectedAirline.checked.maxWeight} kg.`
                        : ", with weight varying by fare."}
                    </p>

                  </article>


                  {/* CABIN */}

                  <article className="seo-card">

                    <span className="seo-card-label">
                      CABIN BAGGAGE
                    </span>

                    <h3>
                      {
                        selectedAirline
                          .content.cabinTitle
                      }
                    </h3>

                    <p>
                      {
                        selectedAirline
                          .content.cabinText
                      }
                    </p>

                  </article>


                  {/* CHECKED */}

                  <article className="seo-card">

                    <span className="seo-card-label">
                      CHECKED BAGGAGE
                    </span>

                    <h3>
                      {
                        selectedAirline
                          .content.checkedTitle
                      }
                    </h3>

                    <p>
                      {
                        selectedAirline
                          .content.checkedText
                      }
                    </p>

                  </article>


                  {/* SIZE CALCULATION */}

                  {selectedAirline.content
                    .sizeCalculation && (

                    <article className="seo-card">

                      <span className="seo-card-label">
                        BAG DIMENSIONS
                      </span>

                      <h3>
                        How are{" "}
                        {
                          selectedAirline
                            .name
                        }{" "}
                        baggage dimensions calculated?
                      </h3>

                      <p>
                        {
                          selectedAirline
                            .content
                            .sizeCalculation
                        }
                      </p>

                    </article>

                  )}


                  {/* CABIN GUIDE */}

                  {selectedAirline.content
                    .cabinGuide && (

                    <article className="seo-card">

                      <span className="seo-card-label">
                        CABIN BAGGAGE
                      </span>

                      <h3>
                        {
                          selectedAirline.name
                        }{" "}
                        cabin baggage guide
                      </h3>

                      <p>
                        {
                          selectedAirline
                            .content.cabinGuide
                        }
                      </p>

                    </article>

                  )}


                  {/* CHECKED GUIDE */}

                  {selectedAirline.content
                    .checkedGuide && (

                    <article className="seo-card">

                      <span className="seo-card-label">
                        CHECKED BAGGAGE
                      </span>

                      <h3>
                        {
                          selectedAirline.name
                        }{" "}
                        checked baggage guide
                      </h3>

                      <p>
                        {
                          selectedAirline
                            .content.checkedGuide
                        }
                      </p>

                    </article>

                  )}


                  {/* HOW TO MEASURE */}

                  <article className="seo-card">

                    <span className="seo-card-label">
                      MEASURING YOUR BAG
                    </span>

                    <h3>
                      How to measure your{" "}
                      {
                        selectedAirline.name
                      }{" "}
                      bag
                    </h3>

                    <p>
                      Measure the complete length,
                      width and height of your luggage
                      in centimetres. For a cabin bag,
                      compare each dimension with the
                      allowed{" "}
                      {
                        selectedAirline.name
                      }{" "}
                      cabin baggage size.
                    </p>

                    <p>
                      For checked baggage, also check
                      the total dimensions when the
                      airline uses a combined length,
                      width and height limit.
                    </p>

                  </article>


                  {/* CHECKER */}

                  <article className="seo-card">

                    <span className="seo-card-label">
                      BAGGAGE CHECKER
                    </span>

                    <h3>
                      Check your{" "}
                      {
                        selectedAirline.name
                      }{" "}
                      bag size and weight
                    </h3>

                    <p>
                      Enter your bag dimensions and
                      weight above to check whether
                      your cabin or checked bag meets
                      the available{" "}
                      {
                        selectedAirline.name
                      }{" "}
                      baggage limits.
                    </p>

                    <p>
                      BagInAir provides a quick way to
                      compare your measurements before
                      travelling.
                    </p>

                  </article>

                </div>

                {/* REFERENCE NOTE */}

                <div className="seo-note">

                  <strong>
                    Quick reference:
                  </strong>

                  <p>
                    The information above is intended
                    to help you understand the baggage
                    limits. Airline rules can vary by
                    fare, route and travel conditions.
                    Always confirm the final allowance
                    with the airline before travelling.
                  </p>

                </div>

              </section>


              {/* =================================================
                  CARRY THINGS — OUTSIDE SEO CONTENT
              ================================================= */}

              {selectedAirline.content.carryItems?.length > 0 && (
                <section
                  className="carry-section"
                  aria-labelledby="carry-section-title"
                >
                  <div className="carry-header">
                    <span className="carry-eyebrow">
                      BAGGAGE RULES
                    </span>

                    <h2 id="carry-section-title">
                      What can I carry on {selectedAirline.name}?
                    </h2>

                    <p>
                      Check where common travel items can usually be packed before you
                      reach the airport. Some items have special conditions or restrictions.
                    </p>
                  </div>

                  <div className="carry-list">
                    {selectedAirline.content.carryItems.map((item, index) => (
                      <article
                        className="carry-item"
                        key={`${item.name}-${index}`}
                      >
                        <div className="carry-item-main">
                          <h3>{item.name}</h3>

                          {item.note && (
                            <p>{item.note}</p>
                          )}
                        </div>

                        <div className="carry-status">
                          <div className="carry-status-block">
                            <span>Cabin</span>
                            <strong>{item.cabin}</strong>
                          </div>

                          <div className="carry-status-block">
                            <span>Checked</span>
                            <strong>{item.checked}</strong>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {selectedAirline.content.cabinPacking?.length > 0 && (
                    <div className="carry-advice">
                      <span className="carry-advice-label">
                        BETTER IN CABIN BAGGAGE
                      </span>

                      <h3>
                        Keep important items with you
                      </h3>

                      <p>
                        For {selectedAirline.name}, items such as medicines, valuables,
                        fragile belongings, important documents and personal electronics
                        are generally better kept in cabin baggage.
                      </p>

                      <div className="carry-tags">
                        {selectedAirline.content.cabinPacking.map((item, index) => (
                          <span key={`${item}-${index}`}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedAirline.content.liquids && (
                    <div className="carry-rule">
                      <span className="carry-rule-label">
                        LIQUIDS
                      </span>

                      <h3>
                        Cabin liquids have additional restrictions
                      </h3>

                      <p>
                        {selectedAirline.content.liquids}
                      </p>
                    </div>
                  )}

                  {selectedAirline.content.restrictedItems && (
                    <div className="carry-warning">
                      <div>
                        <span className="carry-warning-label">
                          RESTRICTED ITEMS
                        </span>

                        <h3>
                          Some items cannot be carried normally
                        </h3>

                        <p>
                          {selectedAirline.content.restrictedItems}
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              )}
            </>
          )}


        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <div className="seo-how">

          <div className="seo-how-header">

            <p className="eyebrow">
              HOW IT WORKS
            </p>

            <h2>
              How to check your baggage size and weight
            </h2>

            <p>
              Check your luggage against available
              airline limits in a few simple steps.
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
                  Choose the airline you are
                  travelling with.
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
                  Add your bag's length, width,
                  height and weight.
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
                  See whether your bag meets the
                  available baggage limits.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            IMPORTANT NOTE
        ================================================= */}

        <div className="seo-note">

          <strong>
            Important:
          </strong>

          <p>
            Baggage allowances can vary by airline,
            route, fare type and travel class.
            BagInAir is a quick reference tool.
            Always confirm the final baggage
            allowance with your airline before
            travelling.
          </p>

        </div>


        {/* =================================================
            HOMEPAGE GUIDE
        ================================================= */}

        {!airlineParam && (

          <section className="homepage-guide">

            <div className="homepage-guide-header">

              <p className="eyebrow">
                BAGGAGE GUIDE
              </p>

              <h2>
                Understand your baggage limits before
                you fly
              </h2>

              <p>
                Baggage rules can vary between
                airlines. Understanding dimensions,
                weight and baggage type can make it
                easier to prepare your luggage before
                travelling.
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
                  Bag dimensions are normally measured
                  as length, width and height. For
                  checked baggage, airlines may also
                  use total dimensions calculated as
                  length + width + height.
                </p>

              </article>


              <article className="seo-card">

                <span className="seo-card-label">
                  CABIN BAGGAGE
                </span>

                <h3>
                  What size bag can I take into the
                  cabin?
                </h3>

                <p>
                  Cabin baggage size and weight
                  limits vary between airlines.
                  Always check both the dimensions
                  and maximum weight allowed for your
                  flight.
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
                  Checked baggage is stored in the
                  aircraft's hold. Airlines may
                  specify a maximum weight as well as
                  maximum dimensions for each bag.
                </p>

              </article>

            </div>


            {/* COMMON QUESTIONS */}

            <div className="homepage-faq">

              <div className="faq-header">

                <p className="eyebrow">
                  COMMON QUESTIONS
                </p>

                <h2>
                  Baggage questions people ask before
                  flying
                </h2>

                <p>
                  Quick answers to common questions
                  about airline baggage size, weight
                  and allowances.
                </p>

              </div>


              <div className="faq-list">

                <details>

                  <summary>
                    What size bag can I take on a
                    flight?
                  </summary>

                  <p>
                    There is no single baggage size
                    that applies to every airline.
                    Cabin and checked baggage limits
                    vary, so check the rules for the
                    airline you are travelling with.
                  </p>

                </details>


                <details>

                  <summary>
                    What is the standard cabin
                    baggage size?
                  </summary>

                  <p>
                    Cabin baggage dimensions vary by
                    airline. Common limits are around
                    55 cm in length, but the allowed
                    width, height and weight can be
                    different for each airline.
                  </p>

                </details>


                <details>

                  <summary>
                    What does 158 cm total dimensions
                    mean?
                  </summary>

                  <p>
                    It means the length, width and
                    height of the bag together should
                    not exceed 158 cm. For example,
                    70 + 50 + 38 cm equals 158 cm.
                  </p>

                </details>


                <details>

                  <summary>
                    Is baggage allowance the same for
                    every airline?
                  </summary>

                  <p>
                    No. Airlines can have different
                    baggage size and weight limits.
                    Allowances can also change
                    depending on your fare, route and
                    travel class.
                  </p>

                </details>


                <details>

                  <summary>
                    Does baggage allowance depend on
                    my fare?
                  </summary>

                  <p>
                    Yes. Some fares include different
                    baggage allowances, particularly
                    for checked baggage. Your booking
                    confirmation and the airline's
                    official baggage policy are the
                    best sources for your exact
                    allowance.
                  </p>

                </details>


                <details>

                  <summary>
                    Should I check my airline's
                    baggage policy before flying?
                  </summary>

                  <p>
                    Yes. BagInAir is designed as a
                    quick reference, but baggage rules
                    can change and may depend on your
                    specific flight. Always confirm
                    the final allowance with the
                    airline.
                  </p>

                </details>

              </div>

            </div>

          </section>

        )}


        {/* =================================================
            AIRLINE LINKS
        ================================================= */}

        <div className="airline-links">

          <div className="airline-links-header">

            <p className="eyebrow">
              AIRLINES
            </p>

            <h2>
              Airline baggage checkers
            </h2>

            <p>
              Check baggage size and weight limits
              for supported airlines.
            </p>

          </div>


          <div className="airline-grid">

            {airlines.map(
              (item) => (

                <a
                  key={item.id}
                  href={`/${item.id}`}
                  className="airline-card"
                >

                  <span className="airline-card-name">
                    {item.name}
                  </span>

                  <span className="airline-card-action">
                    Check baggage{" "}
                    <span>→</span>
                  </span>

                </a>

              )
            )}

          </div>


          <a
            href="/baggage-guide"
            className="baggage-guide-cta-button"
          >
            Read the complete baggage guide
            <span>→</span>
          </a>

        </div>


        {/* =================================================
            AIRLINE FAQ
        ================================================= */}

        {airlineParam &&
          !isAllAirlinesPage && (

            <section
              id="faq"
              className="faq-section"
            >

              <div className="faq-header">

                <p className="eyebrow">
                  FAQ
                </p>

                <h2>
                  Frequently asked questions about{" "}
                  {
                    selectedAirline.name
                  }{" "}
                  baggage
                </h2>

                <p>
                  Common questions about{" "}
                  {
                    selectedAirline.name
                  }{" "}
                  baggage size, weight limits and
                  baggage rules.
                </p>

              </div>


              <div className="faq-list">

                {
                  selectedAirline.faq.map(
                    (item, index) => (

                      <details
                        key={index}
                      >

                        <summary>
                          {
                            item.question
                          }
                        </summary>

                        <p>
                          {item.answer}
                        </p>

                      </details>

                    )
                  )
                }

              </div>

            </section>

          )}


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="footer">

          <div className="footer-brand">

            <img
              src="/logo.png"
              alt="BagInAir"
              className="footer-brand-icon"
            />

            <div>

              <strong>
                BagInAir
              </strong>

              <p>
                Check airline baggage size and
                weight limits before you fly.
              </p>

            </div>

          </div>


          <div className="footer-columns">

            {/* TOOLS */}

            <div className="footer-column">

              <h3>
                Baggage Tools
              </h3>

              <a href="/">
                Baggage Size Checker
              </a>

              <a href="/airlines">
                Compare All Airlines
              </a>

            </div>


            {/* AIRLINES */}

            <div className="footer-column">

              <h3>
                Airline Baggage Checkers
              </h3>

              {airlines.map(
                (item) => (

                  <a
                    key={item.id}
                    href={`/${item.id}`}
                  >
                    {item.name} Baggage Checker
                  </a>

                )
              )}

            </div>


            {/* INFORMATION */}

            <div className="footer-column">

              <h3>
                Information
              </h3>

              <a href="/baggage-guide">
                Baggage Guide
              </a>

              <a href="#faq">
                FAQ
              </a>

            </div>

          </div>


          <div className="footer-bottom">

            <p>
              ©{" "}
              {new Date().getFullYear()}{" "}
              BagInAir.
            </p>

            <p>
              Always verify baggage rules with your
              airline before travelling.
            </p>

          </div>

        </footer>

      </main>

    </div>
  );
}

export default App;