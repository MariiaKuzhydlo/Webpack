/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n*{\\n\\tpadding: 0;\\n\\tmargin: 0;\\n\\tborder: 0;\\n}\\n*, *::before, *::after{\\n -moz-box-sizing: border-box;\\n -webkit-box-sizing: border-box;\\n box-sizing: border-box;\\n}\\n:focus, :active{outline: none;}\\na:focus, a:active{outline: none;}\\nnav, footer, header, aside{ display: block;}\\n\\nhtml, body{\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tfont-size: 100%;\\n\\tline-height: 1;\\n\\tfont-size: 14px;\\n\\t-ms-text-size-adjust: 100%;\\n\\t-moz-text-size-adjust: 100%;\\n\\t-webkit-text-size-adjust: 100%;\\n}\\ninput, button, textarea{font-family: inherit;}\\n\\ninput::-ms-check{display: none;}\\nbutton{cursor: pointer;}\\nbutton::-moz-focus-inner{padding: 0;border: 0;}\\na, a:visited{text-decoration: none;}\\na:hover{text-decoration: none;}\\nul li{ list-style: none;}\\nimg{vertical-align: top;}\\n\\nh1, h2, h3, h4, h5, h6{ font-size: inherit;\\n\\tfont-weight: 600;\\n}\\nbody{\\n\\tbackground: rgb(238,174,223);\\n\\tbackground: linear-gradient(90deg, rgba(238,174,223,1) 0%, rgba(148,166,233,1) 100%);\\n}\\nheader{\\n\\tborder-bottom: 1px solid grey;\\n\\tmargin: 0px 0px 20px 0px;\\n}\\n.container {\\n\\tmax-width: 1200px;\\n\\tmargin: 0 auto;\\n}\\n.header__row {\\n\\tpadding: 15px 0px 15px 0px;\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\tflex-wrap: wrap;\\n}\\n.haeder__cursor {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n.img-wrapper {\\n\\twidth: 50px;\\n\\theight: 50px;\\n\\toverflow: hidden;\\n\\tmargin: 0px 20px 0px 0px;\\n}\\n.img-wrapper > img {\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tobject-fit: cover;\\n}\\n.header__title {\\n\\tfont-family: 'Patrick Hand', cursive;\\n\\tfont-weight: bold;\\n\\tfont-size: 30px;\\n}\\n.header__student {\\n\\tfont-family: 'Architects Daughter', cursive;\\n\\tfont-size: 18px;\\n\\tborder: 1px solid orangered;\\n\\tborder-radius: 10px;\\n\\tpadding: 10px 10px;\\n}\\n.header__student span{\\n\\tcolor: blue;\\n}\\n.header__student span:hover{\\n\\tcolor: orange;\\n}\\nh1{\\n\\talign-items: center;\\n\\ttext-align: center;\\n   font-size: 25px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _modules_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/function.js */ \"./src/modules/function.js\");\n/* harmony import */ var _modules_arrays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/arrays.js */ \"./src/modules/arrays.js\");\n/* harmony import */ var _modules_arraysMathod_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/arraysMathod.js */ \"./src/modules/arraysMathod.js\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _modules_fancProgramming_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/fancProgramming.js */ \"./src/modules/fancProgramming.js\");\n/* harmony import */ var _modules_generator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/generator.js */ \"./src/modules/generator.js\");\n/* harmony import */ var _modules_loops_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/loops.js */ \"./src/modules/loops.js\");\n/* harmony import */ var _modules_obj_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/obj.js */ \"./src/modules/obj.js\");\n/* harmony import */ var _modules_promises_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/promises.js */ \"./src/modules/promises.js\");\n/* harmony import */ var _modules_prototype_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/prototype.js */ \"./src/modules/prototype.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(`1) MaxDigit of 3458 : ${(0,_modules_function_js__WEBPACK_IMPORTED_MODULE_1__.getMaxDigit)(3458)}`)\nconsole.log(`2) Pairs of student : ${JSON.stringify(_modules_arrays_js__WEBPACK_IMPORTED_MODULE_2__.pairs)}`)\nconsole.log(`3) Random array : [${(0,_modules_arraysMathod_js__WEBPACK_IMPORTED_MODULE_3__.getRandomArray)(7, 2, 15)}]`)\nconsole.log(`4) Max Price of products is: ${_modules_variables_js__WEBPACK_IMPORTED_MODULE_4__.maxPrice}`)\nconsole.log(`5) My Taxes are : ${_modules_fancProgramming_js__WEBPACK_IMPORTED_MODULE_5__.getMyTaxes.call(_modules_fancProgramming_js__WEBPACK_IMPORTED_MODULE_5__.ukraine, 1400)}`)\nconsole.log(`6) Generator Start : ${(0,_modules_generator_js__WEBPACK_IMPORTED_MODULE_6__.createIdGenerator)().next().value}`)\nconsole.log(`7) Sum of Numbers : ${(0,_modules_loops_js__WEBPACK_IMPORTED_MODULE_7__.sumNumbers)(3, 7)}`)\nconsole.log(`8) List of subjects : ${(0,_modules_obj_js__WEBPACK_IMPORTED_MODULE_8__.getSubjects)(2)}`)\nconsole.log(`9) Info about Mariia : ${'mariia.getInfo ==>', _modules_prototype_js__WEBPACK_IMPORTED_MODULE_10__.mariia.getInfo}`);\n(0,_modules_promises_js__WEBPACK_IMPORTED_MODULE_9__.getRandomChinese)(3).then((resolve) => console.log(`10) Chinese characters: ${resolve}`))\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/arrays.js":
/*!*******************************!*\
  !*** ./src/modules/arrays.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPairs\": () => (/* binding */ getPairs),\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber),\n/* harmony export */   \"marks\": () => (/* binding */ marks),\n/* harmony export */   \"marksForPairs\": () => (/* binding */ marksForPairs),\n/* harmony export */   \"marksForStudents\": () => (/* binding */ marksForStudents),\n/* harmony export */   \"pairs\": () => (/* binding */ pairs),\n/* harmony export */   \"projectForPairs\": () => (/* binding */ projectForPairs),\n/* harmony export */   \"students\": () => (/* binding */ students),\n/* harmony export */   \"themes\": () => (/* binding */ themes)\n/* harmony export */ });\nconst students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\nconst marks = [4, 5, 5, 3, 4, 5];\n\nfunction getPairs(students) {\n\tconst countPair = Math.ceil(students.length / 2);\n\tconst res = [];\n\tconst girlsArray = [];\n\tconst boysArray = [];\n\tfor (let i = 0; i < students.length; i++) {\n\t\tif (students[i].split('').pop() === 'а') {\n\t\t\tgirlsArray.push(students[i]);\n\t\t} else {\n\t\t\tboysArray.push(students[i]);\n\t\t}\n\t}\n\tfor (let i = 0; i < countPair; i++) {\n\t\tif (girlsArray[i] && boysArray[i]) {\n\t\t\tres.push([boysArray[i], girlsArray[i]]);\n\t\t}\n\t}\n\treturn res;\n}\nconst pairs = getPairs(students);\n\nfunction projectForPairs(pairs, project) {\n\tconst res = [];\n\tfor (let pair of pairs) {\n\t\tres.push([`${pair[0]} i ${pair[1]}`, project.pop()]);\n\t}\n\treturn res;\n\n}\n\n\n\nfunction marksForStudents(students, marks) {\n\tconst res = [];\n\tfor (let student of students) {\n\t\tres.push([`${student}`, marks.pop()]);\n\t}\n\treturn res;\n}\n\n\n\nfunction getRandomNumber(min, max) {\n\treturn Math.floor(min + Math.random() * (max + 1 - min));\n}\n\nfunction marksForPairs(paires) {\n\tconst pairClone = [...paires];\n\tfor (let pair of pairClone) {\n\t\tpair.push(getRandomNumber(1, 5));\n\t}\n\treturn pairClone;\n}\n\n\n//# sourceURL=webpack://webpack/./src/modules/arrays.js?");

