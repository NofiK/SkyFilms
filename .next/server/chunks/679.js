"use strict";
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 4679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$7": () => (/* binding */ fetchSearchedMovies),
/* harmony export */   "AW": () => (/* binding */ fetchTopRatedMovies),
/* harmony export */   "Q7": () => (/* binding */ fetchNowPlayingMovies),
/* harmony export */   "Y5": () => (/* binding */ fetchMovieDetails),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "by": () => (/* binding */ fetchPopularMoives),
/* harmony export */   "lC": () => (/* binding */ movieSlice),
/* harmony export */   "lJ": () => (/* binding */ fetchSimilarMovies),
/* harmony export */   "oO": () => (/* binding */ fetchMovieTrailer),
/* harmony export */   "y": () => (/* binding */ fetchUpcomingMovies)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_moviesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1906);


const movieService = new _services_moviesService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
const initialState = {
    popularMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
    searchedMovies: [],
    topRatedMovies: [],
    similarMovies: [],
    movieTrailer: [],
    movieDetails: {},
    isLogged: false,
    isLoading: true,
    error: ""
};
const fetchPopularMoives = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchPopularMoives", async (page)=>{
    const response = await movieService.getPopular(page);
    return response;
});
const fetchNowPlayingMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchNowPlayingMovies", async (region)=>{
    const response = await movieService.getNowPlaying(region);
    return response;
});
const fetchUpcomingMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/upcomingMovies", async (page)=>{
    const response = await movieService.getUpcoming(page);
    return response;
});
const fetchMovieDetails = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchMovieDetails", async (id)=>{
    const response = await movieService.getMovieDetails(id);
    return response;
});
const fetchMovieTrailer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchMovieTrailer", async (id)=>{
    const response = await movieService.getTrailer(id);
    return response;
});
const fetchTopRatedMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchTopRatedMovies", async (page)=>{
    const response = await movieService.getTopRated(page);
    return response;
});
const fetchSimilarMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchSimilarMovies", async (id)=>{
    const response = await movieService.getSimilar(id);
    return response;
});
const fetchSearchedMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchSearchedMovies", async (query)=>{
    const response = await movieService.searchMovies(query);
    return response;
});
const movieSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "movies",
    initialState,
    reducers: {
        login (state, action) {
            state.isLogged = action.payload;
        }
    },
    extraReducers: {
        [fetchPopularMoives.fulfilled.toString()]: (state, action)=>{
            state.popularMovies = action.payload;
            state.isLoading = false;
        },
        [fetchPopularMoives.pending.toString()]: (state, action)=>{
            state.isLoading = true;
        },
        [fetchNowPlayingMovies.fulfilled.toString()]: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        [fetchUpcomingMovies.fulfilled.toString()]: (state, action)=>{
            state.upcomingMovies = action.payload;
        },
        [fetchMovieDetails.fulfilled.toString()]: (state, action)=>{
            state.movieDetails = action.payload;
        },
        [fetchMovieTrailer.fulfilled.toString()]: (state, action)=>{
            state.movieTrailer = action.payload;
            state.isLoading = false;
        },
        [fetchMovieTrailer.pending.toString()]: (state, action)=>{
            state.isLoading = true;
        },
        [fetchTopRatedMovies.fulfilled.toString()]: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        [fetchSimilarMovies.fulfilled.toString()]: (state, action)=>{
            state.similarMovies = action.payload;
        },
        [fetchSearchedMovies.fulfilled.toString()]: (state, action)=>{
            state.searchedMovies = action.payload;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieSlice.reducer);


/***/ })

};
;