"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 2960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DR": () => (/* binding */ fetchActorDetails),
/* harmony export */   "E": () => (/* binding */ fetchActorMovies),
/* harmony export */   "PQ": () => (/* binding */ fetchMovieActors),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export actorSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_moviesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1906);


const movieService = new _services_moviesService__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
const initialState = {
    movieActors: [],
    actorDetails: {},
    actorMovies: [],
    isLoading: true,
    error: ""
};
const fetchMovieActors = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchMovieActors", async (id)=>{
    const response = await movieService.getMovieActors(id);
    return response;
});
const fetchActorDetails = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchActorDetails", async (id)=>{
    const response = await movieService.getActorDetails(id);
    return response;
});
const fetchActorMovies = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("movies/fetchActorMovies", async (id)=>{
    const response = await movieService.getActorMovies(id);
    return response;
});
const actorSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "actors",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovieActors.fulfilled.toString()]: (state, action)=>{
            state.movieActors = action.payload;
        },
        [fetchActorDetails.fulfilled.toString()]: (state, action)=>{
            state.actorDetails = action.payload;
        },
        [fetchActorMovies.fulfilled.toString()]: (state, action)=>{
            state.actorMovies = action.payload;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actorSlice.reducer);


/***/ })

};
;