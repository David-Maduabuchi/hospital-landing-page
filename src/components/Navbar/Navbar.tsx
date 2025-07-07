import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useEffect } from "react";
import { navbarItems } from "../../constant";
import Button from "../button/Button";

const Navbar = () => {
  const pathname = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Home",
      "/features": "Features",
      "/about": "About Us",
      "/departments": "Departments",
      "/team": "Our Team",
      "/faqs": "FAQ's",
      "/premises": "premises",
    };

    document.title = titles[location.pathname] || "Vibet";
    console.log(location.pathname);
  }, [pathname]);

  return (
    <nav>
      <Link to={"/"}>HomeLogo</Link>

      <div className="nav-items">
        {navbarItems.map((item, index) => (
          <Link to={item.url} key={index}>
            <div
              className={`nav-item ${
                location.pathname === item.url ? "active" : ""
              }`}
            >
              {item.title}
            </div>
          </Link>
        ))}
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
  );
};

export default Navbar;
