import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducers/MovieSlice'
import actorReducer from './reducers/ActorSlice'
export const store = configureStore({
	reducer: {	
		movieReducer: movieReducer,
		actorReducer: actorReducer
	}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch