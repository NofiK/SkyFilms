import {createSlice} from '@reduxjs/toolkit'
interface MoviesProps{
  popularMovies:any;
  isLoading:boolean;
  error:string;
};
const initialState:MoviesProps = {
  popularMovies:["Assasin", "Green Book"],
  isLoading:false,
  error: '',
};
export const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{

    }
});
 export default movieSlice.reducer;