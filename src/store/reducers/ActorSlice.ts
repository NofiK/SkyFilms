import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../../services/moviesService";
import { MovieActrosProps } from "../../types/movieTypes";
const movieService = new MoviesService();

interface ActorsProps {
  movieActors: MovieActrosProps[];
  actorDetails:any;
  isLoading: boolean;
  error: string;
}
const initialState: ActorsProps = {
  movieActors: [],
  actorDetails:{},
  isLoading: true,
  error: "",
};
export const fetchMovieActors = createAsyncThunk(
  "movies/fetchMovieActors",
  async (id: number) => {
    const response = await movieService.getMovieActors(id);
    return response;
  }
);
export const fetchActorDetails = createAsyncThunk(
  "movies/fetchActorDetails",
  async (id: number) => {
    const response = await movieService.getActorDetails(id);
    return response;
  }
);

export const actorSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieActors.fulfilled.toString()]: (state: any, action: any) => {
      state.movieActors = action.payload;
    },
    [fetchActorDetails.fulfilled.toString()]: (state: any, action: any) => {
      state.actorDetails = action.payload;
    },
  },
});
export default actorSlice.reducer;
