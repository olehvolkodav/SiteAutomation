import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
const RecentProjects = () => {
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
    <div className="fridge_project_area">
      <div className="containers">
        <div className="row">
          <div className="col-lg-12">
            <div className="witr_section_title white">
              <div className="witr_section_title_inner text-center">
                <h2>WE MAKE PROJECTS</h2>
                <h3>Explore Recent Projects</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="witr_pslide all_pslides_color ps1 service_active">
          <div className="witr_islidess_slick witr_cslide_idps project_top">
            <Slider {...sliderSettings}>
              <div className="item_pos col-lg-12 ">
                <div className="witr_single_pslide">
                  <div className="witr_pslide_image">
                    <img src="assets/images/pr1.jpg" alt="" />
                  </div>
                  <div className="witr_content_pslide_text">
                    <div className="witr_content_pslide">
                      <h3>
                        <a href="#">Aliquot era volutpat. Duis ac torpids.</a>
                      </h3>
                      <p>Training </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_pos col-lg-12 ">
                <div className="witr_single_pslide">
                  <div className="witr_pslide_image">
                    <img src="assets/images/pr2.jpg" alt="" />
                  </div>
                  <div className="witr_content_pslide_text">
                    <div className="witr_content_pslide">
                      <h3>
                        <a href="#">5 Tips to Help You Finding New Home</a>
                      </h3>
                      <p>Industry </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_pos col-lg-12 ">
                <div className="witr_single_pslide">
                  <div className="witr_pslide_image">
                    <img src="assets/images/pr3.jpg" alt="" />
                  </div>
                  <div className="witr_content_pslide_text">
                    <div className="witr_content_pslide">
                      <h3>
                        <a href="#">Emergency Plumbing</a>
                      </h3>
                      <p>Engineer </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item_pos col-lg-12 ">
                <div className="witr_single_pslide">
                  <div className="witr_pslide_image">
                    <img src="assets/images/pr2.jpg" alt="" />
                  </div>
                  <div className="witr_content_pslide_text">
                    <div className="witr_content_pslide">
                      <h3>
                        <a href="#">Online Support our engineer </a>
                      </h3>
                      <p>Apartments </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="witr_button_area">
              <div className="witr_btn_style mr">
                <div className="witr_btn_sinner">
                  <a href="#" className="witr_btn">
                    See More Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
