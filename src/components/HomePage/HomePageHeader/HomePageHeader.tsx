import React, { useEffect } from "react";
import styles from "./HomePageHeader.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { useAppSelector } from "../../../hooks/redux";
import { fetchPopularMoives } from "../../../store/reducers/MovieSlice";
import Slider from "react-slick";
import {DefaultMovieProps} from "../../../types/movieTypes";
import { AiFillStar } from 'react-icons/ai';
import Link from "next/link";

const HomePageHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const popularMovies = useAppSelector(
    (state) => state.movieReducer.popularMovies
  );
  useEffect(() => {
    dispatch(fetchPopularMoives(1));
  }, []);
  const mainSlider = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
  };
  const secondarySlider = {
    infinite: true,
    dots:false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
};
  return (
    <div className={styles.homePageHeader}>
      <Slider {...mainSlider} className={styles.mainSlider}>
        {popularMovies.map((movie: DefaultMovieProps) => {
          return (
            <div key={movie.id}>
              <div className={styles.backgroundIMGBox}>
                <img className={styles.backgroundIMG} src={"https://image.tmdb.org/t/p/original" + movie.backdrop} alt=""
                />
              </div>

              <div className={styles.mainSliderDesription}>
                <section className={styles.filmDescriptionContainer}>
                  <h1 className={styles.filmName}>{movie.title}</h1>
                  <p className={styles.filmDescription}>
                    {movie.description.slice(0, 250) + "..."}
                  </p>
                  <p className={styles.filmRate}>
                    {movie.rate}/10{" "}
                    <AiFillStar
                      style={{ width: 20, height: 20, color: "yellow" }}
                    />
                  </p>
                  <div className={styles.buttonsContainer}>
                    <button className={styles.watchButton}>Watch Now</button>
                    <button className={styles.trailerButton}>Trailer</button>
                  </div>
                </section>
              </div>
            </div>
          );
        })}
      </Slider>
    
      <div className={styles.secondarySlider}>
        <div className={styles.moviesListSlider}>
         <h3 className={styles.sliderLabel}>Popular movies</h3>
        <Slider {...secondarySlider} >
          {popularMovies.map((movie: DefaultMovieProps) => {
            return (
              <div key={movie.id} className={styles.movieCard}>
              <Link href={`/movies/${movie.id}`}>
                <div style={{backgroundImage: `url(${movie.miniPoster})`}} className={styles.movieCardImage} />
              </Link>
              </div>
            );
          })}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
