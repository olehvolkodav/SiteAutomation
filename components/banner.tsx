import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
const Banner = () => {
  useEffect(() => {
    import("slick-carousel");
  }, []);

  const sliderSettings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <button>{"< Previous"}</button>,
    nextArrow: <button>{"Next >"}</button>,
  };
  return (
    <div className="witr_slick_slider_area slider1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 padding_lr0">
            <div className="witr_slick_active">
              <Slider {...sliderSettings}>
                <div className="witr_ds_content_area">
                  {/* <!-- single slider item --> */}
                  <div
                    style={{
                      backgroundImage: "url(assets/images/slider-1.jpg)",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div className="witr_ds_slider_content witr_slick_content">
                      <div className=" witr_ds_content witr_slick_height text-left">
                        <div className="witr_sw_text_area">
                          <div className="witr_swiper_content ">
                            <h1>Popular Website</h1>
                            <h2>Refrigerator Repair Services Center.</h2>
                            <div className="slider_btn">
                              <div className="witr_btn_style">
                                <div className="witr_btn_sinner">
                                  <a className="witr_btn" href="#">
                                    Repair Service
                                  </a>
                                  <a
                                    className="witr_btn active recpwit"
                                    href="#"
                                  >
                                    Contact Noe
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

                <div className="witr_ds_content_area">
                  <div
                    style={{
                      backgroundImage: "url(assets/images/slider-2.jpg)",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {/* single slider item  */}
                    <div className="witr_ds_slider_content witr_slick_content">
                      <div className=" witr_ds_content witr_slick_height text-left">
                        <div className="witr_sw_text_area">
                          <div className="witr_swiper_content ">
                            <h1>Popular Website</h1>
                            <h2>Refrigerator Repair Services Center.</h2>
                            <div className="slider_btn">
                              <div className="witr_btn_style">
                                <div className="witr_btn_sinner">
                                  <a className="witr_btn" href="#">
                                    Repair Service
                                  </a>
                                  <a
                                    className="witr_btn active recpwit"
                                    href="#"
                                  >
                                    Contact Noe
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
