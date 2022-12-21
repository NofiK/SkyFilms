import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './reducers/MovieSlice'

export const store = configureStore({
	reducer: {	
		movieReducer: movieReducer
	}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch