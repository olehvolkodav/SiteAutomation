import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";
const BlogArea = () => {
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
    <div className="fridge_blog_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="witr_section_title">
              <div className="witr_section_title_inner text-center">
                <h2>FROM OUR BLOG</h2>
                <h3>Here’s What’s Happening</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="witr_blog_area11 blog_top">
          <div className="blog_wrap blog11_idblog1">
            <Slider {...sliderSettings}>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="busi_singleBlog">
                  <div className="witr_sb_thumb">
                    <a href="#">
                      {" "}
                      <img src="assets/images/blog-thumb-01.jpg" alt="" />{" "}
                    </a>
                  </div>
                  <div className="all_blog_color">
                    <div className="witr_blog_con bs5">
                      <span>
                        <a href="#">Refrigerator</a>
                      </span>
                      <span>18 May, 2021</span>
                      <h2>
                        <a href="single-blog.html">
                          Transforming our in scienc facilities
                        </a>
                      </h2>
                      <p>
                        Our offices are located on the traditional, unced. photo
                        booth stumptown to banksy, elit small
                      </p>
                    </div>
                    <div className="em-blog-content-area_adn ">
                      <div className="learn_more_adn">
                        <a className="learn_btn adnbtn2" href="#">
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="witr_all_mb_30 col-lg-12">
                <div className="busi_singleBlog">
                  <div className="witr_sb_thumb">
                    <a href="#">
                      {" "}
                      <img src="assets/images/blog-thumb-02.jpg" alt="" />{" "}
                    </a>
                  </div>
                  <div className="all_blog_color">
                    <div className="witr_blog_con bs5">
                      <span>
                        <a href="#">Refrigerator</a>
                      </span>
                      <span>18 May, 2021</span>
                      <h2>
                        <a href="single-blog.html">
                          Where people develop the own potential
                        </a>
                      </h2>
                      <p>
                        Our offices are located on the traditional, unced. photo
                        booth stumptown to banksy, elit small
                      </p>
                    </div>
                    <div className="em-blog-content-area_adn ">
                      <div className="learn_more_adn">
                        <a className="learn_btn adnbtn2" href="#">
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="busi_singleBlog">
                  <div className="witr_sb_thumb">
                    <a href="#">
                      {" "}
                      <img src="assets/images/blog-thumb-03.jpg" alt="" />{" "}
                    </a>
                  </div>
                  <div className="all_blog_color">
                    <div className="witr_blog_con bs5">
                      <span>
                        <a href="#">Refrigerator</a>
                      </span>
                      <span>18 May, 2021</span>
                      <h2>
                        <a href="single-blog.html">
                          We believe everyone has capacity is a place
                        </a>
                      </h2>
                      <p>
                        Our offices are located on the traditional, unced. photo
                        booth stumptown to banksy, elit small
                      </p>
                    </div>
                    <div className="em-blog-content-area_adn ">
                      <div className="learn_more_adn">
                        <a className="learn_btn adnbtn2" href="#">
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="busi_singleBlog">
                  <div className="witr_sb_thumb">
                    <a href="#">
                      {" "}
                      <img src="assets/images/blog-thumb-04.jpg" alt="" />{" "}
                    </a>
                  </div>
                  <div className="all_blog_color">
                    <div className="witr_blog_con bs5">
                      <span>
                        <a href="#">Refrigerator</a>
                      </span>
                      <span>18 May, 2021</span>
                      <h2>
                        <a href="single-blog.html">
                          Transforming our in scienc facilities
                        </a>
                      </h2>
                      <p>
                        Our offices are located on the traditional, unced. photo
                        booth stumptown to banksy, elit small
                      </p>
                    </div>
                    <div className="em-blog-content-area_adn ">
                      <div className="learn_more_adn">
                        <a className="learn_btn adnbtn2" href="#">
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="busi_singleBlog">
                  <div className="witr_sb_thumb">
                    <a href="#">
                      {" "}
                      <img src="assets/images/blog-thumb-05.jpg" alt="" />{" "}
                    </a>
                  </div>
                  <div className="all_blog_color">
                    <div className="witr_blog_con bs5">
                      <span>
                        <a href="#">Refrigerator</a>
                      </span>
                      <span>18 May, 2021</span>
                      <h2>
                        <a href="single-blog.html">
                          Where people develop the own potential
                        </a>
                      </h2>
                      <p>
                        Our offices are located on the traditional, unced. photo
                        booth stumptown to banksy, elit small
                      </p>
                    </div>
                    <div className="em-blog-content-area_adn ">
                      <div className="learn_more_adn">
                        <a className="learn_btn adnbtn2" href="#">
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="witr_all_mb_30 col-lg-12">
                <div className="busi_singleBlog">
                  <div className="witr_sb_thumb">
                    <a href="#">
                      {" "}
                      <img src="assets/images/blog-thumb-06.jpg" alt="" />{" "}
                    </a>
                  </div>
                  <div className="all_blog_color">
                    <div className="witr_blog_con bs5">
                      <span>
                        <a href="#">Refrigerator</a>
                      </span>
                      <span>18 May, 2021</span>
                      <h2>
                        <a href="single-blog.html">
                          How will you know success when it shows
                        </a>
                      </h2>
                      <p>
                        Our offices are located on the traditional, unced. photo
                        booth stumptown to banksy, elit small
                      </p>
                    </div>
                    <div className="em-blog-content-area_adn ">
                      <div className="learn_more_adn">
                        <a className="learn_btn adnbtn2" href="#">
                          Read More{" "}
                        </a>
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

export default BlogArea;
