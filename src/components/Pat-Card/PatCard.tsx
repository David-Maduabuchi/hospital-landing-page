import "./PatCard.scss";
interface PatCardProps {
  title: string;
  description: string;
  src: string;
}
const PatCard = ({ title, description, src }: PatCardProps) => {
  return (
    <div className="pat-card">
      <div className="card-svg">
        <img
          src={src}
          alt=""
        />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PatCard;
