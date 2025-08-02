import "./Footer.scss";
const Footer = ({ id }: { id: string }) => {
  return (
    <div className="footer" id={id}>
      <img
        className="lines"
        src="https://www.clafiya.com/images/home/Lines.svg"
        alt=""
      />
      <div className="floating-header">
        <div className="first">
          <h1>Start your Health Journey Now</h1>
          <p>Save money, earn interest, and access care easily with Clafiya</p>
          <div className="btn-wrapper">
            <button>Get Started</button>
            <div className="badge">
              <img src="https://www.clafiya.com/images/shield.png" alt="" />
              <div>
                <span>TRUSTED AND LOVED BY</span>
                <span>3K+ HEALTHY HUMANS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <img src="https://www.clafiya.com/images/home/newflyy.png" alt="" />
        </div>
      </div>
      <div className="div-content"></div>
    </div>
  );
};

export default Footer;
