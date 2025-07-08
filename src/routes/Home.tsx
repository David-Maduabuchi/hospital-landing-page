import Button from "../components/button/Button";

const Home = ({
  id,
  handleNavClick,
}: {
  id: string;
  handleNavClick: (id: string, e: React.MouseEvent) => void;
}) => {
  return (
    <div className="home" id={id}>
      <div className="first">
        <div className="welcome-container">
          <h1>Welcome to Vibet</h1>
          <h5>Best Care and Better Doctor</h5>
          <p>
            Better health care with efficient cost is the main focus of our
            hospital.
          </p>
          <Button
            backgroundColor="white"
            fontWeight={500}
            height="46"
            onClick={(e) => handleNavClick("about", e)}
            width="140px"
            href="/#about"
            label="LEARN MORE"
          />
        </div>
      </div>
      <div className="second">
        <img src="/banner-img-01.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
