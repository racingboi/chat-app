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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_common_ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/common/ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n/* harmony import */ var _components_common_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/PhotoPicker */ \"./src/components/common/PhotoPicker.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        x: 0,\n        y: 0\n    });\n    const [grabPhoto, setGrabPhoto] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenuVisible(true);\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Change Form Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Update Photo\",\n            callback: ()=>{\n                setGrabPhoto(true);\n            }\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{\n                setImage(\"/default_avatar.png\");\n            }\n        }\n    ];\n    const photoPickerChange = async (e)=>{\n        const file = e.target.files[0];\n        const reader = new FileReader();\n        const data = document.createEvent(\"img\");\n        reader.onload = (event)=>{\n            data.src = event.target.result;\n            data.setAttribute(\"data-src\", event.target.result);\n            reader.readAsDataURL(file);\n            setTimeout(()=>{\n                setImage(data.src);\n            }, 1000);\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (grabPhoto) {\n            const data = document.getElementById(\"photo-picker\");\n            data.click();\n            document.body.onfocus = (e)=>{\n                setTimeout(()=>{\n                    setGrabPhoto(false);\n                }, 1000);\n            };\n        }\n    }, [\n        grabPhoto\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center\",\n        children: [\n            type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-10 w-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    alt: \"avatar\",\n                    className: \"rounded-full\",\n                    fill: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 19\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 62,\n                columnNumber: 15\n            }, this),\n            type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-14 w-14\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    alt: \"avatar\",\n                    className: \"rounded-full\",\n                    fill: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 69,\n                columnNumber: 17\n            }, this),\n            type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative cursor-pointer z-0\",\n                onMouseEnter: ()=>setHover(true),\n                onMouseLeave: ()=>setHover(false),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col gap-2\\n                      \".concat(hover ? \"visible\" : \"hidden\", \"\\n                      \"),\n                        onClick: (e)=>showContextMenu(e),\n                        id: \"context-opener\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCamera, {\n                                onClick: (e)=>showContextMenu(e),\n                                className: \"text-2xl\",\n                                id: \"context-opener\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 27\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"context-opener\",\n                                onClick: (e)=>showContextMenu(e),\n                                children: [\n                                    \"Change \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 94\n                                    }, this),\n                                    \" Profile \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 108\n                                    }, this),\n                                    \" Photo\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-60 w-60 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 27\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 75,\n                columnNumber: 19\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                cordinates: contextMenuCordinates,\n                contextMenu: isContextMenuVisible,\n                setContextMenu: setIsContextMenuVisible\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 96,\n                columnNumber: 21\n            }, this),\n            grabPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_PhotoPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onChange: photoPickerChange\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 106,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\web\\\\chat-box\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, this);\n}\n_s(Avatar, \"4k3j+w+Lpf2fU9PlUPnc8QVtcL4=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO3dCQUUxQjZDLFNBQVNqQyxDQUFBQSxJQUFHRCxnQkFBZ0JDO3dCQUM1QmtDLElBQUc7OzBDQUVKLDhEQUFDckQsb0RBQVFBO2dDQUFDb0QsU0FBU2pDLENBQUFBLElBQUdELGdCQUFnQkM7Z0NBQUk0QixXQUFVO2dDQUFXTSxJQUFHOzs7Ozs7MENBQ2hFLDhEQUFDQztnQ0FBS0QsSUFBRztnQ0FBaUJELFNBQVNqQyxDQUFBQSxJQUFHRCxnQkFBZ0JDOztvQ0FBSTtrREFBTyw4REFBQ29DOzs7OztvQ0FBSTtrREFBUyw4REFBQ0E7Ozs7O29DQUFJOzs7Ozs7Ozs7Ozs7O2tDQUUxRiw4REFBQ1Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNoRCxtREFBS0E7NEJBQUNzQyxLQUFLaEM7NEJBQU8yQyxLQUFJOzRCQUFTRCxXQUFVOzRCQUFlRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztZQUtyRXZDLHNDQUNFLDhEQUFDVCxzRUFBV0E7Z0JBQ1J1RCxTQUFTakM7Z0JBQ1RrQyxZQUFZN0M7Z0JBQ1o4QyxhQUFhaEQ7Z0JBQ2JpRCxnQkFBZ0JoRDs7Ozs7O1lBS3hCSywyQkFDRyw4REFBQ2Qsc0VBQVdBO2dCQUFDMEQsVUFBVWxDOzs7Ozs7Ozs7Ozs7QUFNMUM7R0F6R1N2QjtLQUFBQTtBQTJHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeD8wMTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQge0ZhQ2FtZXJhfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRNZW51XCI7XHJcbmltcG9ydCBQaG90b1BpY2tlciBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9QaG90b1BpY2tlclwiO1xyXG5cclxuZnVuY3Rpb24gQXZhdGFyKHt0eXBlLGltYWdlLCBzZXRJbWFnZX0pIHtcclxuXHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbaXNDb250ZXh0TWVudVZpc2libGUsIHNldElzQ29udGV4dE1lbnVWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgW2NvbnRleHRNZW51Q29yZGluYXRlcywgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzXSA9IFJlYWN0LnVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgW2dyYWJQaG90bywgc2V0R3JhYlBob3RvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHNldElzQ29udGV4dE1lbnVWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICAgIHNldENvbnRleHRNZW51Q29yZGluYXRlcyh7IHg6IGUucGFnZVgsIHk6IGUucGFnZVkgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucyA9XHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIlRha2UgUGhvdG9cIiwgY2FsbGJhY2s6ICgpID0+IHt9fSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkNoYW5nZSBGb3JtIExpYnJhcnlcIiwgY2FsbGJhY2s6ICgpID0+IHt9fSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIlVwZGF0ZSBQaG90b1wiLCBjYWxsYmFjazogKCkgPT4ge3NldEdyYWJQaG90byh0cnVlKX19LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiUmVtb3ZlIFBob3RvXCIsIGNhbGxiYWNrOiAoKSA9PiB7c2V0SW1hZ2UoXCIvZGVmYXVsdF9hdmF0YXIucG5nXCIpfX1cclxuXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICBjb25zdCBwaG90b1BpY2tlckNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZGF0YS5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBkYXRhLnNldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIsIGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEltYWdlKGRhdGEuc3JjKVxyXG4gICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZ3JhYlBob3RvKXtcclxuICAgICAgICAgIGNvbnN0IGRhdGE9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tcGlja2VyXCIpO1xyXG4gICAgICAgICAgICBkYXRhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHcmFiUGhvdG8oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2dyYWJQaG90b10pXHJcbiAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGUgPT09IFwic21cIiAmJihcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgaC0xMCB3LTEwJz5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD0nYXZhdGFyJyBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCcgZmlsbC8+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPT09IFwibGdcIiAmJihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLTE0IHctMTQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9J2F2YXRhcicgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnIGZpbGwvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHlwZSA9PT0gXCJ4bFwiICYmKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1wb2ludGVyIHotMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3Zlcih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyKGZhbHNlKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgei0xMCBiZy1waG90b3BpY2tlci1vdmVybGF5LWJhY2tncm91bmQgaC02MCB3LTYwIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgZ2FwLTJcclxuICAgICAgICAgICAgICAgICAgICAgICR7aG92ZXIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGV4dC1vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhbWVyYSBvbkNsaWNrPXtlPT5zaG93Q29udGV4dE1lbnUoZSl9IGNsYXNzTmFtZT0ndGV4dC0yeGwnIGlkPVwiY29udGV4dC1vcGVuZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNvbnRleHQtb3BlbmVyXCIgb25DbGljaz17ZT0+c2hvd0NvbnRleHRNZW51KGUpfT5DaGFuZ2UgPGJyLz4gUHJvZmlsZSA8YnIvPiBQaG90bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNjAgdy02MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD0nYXZhdGFyJyBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCcgZmlsbC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGlzQ29udGV4dE1lbnVWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q29udGV4dE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y29udGV4dE1lbnVPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JkaW5hdGVzPXtjb250ZXh0TWVudUNvcmRpbmF0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRNZW51PXtpc0NvbnRleHRNZW51VmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGV4dE1lbnU9e3NldElzQ29udGV4dE1lbnVWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBncmFiUGhvdG8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgPFBob3RvUGlja2VyIG9uQ2hhbmdlPXtwaG90b1BpY2tlckNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJQaG90b1BpY2tlciIsIkF2YXRhciIsInR5cGUiLCJpbWFnZSIsInNldEltYWdlIiwiaG92ZXIiLCJzZXRIb3ZlciIsInVzZVN0YXRlIiwiaXNDb250ZXh0TWVudVZpc2libGUiLCJzZXRJc0NvbnRleHRNZW51VmlzaWJsZSIsImNvbnRleHRNZW51Q29yZGluYXRlcyIsInNldENvbnRleHRNZW51Q29yZGluYXRlcyIsIngiLCJ5IiwiZ3JhYlBob3RvIiwic2V0R3JhYlBob3RvIiwic2hvd0NvbnRleHRNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFnZVgiLCJwYWdlWSIsImNvbnRleHRNZW51T3B0aW9ucyIsIm5hbWUiLCJjYWxsYmFjayIsInBob3RvUGlja2VyQ2hhbmdlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImRhdGEiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50Iiwib25sb2FkIiwiZXZlbnQiLCJzcmMiLCJyZXN1bHQiLCJzZXRBdHRyaWJ1dGUiLCJyZWFkQXNEYXRhVVJMIiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJib2R5Iiwib25mb2N1cyIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsImZpbGwiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwiaWQiLCJzcGFuIiwiYnIiLCJvcHRpb25zIiwiY29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});