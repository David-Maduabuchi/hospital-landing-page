import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { navbarItems } from "../constant";
import Button from "../components/button/Button";
import Features from "./Features";
import About from "./About";
import "../sass/global.scss";
import Home from "./Home";
import scrollIntoView from "scroll-into-view";

const GeneralHomePage = () => {
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
          ease: (t: number) => Math.pow(t, 5) ,
        });
      });
      // delay before scroll
    }
  };

  return (
    <section className="index">
      <nav className="navbar">
        <Link to={"/"}>HomeLogo</Link>

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
            backgroundColor="white"
            height="38px"
            width="84px"
            href="/contact"
            label="Contact"
            border
            fontWeight={400}
          />
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

      {/* These must have matching IDs! */}
      <Home id="home" />
      <Features id="features" />
      <About id="about" />
    </section>
  );
};

export default GeneralHomePage;
