import React from "react";

const NewCard = () => {
  return (
    <>
      <>
        <div className="container">
          <h2 className="text-center mb-5">Top Destinations</h2>
          <div className="row">
            <div data-aos="fade-up" className="col-md-6 col-sm-6">
              <div className="destination-block">
                <figure>
                  <img src="images/usa/arizona.jpg" alt="arizona" />
                </figure>
                <div className="destination-info">
                  <h3>Grand Canyon, Arizona</h3>
                  <p>Explore breathtaking landscapes</p>
                  <a href="" className="btn btn-secondry-brd btn-rounded">
                    Experience now
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-6 col-sm-6">
              <div className="destination-block">
                <figure>
                  <img src="images/usa/florida.jpg" alt="florida" />
                </figure>
                <div className="destination-info">
                  <h3>Florida</h3>
                  <p>Explore the various marvels of Florida.</p>
                  <a href="" className="btn btn-secondry-brd btn-rounded">
                    Experience now
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-6 col-sm-6">
              <div className="destination-block">
                <figure>
                  <img src="images/usa/washington.jpg" alt="washington" />
                </figure>
                <div className="destination-info">
                  <h3>Washington D.C.</h3>
                  <p>Experience Washington's timeless charm</p>
                  <a href="" className="btn btn-secondry-brd btn-rounded">
                    Experience now
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-6 col-sm-6">
              <div className="destination-block">
                <figure>
                  <img src="images/usa/hawai2.jpg" alt="hawai" />
                </figure>
                <div className="destination-info">
                  <h3>Miami</h3>
                  <p>Explore majestic landscapes and vibrant cities.</p>
                  <a href="" className="btn btn-secondry-brd btn-rounded">
                    Experience now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <br />
              <a data-aos="zoom-in" href="" className="theme-btn">
                View all destinations
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default NewCard;
