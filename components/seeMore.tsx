const SeeMore = () => {
  return (
    <div className="fridge_facukutues_area">
      <div className="container">
        <div className="row call_bg">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div id="mainSlider_id2" className="nivoSlider em-slider-image">
              <img
                src="assets/images/s-c1.jpg"
                alt=""
                title="#htmlcaption1_743"
              />
              <img
                src="assets/images/s-c2.jpg"
                alt=""
                title="#htmlcaption1_744"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-9 col-sm-12">
            <div className="fridge_content">
              <h5>I FACILITIES WE PROVIDE</h5>
              <h2>Provide Solutions Of Every Kind</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="fridge_button">
              <a href="#">See More Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
