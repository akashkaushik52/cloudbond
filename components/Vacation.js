import React from "react";

const Vacation = ({ placeimg, placehead, para, offerspan, imagalt }) => {
  return (
    <>
      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="wpo-about-section-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div data-aos="fade-up" className="wpo-about-img">
                  <img src={placeimg} alt={imagalt} />
                </div>
              </div>
              <div data-aos="fade-up" className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-content">
                  <div className="about-title">
                    <span>{offerspan}</span>
                    <h2>{placehead}</h2>
                  </div>
                  <div className="wpo-about-content-inner">
                    <p>{para}</p>
                    <div className="about-info-wrap"></div>
                    <a href="room.html" className="theme-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vacation;
