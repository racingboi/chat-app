"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/StateReducers.js":
/*!**************************************!*\
  !*** ./src/context/StateReducers.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nconst initialState = {\n    userInfo: undefined,\n    newUser: false\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _context_constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_INFO:\n            return {\n                ...state,\n                userInfo: action.userInfo\n            };\n        case _context_constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_NEW_USER:\n            return {\n                ...state,\n                newUser: action.newUser\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlEO0FBRTFDLE1BQU1DLGVBQWU7SUFDeEJDLFVBQVVDO0lBQ1ZDLFNBQVMsS0FBSztBQUNsQixFQUFFO0FBRUYsTUFBTUMsVUFBVSxDQUFDQyxPQUFPQyxTQUFXO0lBQy9CLE9BQVFBLE9BQU9DLElBQUk7UUFDZixLQUFLUiwwRUFBMEI7WUFDM0IsT0FBTztnQkFDSCxHQUFHTSxLQUFLO2dCQUNSSixVQUFVSyxPQUFPTCxRQUFRO1lBQzdCO1FBQ0osS0FBS0YseUVBQXlCO1lBQzFCLE9BQU87Z0JBQ0gsR0FBR00sS0FBSztnQkFDUkYsU0FBU0csT0FBT0gsT0FBTztZQUN2QjtRQUNSO1lBQ0ksT0FBT0U7SUFDZjtBQUNKO0FBQ0EsK0RBQWVELE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU3RhdGVSZWR1Y2Vycy5qcz8wMDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVkdWNlckNhc2VzfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXJJbmZvOiB1bmRlZmluZWQsXHJcbiAgICBuZXdVc2VyOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9VU0VSX0lORk86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJbmZvOiBhY3Rpb24udXNlckluZm8sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSByZWR1Y2VyQ2FzZXMuU0VUX05FV19VU0VSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBuZXdVc2VyOiBhY3Rpb24ubmV3VXNlcixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sIm5hbWVzIjpbInJlZHVjZXJDYXNlcyIsImluaXRpYWxTdGF0ZSIsInVzZXJJbmZvIiwidW5kZWZpbmVkIiwibmV3VXNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfVVNFUl9JTkZPIiwiU0VUX05FV19VU0VSIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/StateReducers.js\n"));

/***/ })

});