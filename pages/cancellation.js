import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import { useRouter } from "next/router";
import BreadBanner from "../components/BreadBanner";

const Cancellation = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Flight Cancelation | Flyofare.com</title>
        <meta
          name="description"
          content={
            "Need to cancel your flight? Visit Flyofare.com for easy and hassle-free flight cancellation options. Check out our policies and procedures now!"
          }
        />
        <meta name="title" content={"Flight Cancelation | Flyofare.com"} />
        <link rel="canonical" href={router.asPath} />
        <link rel="alternate" href={router.asPath} />
        <meta name="Robots" content="index, all" />
      </Head>
      <BreadBanner main="Cancellation Policy" breadsub="Cancellation Policy" />

      <div className="container about-paragraph mt-5">
        <div className="data-about">
          <h2>
            you will get excellent services and user experience at reasonable
            prices.
          </h2>
          <p>
            If you've ever had to cancel your airline tickets, you are aware of
            how inconvenient it may be. On the other hand, flight cancellation
            is simple and convenient thanks to the trip cancellation policy.
            This website examines the policies of change requests, refunds,
            rebooking, and cancellations of trips.
          </p>
          <p>
            Customers can have a more pleasant and enjoyable flight experience
            with premium travel offers. It is possible that travellers will want
            to cancel the flights they have scheduled. All you need to do is go
            to the Manage Reservations section of the Flyofare website to cancel
            your flights. Within a day of making a reservation, cancellations
            are free. Certain travel arrangements will come with a default
            cancellation fee, but not all of them. Policy for cancelling flights
          </p>
          <p>
            Flyofare is the greatest option for travellers because of its
            reputation for providing high-quality travel services at affordable
            prices. Scheduling several trip flights and cancelling them as
            needed is simple. Before filing a cancellation request, you should
            be informed of Flyofare' various guidelines and limitations,
            including its 24-hour cancellation policy.
          </p>
          <strong>To cancel your flight, consider these factors:</strong>
          <p>
            Trip cancellation fees are waived if you cancel your flight within
            24 hours of your scheduled departure time.
          </p>
          <p>
            However, if your flight is delayed more than 24 hours, you will be
            charged a flight cancellation fee.
          </p>
          <p>
            To provide flight cancellation services, Flyofare charges a fee of
            $200. Depending on the airline's base pricing policy, this price may
            increase.
          </p>
          <p>
            If you want a travel refund, submit a refund request online or call
            their call center.
          </p>
          <p>
            Tickets are refunded in the same payment method used by passengers
            when booking if canceled within 24 hours.
          </p>
          <p>
            Flyofare will deduct the cancellation fees from the initial price of
            the ticket and will refund them if you cancel after 24 hours.
          </p>
          <p>Cancellation policy trips Cancellation in 24 hours</p>
          <p>
            Travel trips have a flexible 24-hour booking window, which implies
            that you will get a full refund of the ticket to your original
            payment option at no cost of cancellation if you cancel or amend
            your ticket within 24 hours of your planned departure time. In line
            with the travel trip 24-hour cancellation policy, there are no
            cancellation costs for tickets that are cancelled within that time
            frame.
          </p>
          <p>
            In accordance with Flyofare's 24-Hour Cancellation Policy, customers
            are required to pay a cancellation fee once the 24-Hour Cancellation
            Policy has expired. If you cancel within 24 hours of booking, the
            airline must refund you in full. Within three weeks, the airline
            will return the full refund amount to the original payment source.
          </p>
          <strong>How to cancel a travel flight?</strong>
          <p>A step-by-step guide to cancel your trip trips are as follows:</p>
          <p>
            <strong>By Phone</strong>
            To cancel a plane ticket by phone, travelers must contact the
            airline's customer service staff. Your six-digit confirmation code
            will serve as your ticket cancellation notification. Additionally,
            the travel agency will guide you through the cancellation procedure
            and inform you of the refund details. There are several ways for
            passengers to resolve questions about the regulations, including
            speaking with travel agents.
          </p>
          <p>Flyofare Cancellation fees</p>
          <p>
            Once the risk-free time has ended, the customer with a
            non-refundable ticket must pay $200 as a trip/trip cancellation fee.
          </p>
          <p>
            Flyofare will charge between $25 and $125 per ticket for award
            tickets.
          </p>
          <p>
            All claims pertaining to payments shall continue to be handled by
            the relevant OPGSPs. Before making a purchase, users must read and
            agree to the online security policy and privacy statement of the
            relevant OPGSP that is displayed on the Site. If you visit an OPGSP
            mentioned on the Site and any infringement or violation results from
            it, we will not be held liable for any security breach.
          </p>
          <p>
            The holder of a basic economy ticket is not authorized to cancel
            their travel reservations.
          </p>
          <p>
            The trip cancellation fee does not apply to the holder of a
            refundable ticket. There will be no cancellation fee if you cancel
            your tickets before your departure date.
          </p>
          <strong>Travel Refund Policy</strong>
          <p>
            There's no need to worry if your travel plans change and you already
            have a trip booked with travel. Flyofare will refund you if you
            cancel your flight. .
          </p>
          <p>
            Any cancellation made within 24 hours of purchase will result in a
            full refund with no deductions.
          </p>
          <p>
            Tickets in Basic Economy class will not be refunded after 24 hours
            of purchase because the flight has already been purchased.
          </p>
          <p>
            Twenty-four hours after purchase, flexible fare tickets can be
            refunded if they have been cancelled. From the amount of the fare,
            the airline will take certain cancellation fees to cover these
            costs.
          </p>
          <p>
            Note- It is possible to request a refund from Flyofare online or by
            calling the Flyofare phone number. More information about travel
            refund requests and the COVID cancellation policy can be found on
            the company's website.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Cancellation;
