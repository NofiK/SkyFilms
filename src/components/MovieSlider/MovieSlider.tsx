import React, { useState } from "react";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import { DefaultMovieProps } from "../../types/movieTypes";
import { AiFillStar } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import Link from "next/link";
interface MovieSliderPops {
  movies: DefaultMovieProps[];
  sliderLabel: string;
  region?: string;
}
const MovieSlider = ({ movies, sliderLabel, region }: MovieSliderPops) => {
  const movieListSlider = {
    infinite: true,
    dots: false,
    speed: 1300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.moviesSlider}>
        <h3 className={styles.sliderLabel}>
          {sliderLabel}
          {region && (
            <img
              className={styles.countryFlag}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${region}.svg`}
            />
          )}
        </h3>
        <Slider {...movieListSlider}>
          {movies.map((movie: DefaultMovieProps) => {
            return (
              <Link key={movie.id} href={`/movies/${movie.id}`}>
                <div className={styles.movieCard}>
                  <div
                    style={{ backgroundImage: `url(${movie.poster})` }}
                    className={styles.movieCardImage}
                  >
                    <div style={{ position: "relative", top: 3 }}>
                      <span className={styles.movieRate}>
                        {movie.rate.toString().slice(0, 3)}
                      </span>
                      <AiFillStar
                        style={{
                          width: 20,
                          height: 20,
                          color: "yellow",
                          position: "relative",
                          top: 4,
                        }}
                      />
                    </div>
                  </div>
                  <p className={styles.movieName}>{movie.title}</p>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MovieSlider;
