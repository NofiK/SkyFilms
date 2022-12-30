import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./HomePage.module.scss";
import HomePageFilmDescription from "./HomePageFilmDescription/HomePageFilmDescription";
import { useAppSelector } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchPopularMoives } from "../../store/reducers/MovieSlice";

import Slider from "react-slick";
import PopularMoviesProps from "../../types/movieTypes";
const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const popularMovies = useAppSelector(
    (state) => state.movieReducer.popularMovies
  );
  useEffect(() => {
    dispatch(fetchPopularMoives(1));
  }, []);
  const mainHomeSlider = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    autoplay:true,
    fade:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    
  };
  const movieListSlider = {
    dots: true,
      infinite: true,
      dots:false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <title>SkyFilms</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={styles.homePageContainer}>
      
        <Slider {...mainHomeSlider} className={styles.slider}>
          {popularMovies.map((movie: PopularMoviesProps) => {
            return (
              <div>
                <div className={styles.backgroundIMGBox}>
                  <img
                    className={styles.backgroundIMG}
                    src={"https://image.tmdb.org/t/p/original" + movie.backdrop}
                    alt=""
                  />
                  
                </div>
                 
                <div className={styles.mainSliderDesription}>
                  <HomePageFilmDescription movieData={movie}/>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className={styles.aboba}>
        <div className={styles.moviesListSlider}>
        <Slider {...movieListSlider} >
          {popularMovies.map((movie: PopularMoviesProps) => {
            return (
              <div className={styles.movieCard}>
                <div style={{backgroundImage: `url(${movie.miniPoster})`}} className={styles.movieCardImage}>
                  
                </div>
              </div>
            );
          })}
        </Slider>
        </div>
        </div>
        faeswfaewf wefw ef
        </section>
    </>
  );
};

export default HomePage;
