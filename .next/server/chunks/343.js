exports.id = 343;
exports.ids = [343];
exports.modules = {

/***/ 8963:
/***/ ((module) => {

// Exports
module.exports = {
	"moviesSlider": "styles_moviesSlider__oGF1X",
	"sliderContainer": "styles_sliderContainer__2_upA",
	"movieCard": "styles_movieCard__A_Gud",
	"movieCardImage": "styles_movieCardImage__zls_s",
	"countryFlag": "styles_countryFlag__NsiRN",
	"sliderLabel": "styles_sliderLabel__XN66p",
	"movieName": "styles_movieName__C3u3W",
	"movieRate": "styles_movieRate___sfyF",
	"starIcon": "styles_starIcon__54s3s"
};


/***/ }),

/***/ 9343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8963);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






const MovieSlider = ({ movies , sliderLabel , region , slidesToScroll =1  })=>{
    const movieListSlider = {
        infinite: true,
        dots: false,
        speed: 1300,
        slidesToShow: 5,
        slidesToScroll: slidesToScroll,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sliderContainer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().moviesSlider),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sliderLabel),
                    children: [
                        sliderLabel,
                        region && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().countryFlag),
                            src: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${region}.svg`
                        })
                    ]
                }),
                movies && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                    ...movieListSlider,
                    children: movies.map((movie)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: `/movies/${movie.id}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().movieCard),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundImage: `url(${movie.poster === "https://image.tmdb.org/t/p/w500null" ? "https://i.pinimg.com/originals/60/88/0e/60880ef799bb1edd172d645c39906c29.jpg" : movie.poster})`
                                        },
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().movieCardImage),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                position: "relative",
                                                top: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().movieRate),
                                                    children: movie.rate.toString().slice(0, 3)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillStar, {
                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().starIcon)
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().movieName),
                                        children: movie.title
                                    })
                                ]
                            })
                        }, movie.id);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieSlider);


/***/ })

};
;