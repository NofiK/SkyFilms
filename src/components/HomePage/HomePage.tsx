import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./HomePage.module.scss";
import HomePageHeader from "./HomePageHeader/HomePageHeader";
import HomePageBody from "./HomePageBody/HomePageBody";
const HomePage = () => {

  return (
    <section className={styles.homePageContainer}>
      <Head>
        <title>SkyFilms</title>
        
        <link rel="icon" href="/favicon.png" />

      </Head>
      <HomePageHeader/>
      <HomePageBody/>
    </section>
  );
};

export default HomePage;
