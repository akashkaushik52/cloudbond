import React from "react";

const Agency = () => {
  return (
    <>
      <section data-aos="fade-up" className="sec-space agency">
        <div className="container">
          <div className="title-wrap-2 text-center">
            <h4 className="section-title">Get to Know Us Better</h4>
            <p className="fsz-16">
              Learn more about us and our journey in the world of travel.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 pt-70">
              <div className="wrap">
                <div className="logo-font">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info">
                  <h4 className="title-4"> Understand better </h4>
                  <p>
                    Discover better, plan better, and travel better with the us.
                    Explore a diverse array of candid reviews, opinions
                    attractions, and beyond.
                  </p>
                  <a href="#" className="all-show">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-70">
              <div className="wrap">
                <div className="logo-font">
                  <i className="fa-solid fa-file-lines"></i>
                </div>
                <div className="info">
                  <h4 className="title-4"> Reserve better </h4>
                  <p>
                    Make the most of your reservations by using our simplified
                    reservation method. Make reservations with ease that will
                    improve your trip arrangements.
                  </p>
                  <a href="#" className="all-show">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-70">
              <div className="wrap">
                <div className="logo-font">
                  <i className="fa-solid fa-suitcase-rolling"></i>
                </div>
                <div className="info">
                  <h4 className="title-4"> Experience better </h4>
                  <p>
                    Experiences unmatched elevate your travel adventures.
                    Encounter once-in-a-lifetime moments selected to enhance
                    every facet of your trip.
                  </p>
                  <a href="#" className="all-show">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agency;
