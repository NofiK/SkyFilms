import React from "react";
import styles from "./HomePageFilmDescription.module.scss";
import { AiFillStar } from 'react-icons/ai';
import PopularMoviesProps from "../../../types/movieTypes";
const HomePageFilmDescription = ({movieData}:any) => {
  return (
    <section className={styles.filmDescriptionContainer}>
      <h1 className={styles.filmName}>{movieData.title}</h1>
      <p className={styles.filmDescription}>
        {movieData.description.slice(0, 250) + "..."}
      </p>
      <p className={styles.filmRate}>{movieData.rate}/10 <AiFillStar style={{width:20, height:20, color:'yellow'}}/></p>
      <div className={styles.buttonsContainer}>
        <button className={styles.watchButton}>Watch Now</button>
        <button className={styles.trailerButton}>Trailer</button>
      </div>
    </section>
  );
};

export default HomePageFilmDescription;
