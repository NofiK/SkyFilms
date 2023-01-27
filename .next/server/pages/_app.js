(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5463:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "styles_footerContainer__ISFtZ",
	"aboutLinks": "styles_aboutLinks__KcVeb",
	"socialLink": "styles_socialLink__w9H6p",
	"copyrights": "styles_copyrights__AL_wq",
	"slashLine2": "styles_slashLine2__zxVJL"
};


/***/ }),

/***/ 2217:
/***/ ((module) => {

// Exports
module.exports = {
	"disabledInput": "styles_disabledInput__c9RGf",
	"activeInput": "styles_activeInput__yAnIz",
	"searchBar": "styles_searchBar__cX0QC",
	"searchResultBox": "styles_searchResultBox__xn7b2",
	"searchIconBox": "styles_searchIconBox__b_0sj",
	"searchIcon": "styles_searchIcon__AIMPp",
	"headerContainer": "styles_headerContainer__a14nV",
	"navBar": "styles_navBar__yG9Q0",
	"logoContainer": "styles_logoContainer__nHsJs",
	"logo": "styles_logo__DeQZz",
	"resultItem": "styles_resultItem__Il5t3",
	"resultDescription": "styles_resultDescription___ZDzW",
	"resultImg": "styles_resultImg__ZvGwT",
	"resultTitle": "styles_resultTitle__KeOkp",
	"resultYear": "styles_resultYear__ZdPwL",
	"imdbIcon": "styles_imdbIcon__sRzLd",
	"resultTitleYear": "styles_resultTitleYear__rTvID"
};


/***/ }),

/***/ 4786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(1598);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/store/reducers/MovieSlice.ts
var MovieSlice = __webpack_require__(4679);
// EXTERNAL MODULE: ./src/store/reducers/ActorSlice.ts
var ActorSlice = __webpack_require__(2960);
;// CONCATENATED MODULE: ./src/store/store.ts



const store = (0,toolkit_.configureStore)({
    reducer: {
        movieReducer: MovieSlice/* default */.ZP,
        actorReducer: ActorSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Layouts/Footer/styles.module.scss
var styles_module = __webpack_require__(5463);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: ./src/components/Layouts/Footer/Footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: (styles_module_default()).slashLine2
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (styles_module_default()).footerContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        style: {
                            width: 160
                        },
                        src: "/Logo.png",
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).aboutLinks,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Contact"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Terms of Service"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Privacy Policy"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (styles_module_default()).socialLinks,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiFacebookFill, {
                                className: (styles_module_default()).socialLink
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiInstagramFill, {
                                className: (styles_module_default()).socialLink
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiTwitterFill, {
                                className: (styles_module_default()).socialLink
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiLinkedinFill, {
                                className: (styles_module_default()).socialLink
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (styles_module_default()).copyrights,
                        children: [
                            "Copyright @",
                            new Date().getFullYear(),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "SKYFILMS"
                            }),
                            ".All rights reserved"
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Layouts/Header/styles.module.scss
var Header_styles_module = __webpack_require__(2217);
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);
;// CONCATENATED MODULE: external "react-icons/rx"
const rx_namespaceObject = require("react-icons/rx");
// EXTERNAL MODULE: ./src/hooks/redux.ts
var redux = __webpack_require__(5562);
;// CONCATENATED MODULE: ./src/hooks/useDebounce.ts

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = (0,external_react_.useState)(value);
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>setDebouncedValue(value), delay || 500);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
/* harmony default export */ const hooks_useDebounce = (useDebounce);

;// CONCATENATED MODULE: ./src/components/Layouts/Header/Header.tsx









const Header = ()=>{
    const [isOpenSearch, setIsOpenSearch] = (0,external_react_.useState)(false);
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const inputRef = (0,external_react_.useRef)(null);
    const debouncedValue = hooks_useDebounce(searchValue, 1000);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const searchResult = (0,redux/* useAppSelector */.C)((state)=>state.movieReducer.searchedMovies);
    (0,external_react_.useEffect)(()=>{
        if (searchValue.trim()) {
            dispatch((0,MovieSlice/* fetchSearchedMovies */.$7)(searchValue));
        }
    }, [
        debouncedValue
    ]);
    const selectMovie = ()=>{
        setIsOpenSearch(false);
        setSearchValue("");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: (Header_styles_module_default()).headerContainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Header_styles_module_default()).logoContainer,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: (Header_styles_module_default()).logo,
                            src: "/Logo.png",
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_styles_module_default()).navBar,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Movies"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "TV Shows"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Documentaries"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Header_styles_module_default()).searchBar,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            ref: inputRef,
                                            value: searchValue,
                                            onChange: (e)=>setSearchValue(e.target.value),
                                            className: isOpenSearch ? (Header_styles_module_default()).activeInput : (Header_styles_module_default()).disabledInput,
                                            type: "text"
                                        }),
                                        isOpenSearch && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Header_styles_module_default()).searchResultBox,
                                            children: searchValue && searchResult.map((movie)=>{
                                                var _movie_release;
                                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `/movies/${movie.id}`,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        onClick: selectMovie,
                                                        className: (Header_styles_module_default()).resultItem,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: (Header_styles_module_default()).resultImg,
                                                                src: movie.miniPoster,
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (Header_styles_module_default()).resultDescription,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: (Header_styles_module_default()).resultTitleYear,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: (Header_styles_module_default()).resultTitle,
                                                                                children: movie.title
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: (Header_styles_module_default()).resultYear,
                                                                                children: movie === null || movie === void 0 ? void 0 : (_movie_release = movie.release) === null || _movie_release === void 0 ? void 0 : _movie_release.slice(0, 4)
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                className: (Header_styles_module_default()).imdbIcon,
                                                                                src: "/imdb.png",
                                                                                alt: ""
                                                                            }),
                                                                            ": " + movie.rate
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                });
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Header_styles_module_default()).searchIconBox,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(rx_namespaceObject.RxMagnifyingGlass, {
                                                onClick: ()=>{
                                                    setIsOpenSearch(!isOpenSearch);
                                                    inputRef.current.focus();
                                                },
                                                className: (Header_styles_module_default()).searchIcon
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/signup/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Sign Up"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Layouts/Layout.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.tsx







function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,269,679,960], () => (__webpack_exec__(4786)));
module.exports = __webpack_exports__;

})();