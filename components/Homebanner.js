import React from "react";
const Homebanner = () => {
  return (
    <>
      <div className="container home-banner">
        <div className="row ">
          <div className="py-8 py-xl-10 pb-5 text-center  mb-5">
            <h1 className="banner-heading">
              Discover Adventure & Travel the World
            </h1>
            <p className="banner-para text-white">
              Discover Unforgettable Destinations and Rewrite Your Travel Story
            </p>
            <button className="common-btn">View Tour</button>
          </div>
          {/* <div className="book-flight-engine">
            <Engine />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Homebanner;
