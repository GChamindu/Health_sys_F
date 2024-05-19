import "./banner.css";

//import "bootstrap-icons/font/bootstrap-icons.css";

export default function Banner() {
  return (
    <div className="banner_content">
    <div className="banner">
      <div className="banner-contains">
        <div className="banner-left">
          <div className="banner-left-up">
            <h1 className="banner-header">What to know more ?</h1>
          </div>
          <br />
          <div className="banner left-down">
            <span className="banner-span">
              Check our FAQ find an answer to any question you
            </span>
            <br />
            <span className="banner-span"> many have about our QR codes</span>
          </div>
        </div>
        <div className="banner-right">
          <div className="icon-banner">
            <i className="bi bi-arrow-right-circle"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
