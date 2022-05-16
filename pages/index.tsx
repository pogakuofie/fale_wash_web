import type { NextPage } from "next";
import Head from "next/head";

// components
import { StyledText } from "../components/common/basic";

const Home: NextPage = () => {
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
