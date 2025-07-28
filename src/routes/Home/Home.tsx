import Button from "../../components/Button/Button";
import "./Home.scss";

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
          <h1>
            Your Partner in
            <span className="text-[#92e0fa]"> Chronic Care</span>
          </h1>
          <p>
            Helping patients and doctors manage chronic diseases with ease,
            data, and support
          </p>
          <div className="hero-btns">
         
         
            <Button
              button_class="large-btn"
              backgroundColor="transparent"
              color="white"
              handleNavClick={(e) => handleNavClick("about", e)}
              href="/#about"
              label="Join as a provider"
              border={true}
            />
          </div>
        </div>
      </div>
      <div className="second">
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1pliKfJ25obUVAHerffbDu/1a0ab90e817fba42397b987cd0583ea4/GettyImages-1309072615.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
