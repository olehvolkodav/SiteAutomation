const CallArea = () => {
  return (
    <div className="fridge_call_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 pdlf">
            <div className="em-service2 sleft all_color_service">
              <div className="em_service_content ">
                <div className="em_single_service_text  ">
                  <div className="service_top_image"></div>
                  <div className="text_box">
                    <div className="service_top_text all_icon_color">
                      <div className="em-service-icon">
                        <img src="assets/images/wh-i2.png" alt="" />
                      </div>
                    </div>
                    <div className="em-service-inner">
                      <div className="em-service-title">
                        <h3>
                          We’re ready to discover and unlock your potential.{" "}
                        </h3>
                      </div>
                      <div className="em-service-desc">
                        <p>Call us Today! 658-000-3694 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pdlf">
            <div className="witr_play_vi witr_all_color_v">
              <div className="witr_about_image">
                <img src="assets/images/col-v.jpg" alt="" />
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
  );
};

export default CallArea;
