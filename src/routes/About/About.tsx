import "./About.scss";
import Button from "../../components/Button/Button";

const About = ({ id }: { id: string }) => {
  return (
    <div className="about" id={id}>
      <div className="first-section">
        <h1>About Us</h1>
        <p>
          Access a marketplace of holistic health and wellness merchants, such
          as hospitals, pharmacies, spas, gyms, mental health, skincare, and
          more to support you on your wellness journey.
        </p>
        <section className="about-controller">
          <div className="about-section">
            <img src="https://www.clafiya.com/vectors/easy.png" alt="" />
            <div className="about-content">
              <span>Easy access to top-tier care</span>
              <p>
                Discover trusted health and wellness centers, from hospitals and
                pharmacies to spas and gyms, for all your needs.
              </p>
            </div>
          </div>
          <div className="about-section">
            <img src="https://www.clafiya.com/vectors/benefits.png" alt="" />
            <div className="about-content">
              <span>Easy access to top-tier care</span>
              <p>
                Discover trusted health and wellness centers, from hospitals and
                pharmacies to spas and gyms, for all your needs.
              </p>
            </div>
          </div>
          <div className="about-section">
            <img src="https://www.clafiya.com/vectors/quick.png" alt="" />
            <div className="about-content">
              <span>Easy access to top-tier care</span>
              <p>
                Discover trusted health and wellness centers, from hospitals and
                pharmacies to spas and gyms, for all your needs.
              </p>
            </div>
          </div>
          <Button
            backgroundColor="#3e85b9"
            label="Start Saving"
            color="white"
            button_class="large-btn"
            href="/healthwellness"
            border={false}
            handleNavClick={() => {}}
          />
        </section>
      </div>

      <div className="second-section">
        <img
          width={"100%"}
          height={"100%"}
          src="https://i.fbcd.co/products/resized/resized-750-500/c-1000-designbundle-black-nurse-uniform-10-08-3c84ccc59bab9deade17d52a002374d2b46e70bf5a3c8ed7b496f74936f1c9a8.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
