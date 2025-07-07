import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";
import { navbarItems } from "../../constant";
import Button from "../button/Button";

const Navbar = () => {
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
        rootMargin: "-50% 0px -40% 0px", // triggers when section is near middle
        threshold: 0.1,
      }
    );

    navbarItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="navbar" id="home">
        <Link to={"/"}>HomeLogo</Link>

        <div className="nav-items">
          {navbarItems.map((item, index) => {
            const isActive = item.id === activeSection;
            return (
              <a href={item.url} key={index}>
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
      </div>

      <div className="home" id="home">Home</div>

      <div className="features" id="features">Features</div>
    </section>
  );
};

export default Navbar;
