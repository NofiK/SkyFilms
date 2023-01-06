import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../src/store/store'
import { useAppSelector } from '../../src/hooks/redux'
import { fetchMovieDetails, fetchMovieTrailer } from '../../src/store/reducers/MovieSlice'
import { MovieDetailsProps } from '../../src/types/movieTypes'
import MovieCard from './MovieCard'

const Movie = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch<AppDispatch>()
    const movieDetails:MovieDetailsProps = useAppSelector((state)=>state.movieReducer.movieDetails)
    const movieTrailer = useAppSelector((state)=>state.movieReducer.movieTrailer)
    useEffect(()=>{
      if(id){
        dispatch(fetchMovieDetails(+id))
        dispatch(fetchMovieTrailer(+id))
      }
    },[id])

  return (
    <MovieCard movieDetails={movieDetails} movieTrailer={movieTrailer} />
  )
}

export default Movie