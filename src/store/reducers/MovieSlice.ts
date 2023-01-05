import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../../services/moviesService";
import DefaultMovieProps from "../../types/movieTypes";
const movieService = new MoviesService();

interface MoviesProps {
  popularMovies: DefaultMovieProps[];
  nowPlayingMovies: DefaultMovieProps[];
  upcomingMovies:DefaultMovieProps[];
  isLoading: boolean;
  error: string;
}
const initialState: MoviesProps = {
  popularMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  isLoading: false,
  error: "",
};
export const fetchPopularMoives = createAsyncThunk(
  "movies/fetchPopularMoives",
  async (page: number) => {
    const response = await movieService.getPopular(page);
    return response;
  }
);
export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlayingMovies",
  async (region: string) => {
    const response = await movieService.getNowPlaying(region);
    return response;
  }
);
export const fetchUpcomingMovies = createAsyncThunk(
  "movies/upcomingMovies",
  async (page: number) => {
    const response = await movieService.getUpcoming(page);
    return response;
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularMoives.fulfilled.toString()]: (state: any, action: any) => {
      state.popularMovies = action.payload;
    },
    [fetchNowPlayingMovies.fulfilled.toString()]: (state: any, action: any) => {
      state.nowPlayingMovies = action.payload;
    },
    [fetchUpcomingMovies.fulfilled.toString()]: (state:any, action:any) => {
      state.upcomingMovies = action.payload
    }
  },
});
export default movieSlice.reducer;
