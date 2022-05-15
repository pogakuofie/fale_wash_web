import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fale Wash - Laundry Service</title>
        <meta name='description' content='Delivery at your door step' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <p>Home</p>
    </div>
  );
};

export default Home;
