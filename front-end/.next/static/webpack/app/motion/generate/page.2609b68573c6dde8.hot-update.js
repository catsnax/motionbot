"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/motion/generate/page",{

/***/ "(app-pages-browser)/./app/motion/generate/page.jsx":
/*!**************************************!*\
  !*** ./app/motion/generate/page.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ generate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nasync function responseMotion(data) {\n    console.log(data);\n    const response = await fetch(\"http://127.0.0.1:8000/motions/\", {\n        method: \"GET\",\n        mode: \"cors\",\n        cache: \"no-cache\",\n        credentials: \"same-origin\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        redirect: \"follow\",\n        referrerPolicy: \"no-referrer\",\n        body: JSON.stringify(data)\n    });\n    return response.json();\n}\nfunction generate() {\n    async function handleGenerate(formData) {\n        const rawFormData = {\n            motionName: formData.get(\"motion\"),\n            infoSlide: formData.get(\"infoSlide\"),\n            motionTheme: formData.get(\"motionTheme\"),\n            motionDifficulty: formData.get(\"motionDifficulty\")\n        };\n        //console.log(JSON.stringify(rawFormData))\n        createMotion(rawFormData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"border-solid flex flex-col gap-6 ml-52 items-center h-auto rounded-md border-2 w-8/12\",\n                action: handleGenerate,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-6  w-7/12 mt-10 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"m-1 text-xl self-center\",\n                            children: \" Generate Motion\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-md\",\n                                children: \" Motion \"\n                            }, void 0, false, {\n                                fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"\",\n                                children: \" Infoslide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex  gap-2 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dix\", {\n                                    className: \"w-1/2 border\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: \" Motion Theme\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            className: \"inputBox w-full\",\n                                            name: \"motionTheme\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Feminism\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" International Relations\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Economics\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Media\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" LGBTQ+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Environment\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Philosophy\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Education\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Technology\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-1/2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: \" Motion Difficulty\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            className: \"inputBox w-full\",\n                                            name: \"motionDifficulty\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" N/A\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Easy\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Average\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    children: \" Difficult\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full bg-primary text-white h-10 rounded-lg self-center\",\n                            children: \" Generate Motion\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n            lineNumber: 41,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aaronjustinmacias/Documents/Programming/personal/new/motionbot/front-end/app/motion/generate/page.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tb3Rpb24vZ2VuZXJhdGUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDZ0Q7QUFFaEQsZUFBZUcsZUFBZUMsSUFBSTtJQUM5QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxrQ0FBa0M7UUFDN0RDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBQyxVQUFVO1FBQ1ZDLGdCQUFnQjtRQUNoQkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDZDtJQUN2QjtJQUNBLE9BQU9HLFNBQVNZLElBQUk7QUFDdEI7QUFNYSxTQUFTQztJQUN0QixlQUFlQyxlQUFnQkMsUUFBUTtRQUVyQyxNQUFNQyxjQUFjO1lBQ2xCQyxZQUFZRixTQUFTRyxHQUFHLENBQUM7WUFDekJDLFdBQVdKLFNBQVNHLEdBQUcsQ0FBQztZQUN4QkUsYUFBYUwsU0FBU0csR0FBRyxDQUFDO1lBQzFCRyxrQkFBa0JOLFNBQVNHLEdBQUcsQ0FBQztRQUNqQztRQUNBLDBDQUEwQztRQUMxQ0ksYUFBYU47SUFFZjtJQUNBLHFCQUNFLDhEQUFDTztrQkFFTCw0RUFBQ0E7WUFBS0MsV0FBWTtzQkFDViw0RUFBQ0M7Z0JBQUtELFdBQVk7Z0JBQXdGRSxRQUFVWjswQkFDaEgsNEVBQUNhO29CQUFJSCxXQUFZOztzQ0FDakIsOERBQUNJOzRCQUFHSixXQUFZO3NDQUEwQjs7Ozs7O3NDQUUxQyw4REFBQ0c7c0NBQ0MsNEVBQUNFO2dDQUFHTCxXQUFZOzBDQUFVOzs7Ozs7Ozs7OztzQ0FFNUIsOERBQUNHO3NDQUNELDRFQUFDRTtnQ0FBR0wsV0FBWTswQ0FBRzs7Ozs7Ozs7Ozs7c0NBRW5CLDhEQUFDRzs0QkFBSUgsV0FBWTs7OENBQ2YsOERBQUNNO29DQUFJTixXQUFZOztzREFDZiw4REFBQ0s7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0U7NENBQU9QLFdBQVk7NENBQWtCUSxNQUFPOzs4REFDN0MsOERBQUNDOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR1YsOERBQUNOO29DQUFJSCxXQUFZOztzREFDZiw4REFBQ0s7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0U7NENBQU9QLFdBQVk7NENBQWtCUSxNQUFPOzs4REFDekMsOERBQUNDOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7OERBQ1IsOERBQUNBOzhEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSWhCLDhEQUFDQzs0QkFBT1YsV0FBWTtzQ0FBMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUzRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbW90aW9uL2dlbmVyYXRlL3BhZ2UuanN4PzI4MWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuYXN5bmMgZnVuY3Rpb24gcmVzcG9uc2VNb3Rpb24oZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9tb3Rpb25zL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLCBcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsIFxuICAgICAgcmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXJcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgXG4gIH1cblxuIFxuICBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2VuZXJhdGUgKGZvcm1EYXRhKSB7XG4gXG4gICAgY29uc3QgcmF3Rm9ybURhdGEgPSB7XG4gICAgICBtb3Rpb25OYW1lOiBmb3JtRGF0YS5nZXQoJ21vdGlvbicpLFxuICAgICAgaW5mb1NsaWRlOiBmb3JtRGF0YS5nZXQoJ2luZm9TbGlkZScpLFxuICAgICAgbW90aW9uVGhlbWU6IGZvcm1EYXRhLmdldCgnbW90aW9uVGhlbWUnKSxcbiAgICAgIG1vdGlvbkRpZmZpY3VsdHk6IGZvcm1EYXRhLmdldCgnbW90aW9uRGlmZmljdWx0eScpLFxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJhd0Zvcm1EYXRhKSlcbiAgICBjcmVhdGVNb3Rpb24ocmF3Rm9ybURhdGEpXG4gXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cblxuPG1haW4gY2xhc3NOYW1lID0gXCJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lID0gXCJib3JkZXItc29saWQgZmxleCBmbGV4LWNvbCBnYXAtNiBtbC01MiBpdGVtcy1jZW50ZXIgaC1hdXRvIHJvdW5kZWQtbWQgYm9yZGVyLTIgdy04LzEyXCIgYWN0aW9uID0ge2hhbmRsZUdlbmVyYXRlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtY29sIGdhcC02ICB3LTcvMTIgbXQtMTAgXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gXCJtLTEgdGV4dC14bCBzZWxmLWNlbnRlclwiPiBHZW5lcmF0ZSBNb3Rpb248L2gxPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lID0gXCJ0ZXh0LW1kXCI+IE1vdGlvbiA8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZSA9IFwiXCI+IEluZm9zbGlkZTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4ICBnYXAtMiBcIj5cbiAgICAgICAgICAgICAgPGRpeCBjbGFzc05hbWUgPSBcInctMS8yIGJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxoNT4gTW90aW9uIFRoZW1lPC9oNT5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZSA9IFwiaW5wdXRCb3ggdy1mdWxsXCIgbmFtZSA9IFwibW90aW9uVGhlbWVcIiAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+IEZlbWluaXNtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4gSW50ZXJuYXRpb25hbCBSZWxhdGlvbnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiBFY29ub21pY3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiBNZWRpYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+IExHQlRRKzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+IEVudmlyb25tZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4gUGhpbG9zb3BoeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+IEVkdWNhdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+IFRlY2hub2xvZ3k8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXg+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ3LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxoNT4gTW90aW9uIERpZmZpY3VsdHk8L2g1PlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lID0gXCJpbnB1dEJveCB3LWZ1bGxcIiBuYW1lID0gXCJtb3Rpb25EaWZmaWN1bHR5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IE4vQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPiBFYXN5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IEF2ZXJhZ2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gRGlmZmljdWx0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwidy1mdWxsIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBoLTEwIHJvdW5kZWQtbGcgc2VsZi1jZW50ZXJcIj4gR2VuZXJhdGUgTW90aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICBcblxuICAgIDwvbWFpbj5cblxuICAgICAgICBcbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVzcG9uc2VNb3Rpb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiZ2VuZXJhdGUiLCJoYW5kbGVHZW5lcmF0ZSIsImZvcm1EYXRhIiwicmF3Rm9ybURhdGEiLCJtb3Rpb25OYW1lIiwiZ2V0IiwiaW5mb1NsaWRlIiwibW90aW9uVGhlbWUiLCJtb3Rpb25EaWZmaWN1bHR5IiwiY3JlYXRlTW90aW9uIiwibWFpbiIsImNsYXNzTmFtZSIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJoMSIsImg1IiwiZGl4Iiwic2VsZWN0IiwibmFtZSIsIm9wdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/motion/generate/page.jsx\n"));

/***/ })

});