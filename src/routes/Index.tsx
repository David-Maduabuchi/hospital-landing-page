import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { navbarItems } from "../constant";
import About from "./About/About";
import "../sass/global.scss";
import Home from "./Home/Home";
import scrollIntoView from "scroll-into-view";
import Footer from "./Footer";
import BubblesAnimation from "../components/BubblesAnim/BubblesAnimation";
import Patients from "./Patients/Patients";
import Btn from "../components/Btn/Btn";
  
const IndexPage = () => {
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
        <Link className="logo" to={"/"}>
          Vibet
        </Link>

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

        <Btn
          button_class="small-btn"
          backgroundColor="#3e85b9"
          color="white"
          handleNavClick={(e) => handleNavClick("about", e)}
          href="/#about"
          label="Sign In"
          border={true}
        />
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
      <BubblesAnimation />
      {/* About Page */}
      <About id="about" />

      <div className="address-multiple-conditions">
        <span>Address Multiple Conditions</span>
        <div className="address-list">
          <div className="address-item">
            <img src="https://www.clafiya.com/btnImages/heart.png" alt="" />
            <span>Condition 1</span>
          </div>
          <div className="address-item">
            <img
              src="https://www.welldoc.com/wp-content/uploads/2023/11/Weight-Management.svg"
              alt=""
            />
            <span>Condition 2</span>
          </div>
          <div className="address-item">
            <img src="https://www.clafiya.com/btnImages/heart.png" alt="" />
            <span>Condition 3</span>
          </div>
          <div className="address-item">
            <img src="https://www.clafiya.com/btnImages/heart.png" alt="" />
            <span>Condition 3</span>
          </div>
          <div className="address-item">
            <img src="https://www.clafiya.com/btnImages/heart.png" alt="" />
            <span>Condition 3</span>
          </div>
          <div className="address-item">
            <img src="https://www.clafiya.com/btnImages/heart.png" alt="" />
            <span>Condition 3</span>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <Patients id="patients" />
      <Footer id="footer " />
    </section>
  );
};

export default IndexPage;