/***/ }),

/***/ "./src/modules/arraysMathod.js":
/*!*************************************!*\
  !*** ./src/modules/arraysMathod.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countPositiveNumbers\": () => (/* binding */ countPositiveNumbers),\n/* harmony export */   \"divideByThree\": () => (/* binding */ divideByThree),\n/* harmony export */   \"filterEvenNumbers\": () => (/* binding */ filterEvenNumbers),\n/* harmony export */   \"generateCombinations\": () => (/* binding */ generateCombinations),\n/* harmony export */   \"getAverage\": () => (/* binding */ getAverage),\n/* harmony export */   \"getDividedByFive\": () => (/* binding */ getDividedByFive),\n/* harmony export */   \"getMedian\": () => (/* binding */ getMedian),\n/* harmony export */   \"getModa\": () => (/* binding */ getModa),\n/* harmony export */   \"getRandomArray\": () => (/* binding */ getRandomArray),\n/* harmony export */   \"replaceBadWords\": () => (/* binding */ replaceBadWords)\n/* harmony export */ });\nfunction getRandomArray(length, min, max) {\n\tconst result = [];\n\tif (min > max) {\n\t\treturn \"The max value must be greater than the min.Enter correctly!\"\n\t}\n\tfor (let i = 0; i < length; i++) {\n\t\tresult.push(Math.floor(min + Math.random() * (max + 1 - min)))\n\t} return result\n}\n\n\nfunction getModa(numbers) {\n\tif (numbers === '') {\n\t\treturn \"You entered nothing\"\n\t}\n\tconst intNumbers = numbers.split(',').map((el) => Number(el)).filter((el) => parseInt(el) === el);\n\tconst pairsElemAndFrequency = intNumbers.map(function (item, index, arr) {\n\t\treturn [item, arr.filter((elem) => item === elem).length]\n\t}); //create a pair [value, frequency]\n\n\tif (pairsElemAndFrequency.every((item) => item[1] === 1)) {\n\t\treturn \"All values are unique\"\n\t}\n\tconst modaPair = pairsElemAndFrequency.sort((a, b) => a[1] - b[1]).pop();\n\tconst mostFrequency = modaPair[1];\n\tconst resultModa = Array.from(new Set(pairsElemAndFrequency.filter((el) => el[1] === mostFrequency).map((el) => el[0])));\n\treturn resultModa;\n}\n\n\nfunction getAverage(numbers) {\n\tconst intNumbers = numbers.split(',').map((el) => Number(el)).filter((el) => parseInt(el) === el);\n\tconst sum = intNumbers.reduce((sum, item) => sum += item, 0);\n\treturn sum / intNumbers.length;\n}\n\n\nfunction getMedian(numbers) {\n\tconst intNumbers = numbers.split(',').map((el) => Number(el)).filter((el) => parseInt(el) === el);\n\tconst sortNumbers = intNumbers.sort((a, b) => a - b);\n\tif (sortNumbers.length % 2 === 0) {\n\t\treturn (sortNumbers[sortNumbers.length / 2] + sortNumbers[(sortNumbers.length / 2) - 1]) / 2;\n\t}\n\telse if (sortNumbers.length % 2 === 1) {\n\t\treturn sortNumbers[Math.floor(sortNumbers.length / 2)]\n\t}\n\telse {\n\t\treturn []\n\t}\n}\n\n\nconst filterEvenNumbers = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el % 2 === 1)\n\n\nconst countPositiveNumbers = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el > 0).length;\n\n\nconst getDividedByFive = (numbers) => numbers.split(',').map((el) => Number(el)).filter((el) => el % 5 === 0 && el !== 0);\n\n\nfunction replaceBadWords(string, censor) {\n\tconsole.log(censor);\n\tif (string === '') {\n\t\treturn \"You entered nothing\"\n\t}\n\tconst badWords = ['fuck', 'shit'];\n\tif (censor !== '') {\n\t\tcensor.toLowerCase().split(',').forEach(item => badWords.push(item.trim()));\n\t}\n\n\tconst wordsArray = string.toLowerCase().split(' ');\n\tconst res = wordsArray.map(function (el) {\n\t\tfor (let badItem of badWords) {\n\t\t\tif (el.search(badItem) !== -1) {\n\t\t\t\tconst elArr = el.split(badItem);\n\t\t\t\treturn elArr.join('***');\n\t\t\t}\n\t\t}\n\t\treturn el;\n\t})\n\treturn res.join(' ');\n\n}\n\n\nfunction divideByThree(word) {\n\tif (word.split('').length < 3) {\n\t\treturn \"Less than three letters in this word\"\n\t}\n\telse {\n\t\tconst result = [];\n\t\tconst letters = word.toLowerCase().split('').filter((el) => el !== ' ');\n\t\tletters.forEach((el, i, arr) => result.push(arr.splice(i, 3, 0).join('')));\n\t\treturn result;\n\t}\n}\n\n\nconst generateCombinations = (word) => {\n\tif (word.length > 10) {\n\t\treturn \"Too long word\"\n\t}\n\tif (word.length <= 2) return word.length === 2 ? [word[0] + word[1], word[1] + word[0]].filter((el, pos, arr) => arr.indexOf(el) === pos) : [word];\n\treturn word.split('').reduce((accumulator, letter, i) =>\n\t\taccumulator.concat(generateCombinations(word.slice(0, i) + word.slice(i + 1)).map(val => letter + val)), [])\n\t\t.filter((el, pos, arr) => arr.indexOf(el) === pos);\n}\n\n//# sourceURL=webpack://webpack/./src/modules/arraysMathod.js?");

