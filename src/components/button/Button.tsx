import { Link } from "react-router-dom";
import "./button.scss";
import type { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  width: string;
  height: string;
  backgroundColor: string;
  label: string;
  href: string;
  border?: boolean;
  fontWeight: number;
}
const Button = ({
  width,
  height,
  backgroundColor,
  label,
  href,
  fontWeight,
  border,
  ...otherProps
}: Props) => {
  return (
    <Link to={href} {...otherProps} className="parent">
      <div
        className={`general-button ${border && "border border-black"} `}
        style={{
          color: backgroundColor === "black" ? "white" : "black",
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          fontWeight: fontWeight,
        }}
      >
        {label}
      </div>
    </Link>
  );
};

export default Button;
