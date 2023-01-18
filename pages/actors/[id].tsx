import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../src/hooks/redux'
import { fetchActorDetails, fetchActorMovies } from '../../src/store/reducers/ActorSlice'
import { AppDispatch } from '../../src/store/store'
import ActorCard from './ActorCard'

const Actor = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch<AppDispatch>()
    const actorDetails = useAppSelector(state=>state.actorReducer.actorDetails)
    const actorMovies = useAppSelector(state=>state.actorReducer.actorMovies)
    useEffect(()=>{
        if(id){
          dispatch(fetchActorDetails(+id))
          dispatch(fetchActorMovies(+id))
        }
      },[id])
  return (
    <>
    <ActorCard actorMovies={actorMovies} actorDetails={actorDetails}/>
    </>
  )
}

export default Actor