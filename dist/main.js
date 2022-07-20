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
                    playerMsg.innerHTML = 'You sank the enemy Carrier!';
                } else {
                    playerMsg.innerHTML = 'The enemy sank your Carrier!';
                }
                break;
            case 4:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sank the enemy Battleship!';
                } else {
                    playerMsg.innerHTML = 'The enemy sank your Battleship!';
                }
                break;
            case 3:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sank the enemy Cruiser!';
                } else {
                    playerMsg.innerHTML = 'The enemy sank your Cruiser!';
                }
                break;
            case 2:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sank the enemy Destroyer!';
                } else {
                    playerMsg.innerHTML = 'The enemy sank your Destroyer!';
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
                if (board[i][j]['hit'] != true && allAdjacentCheck(board[i][j], board)) {
                    possibleMoves.push([j, i]);
                }
            }
        }
        return possibleMoves;
    }

    function loopThroughPreviousMoves(board) {
        let previousMoves = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {

                // adds to array squares that are part of a ship that hasn't been sunk yet
                if (board[i][j]['hit'] == true && board[i][j]['coordinates']
                && board[board[i][j]['coordinates'][1]][board[i][j]['coordinates'][0]]['ship'].isSunk() == false) {
                    previousMoves.push([j, i]);
                }
            }
        }
        return previousMoves;
    }

    function adjacentCheck(space1, space2) {
        if (((space1[0] == space2[0] + 1 || space1[0] == space2[0] - 1) && space1[1] == space2[1])
        || ((space1[1] == space2[1] + 1 || space1[1] == space2[1] - 1) && space1[0] == space2[0])) {
            return true;
        }
        return false;
    }

    function allAdjacentCheck(square, board) {
        let adjacentSquares = 4;
        let hitSquares = 0;
        if (square[0] == 0 || square[0] == 9 || square[1] == 0 || square[1] == 9) {
            adjacentSquares -= 1;
        }
        if ((square[0] == 0 && square[1] == 9) || (square[0] == 9 || square[1] == 0)
        || (square[1] == 0 && square[0] == 9) || (square[1] == 9 || square[0] == 0)) {
            adjacentSquares -= 1;
        }
        if (square[0] - 1 >= 0 && (board[square[0] - 1][square[1]]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (square[0] + 1 <= 9 && (board[square[0] + 1][square[1]]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (square[1] - 1 >= 0 && (board[square[0]][square[1] - 1]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (square[1] + 1 <= 9 && (board[square[0]][square[1] + 1]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (adjacentSquares == hitSquares) {
            return false;
        }
        return true;
    }

    function containsSquare(hitShips, coordinate) {
        for (let i = 0; i < hitShips.length; i++) {
            if (hitShips[i][0] == coordinate[0] && hitShips[i][1] == coordinate[1]) {
                return true;
            }
        }
        return false;
    }

    function checkForShipAdjacency(bestMoves, hitShip) {
        for (let i = 0; i < bestMoves.length; i++) {
            for (let j = 0; j < hitShip.length; j++) {
                if (adjacentCheck(bestMoves[i], hitShip[j])) {
                    if (bestMoves[i][0] == hitShip[j][0]) {
                        if (bestMoves[i][1] + 1 == hitShip[j][1]) {
                            if (containsSquare(hitShip, [bestMoves[i][0], bestMoves[i][1] + 2])) {
                                return bestMoves[i];
                            }
                        } else {
                            if (containsSquare(hitShip, [bestMoves[i][0], bestMoves[i][1] - 2])) {
                                return bestMoves[i];
                            }
                        }
                    } else {
                        if (bestMoves[i][0] + 1 == hitShip[j][0]) {
                            if (containsSquare(hitShip, [bestMoves[i][0] + 2, bestMoves[i][1]])) {
                                return bestMoves[i];
                            }
                        } else {
                            if (containsSquare(hitShip, [bestMoves[i][0] - 2, bestMoves[i][1]])) {
                                return bestMoves[i];
                            }
                        }
                    }
                }
            }
        }
    }

    function getBestMoves(possibleMoves, previouslyHit) {
        let bestMoves = [];
        for (let i = 0; i < previouslyHit.length; i++) {
            for(let j = 0; j < possibleMoves.length; j++) {
                if (adjacentCheck(possibleMoves[j], previouslyHit[i])) {
                    bestMoves.push(possibleMoves[j]);
                }
            }
        }
        return bestMoves;
    }
    
    return {
        
        // playerType is either "player" or "computer"
        type: playerType,
        playerGameBoard: gameBoard(),
        aiPlay(enemyGameBoard) {
            let possibleMoves = loopThroughPossibleMoves(enemyGameBoard);
            const previouslyHitShips = loopThroughPreviousMoves(enemyGameBoard);
            if (previouslyHitShips.length > 0) {
                possibleMoves = getBestMoves(possibleMoves, previouslyHitShips);
                let possiblyBetterMove = checkForShipAdjacency(possibleMoves, previouslyHitShips, enemyGameBoard);
                if (possiblyBetterMove) {
                    return possiblyBetterMove;
                }
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21Db250cm9sLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgaHRtbCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxOTQpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDAgMXB4IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuIFxcclxcbi5ncmlkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxyXFxufVxcclxcblxcclxcbi5lbmVteUdyaWQge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDU5cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1dnc7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjU1LCAyNTUsIDAuMzM2KTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDQsIDg3LCA3MiwgMC43MzMpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGVkIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5idG5EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydCwgLnJlc3RhcnQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMTc0LCAyNTUsIDAuMDYyKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDMwLCAxNjEsIDc0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcywgYm9yZGVyLWNvbG9yIDUwMG1zLCBjb2xvciA1MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGFydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0OmhvdmVyLCAucmVzdGFydDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxOTQpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYigzMCwgNjUsIDE2MSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMsIGJvcmRlci1jb2xvciA1MDBtcywgY29sb3IgNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJNc2cge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA3OSwgMTg1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0LCAuYXR0YWNrZWQge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0YWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5tb2RlU2VsZWN0b3Ige1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4OSwgMTg3LCA1Nyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEyLCAxNTEsIDEyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kZVNlbGVjdG9yOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3OSwgMTUpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xcclxcbiAgICAuZ3JpZCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC5lbmVteUdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbiAgICB9XFxyXFxuICAgIC5lbmVteUdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ3JpZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDExMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSwgaHRtbCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxOTQpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDAgMXB4IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuIFxcclxcbi5ncmlkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1dnc7XFxyXFxufVxcclxcblxcclxcbi5lbmVteUdyaWQge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDU5cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1dnc7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMjU1LCAyNTUsIDAuMzM2KTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDQsIDg3LCA3MiwgMC43MzMpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGVkIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5idG5EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFydCwgLnJlc3RhcnQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMTc0LCAyNTUsIDAuMDYyKTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDMwLCAxNjEsIDc0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcywgYm9yZGVyLWNvbG9yIDUwMG1zLCBjb2xvciA1MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGFydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0OmhvdmVyLCAucmVzdGFydDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUyLCAxOTQpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYigzMCwgNjUsIDE2MSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMsIGJvcmRlci1jb2xvciA1MDBtcywgY29sb3IgNTAwbXM7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJNc2cge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA3OSwgMTg1KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0LCAuYXR0YWNrZWQge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0YWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5tb2RlU2VsZWN0b3Ige1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE4OSwgMTg3LCA1Nyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEyLCAxNTEsIDEyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kZVNlbGVjdG9yOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3OSwgMTUpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xcclxcbiAgICAuZ3JpZCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC5lbmVteUdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbiAgICB9XFxyXFxuICAgIC5lbmVteUdyaWQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ3JpZHMge1xcclxcbiAgICAgICAgd2lkdGg6IDExMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xyXG5pbXBvcnQgc2xlZXAgZnJvbSAnLic7XHJcblxyXG5mdW5jdGlvbiBkb21Db250cm9sKCkge1xyXG4gICAgZnVuY3Rpb24gbG9hZEdyaWQoZ3JpZCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG5ld0NvbHVtbi5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgICAgICAgICAgICBuZXdDb2x1bW4uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKG5ld0NvbHVtbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlNc2cobnVtKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1zZycpO1xyXG4gICAgICAgIHN3aXRjaCAobnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnUGxlYXNlIHBsYWNlIHlvdXIgY2FycmllciEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdQbGVhc2UgcGxhY2UgeW91ciBiYXR0bGVzaGlwISc7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1BsZWFzZSBwbGFjZSB5b3VyIGZpcnN0IGNydWlzZXIhJztcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnUGxlYXNlIHBsYWNlIHlvdXIgc2Vjb25kIGNydWlzZXIhJztcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnUGxlYXNlIHBsYWNlIHlvdXIgZGVzdHJveWVyISc7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdTdGFydCB0aGUgZ2FtZSEnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZXRlcm1pbmVMZW4ocGxhY2VkU2hpcHNOdW0pIHtcclxuICAgICAgICBzd2l0Y2ggKHBsYWNlZFNoaXBzTnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA1O1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5SGl0TXNnKHNoaXBMZW4sIHBsYXllckhpdCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNc2cnKTtcclxuICAgICAgICBzd2l0Y2ggKHNoaXBMZW4pIHtcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckhpdCA9PSAnY29tcHV0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdZb3Ugc2FuayB0aGUgZW5lbXkgQ2FycmllciEnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1RoZSBlbmVteSBzYW5rIHlvdXIgQ2FycmllciEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJIaXQgPT0gJ2NvbXB1dGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnWW91IHNhbmsgdGhlIGVuZW15IEJhdHRsZXNoaXAhJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdUaGUgZW5lbXkgc2FuayB5b3VyIEJhdHRsZXNoaXAhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVySGl0ID09ICdjb21wdXRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1lvdSBzYW5rIHRoZSBlbmVteSBDcnVpc2VyISc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnVGhlIGVuZW15IHNhbmsgeW91ciBDcnVpc2VyISc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckhpdCA9PSAnY29tcHV0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdZb3Ugc2FuayB0aGUgZW5lbXkgRGVzdHJveWVyISc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnVGhlIGVuZW15IHNhbmsgeW91ciBEZXN0cm95ZXIhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5KGxlbmd0aCwgeSwgeCwgYWxpZ25tZW50LCBncmlkKSB7XHJcbiAgICAgICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZFt5XS5jaGlsZHJlbltpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2RhcmtibHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbaV0uY2hpbGRyZW5beF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdkYXJrYmx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2ltdWxhdGVQb3NpdGlvbih5LCB4LCBncmlkLCBsZW5ndGgsIGFsaWdubWVudCkge1xyXG4gICAgICAgIGlmIChjaGVja1ZhbGlkaXR5KGxlbmd0aCwgeSwgeCwgYWxpZ25tZW50LCBncmlkKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRbeV0uY2hpbGRyZW5baV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Ymx1ZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRbaV0uY2hpbGRyZW5beF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Ymx1ZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVjb2xvckdyaWQoZ3JpZCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRbaV0uY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChncmlkW2ldLmNoaWxkcmVuW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPSAnZGFya2JsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpXS5jaGlsZHJlbltqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyMjcsIDI1NSwgMjU1LCAwLjMzNiknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbXB1dGVyUGxheShjb21wdXRlciwgcGxheWVyLCBwbGF5ZXJHcmlkKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1zZycpO1xyXG4gICAgICAgIHBsYXllck1zZy5pbm5lckhUTUwgPSAnRW5lbXkgaXMgYWltaW5nLi4uJztcclxuICAgICAgICBhd2FpdCBzbGVlcCg1MDApO1xyXG4gICAgICAgIGNvbnN0IGF0dGFja2VkQ29vcmRlbmF0ZXMgPSBjb21wdXRlci5haVBsYXkocGxheWVyLnBsYXllckdhbWVCb2FyZC5ib2FyZCk7XHJcbiAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdFbmVteSBoYXMgZmlyZWQsIGFuZC4uLic7XHJcbiAgICAgICAgYXdhaXQgc2xlZXAoNTAwKTtcclxuICAgICAgICBwbGF5ZXIucGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrZWRDb29yZGVuYXRlc1swXSwgYXR0YWNrZWRDb29yZGVuYXRlc1sxXSk7XHJcbiAgICAgICAgcmVnaXN0ZXJBdHRhY2socGxheWVyLCBwbGF5ZXJHcmlkLCBhdHRhY2tlZENvb3JkZW5hdGVzWzFdLCBhdHRhY2tlZENvb3JkZW5hdGVzWzBdKTtcclxuICAgICAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15R3JpZCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcclxuICAgICAgICBpZiAoY2hlY2tGb3JXaW4ocGxheWVyKSkge1xyXG4gICAgICAgICAgICBmaW5pc2hHYW1lKGNvbXB1dGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZXNbaV0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckF0dGFjayhwbGF5ZXIsIGdyaWQsIGksIGopIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTXNnJyk7XHJcbiAgICAgICAgY29uc3QgaGl0Q2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdWydjb29yZGluYXRlcyddKSB7XHJcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHBsYXllci5wbGF5ZXJHYW1lQm9hcmQuYm9hcmQ7XHJcbiAgICAgICAgICAgIGhpdENpcmNsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICcuLi5oaXQhJztcclxuXHJcbiAgICAgICAgICAgIC8vIGNoYW5nZXMgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaWYgc2hpcCB3YXMgc3Vua1xyXG4gICAgICAgICAgICBpZiAoYm9hcmRbYm9hcmRbaV1bal1bJ2Nvb3JkaW5hdGVzJ11bMV1dW2JvYXJkW2ldW2pdWydjb29yZGluYXRlcyddWzBdXVsnc2hpcCddLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcExlbiA9IGJvYXJkW2JvYXJkW2ldW2pdWydjb29yZGluYXRlcyddWzFdXVtib2FyZFtpXVtqXVsnY29vcmRpbmF0ZXMnXVswXV1bJ3NoaXAnXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5SGl0TXNnKHNoaXBMZW4sIHBsYXllci50eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpdENpcmNsZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xyXG4gICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJy4uLm1pc3NlZC4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmlkW2ldLmNoaWxkcmVuW2pdLmFwcGVuZENoaWxkKGhpdENpcmNsZSk7XHJcbiAgICAgICAgZ3JpZFtpXS5jaGlsZHJlbltqXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yV2luKGF0dGFja2VkUGxheWVyKSB7XHJcbiAgICAgICAgaWYgKGF0dGFja2VkUGxheWVyLnBsYXllckdhbWVCb2FyZC5hbGxTdW5rKCkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmlzaEdhbWUod2lubmVyKSB7XHJcbiAgICAgICAgaWYgKHdpbm5lci50eXBlID09ICdwbGF5ZXInKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNc2cnKS5pbm5lckhUTUwgPSAnQ29uZ3JhdHVsYXRpb25zISBZb3Ugd2luLic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1zZycpLmlubmVySFRNTCA9ICdDb21wdXRlciB3aW5zLCBnYW1lIG92ZXIuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bkRpdicpO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZXN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3Jlc3RhcnQnKTtcclxuICAgICAgICByZXN0YXJ0LmlubmVySFRNTCA9ICdSZXN0YXJ0JztcclxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKHJlc3RhcnQpO1xyXG4gICAgICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZGVTZWxlY3RvcihncmlkKSB7XHJcbiAgICAgICAgY29uc3QgbW9kZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbW9kZVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ21vZGVTZWxlY3RvcicpO1xyXG4gICAgICAgIG1vZGVTZWxlY3Rvci5pbm5lckhUTUwgPSAnSG9yaXpvbnRhbCc7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChtb2RlU2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXRpYWxpemVHcmlkcygpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZW15R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteUdyaWQnKTtcclxuICAgICAgICAgICAgbG9hZEdyaWQoZ3JpZCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZU1vZGVTZWxlY3RvcihncmlkKTtcclxuICAgICAgICAgICAgbG9hZEdyaWQoZW5lbXlHcmlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0R2FtZShjb21wdXRlcikge1xyXG4gICAgICAgICAgICBnYW1lQm9hcmQoKS5wbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZVNlbGVjdG9yJyk7XHJcbiAgICAgICAgICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgbW9kZVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgbW9kZVNlbGVjdG9yLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNc2cnKTtcclxuICAgICAgICAgICAgcGxheWVyTXNnLmlubmVySFRNTCA9ICdZb3VyIHR1cm4hJztcclxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJykucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZXNbaV0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNsYXRlR3JpZEludG9BcnJheShncmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtcyA9IGdyaWQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRBcnJheSA9IEFycmF5LmZyb20oZ3JpZEl0ZW1zKTtcclxuICAgICAgICAgICAgaWYgKGdyaWRBcnJheVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllck1zZycpKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkQXJyYXkuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChncmlkQXJyYXkubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGdyaWRBcnJheS5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZ3JpZEFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3JHcmlkKGJvYXJkLCBncmlkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdWydjb29yZGluYXRlcyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbaV0uY2hpbGRyZW5bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2RhcmtCbHVlJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYWNlU2hpcHMocGxhY2VkU2hpcHMsIHBsYXllciwgZ3JpZCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5TXNnKHBsYWNlZFNoaXBzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRbaV0uY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNoaWxkcmVuW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBkZXRlcm1pbmVMZW4ocGxhY2VkU2hpcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVTZWxlY3RvcicpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxpZCA9IGNoZWNrVmFsaWRpdHkobGVuZ3RoLCBpLCBqLCBhbGlnbm1lbnQsIGdyaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoYWxpZ25tZW50LCBsZW5ndGgsIGosIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlZFNoaXBzICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU1zZyhwbGFjZWRTaGlwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tQ29udHJvbCgpLmNvbG9yR3JpZChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmJvYXJkLCBncmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRbaV0uY2hpbGRyZW5bal0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGFjZWRTaGlwcyA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBkZXRlcm1pbmVMZW4ocGxhY2VkU2hpcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVTZWxlY3RvcicpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW11bGF0ZVBvc2l0aW9uKGksIGosIGdyaWQsIGxlbmd0aCwgYWxpZ25tZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRbaV0uY2hpbGRyZW5bal0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKCkgPT4geyByZWNvbG9yR3JpZChncmlkKSB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyaWRJbnB1dChwbGF5ZXIsIGdyaWQsIGNvbXB1dGVyLCBwbGF5ZXJHcmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJNc2cnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRbaV0uY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNoaWxkcmVuW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29tcHV0ZXIucGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdWydoaXQnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteUdyaWQnKS5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNxdWFyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNc2cuaW5uZXJIVE1MID0gJ1Nob3RzIGZpcmVkISBBbmQuLi4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLnBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGosIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBdHRhY2soY29tcHV0ZXIsIGdyaWQsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0Zvcldpbihjb21wdXRlcikgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaEdhbWUocGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJQbGF5KGNvbXB1dGVyLCBwbGF5ZXIsIHBsYXllckdyaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tQ29udHJvbDsiLCJjb25zdCBzaGlwRmFjdG9yeSA9IHJlcXVpcmUoJy4vc2hpcEZhY3RvcnknKTtcclxuXHJcbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcclxuICAgIGxldCBnYW1lQm9hcmQgPSB7fTtcclxuICAgIFxyXG4gICAgLy8gbG9hZHMgZ2FtZWJvYXJkXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBnYW1lQm9hcmRbaV0gPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgZ2FtZUJvYXJkW2ldW2pdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRldGVybWluZUxlbihudW0pIHtcclxuICAgICAgICBzd2l0Y2gobnVtKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA1O1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0lmVmFsaWQoYm9hcmQsIGFsaWdubWVudCwgeCwgeSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgaWYgKHggKyBsZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbeV1baV1bJ2Nvb3JkaW5hdGVzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVt4XVsnY29vcmRpbmF0ZXMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJvYXJkOiBnYW1lQm9hcmQsXHJcbiAgICAgICAgcGxhY2VTaGlwKG1vZGUsIGxlbmd0aCwgeCwgeSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3hdWydzaGlwJ10gPSBzaGlwRmFjdG9yeShsZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3hdWydtb2RlJ10gPSBtb2RlO1xyXG4gICAgICAgICAgICBpZiAobW9kZSA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXVsnY29vcmRpbmF0ZXMnXSA9IFt4LCB5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XVsnY29vcmRpbmF0ZXMnXSA9IFt4LCB5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcbiAgICAgICAgICAgIGxldCBoaXRTcXVhcmUgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gICAgICAgICAgICBoaXRTcXVhcmVbJ2hpdCddID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrcyBpZiBhdHRhY2sgaGl0cyBhIHNoaXBcclxuICAgICAgICAgICAgaWYgKGhpdFNxdWFyZVsnY29vcmRpbmF0ZXMnXSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGl0U2hpcCA9IHRoaXMuYm9hcmRbaGl0U3F1YXJlWydjb29yZGluYXRlcyddWzFdXVtoaXRTcXVhcmVbJ2Nvb3JkaW5hdGVzJ11bMF1dO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhpdFBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGl0U2hpcFsnbW9kZSddID09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaXRQb3MgPSB5IC0gaGl0U2hpcFsnY29vcmRpbmF0ZXMnXVsxXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0UG9zID0geCAtIGhpdFNoaXBbJ2Nvb3JkaW5hdGVzJ11bMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoaXRTaGlwWydzaGlwJ10uaGl0KGhpdFBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbFN1bmsoKSB7XHJcbiAgICAgICAgICAgIGxldCBzaGlwTnVtID0gMDtcclxuICAgICAgICAgICAgbGV0IHN1bmtBbW91bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXVsnc2hpcCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBOdW0gKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal1bJ3NoaXAnXS5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vua0Ftb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaGlwTnVtID09IHN1bmtBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyhjb21wdXRlcikge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VkU2hpcHMgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBhbGlnbm1lbnRzID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XHJcbiAgICAgICAgICAgIHdoaWxlIChwbGFjZWRTaGlwcyA8IDUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGRldGVybWluZUxlbihwbGFjZWRTaGlwcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21BbGlnbm1lbnQgPSBhbGlnbm1lbnRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsaWdubWVudHMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDApKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0lmVmFsaWQoY29tcHV0ZXIucGxheWVyR2FtZUJvYXJkLmJvYXJkLCByYW5kb21BbGlnbm1lbnQsIHJhbmRvbVgsIHJhbmRvbVksIGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKHJhbmRvbUFsaWdubWVudCwgbGVuZ3RoLCByYW5kb21YLCByYW5kb21ZKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWRTaGlwcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGxTaGlwc1BsYWNlZChib2FyZCkge1xyXG4gICAgICAgICAgICBsZXQgc2hpcE51bSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdWydzaGlwJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE51bSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hpcE51bSA8IDUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2FtZUJvYXJkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcclxuaW1wb3J0IHBsYXllcnMgZnJvbSAnLi9wbGF5ZXJzJztcclxuaW1wb3J0IGRvbUNvbnRyb2wgZnJvbSAnLi9kb21Db250cm9sJztcclxuXHJcbi8vIHNsZWVwIGZ1bmN0aW9uIGkgZm91bmQgb24gaHR0cHM6Ly93d3cuc2l0ZXBvaW50LmNvbS9kZWxheS1zbGVlcC1wYXVzZS13YWl0L1xyXG5mdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcblxyXG5kb21Db250cm9sKCkuaW5pdGlhbGl6ZUdyaWRzKCk7XHJcbmNvbnN0IHBsYXllckdyaWQgPSBkb21Db250cm9sKCkudHJhbnNsYXRlR3JpZEludG9BcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpKTtcclxuY29uc3QgZW5lbXlHcmlkID0gZG9tQ29udHJvbCgpLnRyYW5zbGF0ZUdyaWRJbnRvQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15R3JpZCcpKTtcclxuXHJcbmNvbnN0IHBsYXllciA9IHBsYXllcnMoJ3BsYXllcicpO1xyXG5jb25zdCBjb21wdXRlciA9IHBsYXllcnMoJ2NvbXB1dGVyJyk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZVNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZVNlbGVjdG9yJykuaW5uZXJIVE1MID09ICdIb3Jpem9udGFsJykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlU2VsZWN0b3InKS5pbm5lckhUTUwgPSAnVmVydGljYWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZVNlbGVjdG9yJykuaW5uZXJIVE1MID0gJ0hvcml6b250YWwnO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBwbGFjZWRTaGlwc051bSA9IDA7XHJcbmRvbUNvbnRyb2woKS5wbGFjZVNoaXBzKHBsYWNlZFNoaXBzTnVtLCBwbGF5ZXIsIHBsYXllckdyaWQpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChnYW1lQm9hcmQoKS5hbGxTaGlwc1BsYWNlZChwbGF5ZXIucGxheWVyR2FtZUJvYXJkLmJvYXJkKSkge1xyXG4gICAgICAgIGRvbUNvbnRyb2woKS5zdGFydEdhbWUoY29tcHV0ZXIpO1xyXG4gICAgICAgIGRvbUNvbnRyb2woKS5ncmlkSW5wdXQocGxheWVyLCBlbmVteUdyaWQsIGNvbXB1dGVyLCBwbGF5ZXJHcmlkKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGVlcDsiLCJjb25zdCBnYW1lQm9hcmQgPSByZXF1aXJlKCcuL2dhbWVCb2FyZCcpO1xyXG5cclxuZnVuY3Rpb24gcGxheWVycyhwbGF5ZXJUeXBlKSB7XHJcbiAgICBmdW5jdGlvbiBsb29wVGhyb3VnaFBvc3NpYmxlTW92ZXMoYm9hcmQpIHtcclxuICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXVsnaGl0J10gIT0gdHJ1ZSAmJiBhbGxBZGphY2VudENoZWNrKGJvYXJkW2ldW2pdLCBib2FyZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW2osIGldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zc2libGVNb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb29wVGhyb3VnaFByZXZpb3VzTW92ZXMoYm9hcmQpIHtcclxuICAgICAgICBsZXQgcHJldmlvdXNNb3ZlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGRzIHRvIGFycmF5IHNxdWFyZXMgdGhhdCBhcmUgcGFydCBvZiBhIHNoaXAgdGhhdCBoYXNuJ3QgYmVlbiBzdW5rIHlldFxyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdWydoaXQnXSA9PSB0cnVlICYmIGJvYXJkW2ldW2pdWydjb29yZGluYXRlcyddXHJcbiAgICAgICAgICAgICAgICAmJiBib2FyZFtib2FyZFtpXVtqXVsnY29vcmRpbmF0ZXMnXVsxXV1bYm9hcmRbaV1bal1bJ2Nvb3JkaW5hdGVzJ11bMF1dWydzaGlwJ10uaXNTdW5rKCkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c01vdmVzLnB1c2goW2osIGldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJldmlvdXNNb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGphY2VudENoZWNrKHNwYWNlMSwgc3BhY2UyKSB7XHJcbiAgICAgICAgaWYgKCgoc3BhY2UxWzBdID09IHNwYWNlMlswXSArIDEgfHwgc3BhY2UxWzBdID09IHNwYWNlMlswXSAtIDEpICYmIHNwYWNlMVsxXSA9PSBzcGFjZTJbMV0pXHJcbiAgICAgICAgfHwgKChzcGFjZTFbMV0gPT0gc3BhY2UyWzFdICsgMSB8fCBzcGFjZTFbMV0gPT0gc3BhY2UyWzFdIC0gMSkgJiYgc3BhY2UxWzBdID09IHNwYWNlMlswXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhbGxBZGphY2VudENoZWNrKHNxdWFyZSwgYm9hcmQpIHtcclxuICAgICAgICBsZXQgYWRqYWNlbnRTcXVhcmVzID0gNDtcclxuICAgICAgICBsZXQgaGl0U3F1YXJlcyA9IDA7XHJcbiAgICAgICAgaWYgKHNxdWFyZVswXSA9PSAwIHx8IHNxdWFyZVswXSA9PSA5IHx8IHNxdWFyZVsxXSA9PSAwIHx8IHNxdWFyZVsxXSA9PSA5KSB7XHJcbiAgICAgICAgICAgIGFkamFjZW50U3F1YXJlcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHNxdWFyZVswXSA9PSAwICYmIHNxdWFyZVsxXSA9PSA5KSB8fCAoc3F1YXJlWzBdID09IDkgfHwgc3F1YXJlWzFdID09IDApXHJcbiAgICAgICAgfHwgKHNxdWFyZVsxXSA9PSAwICYmIHNxdWFyZVswXSA9PSA5KSB8fCAoc3F1YXJlWzFdID09IDkgfHwgc3F1YXJlWzBdID09IDApKSB7XHJcbiAgICAgICAgICAgIGFkamFjZW50U3F1YXJlcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3F1YXJlWzBdIC0gMSA+PSAwICYmIChib2FyZFtzcXVhcmVbMF0gLSAxXVtzcXVhcmVbMV1dWydoaXQnXSAmJiAhYm9hcmRbc3F1YXJlWzBdXVtzcXVhcmVbMV0gKyAxXVsnY29vcmRpbmF0ZXMnXSkpIHtcclxuICAgICAgICAgICAgaGl0U3F1YXJlcyArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3F1YXJlWzBdICsgMSA8PSA5ICYmIChib2FyZFtzcXVhcmVbMF0gKyAxXVtzcXVhcmVbMV1dWydoaXQnXSAmJiAhYm9hcmRbc3F1YXJlWzBdXVtzcXVhcmVbMV0gKyAxXVsnY29vcmRpbmF0ZXMnXSkpIHtcclxuICAgICAgICAgICAgaGl0U3F1YXJlcyArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3F1YXJlWzFdIC0gMSA+PSAwICYmIChib2FyZFtzcXVhcmVbMF1dW3NxdWFyZVsxXSAtIDFdWydoaXQnXSAmJiAhYm9hcmRbc3F1YXJlWzBdXVtzcXVhcmVbMV0gKyAxXVsnY29vcmRpbmF0ZXMnXSkpIHtcclxuICAgICAgICAgICAgaGl0U3F1YXJlcyArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3F1YXJlWzFdICsgMSA8PSA5ICYmIChib2FyZFtzcXVhcmVbMF1dW3NxdWFyZVsxXSArIDFdWydoaXQnXSAmJiAhYm9hcmRbc3F1YXJlWzBdXVtzcXVhcmVbMV0gKyAxXVsnY29vcmRpbmF0ZXMnXSkpIHtcclxuICAgICAgICAgICAgaGl0U3F1YXJlcyArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRqYWNlbnRTcXVhcmVzID09IGhpdFNxdWFyZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb250YWluc1NxdWFyZShoaXRTaGlwcywgY29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0U2hpcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGhpdFNoaXBzW2ldWzBdID09IGNvb3JkaW5hdGVbMF0gJiYgaGl0U2hpcHNbaV1bMV0gPT0gY29vcmRpbmF0ZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yU2hpcEFkamFjZW5jeShiZXN0TW92ZXMsIGhpdFNoaXApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJlc3RNb3Zlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhpdFNoaXAubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhZGphY2VudENoZWNrKGJlc3RNb3Zlc1tpXSwgaGl0U2hpcFtqXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVzdE1vdmVzW2ldWzBdID09IGhpdFNoaXBbal1bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJlc3RNb3Zlc1tpXVsxXSArIDEgPT0gaGl0U2hpcFtqXVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zU3F1YXJlKGhpdFNoaXAsIFtiZXN0TW92ZXNbaV1bMF0sIGJlc3RNb3Zlc1tpXVsxXSArIDJdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TW92ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnNTcXVhcmUoaGl0U2hpcCwgW2Jlc3RNb3Zlc1tpXVswXSwgYmVzdE1vdmVzW2ldWzFdIC0gMl0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlc3RNb3Zlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZXN0TW92ZXNbaV1bMF0gKyAxID09IGhpdFNoaXBbal1bMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluc1NxdWFyZShoaXRTaGlwLCBbYmVzdE1vdmVzW2ldWzBdICsgMiwgYmVzdE1vdmVzW2ldWzFdXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVzdE1vdmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zU3F1YXJlKGhpdFNoaXAsIFtiZXN0TW92ZXNbaV1bMF0gLSAyLCBiZXN0TW92ZXNbaV1bMV1dKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXN0TW92ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QmVzdE1vdmVzKHBvc3NpYmxlTW92ZXMsIHByZXZpb3VzbHlIaXQpIHtcclxuICAgICAgICBsZXQgYmVzdE1vdmVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2aW91c2x5SGl0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBwb3NzaWJsZU1vdmVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRqYWNlbnRDaGVjayhwb3NzaWJsZU1vdmVzW2pdLCBwcmV2aW91c2x5SGl0W2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlc3RNb3Zlcy5wdXNoKHBvc3NpYmxlTW92ZXNbal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiZXN0TW92ZXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcGxheWVyVHlwZSBpcyBlaXRoZXIgXCJwbGF5ZXJcIiBvciBcImNvbXB1dGVyXCJcclxuICAgICAgICB0eXBlOiBwbGF5ZXJUeXBlLFxyXG4gICAgICAgIHBsYXllckdhbWVCb2FyZDogZ2FtZUJvYXJkKCksXHJcbiAgICAgICAgYWlQbGF5KGVuZW15R2FtZUJvYXJkKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NzaWJsZU1vdmVzID0gbG9vcFRocm91Z2hQb3NzaWJsZU1vdmVzKGVuZW15R2FtZUJvYXJkKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNseUhpdFNoaXBzID0gbG9vcFRocm91Z2hQcmV2aW91c01vdmVzKGVuZW15R2FtZUJvYXJkKTtcclxuICAgICAgICAgICAgaWYgKHByZXZpb3VzbHlIaXRTaGlwcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzID0gZ2V0QmVzdE1vdmVzKHBvc3NpYmxlTW92ZXMsIHByZXZpb3VzbHlIaXRTaGlwcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libHlCZXR0ZXJNb3ZlID0gY2hlY2tGb3JTaGlwQWRqYWNlbmN5KHBvc3NpYmxlTW92ZXMsIHByZXZpb3VzbHlIaXRTaGlwcywgZW5lbXlHYW1lQm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3NpYmx5QmV0dGVyTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3NzaWJseUJldHRlck1vdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGxpbmUgYmVsb3cganVzdCByYW5kb21seSBjaG9vc2VzIGFuIGFycmF5IGVsZW1lbnRcclxuICAgICAgICAgICAgY29uc3QgY2hvc2VuTW92ZSA9IHBvc3NpYmxlTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGNob3Nlbk1vdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcnM7IiwiZnVuY3Rpb24gc2hpcEZhY3RvcnkobGVuZ3RoKSB7XHJcbiAgICBsZXQgc2hpcCA9IHt9O1xyXG5cclxuICAgIC8vIGxvYWRzIHNoaXBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzaGlwW2ldID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaGlwOiBzaGlwLFxyXG4gICAgICAgIGxlbmd0aDogbGVuZ3RoLFxyXG4gICAgICAgIGhpdChwb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwW3Bvc10gPSAnaGl0JztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzU3VuaygpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwW2ldICE9ICdoaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzaGlwRmFjdG9yeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==