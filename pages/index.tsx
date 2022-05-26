import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { logEvent, getAnalytics } from "firebase/analytics";

// components
import { StyledText } from "../components/common/basic";

// config

const Home: NextPage = () => {
  useEffect(() => {
    const analytics = getAnalytics();
    logEvent(analytics, "home_loaded");

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    } else {
      console.log("else");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Fale Wash - Clean laundry at your doorstep.</title>
        <meta name='description' content='Clean laundry at your doorstepY' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledText>Home</StyledText>
    </div>
  );
};

export default Home;
