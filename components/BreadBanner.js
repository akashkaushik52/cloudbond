import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const BreadBanner = ({ main, breadsub }) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url("/images/manhattan.jpg")`,
          height: "55vh",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "grey",
          backgroundPosition: "top",
        }}
      >
        <Navbar />
        <div className="container bread-container">
          <div className="row justify-content-center text-center">
            <h3>{main}</h3>
            <span>
              <a className="bread-link"> Home </a>
              &rsaquo; {breadsub}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadBanner;