/***/ }),

/***/ "./src/modules/fancProgramming.js":
/*!****************************************!*\
  !*** ./src/modules/fancProgramming.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMiddleTaxes\": () => (/* binding */ getMiddleTaxes),\n/* harmony export */   \"getMySalary\": () => (/* binding */ getMySalary),\n/* harmony export */   \"getMyTaxes\": () => (/* binding */ getMyTaxes),\n/* harmony export */   \"getTotalTaxes\": () => (/* binding */ getTotalTaxes),\n/* harmony export */   \"latvia\": () => (/* binding */ latvia),\n/* harmony export */   \"litva\": () => (/* binding */ litva),\n/* harmony export */   \"ukraine\": () => (/* binding */ ukraine)\n/* harmony export */ });\nconst ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };\n\nconst latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };\n\nconst litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };\n\n\nfunction getMyTaxes(salary) {\n\treturn this.tax * salary;\n}\n\n\nfunction getMiddleTaxes() {\n\treturn this.tax * this.middleSalary;\n}\n\n\nfunction getTotalTaxes() {\n\treturn this.tax * this.middleSalary * this.vacancies;\n}\n\nfunction getMySalary() {\n\tsetInterval(() => {\n\t\tconst salary = 1500 + Math.random() * (2000 - 1500);\n\t\tconst taxes = this.tax * salary;\n\t\tconst profit = salary - taxes;\n\t\tconst res = {\n\t\t\tsalary: salary,\n\t\t\ttaxes: taxes,\n\t\t\tprofit: profit,\n\t\t};\n\t\tconsole.log(res);\n\t}\n\t\t, 10000)\n}\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/fancProgramming.js?");

