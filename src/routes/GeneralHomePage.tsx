import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { navbarItems } from "../constant";
import Button from "../components/button/Button";
import Features from "./Features";
import About from "./About";
import "../sass/global.scss";
import Home from "./Home";
import scrollIntoView from "scroll-into-view";
import Footer from "./Footer";

const GeneralHomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    navbarItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // stop anchor from jumping
    const target = document.getElementById(id);
    if (target) {
      setTimeout(() => {
        scrollIntoView(target, {
          time: 2000,
          align: { top: 0 },
          ease: (t: number) => Math.pow(t, 5),
        });
      });
      // delay before scroll
    }
  };

  return (
    <section className="index">
      {/* Navbar */}
      <nav className="desktop">
        <Link to={"/"}>VibetLogo</Link>

        <div className="nav-items">
          {navbarItems.map((item, index) => {
            const isActive = item.id === activeSection;

            return (
              <a
                href={item.url}
                key={index}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                <div className={`nav-item ${isActive ? "active" : ""}`}>
                  {item.title}
                </div>
              </a>
            );
          })}
        </div>

        <div className="contact-buttons">
          <Button
            backgroundColor="black"
            height="38px"
            width="105px"
            href="/get-started"
            label="Get Started"
            border
            fontWeight={400}
          />
        </div>
      </nav>

      <nav className="mobile-nav">
        <Link className="logo" to={"/"}>
          HomeLogo
        </Link>

        {/* ICON */}
        <img onClick={() => setIsNavOpen(!isNavOpen)} src="/nav.svg" alt="" />
        <div className={`nav-items ${isNavOpen ? "open" : ""}`}>
          {navbarItems.map((item, index) => {
            const isActive = item.id === activeSection;

            return (
              <a
                href={item.url}
                key={index}
                onClick={(e) => {
                  handleNavClick(item.id, e);
                  setIsNavOpen(false);
                }}
              >
                <div className={`nav-item ${isActive ? "active" : ""}`}>
                  {item.title}
                </div>
              </a>
            );
          })}
        </div>
      </nav>

      {/* These must have matching IDs! */}
      <Home id="home" handleNavClick={handleNavClick} />

      {/* Water wave animation */}
      <div className="water-wave">
        <svg viewBox="0 0 2 1" preserveAspectRatio="none">
          <defs>
            <path
              id="w"
              d="
      m0 1v-.5 
      q.5.5 1 0
      t1 0 1 0 1 0
      v.5z"
            />
          </defs>
          <g>
            <use href="#w" y=".0" fill="#009bad" />
            <use href="#w" y=".1" fill="#00c1d6" />
            <use href="#w" y=".1" fill="#00c1d6" />
            <use href="#w" y=".2" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* FEATURES */}
      <Features id="features" />
      <About id="about" />
      <Footer id="footer " />
    </section>
  );
};

export default GeneralHomePage;
