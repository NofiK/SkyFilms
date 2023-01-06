import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import YouTube, { YouTubeProps } from 'react-youtube';
import { useRouter } from 'next/router'
import { AiOutlineRollback } from 'react-icons/ai';
const MovieCard = ({movieTrailer, movieDetails}:any) => {
    const router = useRouter()
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
      // event.target.pauseVideo()
    }
  
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
     {movieTrailer && (
      <YouTube videoId={movieTrailer[movieTrailer.length-1]?.youtubeKey} opts={opts} onReady={onPlayerReady} />
      )}
     </div>
      <hr className={styles.slashLine2}></hr>
      <div className={styles.movieDescriptionBox}>
        <div style={{width:'100%'}}>
         <h1 className={styles.movieTitle}>{movieDetails.title}</h1>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Year</p>
          <p className={styles.tableColumn2}>{movieDetails.release}</p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Rate</p>
          <p className={styles.tableColumn2}>{movieDetails?.rate?.toString().slice(0,3)}/10</p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Country</p>
          <p style={{width:'60%', textAlign:'end'}} className={styles.tableColumn2}>
            {movieDetails?.countries?.map((country:any) =>{
              return (
                <span key={country.iso_3166_1}>{country.name}{movieDetails.countries.indexOf(country)===movieDetails.countries.length-1?"":', '}</span>
              )
            })}
            </p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Genres</p>
          <p style={{width:'60%', textAlign:'end'}} className={styles.tableColumn2}>
            {movieDetails?.genres?.map((genre:any) =>{
              return (
                <span key={genre.id}>{genre.name}{movieDetails.genres.indexOf(genre)===movieDetails.genres.length-1?"":', '} </span>
              )
            })}
            </p>
         </div>
         <div className={styles.tableRow}>
          <p className={styles.tableColumn1}>Runtime</p>
          <p className={styles.tableColumn2}>{movieDetails.runtime} minutes</p>
         </div>
        
        </div>
        <img style={{width:800}} src={movieDetails.backdrop} alt="" />
      </div>
    </section> 
  )
}

export default MovieCard