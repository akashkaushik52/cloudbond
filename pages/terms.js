import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import { useRouter } from "next/router";
import BreadBanner from "../components/BreadBanner";

const Terms = () => {
  return (
    <>
      <BreadBanner main="Terms & Conditions" breadsub="Terms & Conditions" />
      <div className="container about-paragraph mt-5">
        <div className="mt-5 mb-5">
          <h1 className="mt-2">AIRLINES Terms & Conditions</h1>
          <p>
            Airline terms and restrictions, including but not confined to
            cancellation and refund procedures, apply to any airline tickets
            purchased through the Website.
          </p>
          <p>
            Flyofare only acts as a middleman to enable users to buy airline
            tickets. The parties to the service agreement for the use of the
            flight are always the User and the applicable airline.
          </p>
          <p>
            Airlines maintain the right to amend or cancel flights or
            itineraries independently of and without prior notification to
            Flyofare. They may also reschedule flight dates and routes. As a
            facilitator, Flyofare is not liable for any loss, direct or
            eventuality, that a User may experience as a result of such a change
            or cancellation of a flight because it has no control or
            jurisdiction over the logistics of the airlines.
          </p>
          <p>
            On the same airline, assorted tickets may have different limits or
            different services and prices.
          </p>
          <p>
            The airline determines the terms for the baggage allowance for a
            certain fare; Flyofare has no ascendancy over these terms. Some of
            the tickets displayed in the booking flow are "hand baggage fares,"
            meaning the user must pay extra for checked baggage because they do
            not grant them access to free checked baggage. Adding checked
            luggage to a reservation can cost more or less depending on the
            airline. For specific costs, the User is encouraged to get in touch
            with the airlines.
          </p>

          <h1 className="mt-2">Code Share</h1>
          <p>
            Certain airlines enter into "code share" agreements with other
            airlines. Stated differently, there exist certain routes where the
            airline selling or promoting the ticket does not have its own
            aircraft. Rather, it collaborates with another airline or employs
            one to transport people there. In the booking flow, the partner
            airline is designated as "operated by".
          </p>
          <p>
            Your flight's code-sharing status will be made known to you during
            the booking process and beforehand you make a payment.
          </p>
          <p>
            Only once the ticketing airline informs Flyofare of any such
            code-sharing agreements will Flyofare share them with the user.
          </p>
          <h1 className="mt-2">FLIGHT SEGMENT USE</h1>
          <p>
            Should the User choose not to proceed with the subsequent journey,
            the airline will automatically cancel the full PNR associated with
            that booking. In that case, Flyofare won't be obliged to give the
            user any other reservations or take control of the previously
            mentioned process. Under such circumstances, the applicable airline
            regulations shall establish the cancellation penalty.
          </p>
          <h1 className="mt-2">CHANGES TO THE CURRENT BOOKING</h1>
          <p>
            Apart from the service charge levied by Flyofare, any modifications
            made to an existing reservation may incur additional charges levied
            by the associated airline.
          </p>
          <p>
            In the case that a booking is altered or modified, the User is
            liable to pay the associated fees. Charges for modifying or changing
            an existing reservation, however, may vary according to the airline
            and the pricing class.
          </p>
          <h1 className="mt-2">Corporate Booking</h1>
          <p>
            Corporate travel can be booked with us through both online and
            offline channels; however, until the airline verifies the booking,
            Flyofare cannot guarantee a fixed pricing. Corporate reservations
            are typically less expensive when made through Flyofare.
          </p>
          <p>
            Flyofare shall not be held responsible for any fare change as it is
            not in the jurisdiction of Flyofare.
          </p>
          <h1 className="mt-2">Group Bookings</h1>
          <p>
            Group Bookings rate is flexible and may vary until the tickets are
            issued as these rates may fluctuate and Flyofare shall not be held
            responsible for the price change as it depends on the airline and
            their policy.
          </p>
          <p>
            If there is a disparity in the fare change before the issuance of
            tickets, Flyofare is not responsible for paying any fare difference.
          </p>
          <h1>For Travel Agents and Third Party</h1>
          <p>
            It is prohibited for consolidators, aggregators of any kind, travel
            agencies, and tour operators to use Flyofare' website for any kind
            of resale or business endeavour. In the event that such a
            reservation is made, Flyofare retains the right to restrict payments
            or refunds and, among other things, to immediately cancel or nullify
            all such reservations without providing any notification to the
            relevant travel agents. For any incidental or consequential loss or
            damage of any kind resulting from reservations made by third
            parties, Flyofare shall not be liable. In these unique
            circumstances, the second party—that is, the consolidators,
            aggregators, travel agencies, or tour operators—will be exclusively
            liable. However, users of Flyofare are exempt from this policy.
          </p>
          <h1 className="mt-2">PRICING</h1>
          <p>
            The base fare, any applicable government taxes, and the convenience
            fee are often included in the final price that is presented on the
            website's payment page. Users must pay the whole amount before their
            reservation is confirmed. Flyofare has the right to refuse service
            if the User does not pay the full amount. On the date of travel, the
            user undertakes to pay all statutory taxes, surcharges, and fees.
          </p>
          <p>
            An infant must be under 24 months for the entire trip in order to
            qualify for baby prices. This includes both onward and return
            journeys. On the return trip, if the newborn is 24 months or older,
            the user will need to make a separate reservation using a kid fee.
          </p>
          <h1 className="mt-2">TRAVEL PAPERWORK</h1>
          <p>
            It is the User's exclusive responsibility to ensure that they have
            all the identification documents, passports, visas (including
            transit visas), and other travel documents needed to finish the
            journey. The user understands that if they are unable to travel due
            to a lack of proper travel documentation, Flyofare will not be held
            liable in any way.
          </p>
          <p>
            The user is aware that any information (if any) provided by Flyofare
            on the travel papers is advisory in nature only and should not be
            taken as definitive. The User is responsible for verifying the
            travel regulations with the relevant airlines of the relevant
            countries the User may transit through or decide to visit.
          </p>
          <h1 className="mt-2">TERMS OF CHECK-IN</h1>
          <p>
            Regarding the check-in timings, users should inquire directly with
            the airlines. For domestic flights, check-in typically opens two
            hours prior to takeoff, whereas it does so three hours prior to
            takeoff for international flights.
          </p>
          <p>
            Passports and valid identification documents are required by the
            user to verify the identity, nationality, and age of all ticket
            holders, including newborns.
          </p>
          <h1 className="mt-2">REFUND</h1>
          <p>
            Refunds will be processed in compliance with the airline's price and
            cancellation rules. Refunds are subject to Flyofare receiving
            payment from the airlines. On the other hand, the convenience fee is
            a one-time payment made to Flyofare that is not refundable.
          </p>
          <p>
            The convenience fee is levied on electronic transactions in order to
            cover the cost of electronic payment infrastructure. The customer
            shall be completely responsible to bear all charges, fees, taxes,
            duties and assessments arising out of the use of the service,
            depending on the applicable laws. Therefore, the convenience fee is
            not refundable.
          </p>
          <p>
            To begin the refund procedure, Flyofare must be informed of any
            cancellations made directly with the airline. Refund processing
            times can change according to the bank, payment method, etc. The
            Flyofare service cost, which is separate from the convenience fee as
            previously noted, will be subtracted before processing the refund.
          </p>
          <p>
            The reimbursement will be made to the original account from which
            the payment was made. Flyofare will appropriately reverse the charge
            to the original credit card if the user used one; likewise, if the
            user used a debit card, Flyofare will credit the money to the
            original debit card.
          </p>
          <h1 className="mt-2">
            Flyofare's Function and Liability Limitations
          </h1>
          <p>
            Flyofare' sole purpose is to facilitate the User's purchase of
            services from the Service Provider. The parties to the transaction
            or service fulfilment agreement are always the User and the Activity
            Provider.
          </p>
          <p>Flyofare shall not be liable or responsible for:</p>
          <p>
            Any loss or damage, harm, accident, demise, malfunction,
            irregularity, delay or schedule modification, cancellation without
            justification, erroneous information, inadequate service or product,
            or cancellation brought on by circumstances beyond the control of
            the activity provider.
          </p>
          <p>
            The health, safety and well-being of the User in the course of
            availing the Activity or thereafter.
          </p>
          <p>Any false statement made by the activity provider.</p>
          <p>
            This Agreement shall be governed by and construed in accordance with
            the laws of India, including all matters any dispute relating
            thereto shall be subject to the competent jurisdiction of the courts
            in Gautam Budhnagar, Uttar Pradesh.
          </p>
          <p>
            The maximum liability of flyofare will be restricted to the
            reimbursement of the booking fee that was received by flyofare for
            the Activity reservation.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Terms;
