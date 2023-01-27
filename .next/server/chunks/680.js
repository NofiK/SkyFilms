exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 5901:
/***/ ((module) => {

// Exports
module.exports = {
	"slashLine1": "styles_slashLine1___gDaa",
	"slashLine2": "styles_slashLine2__6ZHPA",
	"movieTitle": "styles_movieTitle__85yrQ",
	"movieDescriptionBox": "styles_movieDescriptionBox__u4Gnv",
	"tableColumn1": "styles_tableColumn1__Ruanv",
	"tableColumn2": "styles_tableColumn2__Q0yPF",
	"tableRow": "styles_tableRow__BnTE8",
	"movieImg": "styles_movieImg__VvH9B",
	"navigateBack": "styles_navigateBack__Z_E9n",
	"movieActor": "styles_movieActor__3nLqj",
	"loadingSpinner": "styles_loadingSpinner__spT7i",
	"spinner": "styles_spinner__uS5RZ",
	"movieDescription": "styles_movieDescription__ha9rt"
};


/***/ }),

/***/ 3680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5901);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9294);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_hooks_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5562);
/* harmony import */ var _src_components_MovieSlider_MovieSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9343);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);









const MovieCard = ({ movieTrailer , movieDetails , movieActors , similarMovies  })=>{
    var _movieTrailer_, _movieDetails_release, _movieDetails_rate, _movieDetails_countries, _movieDetails_countries1, _movieDetails_genres, _movieDetails_genres1, _movieActors_slice;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const onPlayerReady = (event)=>{};
    const isLoading = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_5__/* .useAppSelector */ .C)((state)=>state.movieReducer.isLoading);
    const opts = {
        height: "700",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().movieCard),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineRollback, {
                size: 55,
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navigateBack),
                onClick: ()=>router.back()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().slashLine1)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    backgroundColor: "black",
                    height: 700,
                    width: "100%"
                },
                children: [
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loadingScreen),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loadingSpinner)
                        })
                    }),
                    movieTrailer && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_youtube__WEBPACK_IMPORTED_MODULE_2___default()), {
                        videoId: (_movieTrailer_ = movieTrailer[movieTrailer.length - 1]) === null || _movieTrailer_ === void 0 ? void 0 : _movieTrailer_.youtubeKey,
                        opts: opts,
                        onReady: onPlayerReady
                    }, Date.now())
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().slashLine2)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().movieDescriptionBox),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            width: "100%"
                        },
                        children: [
                            (movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.title) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().movieTitle),
                                children: movieDetails.title
                            }),
                            (movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.release) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn1),
                                        children: "Year:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn2),
                                        children: movieDetails === null || movieDetails === void 0 ? void 0 : (_movieDetails_release = movieDetails.release) === null || _movieDetails_release === void 0 ? void 0 : _movieDetails_release.slice(0, 4)
                                    })
                                ]
                            }),
                            (movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.rate) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn1),
                                        children: "Rate:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn2),
                                        children: [
                                            movieDetails === null || movieDetails === void 0 ? void 0 : (_movieDetails_rate = movieDetails.rate) === null || _movieDetails_rate === void 0 ? void 0 : _movieDetails_rate.toString().slice(0, 3),
                                            "/10",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                style: {
                                                    width: 40,
                                                    position: "relative",
                                                    top: 3
                                                },
                                                src: "/imdb.png",
                                                alt: ""
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (movieDetails === null || movieDetails === void 0 ? void 0 : (_movieDetails_countries = movieDetails.countries) === null || _movieDetails_countries === void 0 ? void 0 : _movieDetails_countries.length) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn1),
                                        children: "Country:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            width: "60%",
                                            textAlign: "end"
                                        },
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn2),
                                        children: movieDetails === null || movieDetails === void 0 ? void 0 : (_movieDetails_countries1 = movieDetails.countries) === null || _movieDetails_countries1 === void 0 ? void 0 : _movieDetails_countries1.map((country)=>{
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    country.name,
                                                    movieDetails.countries.indexOf(country) === movieDetails.countries.length - 1 ? "" : ", "
                                                ]
                                            }, country.iso_3166_1);
                                        })
                                    })
                                ]
                            }),
                            (movieDetails === null || movieDetails === void 0 ? void 0 : (_movieDetails_genres = movieDetails.genres) === null || _movieDetails_genres === void 0 ? void 0 : _movieDetails_genres.length) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn1),
                                        children: "Genres:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            width: "60%",
                                            textAlign: "end"
                                        },
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn2),
                                        children: movieDetails === null || movieDetails === void 0 ? void 0 : (_movieDetails_genres1 = movieDetails.genres) === null || _movieDetails_genres1 === void 0 ? void 0 : _movieDetails_genres1.map((genre)=>{
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    genre.name,
                                                    movieDetails.genres.indexOf(genre) === movieDetails.genres.length - 1 ? "" : ", ",
                                                    " "
                                                ]
                                            }, genre.id);
                                        })
                                    })
                                ]
                            }),
                            (movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.runtime) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn1),
                                        children: "Runtime:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn2),
                                        children: [
                                            movieDetails.runtime,
                                            " minutes"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn1),
                                        children: "Actors:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            width: "60%",
                                            textAlign: "end"
                                        },
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableColumn2),
                                        children: (_movieActors_slice = movieActors === null || movieActors === void 0 ? void 0 : movieActors.slice(0, 7)) === null || _movieActors_slice === void 0 ? void 0 : _movieActors_slice.map((actor)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: `/actors/${actor.id}`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().movieActor),
                                                    children: [
                                                        actor.name,
                                                        movieActors.indexOf(actor) === 6 ? "" : ", "
                                                    ]
                                                })
                                            }, actor.id);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().movieDescription),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Description"
                                    }),
                                    movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.description
                                ]
                            })
                        ]
                    }),
                    (movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.backdrop) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().movieImg),
                        src: (movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.backdrop) === "https://image.tmdb.org/t/p/original/null" ? "https://i.pinimg.com/originals/60/88/0e/60880ef799bb1edd172d645c39906c29.jpg" : movieDetails === null || movieDetails === void 0 ? void 0 : movieDetails.backdrop,
                        alt: ""
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_MovieSlider_MovieSlider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                movies: similarMovies,
                sliderLabel: `Similar movies`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieCard);


/***/ })

};
;