/***/ }),

/***/ "./src/modules/function.js":
/*!*********************************!*\
  !*** ./src/modules/function.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertCurrency\": () => (/* binding */ convertCurrency),\n/* harmony export */   \"countLetter\": () => (/* binding */ countLetter),\n/* harmony export */   \"deleteDuplicateLetter\": () => (/* binding */ deleteDuplicateLetter),\n/* harmony export */   \"firstLetterToUpperCase\": () => (/* binding */ firstLetterToUpperCase),\n/* harmony export */   \"getMaxDigit\": () => (/* binding */ getMaxDigit),\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber),\n/* harmony export */   \"getRandomPassword\": () => (/* binding */ getRandomPassword),\n/* harmony export */   \"isPalyndrom\": () => (/* binding */ isPalyndrom),\n/* harmony export */   \"powFirst\": () => (/* binding */ powFirst),\n/* harmony export */   \"tax\": () => (/* binding */ tax)\n/* harmony export */ });\nconst getMaxDigit = (number) => +Math.max(...(number + '').split(''));\n\nfunction powFirst(x, n) {\n\tlet pow = 1;\n\tif (n >= 0) {\n\t\tfor (let i = 1; i <= n; i++) {\n\t\t\tpow *= x\n\t\t}\n\t\treturn `${x}^${n} = ${pow}`;\n\t}\n\telse if (n < 0) {\n\t\tfor (let i = 1; i <= -n; i++) {\n\t\t\tpow *= x\n\t\t}\n\t\treturn `${x}^(${n}) = 1/${pow} = ${1 / pow}`;\n\t}\n};\n\nconst firstLetterToUpperCase = (userName) => userName[0].toUpperCase() + userName.substring(1).toLowerCase();\n\nfunction tax(salary, taxRate) {\n\tconst getTax = salary - salary * (parseFloat(taxRate) / 100);\n\tif (taxRate == '' || salary == '') {\n\t\treturn \"please enter all data\"\n\t} else {\n\t\treturn getTax\n\t}\n\n}\n\nconst getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\n\nfunction countLetter(letter, srt) {\n\tlet count = 0;\n\tlet position = srt.indexOf(letter);\n\twhile (position !== -1) {\n\t\tcount++;\n\t\tposition = srt.indexOf(letter, position + 1);\n\t} return count;\n}\n\nfunction convertCurrency(money, exchangeRate) {\n\tconst n = (parseInt(money) + '').split('').length\n\tconst currency = money.split('').splice(n).join('');\n\tlet result;\n\tlet exchangCurr;\n\tif (currency.toLowerCase() === \"uah\") {\n\t\tresult = (parseInt(money) / exchangeRate).toFixed(2);\n\t\texchangCurr = \"$\";\n\t} else if (currency === \"$\") {\n\t\tresult = (parseInt(money) * exchangeRate).toFixed(2);\n\t\texchangCurr = \"Uah\";\n\t} else {\n\t\treturn \"This currency is not convertible\";\n\t}\n\treturn ` ${money} = ${result}${exchangCurr}`;\n}\n\nfunction getRandomPassword(length = 8) {\n\tlet pas = '';\n\tfor (let i = 0; i < length; i++) {\n\t\tpas += Math.trunc(Math.random() * 10)\n\t} return pas;\n}\n\nfunction isPalyndrom(str) {\n\tconst arrLetters = str.split('').filter((el) => el !== \" \").map((elem) => elem.toLowerCase());\n\tconst shouldBeTheSame = Math.floor(arrLetters.length / 2)\n\tlet isTheSame = 0;\n\tfor (let i = 0; i < shouldBeTheSame; i++) {\n\t\tif (arrLetters[i] === arrLetters[arrLetters.length - (i + 1)]) {\n\t\t\tisTheSame++;\n\t\t}\n\t}\n\treturn isTheSame === shouldBeTheSame;\n}\n\nfunction deleteDuplicateLetter(str) {\n\tconst arr = str.toLowerCase().split('').filter((el) => el !== \" \"); //create an array, reduce all letters to lowercase without space\n\tif (arr.every((elem, index, arr) => arr.indexOf(elem) === index)) { //if all elements are unique then we return our string without changes\n\t\treturn str;\n\t}\n\telse {\n\t\tconst duplicated = arr.filter((elem, index, arr) => (arr.indexOf(elem) !== index));\n\t\tconst duplicatedUnique = Array.from(new Set(duplicated));\n\t\tconst unique = arr.filter((el) => !duplicatedUnique.includes(el));\n\t\treturn unique.join('');\n\t}\n}\n\n//# sourceURL=webpack://webpack/./src/modules/function.js?");

