import { Link } from "react-router-dom";
import SVG from "../SVG";
import "./Btn.scss";
const Btn = ({
  button_class,
  label,
  border = false,
  backgroundColor = "#3e85b9",
  color = "white",
  handleNavClick,
  href = "/",
}: {
  button_class: string;
  label: string;
  border: boolean;
  backgroundColor: string;
  color: string;
  href: string;
  handleNavClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Link
      to={href}
      style={{
        border: border ? "1px solid white" : "none",
        backgroundColor: backgroundColor,
        color: color,
        width: "fit-content",
      }}
      className={`${button_class} button-container`}
      onClick={() => handleNavClick}
    >
      {label}
      <SVG />
    </Link>
  );
};

export default Btn;
