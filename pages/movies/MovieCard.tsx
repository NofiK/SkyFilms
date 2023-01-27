import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import YouTube, { YouTubeProps } from "react-youtube";
import { useRouter } from "next/router";
import { AiOutlineRollback } from "react-icons/ai";
import { useAppSelector } from "../../src/hooks/redux";
import MovieSlider from "../../src/components/MovieSlider/MovieSlider";
import Link from "next/link";
import {
  DefaultMovieProps,
  MovieActrosProps,
  MovieDetailsProps,
  MovieTrailerProps,
} from "../../src/types/movieTypes";
interface MovieCardProps {
  movieTrailer: MovieTrailerProps[];
  movieDetails: MovieDetailsProps;
  movieActors: MovieActrosProps[];
  similarMovies: DefaultMovieProps[];
}
const MovieCard = ({
  movieTrailer,
  movieDetails,
  movieActors,
  similarMovies,
}: MovieCardProps) => {
  const router = useRouter();
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {};
  const isLoading = useAppSelector((state) => state.movieReducer.isLoading);
  const opts: YouTubeProps["opts"] = {
    height: "700",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <section className={styles.movieCard}>
      <AiOutlineRollback
        size={55}
        className={styles.navigateBack}
        onClick={() => router.back()}
      />
      <hr className={styles.slashLine1}></hr>
      <div style={{ backgroundColor: "black", height: 700, width: "100%" }}>
        {isLoading && (
          <div className={styles.loadingScreen}>
            <div className={styles.loadingSpinner}></div>
          </div>
        )}
        {movieTrailer && (
          <YouTube
            key={Date.now()}
            videoId={movieTrailer[movieTrailer.length - 1]?.youtubeKey}
            opts={opts}
            onReady={onPlayerReady}
          />
        )}
      </div>
      <hr className={styles.slashLine2}></hr>
      <div className={styles.movieDescriptionBox}>
        <div style={{ width: "100%" }}>
          {movieDetails?.title && (
            <h1 className={styles.movieTitle}>{movieDetails.title}</h1>
          )}
          {movieDetails?.release && (
            <div className={styles.tableRow}>
              <p className={styles.tableColumn1}>Year:</p>
              <p className={styles.tableColumn2}>
                {movieDetails?.release?.slice(0, 4)}
              </p>
            </div>
          )}
          {movieDetails?.rate && (
            <div className={styles.tableRow}>
              <p className={styles.tableColumn1}>Rate:</p>
              <p className={styles.tableColumn2}>
                {movieDetails?.rate?.toString().slice(0, 3)}/10{" "}
                <img
                  style={{ width: 40, position: "relative", top: 3 }}
                  src="/imdb.png"
                  alt=""
                />
              </p>
            </div>
          )}
          {movieDetails?.countries?.length && (
            <div className={styles.tableRow}>
              <p className={styles.tableColumn1}>Country:</p>
              <p
                style={{ width: "60%", textAlign: "end" }}
                className={styles.tableColumn2}
              >
                {movieDetails?.countries?.map((country: any) => {
                  return (
                    <span key={country.iso_3166_1}>
                      {country.name}
                      {movieDetails.countries.indexOf(country) ===
                      movieDetails.countries.length - 1
                        ? ""
                        : ", "}
                    </span>
                  );
                })}
              </p>
            </div>
          )}
          {movieDetails?.genres?.length && (
            <div className={styles.tableRow}>
              <p className={styles.tableColumn1}>Genres:</p>
              <p
                style={{ width: "60%", textAlign: "end" }}
                className={styles.tableColumn2}
              >
                {movieDetails?.genres?.map((genre: any) => {
                  return (
                    <span key={genre.id}>
                      {genre.name}
                      {movieDetails.genres.indexOf(genre) ===
                      movieDetails.genres.length - 1
                        ? ""
                        : ", "}{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          )}
          {movieDetails?.runtime && (
            <div className={styles.tableRow}>
              <p className={styles.tableColumn1}>Runtime:</p>
              <p className={styles.tableColumn2}>
                {movieDetails.runtime} minutes
              </p>
            </div>
          )}

          <div className={styles.tableRow}>
            <p className={styles.tableColumn1}>Actors:</p>
            <p
              style={{ width: "60%", textAlign: "end" }}
              className={styles.tableColumn2}
            >
              {movieActors?.slice(0, 7)?.map((actor: any) => {
                return (
                  <Link key={actor.id} href={`/actors/${actor.id}`}>
                    <span className={styles.movieActor}>
                      {actor.name}
                      {movieActors.indexOf(actor) === 6 ? "" : ", "}
                    </span>
                  </Link>
                );
              })}
            </p>
          </div>
          <div className={styles.movieDescription}>
            <h2>Description</h2>
            
            {movieDetails?.description}
          </div>
        </div>
        {movieDetails?.backdrop && (
          <img
          className={styles.movieImg}
          src={
            movieDetails?.backdrop === "https://image.tmdb.org/t/p/original/null"
              ? "https://i.pinimg.com/originals/60/88/0e/60880ef799bb1edd172d645c39906c29.jpg"
              : movieDetails?.backdrop
          }
          alt=""
        />
        )}
        
      </div>
      <MovieSlider movies={similarMovies} sliderLabel={`Similar movies`} />
    </section>
  );
};

export default MovieCard;
