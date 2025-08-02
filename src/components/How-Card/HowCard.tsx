import "./HowCard.scss";
interface HowCardProps {
  shouldCardBeBig: boolean;
  header: string;
  image: string;
  desc: string;
  bgc: string;
  textPosLeft: boolean;
  base: boolean;
}
const HowCard = ({
  shouldCardBeBig,
  header,
  image,
  desc,
  bgc,
  textPosLeft,
  base,
}: HowCardProps) => {
  return (
    <div
      className={`how-card ${shouldCardBeBig ? "big-card" : "small-card"}`}
      style={{
        backgroundColor: bgc,
        flexDirection: base ? "column-reverse" : "column",
      }}
    >
      <div
        className="header"
        style={{
          margin: textPosLeft ? "50px auto 20px 50px" : "50px 20px 20px auto",
        }}
      >
        <h1>{header}</h1>
        <p>{desc}</p>
      </div>
      <img
        className={
          base && shouldCardBeBig
            ? "base-and-big"
            : !base && shouldCardBeBig
            ? "top-and-big"
            : !base && !shouldCardBeBig
            ? "small-and-top"
            : base && !shouldCardBeBig
            ? "small-and-bottom"
            : ""
        }
        src={image}
        alt=""
      />
    </div>
  );
};

export default HowCard;
