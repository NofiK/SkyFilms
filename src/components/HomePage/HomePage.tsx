import React from 'react'
import Head from 'next/head'
import styles from './HomePage.module.scss'
import HomePageFilmDescription from './HomePageFilmDescription/HomePageFilmDescription'
const HomePage = () => {
  return (
 <>
<Head>
    <title>SkyFilms</title>
    <link rel="icon" href="/favicon.png" />
</Head>
  <div> 
    <img className={styles.backgroundIMG} src="https://ic.c4assets.com/brands/star-wars-episode-ix-the-rise-of-skywalker/1179c2e5-c457-404a-a8df-3dd4a4650725.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90{&resize}" alt="" />
  </div>  
   <section className={styles.homePageContainer}>
    <HomePageFilmDescription />
   </section>
   </>
  )
}

export default HomePage