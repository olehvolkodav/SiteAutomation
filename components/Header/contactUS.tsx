const ContactUS = () => {
  return (
    <div className="fridge_header_top_two top_cr_style3 top_crt_style">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-sm-12 d_md_none col-md-4">
            <div className="theme_cr_logo">
              <div className="logo">
                <a
                  className="main_sticky_main_l"
                  href="index.html"
                  title="Fridge"
                >
                  <img src="assets/images/logo.png" alt="Fridge" />
                </a>
                <a className="main_sticky_l" href="index.html" title="Fridge">
                  <img src="assets/images/logo.png" alt="Fridge" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-12 col-md-4">
            <div className="single_header_address">
              <div className="creative_header_icon">
                <i className="fa fa-home"></i>
              </div>
              <div className="creative_header_address_text">
                <h3>Location</h3>
                <p>1256 floor new world.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-12 col-md-4">
            <div className="single_header_address">
              <div className="creative_header_icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="creative_header_address_text">
                <h3>Email</h3>
                <p>
                  <a href="#">demo@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-12 col-md-4">
            <div className="top_crmenu_icon">
              <ul className="top_crmenu_i_list text-right text_m_center">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
