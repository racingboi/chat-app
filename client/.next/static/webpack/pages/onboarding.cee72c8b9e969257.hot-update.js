"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center\",\n        children: [\n            type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-10 w-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    alt: \"avatar\",\n                    className: \"rounded-full\",\n                    fill: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 19\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 12,\n                columnNumber: 15\n            }, this),\n            type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-14 w-14\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    alt: \"avatar\",\n                    className: \"rounded-full\",\n                    fill: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this),\n            type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative cursor-pointer z-0\",\n                onMouseEnter: ()=>setHover(true),\n                onMouseLeave: ()=>setHover(true),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCamera, {\n                            className: \"text-2xl\",\n                            id: \"context-opener\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 27\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-60 w-60\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 27\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 25,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, this);\n}\n_s(Avatar, \"bRXmKus9fOZFlca/6zXTYU+twGY=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDUztBQUV4QyxTQUFTRyxPQUFPLEtBQXNCLEVBQUU7UUFBeEIsRUFBQ0MsS0FBSSxFQUFDQyxNQUFLLEVBQUVDLFNBQVEsRUFBQyxHQUF0Qjs7SUFFWixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IscURBQWMsQ0FBQyxLQUFLO0lBQ2hELHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFVOztZQUVQUCxTQUFTLHNCQUNULDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ1YsbURBQUtBO29CQUFDVyxLQUFLUDtvQkFBT1EsS0FBSTtvQkFBU0YsV0FBVTtvQkFBZUcsSUFBSTs7Ozs7Ozs7Ozs7WUFLL0RWLFNBQVMsc0JBQ1QsOERBQUNNO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDVixtREFBS0E7b0JBQUNXLEtBQUtQO29CQUFPUSxLQUFJO29CQUFTRixXQUFVO29CQUFlRyxJQUFJOzs7Ozs7Ozs7OztZQUluRVYsU0FBUyxzQkFDTCw4REFBQ007Z0JBQUlDLFdBQVU7Z0JBQ2JJLGNBQWMsSUFBTVAsU0FBUyxJQUFJO2dCQUNqQ1EsY0FBYyxJQUFNUixTQUFTLElBQUk7O2tDQUUvQiw4REFBQ0U7d0JBQUlDLFdBQVk7a0NBQ2IsNEVBQUNULG9EQUFRQTs0QkFBQ1MsV0FBVTs0QkFBV00sSUFBRzs7Ozs7Ozs7Ozs7a0NBRXRDLDhEQUFDUDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ1YsbURBQUtBOzRCQUFDVyxLQUFLUDs0QkFBT1EsS0FBSTs0QkFBU0YsV0FBVTs0QkFBZUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkY7R0FsQ1NYO0tBQUFBO0FBb0NULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BdmF0YXIuanN4PzAxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtGYUNhbWVyYX0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5mdW5jdGlvbiBBdmF0YXIoe3R5cGUsaW1hZ2UsIHNldEltYWdlfSkge1xyXG5cclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlID09PSBcInNtXCIgJiYoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtMTAgdy0xMCc+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9J2F2YXRhcicgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnIGZpbGwvPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImxnXCIgJiYoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgaC0xNCB3LTE0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PSdhdmF0YXInIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJyBmaWxsLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGUgPT09IFwieGxcIiAmJihcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB6LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgZ2FwLTJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDYW1lcmEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCcgaWQ9XCJjb250ZXh0LW9wZW5lclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNjAgdy02MCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD0nYXZhdGFyJyBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCcgZmlsbC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkZhQ2FtZXJhIiwiQXZhdGFyIiwidHlwZSIsImltYWdlIiwic2V0SW1hZ2UiLCJob3ZlciIsInNldEhvdmVyIiwidXNlU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});