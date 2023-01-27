"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 5562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* unused harmony export useAppDispatch */
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);


const useAppDispatch = (/* unused pure expression or super */ null && (useDispatch));
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 1906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MoviesService {
    _apiKey = "efa6474dd16a64f01e1c0ea678996de6";
    _apiBase = "https://api.themoviedb.org/3/";
    _imgPath = "https://image.tmdb.org/t/p/original/";
    getResource = async (url)=>{
        let result = await fetch(url);
        if (!result.ok) {
            console.error(`Something went wrong with API call`);
        }
        return await result.json();
    };
    getPopular = async (page)=>{
        const res = await this.getResource(`${this._apiBase}/movie/popular?api_key=${this._apiKey}&language=en-US&page=${page}`);
        return res.results.map((movie)=>this._transcriptFilm(movie));
    };
    getNowPlaying = async (region)=>{
        const res = await this.getResource(`${this._apiBase}/movie/now_playing?api_key=${this._apiKey}&language=en-US&page=${1}&region=${region}`);
        return res.results.map((movie)=>this._transcriptFilm(movie));
    };
    getUpcoming = async (page)=>{
        const res = await this.getResource(`${this._apiBase}/movie/upcoming?api_key=${this._apiKey}&language=en-US&page=${page}`);
        return res.results.map((movie)=>this._transcriptFilm(movie));
    };
    getMovieDetails = async (id)=>{
        const res = await this.getResource(`${this._apiBase}/movie/${id}?api_key=${this._apiKey}&language=en-US`);
        return this._transcriptFilmDetails(res);
    };
    getTrailer = async (id)=>{
        const res = await this.getResource(`${this._apiBase}/movie/${id}/videos?api_key=${this._apiKey}&language=en-US`);
        return res.results.map((movie)=>this._transcriptFilmTrailer(movie));
    };
    getTopRated = async (page)=>{
        const res = await this.getResource(`${this._apiBase}/movie/top_rated?api_key=${this._apiKey}&language=en-US&page=${page}`);
        return res.results.map((movie)=>this._transcriptFilm(movie));
    };
    getSimilar = async (id)=>{
        const res = await this.getResource(`${this._apiBase}/movie/${id}/similar?api_key=${this._apiKey}&language=en-US&page=1`);
        return res.results.map((movie)=>this._transcriptFilm(movie));
    };
    getMovieActors = async (id)=>{
        const res = await this.getResource(`${this._apiBase}/movie/${id}/credits?api_key=${this._apiKey}&language=en-US`);
        return res.cast.map((actor)=>this._transcriptMovieActors(actor));
    };
    getActorDetails = async (id)=>{
        const res = await this.getResource(`${this._apiBase}/person/${id}?api_key=${this._apiKey}&language=en-US`);
        return this._transcriptActorDetail(res);
    };
    getActorMovies = async (id)=>{
        const res = await this.getResource(`${this._apiBase}/person/${id}/movie_credits?api_key=${this._apiKey}&language=en-US`);
        return res.cast.map((movie)=>this._transcriptFilm(movie));
    };
    searchMovies = async (query = "")=>{
        const res = await this.getResource(`${this._apiBase}search/movie?api_key=${this._apiKey}&query=${query}&language=en-US`);
        return res.results.map((movie)=>this._transcriptFilmDetails(movie));
    };
    _transcriptFilm(movie) {
        return {
            id: movie.id,
            title: movie.title,
            genres_ids: movie.genre_ids,
            description: movie.overview,
            rate: movie.vote_average,
            poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            miniPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            backdrop: this._imgPath + movie.backdrop_path
        };
    }
    _transcriptFilmDetails(movie) {
        return {
            id: movie.id,
            title: movie.title,
            tagline: movie.tagline,
            genres: movie.genres,
            description: movie.overview,
            rate: movie.vote_average,
            poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            miniPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            backdrop: this._imgPath + movie.backdrop_path,
            budget: movie.budget,
            countries: movie.production_countries,
            release: movie.release_date,
            runtime: movie.runtime
        };
    }
    _transcriptFilmTrailer(movie) {
        return {
            id: movie.id,
            youtubeKey: movie.key,
            type: movie.type,
            name: movie.name
        };
    }
    _transcriptMovieActors(actor) {
        return {
            id: actor.id,
            name: actor.name
        };
    }
    _transcriptActorDetail(actor) {
        return {
            id: actor.id,
            name: actor.name,
            biography: actor.biography,
            photo: this._imgPath + actor.profile_path,
            popularity: actor.popularity,
            birthday: actor.birthday,
            place_of_birth: actor.place_of_birth,
            deathday: actor.deathday,
            career: actor.known_for_department
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoviesService);


/***/ })

};
;