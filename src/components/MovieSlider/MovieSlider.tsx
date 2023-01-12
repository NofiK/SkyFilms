import React from 'react'
import styles from './MovieSlider.module.scss'
import Slider from 'react-slick';
import {DefaultMovieProps} from '../../types/movieTypes';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
interface MovieSliderPops{
  movies:DefaultMovieProps[];
  sliderLabel:string,
  region?:string,
}
const MovieSlider = ({movies, sliderLabel, region}:MovieSliderPops) => {
  const movieListSlider = {
    infinite: true,
    dots:false,
    speed: 1300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.moviesSlider}>
         <h3 className={styles.sliderLabel}>{sliderLabel}
         {region && (
         <img style={{width:29, height:29, position:'relative', left:10, top:7}} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${region}.svg`} alt="" />
         )}
         </h3>
        <Slider {...movieListSlider} >
          {movies.map((movie: DefaultMovieProps) => {
            return (
              <Link href={`/movies/${movie.id}`}> 
              <div key={movie.id} className={styles.movieCard}>
                <div style={{backgroundImage: `url(${movie.poster})`}} className={styles.movieCardImage}>
                  <div style={{position:'relative', top:3}}>
                    <span className={styles.movieRate}>{movie.rate}</span>
                  <AiFillStar
                      style={{ width: 20, height: 20, color: "yellow", position:'relative', top:4 }}
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
  )
}

export default MovieSlider