/***/ }),

/***/ "./src/modules/generator.js":
/*!**********************************!*\
  !*** ./src/modules/generator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createIdGenerator\": () => (/* binding */ createIdGenerator),\n/* harmony export */   \"newFontGenerator\": () => (/* binding */ newFontGenerator)\n/* harmony export */ });\nfunction* createIdGenerator() {\n\tlet i = 1;\n\twhile (true) {\n\t\tyield i++;\n\t}\n}\n\n\n\nfunction* newFontGenerator(fontSize = 14) {\n\tlet result = yield fontSize;\n\twhile (true) {\n\t\tif (result === 'up') {\n\t\t\tresult = yield fontSize += 2;\n\t\t} else if (result === 'down') {\n\t\t\tresult = yield fontSize -= 2;\n\t\t} else {\n\t\t\tresult = yield fontSize;\n\t\t}\n\t}\n}\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/generator.js?");

/***/ }),

/***/ "./src/modules/loops.js":
/*!******************************!*\
  !*** ./src/modules/loops.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputM\": () => (/* binding */ inputM),\n/* harmony export */   \"inputN\": () => (/* binding */ inputN),\n/* harmony export */   \"sumNumbers\": () => (/* binding */ sumNumbers)\n/* harmony export */ });\nlet N, M;\n\nfunction inputN() {\n\tdo {\n\t\tN = +prompt(\"My dear friend, please enter FIRST integer number\", \"enter here\");\n\t\tif ((N !== parseInt(N)) || (Object.is(NaN, N) === true))\n\t\t\talert(\"It is not a integer number! Try again!\")\n\t} while ((N !== parseInt(N)) || (Object.is(NaN, N) === true))\n}\n\nfunction inputM() {\n\tdo {\n\t\tM = +prompt(\"My dear friend, please enter SECOND integer number\", \"enter here\");\n\t\tif ((M !== parseInt(M)) || (Object.is(NaN, M) === true))\n\t\t\talert(\"It is not a integer number! Try again!\")\n\t} while ((M !== parseInt(M)) || (Object.is(NaN, M) === true))\n}\n\nlet addEvenNumbers = confirm('Do you need to add even numbers? #7');\n\nfunction sumNumbers(n, m) {\n\tlet sum = 0;\n\tconst minNumber = Math.min(n, m);\n\tconst maxNumber = Math.max(n, m);\n\n\tif (addEvenNumbers) {\n\t\tfor (let i = minNumber; i <= maxNumber; i++) {\n\t\t\tsum += i;\n\t\t} return sum;\n\t}\n\telse {\n\t\tfor (let i = minNumber; i <= maxNumber; i++) {\n\t\t\tif (!(i % 2 == 0)) {\n\t\t\t\tsum += i;\n\t\t\t}\n\t\t} return sum;\n\t}\n}     \n\n//# sourceURL=webpack://webpack/./src/modules/loops.js?");

