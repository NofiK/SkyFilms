import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../../services/moviesService";
import { MovieActrosProps } from "../../types/movieTypes";
const movieService = new MoviesService();

interface ActorsProps {
  movieActors: MovieActrosProps[];
  isLoading: boolean;
  error: string;
}
const initialState: ActorsProps = {
  movieActors: [],
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

export const actorSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieActors.fulfilled.toString()]: (state: any, action: any) => {
      state.movieActors = action.payload;
    },
  },
});
export default actorSlice.reducer;
