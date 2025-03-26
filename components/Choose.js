import React from "react";

const Choose = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="icon-block-center icon-center-v1  border-color-8"
        style={{ marginBottom: "70px", marginTop: "70px" }}
      >
        <div className="container text-center space-1">
          {/* Title */}
          <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1 mt-3">
            <h2 className="section-title text-black font-size-30 font-weight-bold mb-5">
              Why Choose
            </h2>
          </div>
          {/* End Title */}
          {/* Features */}
          <div className="mb-2">
            <div className="row">
              {/* Icon Block */}
              <div className="col-md-4">
                <i class="fa-solid fa-hand-holding-dollar"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a className="choose-link" href="#">
                    Competitive Pricing
                  </a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  With our industry-leading Competitive Pricing, you can
                  experience unmatched affordability and get the most out of
                  your travel experiences.
                </p>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="col-md-4">
                <i class="fa-solid fa-award"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a className="choose-link" href="#">
                    Award-Winning Service
                  </a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  Enhance your trip experience with our world-class,
                  award-winning service, which offers unparalleled perfection.
                </p>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="col-md-4">
                <i class="fa-solid fa-map"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a className="choose-link" href="#">
                    Worldwide Coverage
                  </a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  Set out on an infinite global adventure with our unrivalled
                  Worldwide Coverage travel agency.
                </p>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Features */}
        </div>
      </div>
    </>
  );
};

export default Choose;
