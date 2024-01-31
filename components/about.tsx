const About = () => {
  return (
    <div className="fridge_about_area home1">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="witr_section_title">
              <div className="witr_section_title_inner text-left">
                <h2>I ABOUT US</h2>
                <h3>
                  We are Working world With <span>15+</span>Years
                </h3>
                <p>
                  There is ut duis vel quis dignissim nulla vel hendrerit.
                  ltrices ndimentum tristique maecenas nisl pretium quam.{" "}
                </p>
              </div>
            </div>
            <div className="witr_adv_tab_area witr_taba_style1 tab_all_colora">
              {/* <!-- Nav tabs --> */}
              <div className="witr_adv_tab_menu">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link epo-93d09dd active"
                      data-toggle="tab"
                      href="#tx_tab_01"
                    >
                      <span className="witr_tab_icona">
                        <img src="assets/images/ab-tab2.png" alt="" />
                      </span>
                      <strong>
                        Warranty &amp; <br /> Maintenance
                      </strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link epo-1d4bc79"
                      data-toggle="tab"
                      href="#tx_tab_02"
                    >
                      <span className="witr_tab_icona">
                        <img src="assets/images/ab-tab2.png" alt="" />
                      </span>
                      <strong>
                        The Best Quality <br /> Services
                      </strong>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Tab panes --> */}
              <div className="witr_adv_tab_content">
                <div className="tab-content">
                  <div
                    className="tab-pane fade epo-93d09dd active show"
                    id="tx_tab_01"
                  >
                    <div className="tab_contant">
                      <p>
                        Labore sed dolore magna aliquay dnim ad minim veniam
                        quis nostrud exercitation ullamco laboris voluptate.
                      </p>
                    </div>
                    <div className="witr_single_progress all_color_bar">
                      <div className="witr_title2">
                        <span className="witr_label">Success </span>
                      </div>
                      <div className="progress witr_progress-style2">
                        <div
                          className="progress-bar wow fadeInLeft animated animated"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.2s"
                          style={{
                            width: "85%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "0.2s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <span className="witr_percent">85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="witr_button_area">
                      <div className="witr_btn_style mr">
                        <div className="witr_btn_sinner">
                          <a href="#" className="witr_btn">
                            More About Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade epo-1d4bc79" id="tx_tab_02">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="service-item all_color_service width_height_link_0 text-left  ">
                          <div className="service_top_image"></div>
                          <div className="text_box all_icon_color">
                            <img src="assets/images/wh-i2.png" alt="" />
                            <h3>
                              <a href="#">Contact Our Team for</a>
                            </h3>
                            <p>info@example.com, +99 255 654 88 </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="service-item all_color_service width_height_link_0 text-left  ">
                          <div className="service_top_image"></div>
                          <div className="text_box all_icon_color">
                            <img src="assets/images/wh-i1.png" alt="" />
                            <h3>
                              <a href="#">Refrigerator Service</a>
                            </h3>
                            <p>If you are going to use pesage of Ipsum. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
