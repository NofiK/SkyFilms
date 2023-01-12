import React, { useEffect, useState } from "react";
import MovieSlider from "../../MovieSlider/MovieSlider";
import styles from "./HomePageBody.module.scss";
import { useAppSelector } from "../../../hooks/redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import {
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies
} from "../../../store/reducers/MovieSlice";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
const HomePageBody = () => {
  const [currentLocation, setCurrentLocation] = useState<string>("UA");
  const dispatch = useDispatch<AppDispatch>();
  const nowPlayingMovies = useAppSelector(
    (state) => state.movieReducer.nowPlayingMovies
  );
  const upcomingMovies = useAppSelector(
    (state) => state.movieReducer.upcomingMovies
  );
  const topRatedMovies = useAppSelector(
    (state) => state.movieReducer.topRatedMovies
  );
  useEffect(() => {
    setCurrentLocation(navigator.language.slice(3, 5));
    dispatch(fetchNowPlayingMovies("UA"));
    dispatch(fetchUpcomingMovies(1));
    dispatch(fetchTopRatedMovies(1));
  }, []);

  return (
    <section className={styles.homePageBody}>
      <hr className={styles.slashLine}></hr>
      <MovieSlider
        movies={nowPlayingMovies}
        sliderLabel={`Popular in your country`}
        region={currentLocation}
      />
      <MovieSlider
        movies={upcomingMovies}
        sliderLabel={`Upcoming movies!`}
      />
      <MovieSlider
        movies={topRatedMovies}
        sliderLabel={`Top rated`}
      />
    </section>
  );
};

export default HomePageBody;
