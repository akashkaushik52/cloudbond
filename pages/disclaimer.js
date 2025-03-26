import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import { host, siteid } from "../static";
import { useRouter } from "next/router";
import BreadBanner from "../components/BreadBanner";
import NewsLetter from "@/components/NewsLetter";

const Disclaimer = () => {
  return (
    <>
      <BreadBanner main="Disclaimer" breadsub="Disclaimer" />

      <div className="container about-paragraph mt-5 mb-5">
        <h2 className="mt-2">
          You will receive good user experience and services at affordable
          pricing at Flyofare.
        </h2>
        <p>
          Only educational purposes are served by the content on our website.
          Every piece of information on the website is provided honestly. That
          being said, we disclaim any express and implied claims and guarantees
          regarding the correctness, sufficiency, legitimacy, dependability,
          timeliness, or completeness of any content on the Site. Under no
          circumstances will we be responsible to you for any loss or damage of
          any kind resulting from your use of the Site or from your reliance on
          any information supplied on the Site. As such, you use the Site at
          your own risk and bear all liability for any information found on the
          Site.
        </p>
        <strong>Third party links:</strong>
        <p>
          The Site may contain links to third party websites or material and
          connections to third party websites and features in headers and other
          advertisements. External links are not investigated, monitored, or
          reviewed for correctness, appropriateness, or validity by us. We do
          not promise, endorse, guarantee, or assume responsibility for any
          information provided by third-party websites linked through the Site
          or any website or feature referenced in any pop-up window or other
          advertising. We will not be a party to or responsible in any way for
          any transaction between you and third party providers of products or
          services.
        </p>
        <strong>Modifications to conditions and policies:</strong>
        <p>
          At our sole discretion, we reserve the right to update, modify or
          remove the content of the Site at any time and for any reason.
          However, we are not obligated to update any information on our Site.
          Furthermore, we reserve the right to modify or discontinue the Site,
          in whole or in part, at any time and without prior notice. Without
          prior notice, we reserve the right to change, amend, update, suspend,
          discontinue, or otherwise modify the Site at any time for any reason.
          You acknowledge that we are not responsible or liable for any loss,
          damage, or inconvenience caused by your inability to access or use the
          Site during any downtime or discontinuance of the Site.
        </p>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};
export default Disclaimer;
