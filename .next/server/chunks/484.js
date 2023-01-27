exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 5724:
/***/ ((module) => {

// Exports
module.exports = {
	"actorCard": "styles_actorCard__yl6Mz",
	"aboutActor": "styles_aboutActor__y8VJj",
	"actorDescription": "styles_actorDescription__dnfUf",
	"actorPhoto": "styles_actorPhoto__K4zT6",
	"actorName": "styles_actorName__WNic5",
	"actorBiography": "styles_actorBiography__viOz0",
	"modalBiography": "styles_modalBiography__oJEUg",
	"tableColumn1": "styles_tableColumn1__oD48z",
	"tableColumn2": "styles_tableColumn2__LwG2J",
	"tableRow": "styles_tableRow__TiPCH"
};


/***/ }),

/***/ 1484:
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5724);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_MovieSlider_MovieSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9343);





const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgb(18, 18, 18)"
    },
    overlay: {
        background: "rgb(23, 23, 23)",
        opacity: "97%"
    }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("body");
const ActorCard = ({ actorDetails , actorMovies  })=>{
    var _actorDetails_biography, _actorDetails_biography1;
    const [modalIsOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    }
    function closeModal() {
        setIsOpen(false);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actorCard),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
                isOpen: modalIsOpen,
                onAfterOpen: afterOpenModal,
                onRequestClose: closeModal,
                style: customStyles,
                contentLabel: "Example Modal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modalBiography),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Actor's Biography:"
                        }),
                        (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.biography) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modalBiography),
                            children: actorDetails.biography
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutActor),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actorPhoto),
                        src: (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.photo) === "https://image.tmdb.org/t/p/w500null" ? "https://i.pinimg.com/originals/60/88/0e/60880ef799bb1edd172d645c39906c29.jpg" : actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.photo,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "50%"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actorDescription),
                                children: [
                                    (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.name) && (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.career) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actorName),
                                                children: actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableRow),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn1),
                                                        children: "Career:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn2),
                                                        children: actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.career
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.birthday) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn1),
                                                children: "Date of Birth:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn2),
                                                children: actorDetails.birthday
                                            })
                                        ]
                                    }),
                                    (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.deathday) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn1),
                                                children: "Date of Death:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn2),
                                                children: actorDetails.deathday
                                            })
                                        ]
                                    }),
                                    (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.place_of_birth) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableRow),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn1),
                                                children: "Place of Birth:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tableColumn2),
                                                children: actorDetails.place_of_birth
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().actorBiography),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Actor's Biography:"
                                    }),
                                    (actorDetails === null || actorDetails === void 0 ? void 0 : actorDetails.biography) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            actorDetails === null || actorDetails === void 0 ? void 0 : (_actorDetails_biography = actorDetails.biography) === null || _actorDetails_biography === void 0 ? void 0 : _actorDetails_biography.slice(0, 950),
                                            (actorDetails === null || actorDetails === void 0 ? void 0 : (_actorDetails_biography1 = actorDetails.biography) === null || _actorDetails_biography1 === void 0 ? void 0 : _actorDetails_biography1.length) > 949 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                onClick: openModal,
                                                children: "..."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_MovieSlider_MovieSlider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                movies: actorMovies,
                sliderLabel: `Actor's movies`,
                slidesToScroll: 5
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorCard);


/***/ })

};
;