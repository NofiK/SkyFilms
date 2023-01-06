/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[id]",{

/***/ "./pages/movies/MovieCard.tsx":
/*!************************************!*\
  !*** ./pages/movies/MovieCard.tsx ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/movies/[id].tsx":
/*!*******************************!*\
  !*** ./pages/movies/[id].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/hooks/redux */ \"./src/hooks/redux.ts\");\n/* harmony import */ var _src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/store/reducers/MovieSlice */ \"./src/store/reducers/MovieSlice.ts\");\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MovieCard */ \"./pages/movies/MovieCard.tsx\");\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MovieCard__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Movie = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const movieDetails = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieDetails);\n    const movieTrailer = (0,_src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.movieReducer.movieTrailer);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieDetails)(+id));\n            dispatch((0,_src_store_reducers_MovieSlice__WEBPACK_IMPORTED_MODULE_5__.fetchMovieTrailer)(+id));\n        }\n    }, [\n        id\n    ]);\n    const onPlayerReady = (event)=>{\n    // event.target.pauseVideo()\n    };\n    const opts = {\n        height: \"700\",\n        width: \"100%\",\n        playerVars: {\n            autoplay: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_MovieCard__WEBPACK_IMPORTED_MODULE_6___default()), {\n        movieDetails: movieDetails,\n        movieTrailer: movieTrailer\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/WebDev/Learning/SkyFilms/pages/movies/[id].tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movie, \"SB1RikDxasQn4xK9El8wJ8dNRCI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _src_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0Q7QUFDRTtBQUVhO0FBQ29DO0FBSXZEO0FBRW5DLE1BQU1RLFFBQVEsSUFBTTs7SUFDaEIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTUMsV0FBV1Qsd0RBQVdBO0lBQzVCLE1BQU1VLGVBQWlDVCxnRUFBY0EsQ0FBQyxDQUFDVSxRQUFRQSxNQUFNQyxZQUFZLENBQUNGLFlBQVk7SUFDOUYsTUFBTUcsZUFBZVosZ0VBQWNBLENBQUMsQ0FBQ1UsUUFBUUEsTUFBTUMsWUFBWSxDQUFDQyxZQUFZO0lBQzVFZixnREFBU0EsQ0FBQyxJQUFJO1FBQ1osSUFBR1MsSUFBRztZQUNKRSxTQUFTUCxpRkFBaUJBLENBQUMsQ0FBQ0s7WUFDNUJFLFNBQVNOLGlGQUFpQkEsQ0FBQyxDQUFDSTtRQUM5QixDQUFDO0lBQ0gsR0FBRTtRQUFDQTtLQUFHO0lBRU4sTUFBTU8sZ0JBQXlDLENBQUNDLFFBQVU7SUFDeEQsNEJBQTRCO0lBQzlCO0lBRUEsTUFBTUMsT0FBNkI7UUFDakNDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxZQUFZO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0lBRUYscUJBQ0UsOERBQUNoQixtREFBU0E7UUFBQ00sY0FBY0E7UUFBY0csY0FBY0E7Ozs7OztBQWtEekQ7R0E1RU1SOztRQUNhTixrREFBU0E7UUFFUEMsb0RBQVdBO1FBQ1dDLDREQUFjQTtRQUNoQ0EsNERBQWNBOzs7S0FMakNJO0FBOEVOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy9baWRdLnRzeD83NDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3JjL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zcmMvaG9va3MvcmVkdXgnXG5pbXBvcnQgeyBmZXRjaE1vdmllRGV0YWlscywgZmV0Y2hNb3ZpZVRyYWlsZXIgfSBmcm9tICcuLi8uLi9zcmMvc3RvcmUvcmVkdWNlcnMvTW92aWVTbGljZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgWW91VHViZSwgeyBZb3VUdWJlUHJvcHMgfSBmcm9tICdyZWFjdC15b3V0dWJlJztcbmltcG9ydCB7IE1vdmllRGV0YWlsc1Byb3BzIH0gZnJvbSAnLi4vLi4vc3JjL3R5cGVzL21vdmllVHlwZXMnXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vTW92aWVDYXJkJ1xuXG5jb25zdCBNb3ZpZSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcbiAgICBjb25zdCBtb3ZpZURldGFpbHM6TW92aWVEZXRhaWxzUHJvcHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tb3ZpZVJlZHVjZXIubW92aWVEZXRhaWxzKVxuICAgIGNvbnN0IG1vdmllVHJhaWxlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1vdmllUmVkdWNlci5tb3ZpZVRyYWlsZXIpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBpZihpZCl7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoTW92aWVEZXRhaWxzKCtpZCkpXG4gICAgICAgIGRpc3BhdGNoKGZldGNoTW92aWVUcmFpbGVyKCtpZCkpXG4gICAgICB9XG4gICAgfSxbaWRdKVxuXG4gICAgY29uc3Qgb25QbGF5ZXJSZWFkeTogWW91VHViZVByb3BzWydvblJlYWR5J10gPSAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGV2ZW50LnRhcmdldC5wYXVzZVZpZGVvKClcbiAgICB9XG4gIFxuICAgIGNvbnN0IG9wdHM6IFlvdVR1YmVQcm9wc1snb3B0cyddID0ge1xuICAgICAgaGVpZ2h0OiAnNzAwJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgfSxcbiAgICB9O1xuICAgIFxuICByZXR1cm4gKFxuICAgIDxNb3ZpZUNhcmQgbW92aWVEZXRhaWxzPXttb3ZpZURldGFpbHN9IG1vdmllVHJhaWxlcj17bW92aWVUcmFpbGVyfSAvPlxuICAgIC8vICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZUNhcmR9PlxuICAgIC8vICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuc2xhc2hMaW5lMX0+PC9ocj5cbiAgICAvLyAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonYmxhY2snLCBoZWlnaHQ6NzAwLCB3aWR0aDonMTAwJSd9fT5cbiAgICAvLyAge21vdmllVHJhaWxlciAmJiAoXG4gICAgLy8gICA8WW91VHViZSB2aWRlb0lkPXttb3ZpZVRyYWlsZXJbbW92aWVUcmFpbGVyLmxlbmd0aC0xXT8ueW91dHViZUtleX0gb3B0cz17b3B0c30gb25SZWFkeT17b25QbGF5ZXJSZWFkeX0gLz5cbiAgICAvLyAgICl9XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLnNsYXNoTGluZTJ9PjwvaHI+XG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllRGVzY3JpcHRpb25Cb3h9PlxuICAgIC8vICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XG4gICAgLy8gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubW92aWVUaXRsZX0+e21vdmllRGV0YWlscy50aXRsZX08L2gxPlxuICAgIC8vICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd30+XG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb2x1bW4xfT5ZZWFyPC9wPlxuICAgIC8vICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMn0+e21vdmllRGV0YWlscy5yZWxlYXNlfTwvcD5cbiAgICAvLyAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd30+XG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb2x1bW4xfT5SYXRlPC9wPlxuICAgIC8vICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMn0+e21vdmllRGV0YWlscz8ucmF0ZT8udG9TdHJpbmcoKS5zbGljZSgwLDMpfS8xMDwvcD5cbiAgICAvLyAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd30+XG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb2x1bW4xfT5Db3VudHJ5PC9wPlxuICAgIC8vICAgICAgIDxwIHN0eWxlPXt7d2lkdGg6JzYwJScsIHRleHRBbGlnbjonZW5kJ319IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMn0+XG4gICAgLy8gICAgICAgICB7bW92aWVEZXRhaWxzPy5jb3VudHJpZXM/Lm1hcChjb3VudHJ5ID0+e1xuICAgIC8vICAgICAgICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgICAgIDxzcGFuIGtleT17Y291bnRyeS5pc29fMzE2Nl8xfT57Y291bnRyeS5uYW1lfXttb3ZpZURldGFpbHMuY291bnRyaWVzLmluZGV4T2YoY291bnRyeSk9PT1tb3ZpZURldGFpbHMuY291bnRyaWVzLmxlbmd0aC0xP1wiXCI6JywgJ308L3NwYW4+XG4gICAgLy8gICAgICAgICAgIClcbiAgICAvLyAgICAgICAgIH0pfVxuICAgIC8vICAgICAgICAgPC9wPlxuICAgIC8vICAgICAgPC9kaXY+XG4gICAgLy8gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlUm93fT5cbiAgICAvLyAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbHVtbjF9PkdlbnJlczwvcD5cbiAgICAvLyAgICAgICA8cCBzdHlsZT17e3dpZHRoOic2MCUnLCB0ZXh0QWxpZ246J2VuZCd9fSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbHVtbjJ9PlxuICAgIC8vICAgICAgICAge21vdmllRGV0YWlscz8uZ2VucmVzPy5tYXAoZ2VucmUgPT57XG4gICAgLy8gICAgICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICAgICAgPHNwYW4ga2V5PXtnZW5yZS5pZH0+e2dlbnJlLm5hbWV9e21vdmllRGV0YWlscy5nZW5yZXMuaW5kZXhPZihnZW5yZSk9PT1tb3ZpZURldGFpbHMuZ2VucmVzLmxlbmd0aC0xP1wiXCI6JywgJ30gPC9zcGFuPlxuICAgIC8vICAgICAgICAgICApXG4gICAgLy8gICAgICAgICB9KX1cbiAgICAvLyAgICAgICAgIDwvcD5cbiAgICAvLyAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd30+XG4gICAgLy8gICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb2x1bW4xfT5SdW50aW1lPC9wPlxuICAgIC8vICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1uMn0+e21vdmllRGV0YWlscy5ydW50aW1lfSBtaW51dGVzPC9wPlxuICAgIC8vICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPGltZyBzdHlsZT17e3dpZHRoOjgwMH19IHNyYz17bW92aWVEZXRhaWxzLmJhY2tkcm9wfSBhbHQ9XCJcIiAvPlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gPC9zZWN0aW9uPiBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJmZXRjaE1vdmllRGV0YWlscyIsImZldGNoTW92aWVUcmFpbGVyIiwiTW92aWVDYXJkIiwiTW92aWUiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJtb3ZpZURldGFpbHMiLCJzdGF0ZSIsIm1vdmllUmVkdWNlciIsIm1vdmllVHJhaWxlciIsIm9uUGxheWVyUmVhZHkiLCJldmVudCIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJhdXRvcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[id].tsx\n"));

/***/ })

});