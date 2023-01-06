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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/store/reducers/MovieSlice */ \"./src/store/reducers/MovieSlice.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./pages/movies/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Movie = ()=>{\n    var _movieTrailer_;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const movieDetails = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieDetails);\n    const movieTrailer = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieTrailer);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieDetails)(+id));\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieTrailer)(+id));\n        }\n    }, [\n        id\n    ]);\n    console.log(\"trailer\", movieTrailer);\n    console.log(movieDetails);\n    const onPlayerReady = (event)=>{\n        console.log(\"ready\");\n        event.target.pauseVideo();\n    };\n    const opts = {\n        height: \"700\",\n        width: \"100%\",\n        playerVars: {\n            autoplay: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().movieCard),\n            children: [\n                movieTrailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    videoId: (_movieTrailer_ = movieTrailer[movieTrailer.length - 1]) === null || _movieTrailer_ === void 0 ? void 0 : _movieTrailer_.youtubeKey,\n                    opts: opts,\n                    onReady: onPlayerReady\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().slashLine)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Movie Id: \",\n                        id\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"Movie Name: \",\n                        movieDetails.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n            lineNumber: 39,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_s(Movie, \"SB1RikDxasQn4xK9El8wJ8dNRCI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNEO0FBQ0U7QUFFYTtBQUNvQztBQUNqRDtBQUNhO0FBRXRELE1BQU1TLFFBQVEsSUFBTTtRQStCSUM7O0lBOUJwQixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFVSxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQixNQUFNQyxXQUFXWCx3REFBV0E7SUFDNUIsTUFBTVksZUFBZVgsZ0VBQWNBLENBQUMsQ0FBQ1ksUUFBUUEsTUFBTUMsWUFBWSxDQUFDRixZQUFZO0lBQzVFLE1BQU1MLGVBQWVOLGdFQUFjQSxDQUFDLENBQUNZLFFBQVFBLE1BQU1DLFlBQVksQ0FBQ1AsWUFBWTtJQUM1RVQsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLElBQUdXLElBQUc7WUFDSkUsU0FBU1QsaUZBQWlCQSxDQUFDLENBQUNPO1lBQzVCRSxTQUFTUixpRkFBaUJBLENBQUMsQ0FBQ007UUFDOUIsQ0FBQztJQUNILEdBQUU7UUFBQ0E7S0FBRztJQUVOTSxRQUFRQyxHQUFHLENBQUMsV0FBV1Q7SUFDdkJRLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixNQUFNSyxnQkFBeUMsQ0FBQ0MsUUFBVTtRQUN4REgsUUFBUUMsR0FBRyxDQUFDO1FBQ1pFLE1BQU1DLE1BQU0sQ0FBQ0MsVUFBVTtJQUN6QjtJQUVBLE1BQU1DLE9BQTZCO1FBQ2pDQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsWUFBWTtZQUNWQyxVQUFVO1FBQ1o7SUFDRjtJQUVGLHFCQUFRO2tCQUNMLDRFQUFDQztZQUFRQyxXQUFXdkIsc0VBQWdCOztnQkFDbkNHLDhCQUNBLDhEQUFDRixxREFBT0E7b0JBQUN3QixTQUFTdEIsQ0FBQUEsaUJBQUFBLFlBQVksQ0FBQ0EsYUFBYXVCLE1BQU0sR0FBQyxFQUFFLGNBQW5DdkIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQXFDd0IsVUFBVTtvQkFBRVYsTUFBTUE7b0JBQU1XLFNBQVNmOzs7Ozs7OEJBRXhGLDhEQUFDZ0I7b0JBQUdOLFdBQVd2QixzRUFBZ0I7Ozs7Ozs4QkFDL0IsOERBQUMrQjs7d0JBQUc7d0JBQVcxQjs7Ozs7Ozs4QkFDZiw4REFBQzBCOzt3QkFBRzt3QkFBYXZCLGFBQWF3QixLQUFLOzs7Ozs7Ozs7Ozs7OztBQUt6QztHQXhDTTlCOztRQUNhUCxrREFBU0E7UUFFUEMsb0RBQVdBO1FBQ1BDLDREQUFjQTtRQUNkQSw0REFBY0E7OztLQUxqQ0s7QUEwQ04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzL1tpZF0udHN4Pzc0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL3NyYy9ob29rcy9yZWR1eCdcbmltcG9ydCB7IGZldGNoTW92aWVEZXRhaWxzLCBmZXRjaE1vdmllVHJhaWxlciB9IGZyb20gJy4uLy4uL3NyYy9zdG9yZS9yZWR1Y2Vycy9Nb3ZpZVNsaWNlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcbmltcG9ydCBZb3VUdWJlLCB7IFlvdVR1YmVQcm9wcyB9IGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xuXG5jb25zdCBNb3ZpZSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcbiAgICBjb25zdCBtb3ZpZURldGFpbHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tb3ZpZVJlZHVjZXIubW92aWVEZXRhaWxzKVxuICAgIGNvbnN0IG1vdmllVHJhaWxlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1vdmllUmVkdWNlci5tb3ZpZVRyYWlsZXIpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBpZihpZCl7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoTW92aWVEZXRhaWxzKCtpZCkpXG4gICAgICAgIGRpc3BhdGNoKGZldGNoTW92aWVUcmFpbGVyKCtpZCkpXG4gICAgICB9XG4gICAgfSxbaWRdKVxuXG4gICAgY29uc29sZS5sb2coJ3RyYWlsZXInLCBtb3ZpZVRyYWlsZXIpXG4gICAgY29uc29sZS5sb2cobW92aWVEZXRhaWxzKVxuICAgIGNvbnN0IG9uUGxheWVyUmVhZHk6IFlvdVR1YmVQcm9wc1snb25SZWFkeSddID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVhZHknKVxuICAgICAgZXZlbnQudGFyZ2V0LnBhdXNlVmlkZW8oKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IG9wdHM6IFlvdVR1YmVQcm9wc1snb3B0cyddID0ge1xuICAgICAgaGVpZ2h0OiAnNzAwJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgfSxcbiAgICB9O1xuICAgIFxuICByZXR1cm4gKDw+XG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLm1vdmllQ2FyZH0+XG4gICAgIHttb3ZpZVRyYWlsZXIgJiYgKFxuICAgICAgPFlvdVR1YmUgdmlkZW9JZD17bW92aWVUcmFpbGVyW21vdmllVHJhaWxlci5sZW5ndGgtMV0/LnlvdXR1YmVLZXl9IG9wdHM9e29wdHN9IG9uUmVhZHk9e29uUGxheWVyUmVhZHl9IC8+XG4gICAgICApfVxuICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLnNsYXNoTGluZX0+PC9ocj5cbiAgICAgIDxoMT5Nb3ZpZSBJZDoge2lkfTwvaDE+XG4gICAgICA8aDE+TW92aWUgTmFtZToge21vdmllRGV0YWlscy50aXRsZX08L2gxPlxuICAgIDwvc2VjdGlvbj5cbiAgPC8+XG4gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZmV0Y2hNb3ZpZURldGFpbHMiLCJmZXRjaE1vdmllVHJhaWxlciIsInN0eWxlcyIsIllvdVR1YmUiLCJNb3ZpZSIsIm1vdmllVHJhaWxlciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXNwYXRjaCIsIm1vdmllRGV0YWlscyIsInN0YXRlIiwibW92aWVSZWR1Y2VyIiwiY29uc29sZSIsImxvZyIsIm9uUGxheWVyUmVhZHkiLCJldmVudCIsInRhcmdldCIsInBhdXNlVmlkZW8iLCJvcHRzIiwiaGVpZ2h0Iiwid2lkdGgiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibW92aWVDYXJkIiwidmlkZW9JZCIsImxlbmd0aCIsInlvdXR1YmVLZXkiLCJvblJlYWR5IiwiaHIiLCJzbGFzaExpbmUiLCJoMSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[id].tsx\n"));

/***/ })

});