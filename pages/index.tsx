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
  }, []);

  return (
    <div>
      <Head>
        <title>Fale Wash - Laundry Service</title>
        <meta name='description' content='Delivery at your door step' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledText>Home</StyledText>
    </div>
  );
};

export default Home;
