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

/***/ "./src/pages/onboarding.jsx":
/*!**********************************!*\
  !*** ./src/pages/onboarding.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _components_common_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/Input */ \"./src/components/common/Input.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction onboarding() {\n    _s();\n    const [{ userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((userInfo === null || userInfo === void 0 ? void 0 : userInfo.status) || \"\");\n    const [profileImage, setProfileImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/default-profile.png\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/Whatsapp.gif\",\n                        alt: \"whatsapp\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 12\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"Whatsapp Clone\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                lineNumber: 17,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl\",\n                children: \"Create profile\"\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                lineNumber: 28,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center mt-5 gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            name: \"Display name\",\n                            state: name,\n                            setState: setName,\n                            lable: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            name: \"About\",\n                            state: about,\n                            setState: setAbout(),\n                            lable: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\pages\\\\onboarding.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(onboarding, \"9gL8cdqOt5dj0qAhvhbUj+nPtyE=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (onboarding);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb25ib2FyZGluZy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDUDtBQUN5QjtBQUNWO0FBRTlDLFNBQVNLLGFBQWE7O0lBR2xCLE1BQU0sQ0FBQyxFQUFDQyxTQUFRLEVBQUMsQ0FBQyxHQUFHSCx1RUFBZ0JBO0lBRXJDLE1BQU0sQ0FBQ0ksTUFBT0MsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQ0ssQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVQyxJQUFJLEtBQUk7SUFDeEQsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDSyxDQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVLLE1BQU0sS0FBSTtJQUN2RCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBRTtJQUVoRCxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2IsbURBQUtBO3dCQUNGYyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxRQUFRO3dCQUNSQyxPQUFPOzs7Ozs7a0NBRVIsOERBQUNDO3dCQUFLTCxXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBSWxDLDhEQUFFTTtnQkFBR04sV0FBVTswQkFBVzs7Ozs7OzBCQUN6Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ1gsZ0VBQUtBOzRCQUNGRyxNQUFLOzRCQUNMZSxPQUFPZjs0QkFDUGdCLFVBQVVmOzRCQUNWZ0IsS0FBSzs7Ozs7O3NDQUVULDhEQUFDcEIsZ0VBQUtBOzRCQUNGRyxNQUFLOzRCQUNMZSxPQUFPYjs0QkFDUGMsVUFBVWI7NEJBQ1ZjLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCO0dBMUNTbkI7O1FBR2dCRixtRUFBZ0JBOzs7QUF5Q3pDLCtEQUFlRSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9vbmJvYXJkaW5nLmpzeD84Mjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7dXNlU3RhdGVQcm92aWRlcn0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0lucHV0XCI7XHJcblxyXG5mdW5jdGlvbiBvbmJvYXJkaW5nKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBbe3VzZXJJbmZvfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XHJcblxyXG4gICAgY29uc3QgW25hbWUgLCBzZXROYW1lXSA9IHVzZVN0YXRlKHVzZXJJbmZvPy5uYW1lIHx8IFwiXCIpO1xyXG5jb25zdCBbYWJvdXQsIHNldEFib3V0XSA9IHVzZVN0YXRlKHVzZXJJbmZvPy5zdGF0dXMgfHwgXCJcIik7XHJcbmNvbnN0IFtwcm9maWxlSW1hZ2UsIHNldFByb2ZpbGVJbWFnZV0gPSB1c2VTdGF0ZSggXCIvZGVmYXVsdC1wcm9maWxlLnBuZ1wiKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGgtc2NyZWVuIHctc2NyZWVuIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yJz5cclxuICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgc3JjPVwiL1doYXRzYXBwLmdpZlwiXHJcbiAgICAgICAgICAgICAgIGFsdD0nd2hhdHNhcHAnXHJcbiAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTd4bCc+XHJcbiAgICAgICAgICAgICAgICBXaGF0c2FwcCBDbG9uZVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8IGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwnPkNyZWF0ZSBwcm9maWxlPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNiBtdC02Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgZ2FwLTYnPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkRpc3BsYXkgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGU9e3NldE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFibGVcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlPXthYm91dH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZT17c2V0QWJvdXQoKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJsZVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25ib2FyZGluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZVN0YXRlUHJvdmlkZXIiLCJJbnB1dCIsIm9uYm9hcmRpbmciLCJ1c2VySW5mbyIsIm5hbWUiLCJzZXROYW1lIiwiYWJvdXQiLCJzZXRBYm91dCIsInN0YXR1cyIsInByb2ZpbGVJbWFnZSIsInNldFByb2ZpbGVJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3BhbiIsImgyIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/onboarding.jsx\n"));

/***/ })

});