import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../src/store/store'
import { useAppSelector } from '../../src/hooks/redux'
import { fetchMovieDetails, fetchMovieTrailer, fetchSimilarMovies } from '../../src/store/reducers/MovieSlice'
import { MovieDetailsProps, MovieActrosProps } from '../../src/types/movieTypes'
import MovieCard from './MovieCard'
import { fetchMovieActors } from '../../src/store/reducers/ActorSlice'

const Movie = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch<AppDispatch>()
    const movieDetails:MovieDetailsProps = useAppSelector((state)=>state.movieReducer.movieDetails)
    const movieTrailer = useAppSelector((state)=>state.movieReducer.movieTrailer)
    const movieActors = useAppSelector(state=>state.actorReducer.movieActors)
    const similarMovies = useAppSelector(state=>state.movieReducer.similarMovies)
    useEffect(()=>{
      if(id){
        dispatch(fetchMovieDetails(+id))
        dispatch(fetchMovieTrailer(+id))
        dispatch(fetchMovieActors(+id))
        dispatch(fetchSimilarMovies(+id))
      }
    },[id])
  return (
    <MovieCard similarMovies={similarMovies} movieActors={movieActors} movieDetails={movieDetails} movieTrailer={movieTrailer} />
  )
}

export default Movie