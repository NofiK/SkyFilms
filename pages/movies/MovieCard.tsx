import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import YouTube, { YouTubeProps } from 'react-youtube';
import { useRouter } from 'next/router'
import { AiOutlineRollback } from 'react-icons/ai';
import { useAppSelector } from '../../src/hooks/redux';
import MovieSlider from '../../src/components/MovieSlider/MovieSlider';
import Link from 'next/link';
const MovieCard = ({movieTrailer, movieDetails, movieActors, similarMovies}:any) => {
    const router = useRouter()
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    }
    const isLoading = useAppSelector(state=>state.movieReducer.isLoading)
    const opts: YouTubeProps['opts'] = {
      height: '700',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    
  return (
     <section className={styles.movieCard}>
      <AiOutlineRollback size={55} className={styles.navigateBack} onClick={() => router.back()}/>
     <hr className={styles.slashLine1}></hr>
     <div style={{backgroundColor:'black', height:700, width:'100%'}}>
     {isLoading && (
        <div className={styles.loadingScreen}>
                  <div className={styles.loadingSpinner}></div>
        </div>
      )}
     {movieTrailer && (
      <YouTube key={Date.now()} videoId={movieTrailer[movieTrailer.length-1]?.youtubeKey} opts={opts} onReady={onPlayerReady} />
      )}
     </div>
      <hr className={styles.slashLine2}></hr>
      <div className={styles.movieDescriptionBox}>
      <div style={{width:'100%'}}>
         <h1 className={styles.movieTitle}>{movieDetails.title}</h1>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Year:</p>
          <p className={styles.tableColumn2}>{movieDetails.release?.slice(0,4)}</p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Rate:</p>
          <p className={styles.tableColumn2}>{movieDetails?.rate?.toString().slice(0,3)}/10 <img style={{width:40, position:'relative', top:3}} src="/imdb.png" alt="" /></p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Country:</p>
          <p style={{width:'60%', textAlign:'end'}} className={styles.tableColumn2}>
            {movieDetails?.countries?.map((country:any) =>{
              return (
                <span key={country.iso_3166_1}>{country.name}{movieDetails.countries.indexOf(country)===movieDetails.countries.length-1?"":', '}</span>
              )
            })}
            </p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Genres:</p>
          <p style={{width:'60%', textAlign:'end'}} className={styles.tableColumn2}>
            {movieDetails?.genres?.map((genre:any) =>{
              return (
                <span key={genre.id}>{genre.name}{movieDetails.genres.indexOf(genre)===movieDetails.genres.length-1?"":', '} </span>
              )
            })}
            </p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Runtime:</p>
          <p className={styles.tableColumn2}>{movieDetails.runtime} minutes</p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Genres:</p>
          <p style={{width:'60%', textAlign:'end'}} className={styles.tableColumn2}>
            {movieActors.slice(0,7)?.map((actor:any) =>{
              return (
                <Link key={actor.id} href={`/actors/${actor.id}`}>
                 <span style={{color:'#0081B4'}} >{actor.name}{movieActors.indexOf(actor)===6?"":', '}</span>
                </Link>
              )
            })}
            </p>
         </div>
          
        </div> 
        <img className={styles.movieImg}  src={movieDetails.backdrop} alt="" />
      </div>
      <MovieSlider
        movies={similarMovies}
        sliderLabel={`Similar movies`}
      />
    </section> 
  )
}

export default MovieCard




{/* <div>
<h1>{movieDetails.title}</h1>
<p>Year: <span>{movieDetails.release}</span></p>
<p>Rate: <span>{movieDetails?.rate?.toString().slice(0,3)}</span></p>
<p>Country: {movieDetails?.countries?.map((country:any) =>{
    return (
      <span key={country.iso_3166_1}>{country.name}{movieDetails.countries.indexOf(country)===movieDetails.countries.length-1?"":', '}</span>
    )
  })}</p>
<p>Year: <span>{movieDetails.release}</span></p>
<p>Year: <span>{movieDetails.release}</span></p>
<p>Year: <span>{movieDetails.release}</span></p>
</div> */}

