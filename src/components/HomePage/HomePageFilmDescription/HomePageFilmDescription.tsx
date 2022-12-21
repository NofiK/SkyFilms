import React from "react";
import styles from "./HomePageFilmDescription.module.scss";
import { AiFillStar } from 'react-icons/ai';
const HomePageFilmDescription = () => {
  return (
    <section className={styles.filmDescriptionContainer}>
      <h1 className={styles.filmName}>STAR WARS - THE RISE OF SKYWALKER</h1>
      <p className={styles.filmDescription}>
        The surviving members of the resistance face the First Order once again,
        and the legendary conflict between the Jedi and the Sith reaches its
        peak bringing the Skywalker saga to its end.
      </p>
      <p className={styles.filmRate}>5.6/10 <AiFillStar style={{width:20, height:20, color:'yellow'}}/></p>
      <div className={styles.buttonsContainer}>
        <button className={styles.watchButton}>Watch Now</button>
        <button className={styles.trailerButton}>Trailer</button>
      </div>
    </section>
  );
};

export default HomePageFilmDescription;
