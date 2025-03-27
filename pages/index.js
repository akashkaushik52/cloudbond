import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Homebanner from "../components/Homebanner";
import Choose from "../components/Choose";
// import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Vacation from "../components/Vacation";
import Agency from "../components/Agency";
import Services from "../components/Services";
import NewsLetter from "../components/NewsLetter";
import NewCard from "../components/NewCard";
import { useRouter } from "next/router";
import Brands from "../components/Promotion_Footer";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Book Your Flight Tickets Online | Airlines Reservation | Flyofare.com
        </title>
        <meta
          name="description"
          content="Looking to save on your next trip? Secure your flight tickets with ease through our airlines reservation platform. Find great deals and enjoy hassle-free booking!"
        />
        <meta
          name="keywords"
          content="flights, flight, Flights to United States of America, cheap, airline, tickets, airline ticket, last minute, cheapest, compare, low cost,air fares, cheapflights, deal, deals,flight cancelation"
        />
        <meta name="Robots" content="index, all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        
      </Head>

      <noscript>
        <iframe
          src="ns "
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <div
        className="container-fluid banner-container"
        style={{
          backgroundImage: `url("images/planewing.jpg")`,
          height: "125vh",
          marginBottom: "300px",
          backgroundBlendMode: "multiply",
          backgroundColor: "#0000004a",
        }}
      >
        <Navbar />
        <Homebanner />
      </div>
      <Agency />
      <Services />
      {/* <SlideShow /> */}

      <Vacation
        offerspan="Only Offer"
        placeimg="images/usa/hawai.jpg"
        placehead="Indulge in an unforgettable journey to Hawai."
        para="On your next vacation, immerse yourself in Hawaii's timeless allure. Experience its vibrant culture, tantalizing cuisine, and awe-inspiring vistas. Located at the heart of the Pacific Ocean, amidst the captivating Hawaiian archipelago, forge unforgettable memories amidst its bustling streets."
        imagalt={"hawai"}
      />
      <Choose />
      {/* <Cards /> */}
      <NewCard />
      <NewsLetter />
      <Brands />
      <Footer />
    </>
  );
}
