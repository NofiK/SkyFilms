import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../../services/moviesService";
import {DefaultMovieProps, MovieDetailsProps} from "../../types/movieTypes";

const movieService = new MoviesService();

interface MoviesProps {
  popularMovies: DefaultMovieProps[];
  nowPlayingMovies: DefaultMovieProps[];
  upcomingMovies:DefaultMovieProps[];
  topRatedMovies:DefaultMovieProps[];
  similarMovies:DefaultMovieProps[];
  searchedMovies:any;
  movieTrailer:any,
  movieDetails:any;
  isLoading: boolean;
  error: string;
}
const initialState: MoviesProps = {
  popularMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  searchedMovies:[],
  topRatedMovies:[],
  similarMovies:[],
  movieTrailer:[],
  movieDetails:{},
  isLoading: true,
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
    const response = await movieService.getMovieDetails(id);
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
export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async(page:number) => {
    const response = await movieService.getTopRated(page);
    return response;
  }
)
export const fetchSimilarMovies = createAsyncThunk(
  "movies/fetchSimilarMovies",
  async (id: number) => {
    const response = await movieService.getSimilar(id);
    return response;
  }
);
export const fetchSearchedMovies = createAsyncThunk(
  "movies/fetchSearchedMovies",
  async (query: string) => {
    const response = await movieService.searchMovies(query);
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
      state.isLoading = false;
    },
    [fetchPopularMoives.pending.toString()]: (state: any, action: any) => {
      state.isLoading = true;
    },
    [fetchNowPlayingMovies.fulfilled.toString()]: (state: any, action: any) => {
      state.nowPlayingMovies = action.payload
    },
    [fetchUpcomingMovies.fulfilled.toString()]: (state:any, action:any) => {
      state.upcomingMovies = action.payload
    },
    [fetchMovieDetails.fulfilled.toString()]: (state:any, action:any) => {
      state.movieDetails = action.payload
    },
    [fetchMovieTrailer.fulfilled.toString()]: (state:any, action:any) => {
      state.movieTrailer = action.payload
      state.isLoading = false;
    },
    [fetchMovieTrailer.pending.toString()]: (state:any, action:any) => {
      state.isLoading = true;
    },
    [fetchTopRatedMovies.fulfilled.toString()]: (state:any, action:any) =>{
      state.topRatedMovies = action.payload
    },
    [fetchSimilarMovies.fulfilled.toString()]: (state:any, action:any) =>{
      state.similarMovies = action.payload
    },
    [fetchSearchedMovies.fulfilled.toString()]: (state:any, action:any) =>{
      state.searchedMovies = action.payload
    }
  },
});
export default movieSlice.reducer;
