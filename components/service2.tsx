import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
const Service2 = () => {
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
    <div className="fridge_serive2_area">
      <div className="container">
        <div className="service_active">
          <div className="witr_cars11_idteam">
            <Slider {...sliderSettings}>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="witr_service_11 all_color_service text-">
                  <div className="service_top_image">
                    <img src="assets/images/service-thumb-01.jpg" alt="" />
                  </div>
                  <div className="wirt_detail_texti">
                    <div className="wirt_detail_icon all_icon_color"></div>
                    <div className="wirt_detail_title">
                      <h3>
                        <a href="#">Dishwasher Installation</a>
                      </h3>
                      <h2>Business</h2>
                    </div>
                  </div>
                  <div className="wirt_detail_content">
                    <p>
                      There is ut duis vel quis dignissim null hendrerit.
                      ltrices imentum tristique maecenas nisl cursus.
                    </p>
                    <div className="service_list_op">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Drive Business Process</a>
                        </li>
                        <li>
                          <a href="#">Refrigerator Repair</a>
                        </li>
                        <li>
                          <a href="#">Mobile Emergency Service</a>
                        </li>
                        <li>
                          <a href="#">And Others Service</a>
                        </li>
                      </ul>
                    </div>
                    <div className="service-btn witr_sbtn_s8 witr_11_btn">
                      <a className="btnslick" href="#">
                        Read More
                      </a>
                      <div className="pluse_btn_slick">
                        <span className="ti-arrow-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="witr_service_11 all_color_service text-">
                  <div className="service_top_image">
                    <img src="assets/images/service-thumb-02.jpg" alt="" />
                  </div>
                  <div className="wirt_detail_texti">
                    <div className="wirt_detail_icon all_icon_color"></div>
                    <div className="wirt_detail_title">
                      <h3>
                        <a href="#">Engineering Technology</a>
                      </h3>
                      <h2>Training</h2>
                    </div>
                  </div>
                  <div className="wirt_detail_content">
                    <p>
                      There is ut duis vel quis dignissim null hendrerit.
                      ltrices imentum tristique maecenas nisl cursus.
                    </p>
                    <div className="service_list_op">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Drive Business Process</a>
                        </li>
                        <li>
                          <a href="#">Refrigerator Repair</a>
                        </li>
                        <li>
                          <a href="#">Mobile Emergency Service</a>
                        </li>
                        <li>
                          <a href="#">And Others Service</a>
                        </li>
                      </ul>
                    </div>
                    <div className="service-btn witr_sbtn_s8 witr_11_btn">
                      <a className="btnslick" href="#">
                        Read More
                      </a>
                      <div className="pluse_btn_slick">
                        <span className="ti-arrow-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="witr_service_11 all_color_service text-">
                  <div className="service_top_image">
                    <img src="assets/images/service-thumb-03.jpg" alt="" />
                  </div>
                  <div className="wirt_detail_texti">
                    <div className="wirt_detail_icon all_icon_color"></div>
                    <div className="wirt_detail_title">
                      <h3>
                        <a href="#">Refrigerator Solution </a>
                      </h3>
                      <h2>House</h2>
                    </div>
                  </div>
                  <div className="wirt_detail_content">
                    <p>
                      There is ut duis vel quis dignissim null hendrerit.
                      ltrices imentum tristique maecenas nisl cursus.
                    </p>
                    <div className="service_list_op">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Drive Business Process</a>
                        </li>
                        <li>
                          <a href="#">Refrigerator Repair</a>
                        </li>
                        <li>
                          <a href="#">Mobile Emergency Service</a>
                        </li>
                        <li>
                          <a href="#">And Others Service</a>
                        </li>
                      </ul>
                    </div>
                    <div className="service-btn witr_sbtn_s8 witr_11_btn">
                      <a className="btnslick" href="#">
                        Read More
                      </a>
                      <div className="pluse_btn_slick">
                        <span className="ti-arrow-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="witr_service_11 all_color_service text-">
                  <div className="service_top_image">
                    <img src="assets/images/service-thumb-01.jpg" alt="" />
                  </div>
                  <div className="wirt_detail_texti">
                    <div className="wirt_detail_icon all_icon_color"></div>
                    <div className="wirt_detail_title">
                      <h3>
                        <a href="#">Dishwasher Installation</a>
                      </h3>
                      <h2>Business</h2>
                    </div>
                  </div>
                  <div className="wirt_detail_content">
                    <p>
                      There is ut duis vel quis dignissim null hendrerit.
                      ltrices imentum tristique maecenas nisl cursus.
                    </p>
                    <div className="service_list_op">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Drive Business Process</a>
                        </li>
                        <li>
                          <a href="#">Refrigerator Repair</a>
                        </li>
                        <li>
                          <a href="#">Mobile Emergency Service</a>
                        </li>
                        <li>
                          <a href="#">And Others Service</a>
                        </li>
                      </ul>
                    </div>
                    <div className="service-btn witr_sbtn_s8 witr_11_btn">
                      <a className="btnslick" href="#">
                        Read More
                      </a>
                      <div className="pluse_btn_slick">
                        <span className="ti-arrow-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="witr_service_11 all_color_service text-">
                  <div className="service_top_image">
                    <img src="assets/images/service-thumb-02.jpg" alt="" />
                  </div>
                  <div className="wirt_detail_texti">
                    <div className="wirt_detail_icon all_icon_color"></div>
                    <div className="wirt_detail_title">
                      <h3>
                        <a href="#">Engineering Technology</a>
                      </h3>
                      <h2>Training</h2>
                    </div>
                  </div>
                  <div className="wirt_detail_content">
                    <p>
                      There is ut duis vel quis dignissim null hendrerit.
                      ltrices imentum tristique maecenas nisl cursus.
                    </p>
                    <div className="service_list_op">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Drive Business Process</a>
                        </li>
                        <li>
                          <a href="#">Refrigerator Repair</a>
                        </li>
                        <li>
                          <a href="#">Mobile Emergency Service</a>
                        </li>
                        <li>
                          <a href="#">And Others Service</a>
                        </li>
                      </ul>
                    </div>
                    <div className="service-btn witr_sbtn_s8 witr_11_btn">
                      <a className="btnslick" href="#">
                        Read More
                      </a>
                      <div className="pluse_btn_slick">
                        <span className="ti-arrow-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="witr_service_11 all_color_service text-">
                  <div className="service_top_image">
                    <img src="assets/images/service-thumb-03.jpg" alt="" />
                  </div>
                  <div className="wirt_detail_texti">
                    <div className="wirt_detail_icon all_icon_color"></div>
                    <div className="wirt_detail_title">
                      <h3>
                        <a href="#">Refrigerator Solution </a>
                      </h3>
                      <h2>House</h2>
                    </div>
                  </div>
                  <div className="wirt_detail_content">
                    <p>
                      There is ut duis vel quis dignissim null hendrerit.
                      ltrices imentum tristique maecenas nisl cursus.
                    </p>
                    <div className="service_list_op">
                      <ul>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Drive Business Process</a>
                        </li>
                        <li>
                          <a href="#">Refrigerator Repair</a>
                        </li>
                        <li>
                          <a href="#">Mobile Emergency Service</a>
                        </li>
                        <li>
                          <a href="#">And Others Service</a>
                        </li>
                      </ul>
                    </div>
                    <div className="service-btn witr_sbtn_s8 witr_11_btn">
                      <a className="btnslick" href="#">
                        Read More
                      </a>
                      <div className="pluse_btn_slick">
                        <span className="ti-arrow-right"></span>
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
  );
};

export default Service2;
