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

/***/ "./src/components/common/ContextMenu.jsx":
/*!***********************************************!*\
  !*** ./src/components/common/ContextMenu.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ContextMenu(param) {\n    let { options , cordinates , contextMenu , setContextMenu  } = param;\n    _s();\n    const contextMenuRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const handleClick = (e1, callback)=>{\n        e1.stopPropagation();\n        setContextMenu(false);\n        callback();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dropdown-background fixed py-2 z-[100] shadow-xl\",\n        ref: contextMenuRef,\n        style: {\n            top: cordinates.y,\n            left: cordinates.x,\n            display: contextMenu ? \"block\" : \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: options.map((name, callback)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>handleClick(e, callback),\n                    className: \"px-5 py-2 cursor-pointer hover:bg-black-default\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 15\n                    }, this)\n                }, name, false, {\n                    fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, this);\n}\n_s(ContextMenu, \"ks5NuEEc0bEvX1Z+ZMr8jzB7hJs=\");\n_c = ContextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextMenu);\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFFMUIsU0FBU0MsWUFBWSxLQUFrRCxFQUFFO1FBQXBELEVBQUNDLFFBQU8sRUFBRUMsV0FBVSxFQUFFQyxZQUFXLEVBQUVDLGVBQWMsRUFBQyxHQUFsRDs7SUFFbkIsTUFBT0MsaUJBQWlCTixtREFBWSxDQUFDLElBQUk7SUFFekMsTUFBTVEsY0FBYyxDQUFDQyxJQUFHQyxXQUFhO1FBQ25DRCxHQUFFRSxlQUFlO1FBQ2pCTixlQUFlLEtBQUs7UUFDcEJLO0lBQ0Y7SUFDQSxxQkFBTyw4REFBQ0U7UUFBSUMsV0FBWTtRQUN0QkMsS0FBS1I7UUFDTFMsT0FBTztZQUNMQyxLQUFLYixXQUFXYyxDQUFDO1lBQ2pCQyxNQUFNZixXQUFXZ0IsQ0FBQztZQUNsQkMsU0FBU2hCLGNBQWMsVUFBVSxNQUFNO1FBQ3pDO2tCQUdELDRFQUFDaUI7c0JBRUtuQixRQUFRb0IsR0FBRyxDQUFDLENBQUNDLE1BQU1iLHlCQUNoQiw4REFBQ2M7b0JBQWNDLFNBQVMsSUFBSWpCLFlBQVlDLEdBQUVDO29CQUN0Q0csV0FBVTs4QkFFWiw0RUFBQ2E7d0JBQUtiLFdBQVU7a0NBQWNVOzs7Ozs7bUJBSHZCQTs7Ozs7Ozs7Ozs7Ozs7O0FBU3JCO0dBOUJTdEI7S0FBQUE7QUFnQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRNZW51LmpzeD82MzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENvbnRleHRNZW51KHtvcHRpb25zLCBjb3JkaW5hdGVzLCBjb250ZXh0TWVudSwgc2V0Q29udGV4dE1lbnV9KSB7XHJcblxyXG4gIGNvbnN0ICBjb250ZXh0TWVudVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgY2FsbGJhY2spID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBzZXRDb250ZXh0TWVudShmYWxzZSk7XHJcbiAgICBjYWxsYmFjaygpO1xyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BiZy1kcm9wZG93bi1iYWNrZ3JvdW5kIGZpeGVkIHB5LTIgei1bMTAwXSBzaGFkb3cteGxgfVxyXG4gICAgcmVmPXtjb250ZXh0TWVudVJlZn1cclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIHRvcDogY29yZGluYXRlcy55LFxyXG4gICAgICBsZWZ0OiBjb3JkaW5hdGVzLngsXHJcbiAgICAgIGRpc3BsYXk6IGNvbnRleHRNZW51ID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICB9fVxyXG4gID5cclxuXHJcbiAgIDx1bD5cclxuICAgICB7XHJcbiAgICAgICAgIG9wdGlvbnMubWFwKChuYW1lLCBjYWxsYmFjaykgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtuYW1lfSBvbkNsaWNrPXsoKT0+aGFuZGxlQ2xpY2soZSxjYWxsYmFjayl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTUgcHktMiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibGFjay1kZWZhdWx0J1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICkpXHJcbiAgICAgfVxyXG4gICA8L3VsPlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dE1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRleHRNZW51Iiwib3B0aW9ucyIsImNvcmRpbmF0ZXMiLCJjb250ZXh0TWVudSIsInNldENvbnRleHRNZW51IiwiY29udGV4dE1lbnVSZWYiLCJ1c2VSZWYiLCJoYW5kbGVDbGljayIsImUiLCJjYWxsYmFjayIsInN0b3BQcm9wYWdhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInN0eWxlIiwidG9wIiwieSIsImxlZnQiLCJ4IiwiZGlzcGxheSIsInVsIiwibWFwIiwibmFtZSIsImxpIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/ContextMenu.jsx\n"));

/***/ })

});