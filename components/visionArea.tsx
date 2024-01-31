const VisionArea = () => {
  return (
    <div className="fridge_vision_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-12"></div>
          <div className="col-lg-6 col-md-7 col-sm-12">
            <div className="witr_section_title white">
              <div className="witr_section_title_inner text-left">
                <h2>OUR EXPERIENCE</h2>
                <h3>We are Working world With 20+ Years experience</h3>
              </div>
            </div>
            <div className="witr_adv_tab_area witr_taba_style1 tab_all_colora vision_top">
              {/* <!-- Nav tabs --> */}
              <div className="witr_adv_tab_menu">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link epo-4df8ac2  active"
                      data-toggle="tab"
                      href="#tx_tab_2b94e5c1"
                    >
                      <span className="witr_tab_icona"></span>
                      <strong>OUR MISSION</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link epo-c098cb4  "
                      data-toggle="tab"
                      href="#tx_tab_2b94e5c2"
                    >
                      <span className="witr_tab_icona"></span>
                      <strong>OUR VISION</strong>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Tab panes --> */}
              <div className="witr_adv_tab_content">
                <div className="tab-content">
                  <div
                    className="tab-pane fade epo-4df8ac2  active show"
                    id="tx_tab_2b94e5c1"
                  >
                    <div className="tab_content">
                      <p>
                        There is ut duis vel quis dignissim nulla vel hendrerit.
                        ltrices imentum tristique maecenas nisl cursus a eget
                        terdum.
                      </p>
                    </div>
                    <div className="witr_single_progress all_color_bar">
                      <div className="witr_title2">
                        <span className="witr_label">
                          Audit &amp; Assurance{" "}
                        </span>
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
                    <div className="witr_single_progress all_color_bar">
                      <div className="witr_title2">
                        <span className="witr_label">
                          Legal Managed Services{" "}
                        </span>
                      </div>
                      <div className="progress witr_progress-style2">
                        <div
                          className="progress-bar wow fadeInLeft animated animated"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.2s"
                          style={{
                            width: "90%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "0.2s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <span className="witr_percent">90%</span>
                        </div>
                      </div>
                    </div>
                    <div className="witr_single_progress all_color_bar">
                      <div className="witr_title2">
                        <span className="witr_label">Financial Advisory </span>
                      </div>
                      <div className="progress witr_progress-style2">
                        <div
                          className="progress-bar wow fadeInLeft animated animated"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.2s"
                          style={{
                            width: "60%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "0.2s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <span className="witr_percent">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="witr_single_progress all_color_bar">
                      <div className="witr_title2">
                        <span className="witr_label">Customer Service </span>
                      </div>
                      <div className="progress witr_progress-style2">
                        <div
                          className="progress-bar wow fadeInLeft animated animated"
                          data-wow-duration="1.5s"
                          data-wow-delay="0.2s"
                          style={{
                            width: "75%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "0.2s",
                            animationName: "fadeInLeft",
                          }}
                        >
                          <span className="witr_percent">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade epo-c098cb4  "
                    id="tx_tab_2b94e5c2"
                  >
                    <div className="witr_play_vi witr_all_color_v">
                      <div className="witr_about_image">
                        <img src="assets/images/slider-2.jpg" alt="" />
                      </div>
                      <div className="play-overlay ">
                        <a
                          className="video-popup video-vemo-icon venobox vbox-item"
                          data-vbtype="youtube"
                          data-autoplay="true"
                          href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                        >
                          <i className="fas fa-play"></i>
                        </a>
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

export default VisionArea;
