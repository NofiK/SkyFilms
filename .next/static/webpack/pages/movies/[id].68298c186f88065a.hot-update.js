"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[id]",{

/***/ "./pages/movies/[id].tsx":
/*!*******************************!*\
  !*** ./pages/movies/[id].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/store/reducers/MovieSlice */ \"./src/store/reducers/MovieSlice.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/movies/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Movie = ()=>{\n    var _movieTrailer_;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const movieDetails = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieDetails);\n    const movieTrailer = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieTrailer);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieDetails)(+id));\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieTrailer)(+id));\n        }\n    }, [\n        id\n    ]);\n    console.log(\"trailer\", movieTrailer);\n    console.log(movieDetails);\n    const onPlayerReady = (event)=>{\n    // event.target.pauseVideo()\n    };\n    const opts = {\n        height: \"700\",\n        width: \"100%\",\n        playerVars: {\n            autoplay: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().movieCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slashLine1)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 40,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"black\",\n                    height: 700,\n                    width: \"100%\"\n                },\n                children: movieTrailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    videoId: (_movieTrailer_ = movieTrailer[movieTrailer.length - 1]) === null || _movieTrailer_ === void 0 ? void 0 : _movieTrailer_.youtubeKey,\n                    opts: opts,\n                    onReady: onPlayerReady\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 41,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slashLine2)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().movieDescriptionBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().movieTitle),\n                                children: movieDetails.title\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 49,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableRow),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn1),\n                                        children: \"Year\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn2),\n                                        children: movieDetails.release\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 50,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableRow),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn1),\n                                        children: \"Rate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn2),\n                                        children: [\n                                            movieDetails.rate.toString().slice(0, 3),\n                                            \"/10\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 54,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableRow),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn1),\n                                        children: \"Country\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            width: \"60%\",\n                                            textAlign: \"end\"\n                                        },\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn2),\n                                        children: movieDetails.countries.map((country)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    country.name,\n                                                    \", \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, undefined);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 58,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableRow),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn1),\n                                        children: \"Genres\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            width: \"60%\",\n                                            textAlign: \"end\"\n                                        },\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn2),\n                                        children: movieDetails.genres.map((genres)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    genres.name,\n                                                    \", \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, undefined);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 68,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableRow),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn1),\n                                        children: \"Runtime\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableColumn2),\n                                        children: movieDetails.runtime\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 78,\n                                columnNumber: 10\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        style: {\n                            width: 800\n                        },\n                        src: movieDetails.backdrop,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n        lineNumber: 39,\n        columnNumber: 6\n    }, undefined);\n};\n_s(Movie, \"SB1RikDxasQn4xK9El8wJ8dNRCI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzswQ0FHSCw4REFBQ3pCO2dDQUFJSixXQUFXckIscUVBQWU7O2tEQUM5Qiw4REFBQ3NDO3dDQUFFakIsV0FBV3JCLHlFQUFtQjtrREFBRTs7Ozs7O2tEQUNuQyw4REFBQ3NDO3dDQUFFWixPQUFPOzRDQUFDVCxPQUFNOzRDQUFPNEIsV0FBVTt3Q0FBSzt3Q0FBR3hCLFdBQVdyQix5RUFBbUI7a0RBQ3JFUSxhQUFhMkMsTUFBTSxDQUFDSixHQUFHLENBQUNJLENBQUFBLFNBQVM7NENBQ2hDLHFCQUNFLDhEQUFDRjs7b0RBQU1FLE9BQU9ELElBQUk7b0RBQUM7Ozs7Ozs7d0NBRXZCOzs7Ozs7Ozs7Ozs7MENBR0gsOERBQUN6QjtnQ0FBSUosV0FBV3JCLHFFQUFlOztrREFDOUIsOERBQUNzQzt3Q0FBRWpCLFdBQVdyQix5RUFBbUI7a0RBQUU7Ozs7OztrREFDbkMsOERBQUNzQzt3Q0FBRWpCLFdBQVdyQix5RUFBbUI7a0RBQUdRLGFBQWE0QyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTFELDhEQUFDQzt3QkFBSTNCLE9BQU87NEJBQUNULE9BQU07d0JBQUc7d0JBQUdxQyxLQUFLOUMsYUFBYStDLFFBQVE7d0JBQUVDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRTtHQTdFTXREOztRQUNhUCxrREFBU0E7UUFFUEMsb0RBQVdBO1FBQ1dDLDREQUFjQTtRQUNoQ0EsNERBQWNBOzs7S0FMakNLO0FBK0VOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy9baWRdLnRzeD83NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3JjL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zcmMvaG9va3MvcmVkdXgnXG5pbXBvcnQgeyBmZXRjaE1vdmllRGV0YWlscywgZmV0Y2hNb3ZpZVRyYWlsZXIgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvcmVkdWNlcnMvTW92aWVTbGljZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgWW91VHViZSwgeyBZb3VUdWJlUHJvcHMgfSBmcm9tICdyZWFjdC15b3V0dWJlJztcbmltcG9ydCB7IE1vdmllRGV0YWlsc1Byb3BzIH0gZnJvbSAnLi4vLi4vc3JjL3R5cGVzL21vdmllVHlwZXMnXG5cbmNvbnN0IE1vdmllID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKVxuICAgIGNvbnN0IG1vdmllRGV0YWlsczpNb3ZpZURldGFpbHNQcm9wcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1vdmllUmVkdWNlci5tb3ZpZURldGFpbHMpXG4gICAgY29uc3QgbW92aWVUcmFpbGVyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubW92aWVSZWR1Y2VyLm1vdmllVHJhaWxlcilcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIGlmKGlkKXtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hNb3ZpZURldGFpbHMoK2lkKSlcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hNb3ZpZVRyYWlsZXIoK2lkKSlcbiAgICAgIH1cbiAgICB9LFtpZF0pXG5cbiAgICBjb25zb2xlLmxvZygndHJhaWxlcicsIG1vdmllVHJhaWxlcilcbiAgICBjb25zb2xlLmxvZyhtb3ZpZURldGFpbHMpXG4gICAgY29uc3Qgb25QbGF5ZXJSZWFkeTogWW91VHViZVByb3BzWydvblJlYWR5J10gPSAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGV2ZW50LnRhcmdldC5wYXVzZVZpZGVvKClcbiAgICB9XG4gIFxuICAgIGNvbnN0IG9wdHM6IFlvdVR1YmVQcm9wc1snb3B0cyddID0ge1xuICAgICAgaGVpZ2h0OiAnNzAwJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgfSxcbiAgICB9O1xuICAgIFxuICByZXR1cm4gKFxuICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZUNhcmR9PlxuICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuc2xhc2hMaW5lMX0+PC9ocj5cbiAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonYmxhY2snLCBoZWlnaHQ6NzAwLCB3aWR0aDonMTAwJSd9fT5cbiAgICAge21vdmllVHJhaWxlciAmJiAoXG4gICAgICA8WW91VHViZSB2aWRlb0lkPXttb3ZpZVRyYWlsZXJbbW92aWVUcmFpbGVyLmxlbmd0aC0xXT8ueW91dHViZUtleX0gb3B0cz17b3B0c30gb25SZWFkeT17b25QbGF5ZXJSZWFkeX0gLz5cbiAgICAgICl9XG4gICAgIDwvZGl2PlxuICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLnNsYXNoTGluZTJ9PjwvaHI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllRGVzY3JpcHRpb25Cb3h9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVUaXRsZX0+e21vdmllRGV0YWlscy50aXRsZX08L2gxPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd30+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb2x1bW4xfT5ZZWFyPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMn0+e21vdmllRGV0YWlscy5yZWxlYXNlfTwvcD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd30+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb2x1bW4xfT5SYXRlPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMn0+e21vdmllRGV0YWlscy5yYXRlLnRvU3RyaW5nKCkuc2xpY2UoMCwzKX0vMTA8L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVSb3d9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMX0+Q291bnRyeTwvcD5cbiAgICAgICAgICA8cCBzdHlsZT17e3dpZHRoOic2MCUnLCB0ZXh0QWxpZ246J2VuZCd9fSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbHVtbjJ9PlxuICAgICAgICAgICAge21vdmllRGV0YWlscy5jb3VudHJpZXMubWFwKGNvdW50cnkgPT57XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+e2NvdW50cnkubmFtZX0sIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVSb3d9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMX0+R2VucmVzPC9wPlxuICAgICAgICAgIDxwIHN0eWxlPXt7d2lkdGg6JzYwJScsIHRleHRBbGlnbjonZW5kJ319IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMn0+XG4gICAgICAgICAgICB7bW92aWVEZXRhaWxzLmdlbnJlcy5tYXAoZ2VucmVzID0+e1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPntnZW5yZXMubmFtZX0sIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVSb3d9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMX0+UnVudGltZTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbHVtbjJ9Pnttb3ZpZURldGFpbHMucnVudGltZX08L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ODAwfX0gc3JjPXttb3ZpZURldGFpbHMuYmFja2Ryb3B9IGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+IFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImZldGNoTW92aWVEZXRhaWxzIiwiZmV0Y2hNb3ZpZVRyYWlsZXIiLCJzdHlsZXMiLCJZb3VUdWJlIiwiTW92aWUiLCJtb3ZpZVRyYWlsZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJtb3ZpZURldGFpbHMiLCJzdGF0ZSIsIm1vdmllUmVkdWNlciIsImNvbnNvbGUiLCJsb2ciLCJvblBsYXllclJlYWR5IiwiZXZlbnQiLCJvcHRzIiwiaGVpZ2h0Iiwid2lkdGgiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibW92aWVDYXJkIiwiaHIiLCJzbGFzaExpbmUxIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2aWRlb0lkIiwibGVuZ3RoIiwieW91dHViZUtleSIsIm9uUmVhZHkiLCJzbGFzaExpbmUyIiwibW92aWVEZXNjcmlwdGlvbkJveCIsImgxIiwibW92aWVUaXRsZSIsInRpdGxlIiwidGFibGVSb3ciLCJwIiwidGFibGVDb2x1bW4xIiwidGFibGVDb2x1bW4yIiwicmVsZWFzZSIsInJhdGUiLCJ0b1N0cmluZyIsInNsaWNlIiwidGV4dEFsaWduIiwiY291bnRyaWVzIiwibWFwIiwiY291bnRyeSIsInNwYW4iLCJuYW1lIiwiZ2VucmVzIiwicnVudGltZSIsImltZyIsInNyYyIsImJhY2tkcm9wIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[id].tsx\n"));

/***/ })

});