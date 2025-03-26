import React from "react";

const AboutInfo = () => {
  return (
    <>
      <section className="sec-space-top about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img">
                <img alt="about" src="images/370x470-2.jpg" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="info">
                <h2 className="section-title pb-10">
                  {" "}
                  We are vetrov travel agency, the best partner for your awesome
                  trip.
                </h2>
                <p className="fsz-16">
                  Know better, book better and go better on the world’s largest
                  travel site. Browse over 350 million candid reviews, opinions,
                  and photos of hotels, restaurants, attractions, and more - all
                  by travelers like you.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
