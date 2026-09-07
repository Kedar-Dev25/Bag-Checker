import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".nav") &&
        !event.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">

        <a
          href="/"
          className="brand"
          aria-label="BagInAir home"
        >
          <img
            src="/logo.png"
            alt="BagInAir"
            className="brand-logo"
          />

          <span className="brand-name">
            <span className="brand-bag">Bag</span>
            <span className="brand-inair">InAir</span>
          </span>
        </a>

        <div className="header-actions">

          <nav
            className={`nav ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Baggage Checker
            </a>

            <a
              href="/baggage-guide"
              onClick={() => setMenuOpen(false)}
            >
              Baggage Guide
            </a>

            <a
              href="/#faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
          </nav>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;