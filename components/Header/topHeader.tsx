const TopHeader = () => {
  return (
    <div className="fridge-header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8 col-md-12 col-sm-12">
            <div className="top-address text_m_center">
              <p>
                <span>
                  <i className="fas fa-clock-o"></i>Open Hours: Mon - Sat - 9:00
                  -18:00
                </span>
                <a href="#">
                  <i className="fas fa-phone-alt"></i>+998556778345
                </a>
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>Get Directions
                </a>
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-lg-4 col-md-12 col-sm-12">
            <div className="top-right-menu">
              <ul className="social-icons text-right text_m_center">
                <li>
                  <a href="#">News &amp; Media</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">FAQ’S</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