/***/ }),

/***/ "./src/modules/obj.js":
/*!****************************!*\
  !*** ./src/modules/obj.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateWordLetters\": () => (/* binding */ calculateWordLetters),\n/* harmony export */   \"getAverageMark\": () => (/* binding */ getAverageMark),\n/* harmony export */   \"getBestStudent\": () => (/* binding */ getBestStudent),\n/* harmony export */   \"getStudentInfo\": () => (/* binding */ getStudentInfo),\n/* harmony export */   \"getStudentsNames\": () => (/* binding */ getStudentsNames),\n/* harmony export */   \"getSubjects\": () => (/* binding */ getSubjects),\n/* harmony export */   \"students\": () => (/* binding */ students)\n/* harmony export */ });\nconst students = [{\n\tname: \"Tanya\",\n\tcourse: 3,\n\tsubjects: {\n\t\tmath: [4, 4, 3, 4],\n\t\talgorithms: [3, 3, 3, 4, 4, 4],\n\t\tdata_science: [5, 5, 3, 4]\n\t}\n}, {\n\tname: \"Victor\",\n\tcourse: 4,\n\tsubjects: {\n\t\tphysics: [5, 5, 5, 3],\n\t\teconomics: [2, 3, 3, 3, 3, 5],\n\t\tgeometry: [5, 5, 2, 3, 5]\n\t}\n}, {\n\tname: \"Anton\",\n\tcourse: 2,\n\tsubjects: {\n\t\tstatistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n\t\tenglish: [5, 3],\n\t\tcosmology: [5, 5, 5, 5]\n\t}\n}];\n\n\nfunction getSubjects(studentIndex) {\n\tconst listOfSubjects = Object.keys(students[studentIndex].subjects);\n\tconst result = listOfSubjects.map((el) => {\n\t\tconst arrItem = el.split('');\n\t\tconst firstLetter = arrItem[0].toUpperCase();\n\t\tarrItem.splice(0, 1, firstLetter);\n\t\tif (arrItem.includes('_')) {\n\t\t\tarrItem.splice(arrItem.indexOf('_'), 1, ' ')\n\t\t}\n\t\treturn arrItem.join('')\n\t});\n\treturn result\n}\n\n\n\nfunction getAverageMark(studentIndex) {\n\tconst listOfMarks = Object.values(students[studentIndex].subjects);\n\tconst totalSum = listOfMarks.reduce(function (total, item) {\n\t\treturn total += item.reduce((sum, mark) => sum += mark, 0);\n\t}, 0);\n\tlet amountOfMarks = 0;\n\tlistOfMarks.forEach((el) => amountOfMarks += el.length);\n\n\treturn (totalSum / amountOfMarks).toFixed(2);\n}\n\n\nfunction getStudentInfo(studentIndex) {\n\tconst student = students[studentIndex];\n\tconst { name, course } = student;\n\tconst result = {};\n\tresult.course = course;\n\tresult.name = name;\n\tresult.getAverageMark = getAverageMark(studentIndex);\n\treturn result;\n}\n\n\n\nfunction getStudentsNames(students) {\n\tconst names = []\n\tstudents.forEach((el) => names.push(el.name))\n\treturn names.sort();\n}\n\n\nfunction getBestStudent(students) {\n\tconst res = [];\n\tstudents.forEach((item, index) => res.push(+getAverageMark(index)))\n\tconst maxGrade = Math.max(...res);\n\tconst bestStudent = students[res.indexOf(maxGrade)].name;\n\treturn bestStudent;\n}\n\n\nfunction calculateWordLetters(string) {\n\tconst letters = string.split('');\n\tconst res = {};\n\tletters.forEach(function (item) {\n\t\tif (item in res) {\n\t\t\tres[item] += 1;\n\t\t}\n\t\telse {\n\t\t\tres[item] = 1;\n\t\t}\n\t})\n\treturn res;\n}\n\n//# sourceURL=webpack://webpack/./src/modules/obj.js?");

