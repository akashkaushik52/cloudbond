import React from "react";

const Services = () => {
  return (
    <>
      <div data-aos="fade-up" id="services" className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Today's Top Deals</h2>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
          <div className="row">
            {/* Card */}

            <div className="col-md-4 card">
              <div className="card-image">
                <img
                  className="img-fluid"
                  src="images/new.jpg"
                  alt="alternative"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  "Unlock Exclusive Package of New York"
                </h3>
                <p>
                  Unlock New York's Best-Kept Secrets with Our Exclusive
                  Package, designed to unveil the city's special secrets.
                </p>

                <p className="price">
                  Starting at <span>$199</span>
                </p>
              </div>
              <div className="button-container">
                <a className="btn-solid-reg page-scroll" href="#callMe">
                  DETAILS
                </a>
              </div>
              {/* end of button-container */}
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="col-md-4 card">
              <div className="card-image">
                <img
                  className="img-fluid"
                  src="images/usa/vega.jpg"
                  alt="alternative"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Discover the Essence of the Las Vegas
                </h3>
                <p>
                  Explore the spirit of adventure and elegance in the energetic
                  metropolis of Las Vegas.
                </p>

                <p className="price">
                  Starting at <span>$299</span>
                </p>
              </div>
              <div className="button-container">
                <a className="btn-solid-reg page-scroll" href="#callMe">
                  DETAILS
                </a>
              </div>{" "}
              {/* end of button-container */}
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="col-md-4 card">
              <div className="card-image">
                <img
                  className="img-fluid"
                  src="images/usa/california.jpg"
                  alt="alternative"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  California: Timeless Style, Elegance, and Charm
                </h3>
                <p>
                  Discover the timeless beauty and flair of California, where
                  each corner reveals a tale of refinement and stylish
                  attractiveness.
                </p>

                <p className="price">
                  Starting at <span>$299</span>
                </p>
              </div>
              <div className="button-container">
                <a className="btn-solid-reg page-scroll" href="#callMe">
                  DETAILS
                </a>
              </div>{" "}
              {/* end of button-container */}
            </div>
            {/* end of card */}

            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>
    </>
  );
};

export default Services;
