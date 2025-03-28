import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  // const [navbar, setNavbar] = useState("navbar");
  // const [navwrap, setNavwrap] = useState("nav-wrapper");

  // const changeBackground = () => {
  //   if (window.scrollY >= 0.5) {
  //     setNavbar("sticky");
  //     setNavwrap("sticky-nav-wrapper");
  //   } else {
  //     setNavbar("navbar");
  //     setNavwrap("nav-wrapper");
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  // }, []);
  function handleClick() {
    setMobileNavOpen(!isMobileNavOpen);
    setActive(!isActive);
  }
  return (
    <>
      <div data-aos="fade-up" class="navwrap">
        <nav class="navbar">
          <Link href="/">
            <img
              src="../images/cloudbonds.png"
              class="logo_trademark"
              alt="flyofare trademark"
            />
          </Link>
          {/* <div className="color-block"></div> */}
          <div
            class={`menu-toggle ${isActive ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={handleClick}
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class={`nav ${isMobileNavOpen ? "mobile-nav" : ""}`}>
            <li
              class="nav-item"
              style={{ textAlign: "center", marginLeft: "14px" }}
            >
              <Link href="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link href="/about">About Us</Link>
            </li>
            <li class="nav-item">
              <Link href="/contact">Contact Us</Link>
            </li>

            <li class="nav-item">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li class="nav-item">
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