/***/ }),

/***/ "./src/modules/promises.js":
/*!*********************************!*\
  !*** ./src/modules/promises.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomChinese\": () => (/* binding */ getRandomChinese)\n/* harmony export */ });\nasync function getRandomChinese(length) {\n\tlet res = [];\n\twhile (length) {\n\t\tlet promise = new Promise((resolve) => {\n\t\t\tsetTimeout(() => {\n\t\t\t\tlet charCode = Date.now() % 1e5;\n\t\t\t\tlet randomChinese = String.fromCharCode(charCode);\n\t\t\t\tresolve(randomChinese); // promise after 50ms return char\n\t\t\t}, 50)\n\t\t})\n\t\tlet chinese = await promise; // whait for result of promise\n\t\tres.push(chinese);\n\t\tlength--;\n\t}\n\treturn res.join(' '); // return promise because of async\n}\n\n\n//# sourceURL=webpack://webpack/./src/modules/promises.js?");

/***/ }),

/***/ "./src/modules/prototype.js":
/*!**********************************!*\
  !*** ./src/modules/prototype.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BudgetStudent\": () => (/* binding */ BudgetStudent),\n/* harmony export */   \"Student\": () => (/* binding */ Student),\n/* harmony export */   \"mariia\": () => (/* binding */ mariia)\n/* harmony export */ });\nclass Student {\n\tconstructor(university, course, fullName, marks = [5, 4, 4, 5], isActive = true) {\n\t\tthis.university = university,\n\t\t\tthis.course = course,\n\t\t\tthis.fullName = fullName,\n\t\t\tthis.marks = marks,\n\t\t\tthis.isActive = isActive\n\t}\n\tget getInfo() {\n\t\treturn `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`\n\t}\n\tget getMarks() {\n\t\treturn this.marks;\n\t}\n\tset setMarks(value) {\n\t\tif (this.isActive) {\n\t\t\tthis.marks.push(value);\n\t\t}\n\t\treturn this.marks;\n\t}\n\tget getAverageMark() {\n\t\tif (!this.isActive) {\n\t\t\treturn this.marks;\n\t\t}\n\t\telse {\n\t\t\treturn (this.marks.reduce((sum, el) => sum += el, 0) / this.marks.length);\n\t\t}\n\t}\n\tdismiss() {\n\t\tthis.isActive = false;\n\t\tthis.marksForRecover = [...this.marks]\n\t\tthis.marks = null;\n\t}\n\trecover() {\n\t\tthis.isActive = true;\n\t\tthis.marks = this.marksForRecover;\n\t}\n}\n\nconst mariia = new Student('LNU', 6, 'Mariia Kuzhydlo');\n\n\nclass BudgetStudent extends Student {\n\tconstructor(university, course, fullName, isBudget, marks = [5, 4, 4, 5], isActive = true) {\n\t\tsuper(university, course, fullName, marks = [5, 4, 4, 5], isActive = true)\n\t\tthis.isBugget = isBudget,\n\t\t\tsetInterval(this.getScholarship, 30000);\n\t}\n\tgetScholarship = () => {\n\t\tif (this.isActive && (this.getAverageMark >= 4)) {\n\t\t\tconsole.log('Ви отримали 1400 грн. стипендії!');\n\t\t} else if (!this.isActive || this.getAverageMark < 4) {\n\t\t\tconsole.log(\"Ви не отримали стипендію\")\n\t\t}\n\t}\n}\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/prototype.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"adidasPrice\": () => (/* binding */ adidasPrice),\n/* harmony export */   \"average\": () => (/* binding */ average),\n/* harmony export */   \"change\": () => (/* binding */ change),\n/* harmony export */   \"cost\": () => (/* binding */ cost),\n/* harmony export */   \"isSumEven\": () => (/* binding */ isSumEven),\n/* harmony export */   \"maxPrice\": () => (/* binding */ maxPrice),\n/* harmony export */   \"minPrice\": () => (/* binding */ minPrice),\n/* harmony export */   \"nikePrice\": () => (/* binding */ nikePrice),\n/* harmony export */   \"payment\": () => (/* binding */ payment),\n/* harmony export */   \"priceWithDiscount\": () => (/* binding */ priceWithDiscount),\n/* harmony export */   \"profit\": () => (/* binding */ profit),\n/* harmony export */   \"randomDiscountRate\": () => (/* binding */ randomDiscountRate),\n/* harmony export */   \"sumDiscount\": () => (/* binding */ sumDiscount),\n/* harmony export */   \"sumIntPrice\": () => (/* binding */ sumIntPrice),\n/* harmony export */   \"sumPrice\": () => (/* binding */ sumPrice),\n/* harmony export */   \"sumPriceRoundTwoPoint\": () => (/* binding */ sumPriceRoundTwoPoint),\n/* harmony export */   \"zaraPrice\": () => (/* binding */ zaraPrice)\n/* harmony export */ });\nconst nikePrice = 123.965;\nconst adidasPrice = 90.2345;\nconst zaraPrice = 15.678;\nconst payment = 500;\n\nconst maxPrice = Math.max(nikePrice, adidasPrice, zaraPrice);\n\nconst minPrice = Math.min(nikePrice, adidasPrice, zaraPrice);\n\nconst sumPrice = nikePrice + adidasPrice + zaraPrice;\n\nconst sumIntPrice = Math.floor(nikePrice) + Math.floor(adidasPrice) + Math.floor(zaraPrice);\n\nconst sumPriceRoundTwoPoint = Math.round(sumPrice / 100) * 100;\n\nconst isSumEven = (Math.floor(sumPrice) % 2 === 0) ? true : false;\n\nconst change = payment - sumPrice;\n\nconst average = +(sumPrice / 3).toFixed(2);\n\nconst randomDiscountRate = (Math.random()).toFixed(2);\n\nconst sumDiscount = +(sumPrice * randomDiscountRate).toFixed(2);\nconst priceWithDiscount = +((sumPrice - sumDiscount).toFixed(2));\n\nconst cost = sumPrice / 2;\nconst profit = +((priceWithDiscount - cost).toFixed(2));\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/variables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;