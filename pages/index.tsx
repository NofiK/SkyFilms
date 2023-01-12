import styles from "../styles/Home.module.css";
import Header from "../src/components/Layouts/Header/Header";
import HomePage from "../src/components/HomePage/HomePage";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </>
  );
}
