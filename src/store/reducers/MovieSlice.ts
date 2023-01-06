import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../../services/moviesService";
import {DefaultMovieProps, MovieDetailsProps} from "../../types/movieTypes";

const movieService = new MoviesService();

interface MoviesProps {
  popularMovies: DefaultMovieProps[];
  nowPlayingMovies: DefaultMovieProps[];
  upcomingMovies:DefaultMovieProps[];
  movieTrailer:any,
  movieDetails:any;
  isLoading: boolean;
  error: string;
}
const initialState: MoviesProps = {
  popularMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  movieTrailer:[],
  movieDetails:{},
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
export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id: number) => {
    const response = await movieService.getDetails(id);
    return response;
  }
);
export const fetchMovieTrailer = createAsyncThunk(
  "movies/fetchMovieTrailer",
  async (id: number) => {
    const response = await movieService.getTrailer(id);
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
    },
    [fetchMovieDetails.fulfilled.toString()]: (state:any, action:any) => {
      state.movieDetails = action.payload
    },
    [fetchMovieTrailer.fulfilled.toString()]: (state:any, action:any) => {
      state.movieTrailer = action.payload
    }
  },
});
export default movieSlice.reducer;
