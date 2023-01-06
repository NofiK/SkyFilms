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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/store/reducers/MovieSlice */ \"./src/store/reducers/MovieSlice.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/movies/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Movie = ()=>{\n    var _movieTrailer_;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const movieDetails = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieDetails);\n    const movieTrailer = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieTrailer);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieDetails)(+id));\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieTrailer)(+id));\n        }\n    }, [\n        id\n    ]);\n    console.log(\"trailer\", movieTrailer);\n    console.log(movieDetails);\n    const onPlayerReady = (event)=>{\n    // event.target.pauseVideo()\n    };\n    const opts = {\n        height: \"700\",\n        width: \"100%\",\n        playerVars: {\n            autoplay: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().movieCard),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slashLine1)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 39,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"black\",\n                    height: 700,\n                    width: \"100%\"\n                },\n                children: movieTrailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    videoId: (_movieTrailer_ = movieTrailer[movieTrailer.length - 1]) === null || _movieTrailer_ === void 0 ? void 0 : _movieTrailer_.youtubeKey,\n                    opts: opts,\n                    onReady: onPlayerReady\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 40,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slashLine2)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().movieDescriptionBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().movieTitle),\n                                children: movieDetails.title\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 48,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    justifyContent: \"space-between\",\n                                    width: 1000\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Year\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Rate\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Country\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Genres\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Runtime\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Year\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 11\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Rate\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Country\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Genres\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Runtime\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                                lineNumber: 49,\n                                columnNumber: 10\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        style: {\n                            width: 800\n                        },\n                        src: movieDetails.backdrop,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n        lineNumber: 38,\n        columnNumber: 6\n    }, undefined);\n};\n_s(Movie, \"SB1RikDxasQn4xK9El8wJ8dNRCI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNEO0FBQ0U7QUFFYTtBQUNvQztBQUNqRDtBQUNhO0FBRXRELE1BQU1TLFFBQVEsSUFBTTtRQWdDSUM7O0lBL0JwQixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQixNQUFNQyxXQUFXWCx3REFBV0E7SUFDNUIsTUFBTVksZUFBZVgsZ0VBQWNBLENBQUMsQ0FBQ1ksUUFBUUEsTUFBTUMsWUFBWSxDQUFDRixZQUFZO0lBQzVFLE1BQU1MLGVBQWVOLGdFQUFjQSxDQUFDLENBQUNZLFFBQVFBLE1BQU1DLFlBQVksQ0FBQ1AsWUFBWTtJQUM1RVQsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLElBQUdXLElBQUc7WUFDSkUsU0FBU1QsaUZBQWlCQSxDQUFDLENBQUNPO1lBQzVCRSxTQUFTUixpRkFBaUJBLENBQUMsQ0FBQ007UUFDOUIsQ0FBQztJQUNILEdBQUU7UUFBQ0E7S0FBRztJQUVOTSxRQUFRQyxHQUFHLENBQUMsV0FBV1Q7SUFDdkJRLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixNQUFNSyxnQkFBeUMsQ0FBQ0MsUUFBVTtJQUN4RCw0QkFBNEI7SUFDOUI7SUFFQSxNQUFNQyxPQUE2QjtRQUNqQ0MsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFlBQVk7WUFDVkMsVUFBVTtRQUNaO0lBQ0Y7SUFFRixxQkFDRyw4REFBQ0M7UUFBUUMsV0FBV3JCLHNFQUFnQjs7MEJBQ3BDLDhEQUFDdUI7Z0JBQUdGLFdBQVdyQix1RUFBaUI7Ozs7OzswQkFDaEMsOERBQUN5QjtnQkFBSUMsT0FBTztvQkFBQ0MsaUJBQWdCO29CQUFTWCxRQUFPO29CQUFLQyxPQUFNO2dCQUFNOzBCQUM3RGQsOEJBQ0EsOERBQUNGLHFEQUFPQTtvQkFBQzJCLFNBQVN6QixDQUFBQSxpQkFBQUEsWUFBWSxDQUFDQSxhQUFhMEIsTUFBTSxHQUFDLEVBQUUsY0FBbkMxQiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBcUMyQixVQUFVO29CQUFFZixNQUFNQTtvQkFBTWdCLFNBQVNsQjs7Ozs7Ozs7Ozs7MEJBR3hGLDhEQUFDVTtnQkFBR0YsV0FBV3JCLHVFQUFpQjs7Ozs7OzBCQUNoQyw4REFBQ3lCO2dCQUFJSixXQUFXckIsZ0ZBQTBCOztrQ0FDeEMsOERBQUN5Qjs7MENBQ0EsOERBQUNTO2dDQUFHYixXQUFXckIsdUVBQWlCOzBDQUFHUSxhQUFhNEIsS0FBSzs7Ozs7OzBDQUNyRCw4REFBQ1g7Z0NBQUlDLE9BQU87b0NBQUNXLFNBQVE7b0NBQVFDLGdCQUFlO29DQUFpQnJCLE9BQU07Z0NBQUk7O2tEQUN0RSw4REFBQ1E7OzBEQUNDLDhEQUFDYzswREFBRTs7Ozs7OzBEQUNILDhEQUFDQTswREFBRTs7Ozs7OzBEQUNILDhEQUFDQTswREFBRTs7Ozs7OzBEQUNILDhEQUFDQTswREFBRTs7Ozs7OzBEQUNILDhEQUFDQTswREFBRTs7Ozs7Ozs7Ozs7O2tEQUVMLDhEQUFDZDs7MERBQ0QsOERBQUNjOzBEQUFFOzs7Ozs7MERBQ0QsOERBQUNBOzBEQUFFOzs7Ozs7MERBQ0gsOERBQUNBOzBEQUFFOzs7Ozs7MERBQ0gsOERBQUNBOzBEQUFFOzs7Ozs7MERBQ0gsOERBQUNBOzBEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVAsOERBQUNDO3dCQUFJZCxPQUFPOzRCQUFDVCxPQUFNO3dCQUFHO3dCQUFHd0IsS0FBS2pDLGFBQWFrQyxRQUFRO3dCQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakU7R0E1RE16Qzs7UUFDYVAsa0RBQVNBO1FBRVBDLG9EQUFXQTtRQUNQQyw0REFBY0E7UUFDZEEsNERBQWNBOzs7S0FMakNLO0FBOEROLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy9baWRdLnRzeD83NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3JjL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zcmMvaG9va3MvcmVkdXgnXG5pbXBvcnQgeyBmZXRjaE1vdmllRGV0YWlscywgZmV0Y2hNb3ZpZVRyYWlsZXIgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvcmVkdWNlcnMvTW92aWVTbGljZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgWW91VHViZSwgeyBZb3VUdWJlUHJvcHMgfSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuY29uc3QgTW92aWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXG4gICAgY29uc3QgbW92aWVEZXRhaWxzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubW92aWVSZWR1Y2VyLm1vdmllRGV0YWlscylcbiAgICBjb25zdCBtb3ZpZVRyYWlsZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tb3ZpZVJlZHVjZXIubW92aWVUcmFpbGVyKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgaWYoaWQpe1xuICAgICAgICBkaXNwYXRjaChmZXRjaE1vdmllRGV0YWlscygraWQpKVxuICAgICAgICBkaXNwYXRjaChmZXRjaE1vdmllVHJhaWxlcigraWQpKVxuICAgICAgfVxuICAgIH0sW2lkXSlcblxuICAgIGNvbnNvbGUubG9nKCd0cmFpbGVyJywgbW92aWVUcmFpbGVyKVxuICAgIGNvbnNvbGUubG9nKG1vdmllRGV0YWlscylcbiAgICBjb25zdCBvblBsYXllclJlYWR5OiBZb3VUdWJlUHJvcHNbJ29uUmVhZHknXSA9IChldmVudCkgPT4ge1xuICAgICAgLy8gZXZlbnQudGFyZ2V0LnBhdXNlVmlkZW8oKVxuICAgIH1cbiAgXG4gICAgY29uc3Qgb3B0czogWW91VHViZVByb3BzWydvcHRzJ10gPSB7XG4gICAgICBoZWlnaHQ6ICc3MDAnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgYXV0b3BsYXk6IDEsXG4gICAgICB9LFxuICAgIH07XG4gICAgXG4gIHJldHVybiAoXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllQ2FyZH0+XG4gICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5zbGFzaExpbmUxfT48L2hyPlxuICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidibGFjaycsIGhlaWdodDo3MDAsIHdpZHRoOicxMDAlJ319PlxuICAgICB7bW92aWVUcmFpbGVyICYmIChcbiAgICAgIDxZb3VUdWJlIHZpZGVvSWQ9e21vdmllVHJhaWxlclttb3ZpZVRyYWlsZXIubGVuZ3RoLTFdPy55b3V0dWJlS2V5fSBvcHRzPXtvcHRzfSBvblJlYWR5PXtvblBsYXllclJlYWR5fSAvPlxuICAgICAgKX1cbiAgICAgPC9kaXY+XG4gICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuc2xhc2hMaW5lMn0+PC9ocj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVEZXNjcmlwdGlvbkJveH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVUaXRsZX0+e21vdmllRGV0YWlscy50aXRsZX08L2gxPlxuICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIiwgd2lkdGg6MTAwMH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5ZZWFyPC9wPlxuICAgICAgICAgICAgPHA+UmF0ZTwvcD5cbiAgICAgICAgICAgIDxwPkNvdW50cnk8L3A+XG4gICAgICAgICAgICA8cD5HZW5yZXM8L3A+XG4gICAgICAgICAgICA8cD5SdW50aW1lPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+WWVhcjwvcD5cbiAgICAgICAgICAgIDxwPlJhdGU8L3A+XG4gICAgICAgICAgICA8cD5Db3VudHJ5PC9wPlxuICAgICAgICAgICAgPHA+R2VucmVzPC9wPlxuICAgICAgICAgICAgPHA+UnVudGltZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDo4MDB9fSBzcmM9e21vdmllRGV0YWlscy5iYWNrZHJvcH0gYWx0PVwiXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJmZXRjaE1vdmllVHJhaWxlciIsInN0eWxlcyIsIllvdVR1YmUiLCJNb3ZpZSIsIm1vdmllVHJhaWxlciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXNwYXRjaCIsIm1vdmllRGV0YWlscyIsInN0YXRlIiwibW92aWVSZWR1Y2VyIiwiY29uc29sZSIsImxvZyIsIm9uUGxheWVyUmVhZHkiLCJldmVudCIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJtb3ZpZUNhcmQiLCJociIsInNsYXNoTGluZTEiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInZpZGVvSWQiLCJsZW5ndGgiLCJ5b3V0dWJlS2V5Iiwib25SZWFkeSIsInNsYXNoTGluZTIiLCJtb3ZpZURlc2NyaXB0aW9uQm94IiwiaDEiLCJtb3ZpZVRpdGxlIiwidGl0bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwIiwiaW1nIiwic3JjIiwiYmFja2Ryb3AiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies/[id].tsx\n"));

/***/ })

});