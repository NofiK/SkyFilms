import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../src/hooks/redux'
import { fetchActorDetails } from '../../src/store/reducers/ActorSlice'
import { AppDispatch } from '../../src/store/store'

const Actor = () => {
    const router = useRouter()
    const { id } = router.query
    const dispatch = useDispatch<AppDispatch>()
    const actorDetails = useAppSelector(state=>state.actorReducer.actorDetails)
    useEffect(()=>{
        if(id){
          dispatch(fetchActorDetails(+id))
        }
      },[id])
      console.log(actorDetails)
  return (
    <div>Name: {actorDetails.name}</div>
  )
}

export default Actor