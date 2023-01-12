"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/HomePage/HomePageHeader/HomePageHeader.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/HomePage/HomePageHeader/HomePageHeader.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomePageHeader.module.scss */ \"./src/components/HomePage/HomePageHeader/HomePageHeader.module.scss\");\n/* harmony import */ var _HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/MovieSlice */ \"./src/store/reducers/MovieSlice.ts\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst HomePageHeader = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const popularMovies = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.movieReducer.popularMovies);\n    const isLoaded = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.movieReducer.isLoaded);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_4__.fetchPopularMoives)(1));\n    }, []);\n    const mainSlider = {\n        infinite: true,\n        speed: 1000,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        dots: false,\n        autoplay: true,\n        fade: true,\n        autoplaySpeed: 6000,\n        pauseOnHover: false\n    };\n    const secondarySlider = {\n        infinite: true,\n        dots: false,\n        speed: 500,\n        slidesToShow: 7,\n        slidesToScroll: 1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().homePageHeader),\n        children: [\n            !isLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: \"red\"\n                },\n                className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().backgroundIMG)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            isLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ...mainSlider,\n                className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mainSlider),\n                children: popularMovies.map((movie)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().backgroundIMGBox),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().backgroundIMG),\n                                    src: \"https://image.tmdb.org/t/p/original\" + movie.backdrop,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mainSliderDesription),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().filmDescriptionContainer),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().filmName),\n                                            children: movie.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().filmDescription),\n                                            children: movie.description.slice(0, 250) + \"...\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().filmRate),\n                                            children: [\n                                                movie.rate,\n                                                \"/10\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiFillStar, {\n                                                    style: {\n                                                        width: 20,\n                                                        height: 20,\n                                                        color: \"yellow\"\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buttonsContainer),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().watchButton),\n                                                    children: \"Watch Now\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().trailerButton),\n                                                    children: \"Trailer\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, movie.id, true, {\n                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().secondarySlider),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().moviesListSlider),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sliderLabel),\n                            children: \"Popular movies\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 10\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            ...secondarySlider,\n                            children: popularMovies.map((movie)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().movieCard),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: \"/movies/\".concat(movie.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                backgroundImage: \"url(\".concat(movie.miniPoster, \")\")\n                                            },\n                                            className: (_HomePageHeader_module_scss__WEBPACK_IMPORTED_MODULE_7___default().movieCardImage)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, movie.id, false, {\n                                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/src/components/HomePage/HomePageHeader/HomePageHeader.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePageHeader, \"xhfENjF/+6YZvj3QGlNxVVrir2o=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = HomePageHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePageHeader);\nvar _c;\n$RefreshReg$(_c, \"HomePageHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lUGFnZS9Ib21lUGFnZUhlYWRlci9Ib21lUGFnZUhlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDUztBQUNSO0FBRVk7QUFDa0I7QUFDdkM7QUFFVztBQUNmO0FBRTdCLE1BQU1TLGlCQUFpQixJQUFNOztJQUMzQixNQUFNQyxXQUFXUCx3REFBV0E7SUFDNUIsTUFBTVEsZ0JBQWdCUCw0REFBY0EsQ0FDbEMsQ0FBQ1EsUUFBVUEsTUFBTUMsWUFBWSxDQUFDRixhQUFhO0lBRTdDLE1BQU1HLFdBQVdWLDREQUFjQSxDQUFDLENBQUNRLFFBQVFBLE1BQU1DLFlBQVksQ0FBQ0MsUUFBUTtJQUNwRWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUyxTQUFTTCw4RUFBa0JBLENBQUM7SUFDOUIsR0FBRyxFQUFFO0lBQ0wsTUFBTVUsYUFBYTtRQUNqQkMsVUFBVSxJQUFJO1FBQ2RDLE9BQU87UUFDUEMsY0FBYztRQUNkQyxnQkFBZ0I7UUFDaEJDLE1BQU0sS0FBSztRQUNYQyxVQUFVLElBQUk7UUFDZEMsTUFBTSxJQUFJO1FBQ1ZDLGVBQWU7UUFDZkMsY0FBYyxLQUFLO0lBQ3JCO0lBQ0EsTUFBTUMsa0JBQWtCO1FBQ3RCVCxVQUFVLElBQUk7UUFDZEksTUFBSyxLQUFLO1FBQ1ZILE9BQU87UUFDUEMsY0FBYztRQUNkQyxnQkFBZ0I7SUFDcEI7SUFDRSxxQkFDRSw4REFBQ087UUFBSUMsV0FBV3pCLG1GQUFxQjs7WUFDbEMsQ0FBQ1ksMEJBQ0EsOERBQUNZO2dCQUFJRyxPQUFPO29CQUFDQyxZQUFXO2dCQUFLO2dCQUFHSCxXQUFXekIsa0ZBQW9COzs7Ozs7WUFJaEVZLDBCQUNDLDhEQUFDUixtREFBTUE7Z0JBQUUsR0FBR1MsVUFBVTtnQkFBRVksV0FBV3pCLCtFQUFpQjswQkFDbkRTLGNBQWNxQixHQUFHLENBQUMsQ0FBQ0MsUUFBNkI7b0JBQy9DLHFCQUNFLDhEQUFDUDs7MENBQ0MsOERBQUNBO2dDQUFJQyxXQUFXekIscUZBQXVCOzBDQUNyQyw0RUFBQ2lDO29DQUFJUixXQUFXekIsa0ZBQW9CO29DQUFFa0MsS0FBSyx3Q0FBd0NILE1BQU1JLFFBQVE7b0NBQUVDLEtBQUk7Ozs7Ozs7Ozs7OzBDQUl6Ryw4REFBQ1o7Z0NBQUlDLFdBQVd6Qix5RkFBMkI7MENBQ3pDLDRFQUFDc0M7b0NBQVFiLFdBQVd6Qiw2RkFBK0I7O3NEQUNqRCw4REFBQ3dDOzRDQUFHZixXQUFXekIsNkVBQWU7c0RBQUcrQixNQUFNVyxLQUFLOzs7Ozs7c0RBQzVDLDhEQUFDQzs0Q0FBRWxCLFdBQVd6QixvRkFBc0I7c0RBQ2pDK0IsTUFBTWMsV0FBVyxDQUFDQyxLQUFLLENBQUMsR0FBRyxPQUFPOzs7Ozs7c0RBRXJDLDhEQUFDSDs0Q0FBRWxCLFdBQVd6Qiw2RUFBZTs7Z0RBQzFCK0IsTUFBTWlCLElBQUk7Z0RBQUM7Z0RBQUk7OERBQ2hCLDhEQUFDM0Msc0RBQVVBO29EQUNUc0IsT0FBTzt3REFBRXNCLE9BQU87d0RBQUlDLFFBQVE7d0RBQUlDLE9BQU87b0RBQVM7Ozs7Ozs7Ozs7OztzREFHcEQsOERBQUMzQjs0Q0FBSUMsV0FBV3pCLHFGQUF1Qjs7OERBQ3JDLDhEQUFDcUQ7b0RBQU81QixXQUFXekIsZ0ZBQWtCOzhEQUFFOzs7Ozs7OERBQ3ZDLDhEQUFDcUQ7b0RBQU81QixXQUFXekIsa0ZBQW9COzhEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBcEJ2QytCLE1BQU15QixFQUFFOzs7OztnQkEwQnRCOzs7Ozs7MEJBS0YsOERBQUNoQztnQkFBSUMsV0FBV3pCLG9GQUFzQjswQkFDcEMsNEVBQUN3QjtvQkFBSUMsV0FBV3pCLHFGQUF1Qjs7c0NBQ3RDLDhEQUFDMEQ7NEJBQUdqQyxXQUFXekIsZ0ZBQWtCO3NDQUFFOzs7Ozs7c0NBQ3BDLDhEQUFDSSxtREFBTUE7NEJBQUUsR0FBR21CLGVBQWU7c0NBQ3hCZCxjQUFjcUIsR0FBRyxDQUFDLENBQUNDLFFBQTZCO2dDQUMvQyxxQkFDRSw4REFBQ1A7b0NBQW1CQyxXQUFXekIsOEVBQWdCOzhDQUMvQyw0RUFBQ00sa0RBQUlBO3dDQUFDdUQsTUFBTSxXQUFvQixPQUFUOUIsTUFBTXlCLEVBQUU7a0RBQzdCLDRFQUFDaEM7NENBQUlHLE9BQU87Z0RBQUNtQyxpQkFBaUIsT0FBd0IsT0FBakIvQixNQUFNZ0MsVUFBVSxFQUFDOzRDQUFFOzRDQUFHdEMsV0FBV3pCLG1GQUFxQjs7Ozs7Ozs7Ozs7bUNBRm5GK0IsTUFBTXlCLEVBQUU7Ozs7OzRCQU10Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVjtHQXZGTWpEOztRQUNhTixvREFBV0E7UUFDTkMsd0RBQWNBO1FBR25CQSx3REFBY0E7OztLQUwzQks7QUF5Rk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvSG9tZVBhZ2VIZWFkZXIvSG9tZVBhZ2VIZWFkZXIudHN4PzcyOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ib21lUGFnZUhlYWRlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy9yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hQb3B1bGFyTW9pdmVzIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3JlZHVjZXJzL01vdmllU2xpY2VcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQge0RlZmF1bHRNb3ZpZVByb3BzfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvbW92aWVUeXBlc1wiO1xuaW1wb3J0IHsgQWlGaWxsU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSG9tZVBhZ2VIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG4gIGNvbnN0IHBvcHVsYXJNb3ZpZXMgPSB1c2VBcHBTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLm1vdmllUmVkdWNlci5wb3B1bGFyTW92aWVzXG4gICk7XG4gIGNvbnN0IGlzTG9hZGVkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUubW92aWVSZWR1Y2VyLmlzTG9hZGVkKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUG9wdWxhck1vaXZlcygxKSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgbWFpblNsaWRlciA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogMTAwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgZG90czogZmFsc2UsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgZmFkZTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiA2MDAwLFxuICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gIH07XG4gIGNvbnN0IHNlY29uZGFyeVNsaWRlciA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBkb3RzOmZhbHNlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiA3LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxufTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVQYWdlSGVhZGVyfT5cbiAgICAgIHshaXNMb2FkZWQgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDoncmVkJ319IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmRJTUd9PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7aXNMb2FkZWQgJiYgKFxuICAgICAgICA8U2xpZGVyIHsuLi5tYWluU2xpZGVyfSBjbGFzc05hbWU9e3N0eWxlcy5tYWluU2xpZGVyfT5cbiAgICAgICAge3BvcHVsYXJNb3ZpZXMubWFwKChtb3ZpZTogRGVmYXVsdE1vdmllUHJvcHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kSU1HQm94fT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmRJTUd9IHNyYz17XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbFwiICsgbW92aWUuYmFja2Ryb3B9IGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluU2xpZGVyRGVzcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZmlsbURlc2NyaXB0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5maWxtTmFtZX0+e21vdmllLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maWxtRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICB7bW92aWUuZGVzY3JpcHRpb24uc2xpY2UoMCwgMjUwKSArIFwiLi4uXCJ9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maWxtUmF0ZX0+XG4gICAgICAgICAgICAgICAgICAgIHttb3ZpZS5yYXRlfS8xMHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAsIGhlaWdodDogMjAsIGNvbG9yOiBcInllbGxvd1wiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLndhdGNoQnV0dG9ufT5XYXRjaCBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50cmFpbGVyQnV0dG9ufT5UcmFpbGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICAgICl9XG4gICAgICBcbiAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kYXJ5U2xpZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZXNMaXN0U2xpZGVyfT5cbiAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJMYWJlbH0+UG9wdWxhciBtb3ZpZXM8L2gzPlxuICAgICAgICA8U2xpZGVyIHsuLi5zZWNvbmRhcnlTbGlkZXJ9ID5cbiAgICAgICAgICB7cG9wdWxhck1vdmllcy5tYXAoKG1vdmllOiBEZWZhdWx0TW92aWVQcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZUNhcmR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL21vdmllcy8ke21vdmllLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttb3ZpZS5taW5pUG9zdGVyfSlgfX0gY2xhc3NOYW1lPXtzdHlsZXMubW92aWVDYXJkSW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImZldGNoUG9wdWxhck1vaXZlcyIsIlNsaWRlciIsIkFpRmlsbFN0YXIiLCJMaW5rIiwiSG9tZVBhZ2VIZWFkZXIiLCJkaXNwYXRjaCIsInBvcHVsYXJNb3ZpZXMiLCJzdGF0ZSIsIm1vdmllUmVkdWNlciIsImlzTG9hZGVkIiwibWFpblNsaWRlciIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImRvdHMiLCJhdXRvcGxheSIsImZhZGUiLCJhdXRvcGxheVNwZWVkIiwicGF1c2VPbkhvdmVyIiwic2Vjb25kYXJ5U2xpZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaG9tZVBhZ2VIZWFkZXIiLCJzdHlsZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSU1HIiwibWFwIiwibW92aWUiLCJiYWNrZ3JvdW5kSU1HQm94IiwiaW1nIiwic3JjIiwiYmFja2Ryb3AiLCJhbHQiLCJtYWluU2xpZGVyRGVzcmlwdGlvbiIsInNlY3Rpb24iLCJmaWxtRGVzY3JpcHRpb25Db250YWluZXIiLCJoMSIsImZpbG1OYW1lIiwidGl0bGUiLCJwIiwiZmlsbURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzbGljZSIsImZpbG1SYXRlIiwicmF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJidXR0b25zQ29udGFpbmVyIiwiYnV0dG9uIiwid2F0Y2hCdXR0b24iLCJ0cmFpbGVyQnV0dG9uIiwiaWQiLCJtb3ZpZXNMaXN0U2xpZGVyIiwiaDMiLCJzbGlkZXJMYWJlbCIsIm1vdmllQ2FyZCIsImhyZWYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtaW5pUG9zdGVyIiwibW92aWVDYXJkSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/HomePage/HomePageHeader/HomePageHeader.tsx\n"));

/***/ })

});