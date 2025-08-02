import Btn from "../../components/Btn/Btn";
import HowCard from "../../components/How-Card/HowCard";
import "./HowItWorks.scss";
const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="header-wrapper">
        <div className="header">
          <h1>How it Works</h1>
          <p>
            Reimagining how you access health and wellness by bringing it closer
            to you - convenient, quality, and affordable.
          </p>
        </div>
        <div>
          <Btn
            backgroundColor="#3e85b9"
            border
            button_class="large-btn"
            color="white"
            href="/"
            label="Get Started"
          />
        </div>
      </div>

      <div className="cards">
        <div className="row">
          <HowCard
            bgc="#E4CFFF"
            desc="Access any diagnostic test for quick and apt health checks."
            image="https://www.clafiya.com/images/careclinic/nurse.jpeg"
            shouldCardBeBig={false}
            header="Diagnostic tests made easy"
            textPosLeft={true}
            base={false}
          />
          <HowCard
            bgc="#CFE2FF"
            desc="Access any diagnostic test for quick and apt health checks."
            image="https://www.clafiya.com/images/careclinic/drugs.jpeg"
            shouldCardBeBig={true}
            header="Diagnostic tests made easy"
            textPosLeft={false}
            base={false}
          />
        </div>
        <div className="row">
          <HowCard
            bgc="#FFF280"
            desc="Access any diagnostic test for quick and apt health checks."
            image="https://www.clafiya.com/images/careclinic/girl2.jpeg"
            shouldCardBeBig={true}
            header="Diagnostic tests made easy"
            textPosLeft={true}
            base={true}
          />
          <HowCard
            bgc="#73E6B5"
            desc="Access any diagnostic test for quick and apt health checks."
            image="https://www.clafiya.com/images/careclinic/talk.png"
            shouldCardBeBig={false}
            header="Diagnostic tests made easy"
            textPosLeft={false}
            base={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
