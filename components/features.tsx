import { useEffect } from "react";
import Slider, { Settings } from "react-slick";
const Features = () => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  const sliderSettings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <button>{"< Previous"}</button>,
    nextArrow: <button>{"Next >"}</button>,
  };
  return (
    <div className="fridge_feature_area">
      <div className="container">
        <div className="witr_cfeature5 feature_active text-center">
          <div className="witr_cfeature5_idps">
            <Slider {...sliderSettings}>
              {/* <!-- fridge_feature_01--> */}
              <div className="col-lg-12">
                <div className="witr_feature_12 sub-item mrb20 all_feature_color ">
                  <img src="assets/images/feature-01.png" alt="" />
                  <h3>
                    <a href="#">Mobile Emergency Service</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="witr_feature_12 sub-item mrb20 all_feature_color ">
                  <img src="assets/images/feature-02.png" alt="" />
                  <h3>
                    <a href="#">Refrigerator Home Repair</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="witr_feature_12 sub-item mrb20 all_feature_color ">
                  <img src="assets/images/feature-03.png" alt="" />
                  <h3>
                    <a href="#">Refrigerator Solution Service</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="witr_feature_12 sub-item mrb20 all_feature_color ">
                  <img src="assets/images/feature-04.png" alt="" />
                  <h3>
                    <a href="#">Refrigerator Home Repair </a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="witr_feature_12 sub-item mrb20 all_feature_color ">
                  <img src="assets/images/feature-01.png" alt="" />
                  <h3>
                    <a href="#">Mobile Emergency Service</a>
                  </h3>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
