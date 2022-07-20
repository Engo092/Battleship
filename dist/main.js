/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body, html {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.title {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 25px;\r\n    font-size: 38px;\r\n    background-color: rgb(0, 52, 194);\r\n    text-shadow: 2px 0 1px black;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.grids {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n \r\n.grid {\r\n    margin-left: 15vw;\r\n}\r\n\r\n.enemyGrid {\r\n    width: 500px;\r\n    margin-top: 59px;\r\n    margin-left: auto;\r\n    margin-right: 15vw;\r\n}\r\n\r\n.grid {\r\n    width: 500px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.column {\r\n    display: flex;\r\n}\r\n\r\n.square {\r\n    background-color: rgba(227, 255, 255, 0.336);\r\n    height: 50px;\r\n    width: 50px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: rgba(104, 87, 72, 0.733);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin-top: 25px;\r\n}\r\n\r\n.start, .restart {\r\n    padding: 10px;\r\n    background-color:rgba(0, 174, 255, 0.062);\r\n    border-style: solid;\r\n    border-width: 5px;\r\n    border-color: rgb(30, 161, 74);\r\n    transition: background-color 500ms, border-color 500ms, color 500ms;\r\n}\r\n\r\n.start {\r\n    font-size: 18px;\r\n}\r\n\r\n.restart {\r\n    font-size: 22px;\r\n}\r\n\r\n.start:hover, .restart:hover {\r\n    color: white;\r\n    background-color: rgb(0, 52, 194);\r\n    border-color: rgb(30, 65, 161);\r\n    transition: background-color 500ms, border-color 500ms, color 500ms;\r\n}\r\n\r\n.playerMsg {\r\n    padding: 15px 0;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    width: 100%;\r\n    background-color: rgb(55, 79, 185);\r\n    color: white;\r\n    align-self: center;\r\n}\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hit, .attacked {\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.hit {\r\n    background-color: red;\r\n}\r\n\r\n.attacked {\r\n    background-color: lightblue;\r\n}\r\n\r\n.modeSelector {\r\n    color: white;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    padding: 15px;\r\n    width: 120px;\r\n    border-radius: 15px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: rgb(189, 187, 57);\r\n    background-color:rgb(12, 151, 12);\r\n    font-size: 18px;\r\n}\r\n\r\n.modeSelector:hover {\r\n    background-color: rgb(0, 179, 15);\r\n}\r\n\r\n@media only screen and (max-width: 1600px) {\r\n    .grid {\r\n        margin-left: 5vw;\r\n    }\r\n    .enemyGrid {\r\n        margin-right: 5vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1150px) {\r\n    .grid {\r\n        margin-left: 3%;\r\n    }\r\n    .enemyGrid {\r\n        margin-right: 0%;\r\n    }\r\n    .grids {\r\n        width: 1100px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,wEAAwE;IACxE,SAAS;IACT,aAAa;IACb,eAAe;IACf,iCAAiC;IACjC,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,sCAAsC;IACtC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,iBAAiB;IACjB,8BAA8B;IAC9B,mEAAmE;AACvE;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,8BAA8B;IAC9B,mEAAmE;AACvE;;AAEA;IACI,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,+BAA+B;IAC/B,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,aAAa;IACjB;AACJ","sourcesContent":["body, html {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.title {\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 25px;\r\n    font-size: 38px;\r\n    background-color: rgb(0, 52, 194);\r\n    text-shadow: 2px 0 1px black;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.grids {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n \r\n.grid {\r\n    margin-left: 15vw;\r\n}\r\n\r\n.enemyGrid {\r\n    width: 500px;\r\n    margin-top: 59px;\r\n    margin-left: auto;\r\n    margin-right: 15vw;\r\n}\r\n\r\n.grid {\r\n    width: 500px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.column {\r\n    display: flex;\r\n}\r\n\r\n.square {\r\n    background-color: rgba(227, 255, 255, 0.336);\r\n    height: 50px;\r\n    width: 50px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: rgba(104, 87, 72, 0.733);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin-top: 25px;\r\n}\r\n\r\n.start, .restart {\r\n    padding: 10px;\r\n    background-color:rgba(0, 174, 255, 0.062);\r\n    border-style: solid;\r\n    border-width: 5px;\r\n    border-color: rgb(30, 161, 74);\r\n    transition: background-color 500ms, border-color 500ms, color 500ms;\r\n}\r\n\r\n.start {\r\n    font-size: 18px;\r\n}\r\n\r\n.restart {\r\n    font-size: 22px;\r\n}\r\n\r\n.start:hover, .restart:hover {\r\n    color: white;\r\n    background-color: rgb(0, 52, 194);\r\n    border-color: rgb(30, 65, 161);\r\n    transition: background-color 500ms, border-color 500ms, color 500ms;\r\n}\r\n\r\n.playerMsg {\r\n    padding: 15px 0;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    width: 100%;\r\n    background-color: rgb(55, 79, 185);\r\n    color: white;\r\n    align-self: center;\r\n}\r\n\r\n.hide {\r\n    visibility: hidden;\r\n}\r\n\r\n.hit, .attacked {\r\n    width: 25px;\r\n    height: 25px;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.hit {\r\n    background-color: red;\r\n}\r\n\r\n.attacked {\r\n    background-color: lightblue;\r\n}\r\n\r\n.modeSelector {\r\n    color: white;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    padding: 15px;\r\n    width: 120px;\r\n    border-radius: 15px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: rgb(189, 187, 57);\r\n    background-color:rgb(12, 151, 12);\r\n    font-size: 18px;\r\n}\r\n\r\n.modeSelector:hover {\r\n    background-color: rgb(0, 179, 15);\r\n}\r\n\r\n@media only screen and (max-width: 1600px) {\r\n    .grid {\r\n        margin-left: 5vw;\r\n    }\r\n    .enemyGrid {\r\n        margin-right: 5vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1150px) {\r\n    .grid {\r\n        margin-left: 3%;\r\n    }\r\n    .enemyGrid {\r\n        margin-right: 0%;\r\n    }\r\n    .grids {\r\n        width: 1100px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domControl.js":
/*!***************************!*\
  !*** ./src/domControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameBoard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");



function domControl() {
    function loadGrid(grid) {
        for (let i = 0; i < 10; i++) {
            let newColumn = document.createElement('div');
            newColumn.classList.add('column');
            for (let j = 0; j < 10; j++) {
                let square = document.createElement('div');
                square.classList.add('square');
                newColumn.appendChild(square);
            }
            grid.appendChild(newColumn);
        }
    }

    function displayMsg(num) {
        const playerMsg = document.querySelector('.playerMsg');
        switch (num) {
            case 0:
                playerMsg.innerHTML = 'Please place your carrier!';
                break
            case 1:
                playerMsg.innerHTML = 'Please place your battleship!';
                break
            case 2:
                playerMsg.innerHTML = 'Please place your first cruiser!';
                break
            case 3:
                playerMsg.innerHTML = 'Please place your second cruiser!';
                break
            case 4:
                playerMsg.innerHTML = 'Please place your destroyer!';
                break
            default:
                playerMsg.innerHTML = 'Start the game!';
        }
    }

    function determineLen(placedShipsNum) {
        switch (placedShipsNum) {
            case 0:
                return 5;
            case 1:
                return 4;
            case 2:
            case 3:
                return 3;
            case 4:
                return 2;
            case 5:
                return null;
        }
    }

    function displayHitMsg(shipLen, playerHit) {
        const playerMsg = document.querySelector('.playerMsg');
        switch (shipLen) {
            case 5:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Carrier!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Carrier!';
                }
                break;
            case 4:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Battleship!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Battleship!';
                }
                break;
            case 3:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Cruiser!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Cruiser!';
                }
                break;
            case 2:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Destroyer!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Destroyer!';
                }
                break;
        }
    }

    function checkValidity(length, y, x, alignment, grid) {
        if (alignment == 'horizontal') {
            if (x + length > 10) {
                return false;
            }
            for (let i = x; i < x + length; i++) {
                if (grid[y].children[i].style.backgroundColor == 'darkblue') {
                    return false;
                }
            }
        } else {
            if (y + length > 10) {
                return false;
            }
            for (let i = y; i < y + length; i++) {
                if (grid[i].children[x].style.backgroundColor == 'darkblue') {
                    return false;
                }
            }
        }
        return true;
    }

    function simulatePosition(y, x, grid, length, alignment) {
        if (checkValidity(length, y, x, alignment, grid) == true) {
            if (alignment == 'horizontal') {
                for (let i = x; i < x + length; i++) {
                    grid[y].children[i].style.backgroundColor = 'lightblue';
                }
            } else {
                for (let i = y; i < y + length; i++) {
                    grid[i].children[x].style.backgroundColor = 'lightblue';
                }
            }
        }
    }

    function recolorGrid(grid) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].children.length; j++) {
                if (grid[i].children[j].style.backgroundColor != 'darkblue') {
                    grid[i].children[j].style.backgroundColor = 'rgba(227, 255, 255, 0.336)';
                }
            }
        }
    }

    async function computerPlay(computer, player, playerGrid) {
        const playerMsg = document.querySelector('.playerMsg');
        playerMsg.innerHTML = 'Enemy is aiming...';
        await (0,___WEBPACK_IMPORTED_MODULE_1__["default"])(500);
        const attackedCoordenates = computer.aiPlay(player.playerGameBoard.board);
        playerMsg.innerHTML = 'Enemy has fired, and...';
        await (0,___WEBPACK_IMPORTED_MODULE_1__["default"])(500);
        player.playerGameBoard.receiveAttack(attackedCoordenates[0], attackedCoordenates[1]);
        registerAttack(player, playerGrid, attackedCoordenates[1], attackedCoordenates[0]);
        const squares = document.querySelector('.enemyGrid').querySelectorAll('.square');
        if (checkForWin(player)) {
            finishGame(computer);
        } else {
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.pointerEvents = 'auto';
            }
        }   
    }

    function registerAttack(player, grid, i, j) {
        const playerMsg = document.querySelector('.playerMsg');
        const hitCircle = document.createElement('span');
        if (player.playerGameBoard.board[i][j]['coordinates']) {
            let board = player.playerGameBoard.board;
            hitCircle.classList.add('hit');
            playerMsg.innerHTML = '...hit!';

            // changes message to be displayed if ship was sunk
            if (board[board[i][j]['coordinates'][1]][board[i][j]['coordinates'][0]]['ship'].isSunk()) {
                let shipLen = board[board[i][j]['coordinates'][1]][board[i][j]['coordinates'][0]]['ship'].length;
                displayHitMsg(shipLen, player.type);
            }
        } else {
            hitCircle.classList.add('attacked');
            playerMsg.innerHTML = '...missed.';
        }
        grid[i].children[j].appendChild(hitCircle);
        grid[i].children[j].classList.add('disabled');
    }

    function checkForWin(attackedPlayer) {
        if (attackedPlayer.playerGameBoard.allSunk() == true) {
            return true;
        }
        return false;
    }

    function finishGame(winner) {
        if (winner.type == 'player') {
            document.querySelector('.playerMsg').innerHTML = 'Congratulations! You win.';
        } else {
            document.querySelector('.playerMsg').innerHTML = 'Computer wins, game over.';
        }
        restartGame();
    }

    function restartGame() {
        document.querySelector('.start').remove();
        const buttons = document.querySelector('.btnDiv');
        const restart = document.createElement('div');
        restart.classList.add('restart');
        restart.innerHTML = 'Restart';
        buttons.appendChild(restart);
        restart.addEventListener('click', (() => { window.location.reload() }));
    }

    function createModeSelector(grid) {
        const modeSelector = document.createElement('button');
        modeSelector.classList.add('modeSelector');
        modeSelector.innerHTML = 'Horizontal';
        grid.appendChild(modeSelector);
    }
    
    return {
        initializeGrids() {
            const grid = document.querySelector('.grid');
            const enemyGrid = document.querySelector('.enemyGrid');
            loadGrid(grid);
            createModeSelector(grid);
            loadGrid(enemyGrid);
        },
        startGame(computer) {
            _gameBoard__WEBPACK_IMPORTED_MODULE_0___default()().placeComputerShips(computer);
            const start = document.querySelector('.start');
            const modeSelector = document.querySelector('.modeSelector');
            start.classList.add('hide');
            modeSelector.classList.add('hide');
            modeSelector.style.pointerEvents = 'none';
            const playerMsg = document.querySelector('.playerMsg');
            playerMsg.innerHTML = 'Your turn!';
            const squares = document.querySelector('.grid').querySelectorAll('.square');
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.pointerEvents = 'none';
            }
        },
        translateGridIntoArray(grid) {
            const gridItems = grid.children;
            const gridArray = Array.from(gridItems);
            if (gridArray[0].classList.contains('playerMsg')) {
                gridArray.splice(0, 1);
            }
            if (gridArray.length > 10) {
                gridArray.pop();
            }
            return gridArray;
        },
        colorGrid(board, grid) {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (board[i][j]['coordinates']) {
                        grid[i].children[j].style.backgroundColor = 'darkBlue';
                    }
                }
            }
        },
        placeShips(placedShips, player, grid) {
            displayMsg(placedShips);
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].children.length; j++) {
                    grid[i].children[j].addEventListener('click', function() {
                        if (!document.querySelector('.start').classList.contains('hide')) {
                            let length = determineLen(placedShips);
                            const alignment = document.querySelector('.modeSelector').textContent.toLowerCase();
                            const valid = checkValidity(length, i, j, alignment, grid);
                            if (valid != false) {
                                player.playerGameBoard.placeShip(alignment, length, j, i);
                                placedShips += 1;
                                displayMsg(placedShips);
                                domControl().colorGrid(player.playerGameBoard.board, grid);
                            }
                        }
                    });
                    grid[i].children[j].addEventListener('mouseover', function() {
                        if (placedShips < 5) {
                            let length = determineLen(placedShips);
                            const alignment = document.querySelector('.modeSelector').textContent.toLowerCase();
                            simulatePosition(i, j, grid, length, alignment);
                        }
                    });
                    grid[i].children[j].addEventListener('mouseout', (() => { recolorGrid(grid) }));
                }
            }
        },
        gridInput(player, grid, computer, playerGrid) {
            const playerMsg = document.querySelector('.playerMsg');
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].children.length; j++) {
                    grid[i].children[j].addEventListener('click', async function() {
                        if (!computer.playerGameBoard.board[i][j]['hit']) {
                            const squares = document.querySelector('.enemyGrid').querySelectorAll('.square');
                            for (let i = 0; i < squares.length; i++) {
                                squares[i].style.pointerEvents = 'none';
                            }
                            playerMsg.innerHTML = 'Shots fired! And...';
                            await (0,___WEBPACK_IMPORTED_MODULE_1__["default"])(500);
                            computer.playerGameBoard.receiveAttack(j, i);
                            registerAttack(computer, grid, i, j);
                            await (0,___WEBPACK_IMPORTED_MODULE_1__["default"])(1000)
                            if (checkForWin(computer) == true) {
                                finishGame(player);
                            } else {
                                computerPlay(computer, player, playerGrid);
                            }
                        }
                    })
                }
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domControl);

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const shipFactory = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");

function gameBoard() {
    let gameBoard = {};
    
    // loads gameboard
    for (let i = 0; i < 10; i++) {
        gameBoard[i] = {};
        for (let j = 0; j < 10; j++) {
            gameBoard[i][j] = {};
        }
    }

    function determineLen(num) {
        switch(num) {
            case 0:
                return 5;
            case 1:
                return 4;
            case 2:
            case 3:
                return 3;
            case 4:
                return 2;
            case 5:
                return null;
        }
    }

    function checkIfValid(board, alignment, x, y, length) {
        if (alignment == 'horizontal') {
            if (x + length > 10) {
                return false;
            }
            for (let i = x; i < x + length; i++) {
                if (board[y][i]['coordinates']) {
                    return false;
                }
            }
        } else {
            if (y + length > 10) {
                return false;
            }
            for (let i = y; i < y + length; i++) {
                if (board[i][x]['coordinates']) {
                    return false;
                }
            }
        }
        return true;
    }

    return {
        board: gameBoard,
        placeShip(mode, length, x, y) {
            this.board[y][x]['ship'] = shipFactory(length);
            this.board[y][x]['mode'] = mode;
            if (mode == 'horizontal') {
                for (let i = 0; i < length; i++) {
                    this.board[y][x + i]['coordinates'] = [x, y];
                }
            } else {
                for (let i = 0; i < length; i++) {
                    this.board[y + i][x]['coordinates'] = [x, y];
                }
            }
        },
        receiveAttack(x, y) {
            let hitSquare = this.board[y][x];
            hitSquare['hit'] = true;

            // checks if attack hits a ship
            if (hitSquare['coordinates']){
                let hitShip = this.board[hitSquare['coordinates'][1]][hitSquare['coordinates'][0]];
                let hitPos = 0;
                if (hitShip['mode'] == 'vertical') {
                    hitPos = y - hitShip['coordinates'][1];
                } else {
                    hitPos = x - hitShip['coordinates'][0];
                }
                hitShip['ship'].hit(hitPos);
            }
        },
        allSunk() {
            let shipNum = 0;
            let sunkAmount = 0;

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (this.board[i][j]['ship']) {
                        shipNum += 1;
                        if (this.board[i][j]['ship'].isSunk()) {
                            sunkAmount += 1;
                        }
                    }
                }
            }
            if (shipNum == sunkAmount) {
                return true;
            }
            return false;
        },
        placeComputerShips(computer) {
            let placedShips = 0;
            const alignments = ['horizontal', 'vertical'];
            while (placedShips < 5) {
                const length = determineLen(placedShips);
                const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
                const randomX = Math.floor(Math.random() * (10 - 0));
                const randomY = Math.floor(Math.random() * (10 - 0));
                if (checkIfValid(computer.playerGameBoard.board, randomAlignment, randomX, randomY, length)) {
                    computer.playerGameBoard.placeShip(randomAlignment, length, randomX, randomY);
                    placedShips += 1;
                }
            }
        },
        allShipsPlaced(board) {
            let shipNum = 0;
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (board[i][j]['ship']) {
                        shipNum += 1;
                    }
                }
            }
            if (shipNum < 5) {
                return false;
            }
            return true;
        }
    }
}

module.exports = gameBoard;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameBoard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_players__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domControl */ "./src/domControl.js");





// sleep function i found on https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(0,_domControl__WEBPACK_IMPORTED_MODULE_3__["default"])().initializeGrids();
const playerGrid = (0,_domControl__WEBPACK_IMPORTED_MODULE_3__["default"])().translateGridIntoArray(document.querySelector('.grid'));
const enemyGrid = (0,_domControl__WEBPACK_IMPORTED_MODULE_3__["default"])().translateGridIntoArray(document.querySelector('.enemyGrid'));

const player = _players__WEBPACK_IMPORTED_MODULE_2___default()('player');
const computer = _players__WEBPACK_IMPORTED_MODULE_2___default()('computer');

document.querySelector('.modeSelector').addEventListener('click', function() {
    if (document.querySelector('.modeSelector').innerHTML == 'Horizontal') {
        document.querySelector('.modeSelector').innerHTML = 'Vertical';
    } else {
        document.querySelector('.modeSelector').innerHTML = 'Horizontal';
    }
});

let placedShipsNum = 0;
(0,_domControl__WEBPACK_IMPORTED_MODULE_3__["default"])().placeShips(placedShipsNum, player, playerGrid);

document.querySelector('.start').addEventListener('click', function() {
    if (_gameBoard__WEBPACK_IMPORTED_MODULE_1___default()().allShipsPlaced(player.playerGameBoard.board)) {
        (0,_domControl__WEBPACK_IMPORTED_MODULE_3__["default"])().startGame(computer);
        (0,_domControl__WEBPACK_IMPORTED_MODULE_3__["default"])().gridInput(player, enemyGrid, computer, playerGrid);
    }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sleep);

// file:///C:/Users/EnzoKusuki/Desktop/Programs/odin/battleship/dist/index.html

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameBoard = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");

function players(playerType) {
    function loopThroughPossibleMoves(board) {
        let possibleMoves = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j]['hit'] != true) {
                    possibleMoves.push([j, i]);
                }
            }
        }
        return possibleMoves;
    }
    
    return {
        // playerType is either "player" or "computer"
        type: playerType,
        playerGameBoard: gameBoard(),
        aiPlay(enemyGameBoard) {
            const possibleMoves = loopThroughPossibleMoves(enemyGameBoard);

            // line below just randomly chooses an array element
            const chosenMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            return chosenMove;
        }
    }
}

module.exports = players;

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((module) => {

function shipFactory(length) {
    let ship = {};

    // loads ship
    for (let i = 0; i < length; i++) {
        ship[i] = '';
    }

    return {
        ship: ship,
        length: length,
        hit(pos) {
            this.ship[pos] = 'hit';
        },
        isSunk() {
            for (let i = 0; i < this.length; i++) {
                if (this.ship[i] != 'hit') {
                    return false;
                }
            }
            return true;
        }
    }
}

module.exports = shipFactory;

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBmb250LXNpemU6IDM4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTk0KTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAwIDFweCBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiBcXHJcXG4uZ3JpZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZW5lbXlHcmlkIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1OXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDI1NSwgMjU1LCAwLjMzNik7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTA0LCA4NywgNzIsIDAuNzMzKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQsIC5yZXN0YXJ0IHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDE3NCwgMjU1LCAwLjA2Mik7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYigzMCwgMTYxLCA3NCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMsIGJvcmRlci1jb2xvciA1MDBtcywgY29sb3IgNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi5zdGFydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydDpob3ZlciwgLnJlc3RhcnQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTk0KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMzAsIDY1LCAxNjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zLCBib3JkZXItY29sb3IgNTAwbXMsIGNvbG9yIDUwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyTXNnIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNzksIDE4NSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCwgLmF0dGFja2VkIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dGFja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kZVNlbGVjdG9yIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYigxODksIDE4NywgNTcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMiwgMTUxLCAxMik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGVTZWxlY3Rvcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzksIDE1KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXHJcXG4gICAgfVxcclxcbiAgICAuZW5lbXlHcmlkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XFxyXFxuICAgIC5ncmlkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZW5lbXlHcmlkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3RUFBd0U7SUFDeEUsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixtRUFBbUU7QUFDdkU7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIGh0bWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBmb250LXNpemU6IDM4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTk0KTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAwIDFweCBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiBcXHJcXG4uZ3JpZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZW5lbXlHcmlkIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1OXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsIDI1NSwgMjU1LCAwLjMzNik7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTA0LCA4NywgNzIsIDAuNzMzKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlZCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQsIC5yZXN0YXJ0IHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDE3NCwgMjU1LCAwLjA2Mik7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYigzMCwgMTYxLCA3NCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMsIGJvcmRlci1jb2xvciA1MDBtcywgY29sb3IgNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi5zdGFydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydDpob3ZlciwgLnJlc3RhcnQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MiwgMTk0KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMzAsIDY1LCAxNjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zLCBib3JkZXItY29sb3IgNTAwbXMsIGNvbG9yIDUwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyTXNnIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNzksIDE4NSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCwgLmF0dGFja2VkIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dGFja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kZVNlbGVjdG9yIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYigxODksIDE4NywgNTcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMiwgMTUxLCAxMik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGVTZWxlY3Rvcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzksIDE1KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXHJcXG4gICAgfVxcclxcbiAgICAuZW5lbXlHcmlkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXZ3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XFxyXFxuICAgIC5ncmlkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZW5lbXlHcmlkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWRzIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMTAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcclxuaW1wb3J0IHNsZWVwIGZyb20gJy4nO1xyXG5cclxuZnVuY3Rpb24gZG9tQ29udHJvbCgpIHtcclxuICAgIGZ1bmN0aW9uIGxvYWRHcmlkKGdyaWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBuZXdDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICAgICAgICAgICAgbmV3Q29sdW1uLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChuZXdDb2x1bW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5TXNnKG51bSkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNc2cnKTtcclxuICAgICAgICBzd2l0Y2ggKG51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1BsZWFzZSBwbGFjZSB5b3VyIGNhcnJpZXIhJztcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnUGxlYXNlIHBsYWNlIHlvdXIgYmF0dGxlc2hpcCEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdQbGVhc2UgcGxhY2UgeW91ciBmaXJzdCBjcnVpc2VyISc7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1BsZWFzZSBwbGFjZSB5b3VyIHNlY29uZCBjcnVpc2VyISc7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1BsZWFzZSBwbGFjZSB5b3VyIGRlc3Ryb3llciEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnU3RhcnQgdGhlIGdhbWUhJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGV0ZXJtaW5lTGVuKHBsYWNlZFNoaXBzTnVtKSB7XHJcbiAgICAgICAgc3dpdGNoIChwbGFjZWRTaGlwc051bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUhpdE1zZyhzaGlwTGVuLCBwbGF5ZXJIaXQpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTXNnJyk7XHJcbiAgICAgICAgc3dpdGNoIChzaGlwTGVuKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJIaXQgPT0gJ2NvbXB1dGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnWW91IHN1bmsgdGhlIGVuZW15IENhcnJpZXIhJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdUaGUgZW5lbXkgc3VuayB5b3VyIENhcnJpZXIhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVySGl0ID09ICdjb21wdXRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1lvdSBzdW5rIHRoZSBlbmVteSBCYXR0bGVzaGlwISc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnVGhlIGVuZW15IHN1bmsgeW91ciBCYXR0bGVzaGlwISc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckhpdCA9PSAnY29tcHV0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdZb3Ugc3VuayB0aGUgZW5lbXkgQ3J1aXNlciEnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1RoZSBlbmVteSBzdW5rIHlvdXIgQ3J1aXNlciEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJIaXQgPT0gJ2NvbXB1dGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnWW91IHN1bmsgdGhlIGVuZW15IERlc3Ryb3llciEnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1RoZSBlbmVteSBzdW5rIHlvdXIgRGVzdHJveWVyISc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tWYWxpZGl0eShsZW5ndGgsIHksIHgsIGFsaWdubWVudCwgZ3JpZCkge1xyXG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbeV0uY2hpbGRyZW5baV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdkYXJrYmx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkW2ldLmNoaWxkcmVuW3hdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZGFya2JsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNpbXVsYXRlUG9zaXRpb24oeSwgeCwgZ3JpZCwgbGVuZ3RoLCBhbGlnbm1lbnQpIHtcclxuICAgICAgICBpZiAoY2hlY2tWYWxpZGl0eShsZW5ndGgsIHksIHgsIGFsaWdubWVudCwgZ3JpZCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50ID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkW3ldLmNoaWxkcmVuW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNoaWxkcmVuW3hdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlY29sb3JHcmlkKGdyaWQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkW2ldLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZFtpXS5jaGlsZHJlbltqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT0gJ2RhcmtibHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRbaV0uY2hpbGRyZW5bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjI3LCAyNTUsIDI1NSwgMC4zMzYpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjb21wdXRlclBsYXkoY29tcHV0ZXIsIHBsYXllciwgcGxheWVyR3JpZCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNc2cnKTtcclxuICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ0VuZW15IGlzIGFpbWluZy4uLic7XHJcbiAgICAgICAgYXdhaXQgc2xlZXAoNTAwKTtcclxuICAgICAgICBjb25zdCBhdHRhY2tlZENvb3JkZW5hdGVzID0gY29tcHV0ZXIuYWlQbGF5KHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuYm9hcmQpO1xyXG4gICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnRW5lbXkgaGFzIGZpcmVkLCBhbmQuLi4nO1xyXG4gICAgICAgIGF3YWl0IHNsZWVwKDUwMCk7XHJcbiAgICAgICAgcGxheWVyLnBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja2VkQ29vcmRlbmF0ZXNbMF0sIGF0dGFja2VkQ29vcmRlbmF0ZXNbMV0pO1xyXG4gICAgICAgIHJlZ2lzdGVyQXR0YWNrKHBsYXllciwgcGxheWVyR3JpZCwgYXR0YWNrZWRDb29yZGVuYXRlc1sxXSwgYXR0YWNrZWRDb29yZGVuYXRlc1swXSk7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteUdyaWQnKS5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XHJcbiAgICAgICAgaWYgKGNoZWNrRm9yV2luKHBsYXllcikpIHtcclxuICAgICAgICAgICAgZmluaXNoR2FtZShjb21wdXRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJBdHRhY2socGxheWVyLCBncmlkLCBpLCBqKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1zZycpO1xyXG4gICAgICAgIGNvbnN0IGhpdENpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBpZiAocGxheWVyLnBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXVsnY29vcmRpbmF0ZXMnXSkge1xyXG4gICAgICAgICAgICBsZXQgYm9hcmQgPSBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmJvYXJkO1xyXG4gICAgICAgICAgICBoaXRDaXJjbGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnLi4uaGl0ISc7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGFuZ2VzIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGlmIHNoaXAgd2FzIHN1bmtcclxuICAgICAgICAgICAgaWYgKGJvYXJkW2JvYXJkW2ldW2pdWydjb29yZGluYXRlcyddWzFdXVtib2FyZFtpXVtqXVsnY29vcmRpbmF0ZXMnXVswXV1bJ3NoaXAnXS5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBMZW4gPSBib2FyZFtib2FyZFtpXVtqXVsnY29vcmRpbmF0ZXMnXVsxXV1bYm9hcmRbaV1bal1bJ2Nvb3JkaW5hdGVzJ11bMF1dWydzaGlwJ10ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUhpdE1zZyhzaGlwTGVuLCBwbGF5ZXIudHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaXRDaXJjbGUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcclxuICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICcuLi5taXNzZWQuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JpZFtpXS5jaGlsZHJlbltqXS5hcHBlbmRDaGlsZChoaXRDaXJjbGUpO1xyXG4gICAgICAgIGdyaWRbaV0uY2hpbGRyZW5bal0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0ZvcldpbihhdHRhY2tlZFBsYXllcikge1xyXG4gICAgICAgIGlmIChhdHRhY2tlZFBsYXllci5wbGF5ZXJHYW1lQm9hcmQuYWxsU3VuaygpID09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5pc2hHYW1lKHdpbm5lcikge1xyXG4gICAgICAgIGlmICh3aW5uZXIudHlwZSA9PSAncGxheWVyJykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTXNnJykuaW5uZXJIVE1MID0gJ0NvbmdyYXR1bGF0aW9ucyEgWW91IHdpbi4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNc2cnKS5pbm5lckhUTUwgPSAnQ29tcHV0ZXIgd2lucywgZ2FtZSBvdmVyLic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5EaXYnKTtcclxuICAgICAgICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVzdGFydC5jbGFzc0xpc3QuYWRkKCdyZXN0YXJ0Jyk7XHJcbiAgICAgICAgcmVzdGFydC5pbm5lckhUTUwgPSAnUmVzdGFydCc7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChyZXN0YXJ0KTtcclxuICAgICAgICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNb2RlU2VsZWN0b3IoZ3JpZCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG1vZGVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdtb2RlU2VsZWN0b3InKTtcclxuICAgICAgICBtb2RlU2VsZWN0b3IuaW5uZXJIVE1MID0gJ0hvcml6b250YWwnO1xyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQobW9kZVNlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0aWFsaXplR3JpZHMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmVteUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXlHcmlkJyk7XHJcbiAgICAgICAgICAgIGxvYWRHcmlkKGdyaWQpO1xyXG4gICAgICAgICAgICBjcmVhdGVNb2RlU2VsZWN0b3IoZ3JpZCk7XHJcbiAgICAgICAgICAgIGxvYWRHcmlkKGVuZW15R3JpZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydEdhbWUoY29tcHV0ZXIpIHtcclxuICAgICAgICAgICAgZ2FtZUJvYXJkKCkucGxhY2VDb21wdXRlclNoaXBzKGNvbXB1dGVyKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVTZWxlY3RvcicpO1xyXG4gICAgICAgICAgICBzdGFydC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIG1vZGVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIG1vZGVTZWxlY3Rvci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTXNnJyk7XHJcbiAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnWW91ciB0dXJuISc7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYW5zbGF0ZUdyaWRJbnRvQXJyYXkoZ3JpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSXRlbXMgPSBncmlkLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBjb25zdCBncmlkQXJyYXkgPSBBcnJheS5mcm9tKGdyaWRJdGVtcyk7XHJcbiAgICAgICAgICAgIGlmIChncmlkQXJyYXlbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXJNc2cnKSkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZEFycmF5LnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3JpZEFycmF5Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkQXJyYXkucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdyaWRBcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yR3JpZChib2FyZCwgZ3JpZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXVsnY29vcmRpbmF0ZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNoaWxkcmVuW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdkYXJrQmx1ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGFjZVNoaXBzKHBsYWNlZFNoaXBzLCBwbGF5ZXIsIGdyaWQpIHtcclxuICAgICAgICAgICAgZGlzcGxheU1zZyhwbGFjZWRTaGlwcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkW2ldLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpXS5jaGlsZHJlbltqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gZGV0ZXJtaW5lTGVuKHBsYWNlZFNoaXBzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWdubWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlU2VsZWN0b3InKS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBjaGVja1ZhbGlkaXR5KGxlbmd0aCwgaSwgaiwgYWxpZ25tZW50LCBncmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKGFsaWdubWVudCwgbGVuZ3RoLCBqLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWRTaGlwcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlNc2cocGxhY2VkU2hpcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUNvbnRyb2woKS5jb2xvckdyaWQocGxheWVyLnBsYXllckdhbWVCb2FyZC5ib2FyZCwgZ3JpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNoaWxkcmVuW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxhY2VkU2hpcHMgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gZGV0ZXJtaW5lTGVuKHBsYWNlZFNoaXBzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWdubWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlU2VsZWN0b3InKS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdGVQb3NpdGlvbihpLCBqLCBncmlkLCBsZW5ndGgsIGFsaWdubWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNoaWxkcmVuW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCgpID0+IHsgcmVjb2xvckdyaWQoZ3JpZCkgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkSW5wdXQocGxheWVyLCBncmlkLCBjb21wdXRlciwgcGxheWVyR3JpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTXNnJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkW2ldLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpXS5jaGlsZHJlbltqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXB1dGVyLnBsYXllckdhbWVCb2FyZC5ib2FyZFtpXVtqXVsnaGl0J10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXlHcmlkJykucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlc1tpXS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdTaG90cyBmaXJlZCEgQW5kLi4uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5wbGF5ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhqLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQXR0YWNrKGNvbXB1dGVyLCBncmlkLCBpLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JXaW4oY29tcHV0ZXIpID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hHYW1lKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyUGxheShjb21wdXRlciwgcGxheWVyLCBwbGF5ZXJHcmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbUNvbnRyb2w7IiwiY29uc3Qgc2hpcEZhY3RvcnkgPSByZXF1aXJlKCcuL3NoaXBGYWN0b3J5Jyk7XHJcblxyXG5mdW5jdGlvbiBnYW1lQm9hcmQoKSB7XHJcbiAgICBsZXQgZ2FtZUJvYXJkID0ge307XHJcbiAgICBcclxuICAgIC8vIGxvYWRzIGdhbWVib2FyZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgZ2FtZUJvYXJkW2ldID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgIGdhbWVCb2FyZFtpXVtqXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZXRlcm1pbmVMZW4obnVtKSB7XHJcbiAgICAgICAgc3dpdGNoKG51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQ7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tJZlZhbGlkKGJvYXJkLCBhbGlnbm1lbnQsIHgsIHksIGxlbmd0aCkge1xyXG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW3ldW2ldWydjb29yZGluYXRlcyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1beF1bJ2Nvb3JkaW5hdGVzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib2FyZDogZ2FtZUJvYXJkLFxyXG4gICAgICAgIHBsYWNlU2hpcChtb2RlLCBsZW5ndGgsIHgsIHkpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4XVsnc2hpcCddID0gc2hpcEZhY3RvcnkobGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4XVsnbW9kZSddID0gbW9kZTtcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4ICsgaV1bJ2Nvb3JkaW5hdGVzJ10gPSBbeCwgeV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF1bJ2Nvb3JkaW5hdGVzJ10gPSBbeCwgeV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgICAgICAgICBsZXQgaGl0U3F1YXJlID0gdGhpcy5ib2FyZFt5XVt4XTtcclxuICAgICAgICAgICAgaGl0U3F1YXJlWydoaXQnXSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVja3MgaWYgYXR0YWNrIGhpdHMgYSBzaGlwXHJcbiAgICAgICAgICAgIGlmIChoaXRTcXVhcmVbJ2Nvb3JkaW5hdGVzJ10pe1xyXG4gICAgICAgICAgICAgICAgbGV0IGhpdFNoaXAgPSB0aGlzLmJvYXJkW2hpdFNxdWFyZVsnY29vcmRpbmF0ZXMnXVsxXV1baGl0U3F1YXJlWydjb29yZGluYXRlcyddWzBdXTtcclxuICAgICAgICAgICAgICAgIGxldCBoaXRQb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpdFNoaXBbJ21vZGUnXSA9PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0UG9zID0geSAtIGhpdFNoaXBbJ2Nvb3JkaW5hdGVzJ11bMV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpdFBvcyA9IHggLSBoaXRTaGlwWydjb29yZGluYXRlcyddWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaGl0U2hpcFsnc2hpcCddLmhpdChoaXRQb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGxTdW5rKCkge1xyXG4gICAgICAgICAgICBsZXQgc2hpcE51bSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBzdW5rQW1vdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal1bJ3NoaXAnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwTnVtICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdWydzaGlwJ10uaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bmtBbW91bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hpcE51bSA9PSBzdW5rQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlZFNoaXBzID0gMDtcclxuICAgICAgICAgICAgY29uc3QgYWxpZ25tZW50cyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xyXG4gICAgICAgICAgICB3aGlsZSAocGxhY2VkU2hpcHMgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBkZXRlcm1pbmVMZW4ocGxhY2VkU2hpcHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tQWxpZ25tZW50ID0gYWxpZ25tZW50c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGlnbm1lbnRzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDApKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAwKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tJZlZhbGlkKGNvbXB1dGVyLnBsYXllckdhbWVCb2FyZC5ib2FyZCwgcmFuZG9tQWxpZ25tZW50LCByYW5kb21YLCByYW5kb21ZLCBsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIucGxheWVyR2FtZUJvYXJkLnBsYWNlU2hpcChyYW5kb21BbGlnbm1lbnQsIGxlbmd0aCwgcmFuZG9tWCwgcmFuZG9tWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkU2hpcHMgKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsU2hpcHNQbGFjZWQoYm9hcmQpIHtcclxuICAgICAgICAgICAgbGV0IHNoaXBOdW0gPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXVsnc2hpcCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBOdW0gKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNoaXBOdW0gPCA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVCb2FyZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XHJcbmltcG9ydCBwbGF5ZXJzIGZyb20gJy4vcGxheWVycyc7XHJcbmltcG9ydCBkb21Db250cm9sIGZyb20gJy4vZG9tQ29udHJvbCc7XHJcblxyXG4vLyBzbGVlcCBmdW5jdGlvbiBpIGZvdW5kIG9uIGh0dHBzOi8vd3d3LnNpdGVwb2ludC5jb20vZGVsYXktc2xlZXAtcGF1c2Utd2FpdC9cclxuZnVuY3Rpb24gc2xlZXAobXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufVxyXG5cclxuZG9tQ29udHJvbCgpLmluaXRpYWxpemVHcmlkcygpO1xyXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9tQ29udHJvbCgpLnRyYW5zbGF0ZUdyaWRJbnRvQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKSk7XHJcbmNvbnN0IGVuZW15R3JpZCA9IGRvbUNvbnRyb2woKS50cmFuc2xhdGVHcmlkSW50b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteUdyaWQnKSk7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSBwbGF5ZXJzKCdwbGF5ZXInKTtcclxuY29uc3QgY29tcHV0ZXIgPSBwbGF5ZXJzKCdjb21wdXRlcicpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVTZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVTZWxlY3RvcicpLmlubmVySFRNTCA9PSAnSG9yaXpvbnRhbCcpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZVNlbGVjdG9yJykuaW5uZXJIVE1MID0gJ1ZlcnRpY2FsJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVTZWxlY3RvcicpLmlubmVySFRNTCA9ICdIb3Jpem9udGFsJztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgcGxhY2VkU2hpcHNOdW0gPSAwO1xyXG5kb21Db250cm9sKCkucGxhY2VTaGlwcyhwbGFjZWRTaGlwc051bSwgcGxheWVyLCBwbGF5ZXJHcmlkKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZ2FtZUJvYXJkKCkuYWxsU2hpcHNQbGFjZWQocGxheWVyLnBsYXllckdhbWVCb2FyZC5ib2FyZCkpIHtcclxuICAgICAgICBkb21Db250cm9sKCkuc3RhcnRHYW1lKGNvbXB1dGVyKTtcclxuICAgICAgICBkb21Db250cm9sKCkuZ3JpZElucHV0KHBsYXllciwgZW5lbXlHcmlkLCBjb21wdXRlciwgcGxheWVyR3JpZCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XHJcblxyXG4vLyBmaWxlOi8vL0M6L1VzZXJzL0Vuem9LdXN1a2kvRGVza3RvcC9Qcm9ncmFtcy9vZGluL2JhdHRsZXNoaXAvZGlzdC9pbmRleC5odG1sIiwiY29uc3QgZ2FtZUJvYXJkID0gcmVxdWlyZSgnLi9nYW1lQm9hcmQnKTtcclxuXHJcbmZ1bmN0aW9uIHBsYXllcnMocGxheWVyVHlwZSkge1xyXG4gICAgZnVuY3Rpb24gbG9vcFRocm91Z2hQb3NzaWJsZU1vdmVzKGJvYXJkKSB7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal1bJ2hpdCddICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW2osIGldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zc2libGVNb3ZlcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBwbGF5ZXJUeXBlIGlzIGVpdGhlciBcInBsYXllclwiIG9yIFwiY29tcHV0ZXJcIlxyXG4gICAgICAgIHR5cGU6IHBsYXllclR5cGUsXHJcbiAgICAgICAgcGxheWVyR2FtZUJvYXJkOiBnYW1lQm9hcmQoKSxcclxuICAgICAgICBhaVBsYXkoZW5lbXlHYW1lQm9hcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IGxvb3BUaHJvdWdoUG9zc2libGVNb3ZlcyhlbmVteUdhbWVCb2FyZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBsaW5lIGJlbG93IGp1c3QgcmFuZG9tbHkgY2hvb3NlcyBhbiBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGNob3Nlbk1vdmUgPSBwb3NzaWJsZU1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlTW92ZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIHJldHVybiBjaG9zZW5Nb3ZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJzOyIsImZ1bmN0aW9uIHNoaXBGYWN0b3J5KGxlbmd0aCkge1xyXG4gICAgbGV0IHNoaXAgPSB7fTtcclxuXHJcbiAgICAvLyBsb2FkcyBzaGlwXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2hpcFtpXSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcDogc2hpcCxcclxuICAgICAgICBsZW5ndGg6IGxlbmd0aCxcclxuICAgICAgICBoaXQocG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcFtwb3NdID0gJ2hpdCc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcFtpXSAhPSAnaGl0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2hpcEZhY3Rvcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=