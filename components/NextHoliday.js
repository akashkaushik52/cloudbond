import React from "react";

const NextHoliday = () => {
  return (
    <>
      <div id="intro" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text-container">
                <div className="section-title">Welcome</div>
                <h2>Exceptional Deals Await: Explore Our Unbeatable Offers!</h2>
                <p>
                  Take advantage of our amazing discounts and start saving big
                  on your next adventure. Discover a wealth of tempting deals
                  designed to improve your vacation experiences. From exclusive
                  packages to cheap lodging, we make sure that every trip is
                  both affordable and unforgettable. Our crew works nonstop to
                  find you the greatest offers available worldwide, so you can
                  live in luxury without going over budget. Don't pass up these
                  exceptional chances; begin your exploration now, and allow us
                  to fulfil your vacation ambitions!
                </p>
                <p className="testimonial-text">
                  Explore the world without compromising on quality, thanks to
                  our commitment to delivering top-notch deals for your travel
                  adventures.
                </p>
                {/* <div className="testimonial-author">Louise Donovan - CEO</div> */}
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
            <div data-aos="fade-up" className="col-lg-5">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/usa/nevada.jpg"
                  alt="alternative"
                />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>
    </>
  );
};

export default NextHoliday;
