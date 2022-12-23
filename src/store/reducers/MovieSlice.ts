import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesService from "../../services/moviesService";

const movieService = new MoviesService();

interface MoviesProps {
  popularMovies: any;
  isLoading: boolean;
  error: string;
}
const initialState: MoviesProps = {
  popularMovies: [],
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
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularMoives.fulfilled.toString()]: (state: any, action: any) => {
      state.popularMovies = action.payload;
    },
  },
});
export default movieSlice.reducer;
