import NewsLetter from "../components/NewsLetter";
import BreadBanner from "../components/BreadBanner";
import Heading from "../components/Heading";
import React from "react";
import Vacation from "../components/Vacation";
// import Explore from "../components/Explore";
// import Cards from "../components/Cards";
import Footer from "../components/Footer";
// import AboutInfo from "../components/AboutInfo";
import Agency from "../components/Agency";
import WhyChoose from "../components/WhyChoose";
import NextHoliday from "../components/NextHoliday";
import { useRouter } from "next/router";
import Head from "next/head";

const about = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Exceptional Flight Deals | Unbeatable Flight Reservation Offers!
        </title>
        <meta
          name="description"
          content={
            "Looking for unbeatable flight deals? Check out our exceptional flight reservation offers for flights to the United States of America. Compare prices and find the cheapest airline tickets here!"
          }
        />
        <meta
          name="title"
          content={
            "Exceptional Flight Deals | Unbeatable Flight Reservation Offers!"
          }
        />
        <link rel="canonical" href={router.asPath} />
        <link rel="alternate" href={router.asPath} />
        <meta name="Robots" content="index, all" />
      </Head>
      <BreadBanner main="About Us" breadsub="About" />
      <Heading tip="We genuinely want your travel experience to be as easy and enjoyable as possible!" />
      {/* <Explore /> */}
      {/* <AboutInfo /> */}
      <NextHoliday />
      <Agency />
      <Vacation
        offerspan="Only Offer"
        placeimg="images/usa/hawai.jpg"
        placehead="Indulge in an unforgettable journey to Hawai."
        para="On your next vacation, immerse yourself in Hawaii's timeless allure. Experience its vibrant culture, tantalizing cuisine, and awe-inspiring vistas. Located at the heart of the Pacific Ocean, amidst the captivating Hawaiian archipelago, forge unforgettable memories amidst its bustling streets."
      />
      <WhyChoose />
      {/* <Cards /> */}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default about;
