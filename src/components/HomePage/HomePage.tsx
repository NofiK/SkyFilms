import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from './HomePage.module.scss'
import HomePageFilmDescription from './HomePageFilmDescription/HomePageFilmDescription'
import { useAppSelector } from '../../hooks/redux'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { fetchPopularMoives } from '../../store/reducers/MovieSlice'
const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const popularMovies = useAppSelector(state=>state.movieReducer.popularMovies);
  useEffect(() => {
    dispatch(fetchPopularMoives(2))
  },[])
  return (
 <>
<Head>
    <title>SkyFilms</title>
    <link rel="icon" href="/favicon.png" />
</Head>
  <div> 
    {popularMovies?.length > 0 && <img className={styles.backgroundIMG} src={"https://image.tmdb.org/t/p/original" + popularMovies[0].backdrop} alt="" />}
  </div>  
   <section className={styles.homePageContainer}>
    <HomePageFilmDescription />
   </section>
   </>
  )
}

export default HomePage