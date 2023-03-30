/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::after,\n::before {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n#container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.menu {\n  background-color: rgb(223, 223, 223);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.add-button {\n  border: 3px solid black;\n  border-radius: 1rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-new-text {\n  margin: auto;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.line {\n  border: 2px solid red;\n}\n\n.project-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-container {\n  position: relative;\n  border: 3px solid black;\n  text-align: center;\n  padding: 10px;\n  border-radius: 2rem;\n  font-size: 2.3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-delete,\n.project-edit {\n  height: 90%;\n}\n\n.project-delete:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-edit:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-form {\n  border-radius: 1rem;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: stretch;\n}\n\n.project-name-input {\n  padding: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2em;\n}\n\n.project-button-holder {\n  display: flex;\n  gap: 10px;\n}\n\n.project-button-holder > input {\n  flex: 1;\n  font-size: 1.3rem;\n  border: none;\n  outline: none;\n  padding: 5px;\n}\n\n.project-button-apply {\n  background-color: rgb(172, 255, 47);\n}\n\n.project-button-cancel {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\n#main {\n  padding: 100px 15%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 50px;\n}\n\n.project-heading {\n  font-size: 4rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.add-new-task {\n  padding: 10px 20px;\n  font-size: 1.5rem;\n}\n\n.task-table {\n  border-spacing: 0px 20px;\n}\n\n.task-table :is(td, th) {\n  text-align: start;\n  padding: 5px 10px;\n}\n\nth {\n  border-bottom: 2px solid black;\n}\n\n:is(td, th):not(:first-child) {\n  border-left: 1px solid black;\n}\n\n.table-heading {\n  font-size: 1.5rem;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.task-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  z-index: 10;\n  background-color: white;\n  width: 850px;\n  height: 400px;\n}\n\n.table-row.low > td {\n  border-top: 3px solid green;\n  border-bottom: 3px solid green;\n}\n\n.table-row.medium > td {\n  border-top: 3px solid orange;\n  border-bottom: 3px solid orange;\n}\n\n.table-row.high > td {\n  border-top: 3px solid red;\n  border-bottom: 3px solid red;\n}\n\n.table-row.low > td:first-child {\n  border-left: 3px solid green;\n}\n\n.table-row.medium > td:first-child {\n  border-left: 3px solid orange;\n}\n\n.table-row.high > td:first-child {\n  border-left: 3px solid red;\n}\n\n.table-row.low > td:last-child {\n  border-right: 3px solid green;\n}\n\n.table-row.medium > td:last-child {\n  border-right: 3px solid orange;\n}\n\n.table-row.high > td:last-child {\n  border-right: 3px solid red;\n}\n\ntd {\n  font-size: 1.2rem;\n}\n\ntd:not(.DueDate) {\n  font-size: 1.5rem;\n}\n\n.task-table td.change {\n  padding: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.change > * {\n  display: inline-block;\n  height: 50px;\n}\n\n.task-delete-svg:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-edit-svg:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-table input[type=\"checkbox\"] {\n  margin: auto;\n  display: flex;\n  transform: scale(2.5);\n}\n\n.checked {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":["*,\n::after,\n::before {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n#container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.menu {\n  background-color: rgb(223, 223, 223);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.add-button {\n  border: 3px solid black;\n  border-radius: 1rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-new-text {\n  margin: auto;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.line {\n  border: 2px solid red;\n}\n\n.project-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-container {\n  position: relative;\n  border: 3px solid black;\n  text-align: center;\n  padding: 10px;\n  border-radius: 2rem;\n  font-size: 2.3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-delete,\n.project-edit {\n  height: 90%;\n}\n\n.project-delete:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-edit:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-form {\n  border-radius: 1rem;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: stretch;\n}\n\n.project-name-input {\n  padding: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2em;\n}\n\n.project-button-holder {\n  display: flex;\n  gap: 10px;\n}\n\n.project-button-holder > input {\n  flex: 1;\n  font-size: 1.3rem;\n  border: none;\n  outline: none;\n  padding: 5px;\n}\n\n.project-button-apply {\n  background-color: rgb(172, 255, 47);\n}\n\n.project-button-cancel {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\n#main {\n  padding: 100px 15%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 50px;\n}\n\n.project-heading {\n  font-size: 4rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.add-new-task {\n  padding: 10px 20px;\n  font-size: 1.5rem;\n}\n\n.task-table {\n  border-spacing: 0px 20px;\n}\n\n.task-table :is(td, th) {\n  text-align: start;\n  padding: 5px 10px;\n}\n\nth {\n  border-bottom: 2px solid black;\n}\n\n:is(td, th):not(:first-child) {\n  border-left: 1px solid black;\n}\n\n.table-heading {\n  font-size: 1.5rem;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.task-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  z-index: 10;\n  background-color: white;\n  width: 850px;\n  height: 400px;\n}\n\n.table-row.low > td {\n  border-top: 3px solid green;\n  border-bottom: 3px solid green;\n}\n\n.table-row.medium > td {\n  border-top: 3px solid orange;\n  border-bottom: 3px solid orange;\n}\n\n.table-row.high > td {\n  border-top: 3px solid red;\n  border-bottom: 3px solid red;\n}\n\n.table-row.low > td:first-child {\n  border-left: 3px solid green;\n}\n\n.table-row.medium > td:first-child {\n  border-left: 3px solid orange;\n}\n\n.table-row.high > td:first-child {\n  border-left: 3px solid red;\n}\n\n.table-row.low > td:last-child {\n  border-right: 3px solid green;\n}\n\n.table-row.medium > td:last-child {\n  border-right: 3px solid orange;\n}\n\n.table-row.high > td:last-child {\n  border-right: 3px solid red;\n}\n\ntd {\n  font-size: 1.2rem;\n}\n\ntd:not(.DueDate) {\n  font-size: 1.5rem;\n}\n\n.task-table td.change {\n  padding: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.change > * {\n  display: inline-block;\n  height: 50px;\n}\n\n.task-delete-svg:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-edit-svg:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-table input[type=\"checkbox\"] {\n  margin: auto;\n  display: flex;\n  transform: scale(2.5);\n}\n\n.checked {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/addProjectButton.js":
/*!*****************************************!*\
  !*** ./src/modules/addProjectButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAddButton)
/* harmony export */ });
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm */ "./src/modules/projectForm.js");



function createAddButton() {
  const addNew = document.createElement("div");
  addNew.classList.add("add-button");
  addNew.addEventListener("click", _projectForm__WEBPACK_IMPORTED_MODULE_1__["default"]);

  const addSvg = document.createElement("img");
  addSvg.classList.add("svg-holder");
  addSvg.setAttribute("src", _images_add_svg__WEBPACK_IMPORTED_MODULE_0__);
  addNew.appendChild(addSvg);

  const addText = document.createElement("span");
  addText.classList.add("add-new-text");
  addText.textContent = "Add New";
  addNew.appendChild(addText);

  return addNew;
}


/***/ }),

/***/ "./src/modules/getCurrentProject.js":
/*!******************************************!*\
  !*** ./src/modules/getCurrentProject.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCurrentProject)
/* harmony export */ });
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");


function getCurrentProject() {
  const currentProjectName =
    document.querySelector(".project-name").textContent;
  const currentProject = _projectList__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectByName(currentProjectName);
  return currentProject;
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _addProjectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjectButton */ "./src/modules/addProjectButton.js");


function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild((0,_addProjectButton__WEBPACK_IMPORTED_MODULE_0__["default"])());

  const line = document.createElement("div");
  line.classList.add("line");
  menu.appendChild(line);

  const projectHolder = document.createElement("div");
  projectHolder.classList.add("project-holder");
  menu.appendChild(projectHolder);

  return menu;
}


/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPage)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");


function createPage() {
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  container.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  container.appendChild(main);

  return container;
}


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ "./src/modules/taskList.js");


function Project(title) {
  let projectTitle = title;
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const getTitle = () => projectTitle;

  const getTaskList = () => taskList;

  const setTitle = (value) => {
    projectTitle = value;
  };

  return {
    getTitle,
    getTaskList,
    setTitle,
  };
}


/***/ }),

/***/ "./src/modules/projectContainer.js":
/*!*****************************************!*\
  !*** ./src/modules/projectContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProjectList)
/* harmony export */ });
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectPage */ "./src/modules/projectPage.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectForm */ "./src/modules/projectForm.js");




 // eslint-disable-line import/no-cycle

function deleteProject(e) {
  e.stopPropagation();
  const projectName = this.parentElement.textContent;
  _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].removeByName(projectName);
  renderProjectList(); // eslint-disable-line no-use-before-define

  const projectHeading = document.querySelector(".project-name");
  if (projectHeading) {
    if (projectName === projectHeading.textContent) {
      (0,_projectPage__WEBPACK_IMPORTED_MODULE_3__.clearMainPage)();
    }
  }
}

function checkForDeleteButton(container) {
  return container.querySelector(".project-delete");
}

function checkForEditButton(container) {
  return container.querySelector(".project-edit");
}

function renderDeleteButton(e) {
  const targetedContainer = e.target;
  if (checkForDeleteButton(targetedContainer)) return;

  const deleteButton = document.createElement("img");
  deleteButton.setAttribute("src", _images_delete_svg__WEBPACK_IMPORTED_MODULE_0__);
  deleteButton.classList.add("project-delete");
  deleteButton.addEventListener("click", deleteProject);

  targetedContainer.appendChild(deleteButton);
}

function renderEditButton(e) {
  const targetedContainer = e.target;
  if (checkForEditButton(targetedContainer)) return;

  const editButton = document.createElement("img");
  editButton.setAttribute("src", _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__);
  editButton.classList.add("project-edit");
  const currentProject = _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByName(e.target.id);
  editButton.addEventListener("click", (evt) => (0,_projectForm__WEBPACK_IMPORTED_MODULE_4__["default"])(evt, currentProject));

  targetedContainer.appendChild(editButton);
}

function removeDeleteButton(e) {
  const targetedContainer = e.target;
  if (!checkForDeleteButton(targetedContainer)) return;

  targetedContainer.querySelector(".project-delete").remove();
}

function removeEditButton(e) {
  const targetedContainer = e.target;
  if (!checkForEditButton(targetedContainer)) return;

  targetedContainer.querySelector(".project-edit").remove();
}

function createProjectContainer(projectName) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  projectContainer.setAttribute("id", projectName);
  projectContainer.textContent = projectName;

  projectContainer.addEventListener(
    "click",
    _projectPage__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage.bind(this, _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectByName(projectName))
  );

  projectContainer.addEventListener("mouseover", renderEditButton);
  projectContainer.addEventListener("mouseleave", removeEditButton);

  projectContainer.addEventListener("mouseover", renderDeleteButton);
  projectContainer.addEventListener("mouseleave", removeDeleteButton);

  return projectContainer;
}

function renderProjectList() {
  const projectHolder = document.querySelector(".project-holder");

  while (projectHolder.firstChild) {
    projectHolder.removeChild(projectHolder.firstChild);
  }

  _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].getList().forEach((project) => {
    projectHolder.appendChild(createProjectContainer(project.getTitle()));
  });
}


/***/ }),

/***/ "./src/modules/projectForm.js":
/*!************************************!*\
  !*** ./src/modules/projectForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendProjectForm)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _projectContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectContainer */ "./src/modules/projectContainer.js");
/* harmony import */ var _getCurrentProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCurrentProject */ "./src/modules/getCurrentProject.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectPage */ "./src/modules/projectPage.js");


 // eslint-disable-line import/no-cycle



function removeForm() {
  const form = document.querySelector(".project-form");
  if (form) {
    form.remove();
  }
}

function addProject(e) {
  e.preventDefault();
  const projectName = this.querySelector(".project-name-input").value;
  _projectList__WEBPACK_IMPORTED_MODULE_1__["default"].addProject((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName));
  removeForm();
  (0,_projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function editProject(targetedProject) {
  const isCurrentProject = ((0,_getCurrentProject__WEBPACK_IMPORTED_MODULE_3__["default"])() === targetedProject);
  const projectName = this.querySelector(".project-name-input").value;
  _projectList__WEBPACK_IMPORTED_MODULE_1__["default"].setProjectTitle(targetedProject, projectName);
  removeForm();
  (0,_projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  if(isCurrentProject) {
    (0,_projectPage__WEBPACK_IMPORTED_MODULE_4__.renderProjectPage)();
  }
}

_projectList__WEBPACK_IMPORTED_MODULE_1__["default"].addProject((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])("Example")); // Extra line for debugging

function appendProjectForm(evt, targetedProject) {
  if (document.querySelector(".project-form")) return;

  evt.stopPropagation();

  const projectHolder = document.querySelector(".project-holder");

  const form = document.createElement("form");
  form.classList.add("project-form");

  const projectNameInput = document.createElement("input");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("required", "true");
  projectNameInput.setAttribute("maxlength", "8");
  projectNameInput.setAttribute("placeholder", "Project name:");
  projectNameInput.classList.add("project-name-input");
  form.appendChild(projectNameInput);

  const buttonHolder = document.createElement("div");
  buttonHolder.classList.add("project-button-holder");

  const buttonApply = document.createElement("input");
  buttonApply.setAttribute("type", "submit");
  buttonApply.setAttribute("value", "Apply");
  buttonApply.classList.add("project-button-apply");
  buttonHolder.appendChild(buttonApply);

  const buttonCancel = document.createElement("input");
  buttonCancel.setAttribute("type", "button");
  buttonCancel.setAttribute("value", "Cancel");
  buttonCancel.classList.add("project-button-cancel");
  buttonCancel.addEventListener("click", removeForm);
  buttonHolder.appendChild(buttonCancel);

  if (targetedProject) {
    projectNameInput.value = targetedProject.getTitle();
    form.addEventListener("submit", editProject.bind(form, targetedProject));
  } else {
    form.addEventListener("submit", addProject);
  }

  form.appendChild(buttonHolder);

  if (targetedProject) {
    const currentContainer = projectHolder.querySelector(
      `#${targetedProject.getTitle()}`
    );
    currentContainer.after(form);
  } else {
    projectHolder.appendChild(form);
  }

  form.querySelector(".project-name-input").focus();
}


/***/ }),

/***/ "./src/modules/projectList.js":
/*!************************************!*\
  !*** ./src/modules/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ProjectList = (() => {
  const projects = [];

  const getList = () => projects;

  const getProjectByName = (projectname) =>
    projects.filter((project) => project.getTitle() === projectname)[0];

  const addProject = (project) => {
    if (!getProjectByName(project.getTitle())) projects.push(project);
  };

  const removeByName = (projectName) => {
    const neededProject = getProjectByName(projectName);
    const index = projects.indexOf(neededProject);
    projects.splice(index, 1);
  };

  const setProjectTitle = (project, title) => {
    if (!getProjectByName(title)) project.setTitle(title);
  };

  return {
    getList,
    addProject,
    removeByName,
    getProjectByName,
    setProjectTitle,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);


/***/ }),

/***/ "./src/modules/projectPage.js":
/*!************************************!*\
  !*** ./src/modules/projectPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMainPage": () => (/* binding */ clearMainPage),
/* harmony export */   "renderProjectPage": () => (/* binding */ renderProjectPage)
/* harmony export */ });
/* harmony import */ var _taskTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskTable */ "./src/modules/taskTable.js");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm */ "./src/modules/taskForm.js");



function clearMainPage() {
  const main = document.querySelector("#main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function renderProjectPage(project) {
  const main = document.querySelector("#main");
  clearMainPage();

  const projectHeading = document.createElement("div");
  projectHeading.classList.add("project-heading");

  const projectName = document.createElement("span");
  projectName.classList.add("project-name");
  projectName.textContent = project.getTitle();
  projectHeading.appendChild(projectName);

  const addNewTask = document.createElement("button");
  addNewTask.classList.add("add-new-task");
  addNewTask.textContent = "Add new task";
  addNewTask.addEventListener("click", _taskForm__WEBPACK_IMPORTED_MODULE_1__["default"]);
  projectHeading.appendChild(addNewTask);

  main.appendChild(projectHeading);

  main.appendChild((0,_taskTable__WEBPACK_IMPORTED_MODULE_0__.createTaskTable)());

  (0,_taskTable__WEBPACK_IMPORTED_MODULE_0__.renderTableData)();
}




/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function Task(title, description, dueDate, priority) {
  const priorities = ["Low", "Medium", "High"];

  let taskTitle = title;
  let taskDescription = description;
  let taskDueDate = dueDate;
  let taskPriority = priority;
  let isChecked = false;

  const getTitle = () => taskTitle;
  const getDescription = () => taskDescription;
  const getDueDate = () => taskDueDate;
  const getNumberedPriority = () => taskPriority;
  const getPriority = () => priorities[taskPriority];
  const getIsChecked = () => isChecked;

  const setTitle = (value) => {
    taskTitle = value;
  };
  const setDescription = (value) => {
    taskDescription = value;
  };
  const setDueDate = (value) => {
    taskDueDate = value;
  };
  const setPriority = (value) => {
    taskPriority = value;
  };
  const setIsChecked = (value) => {
    isChecked = !!value;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNumberedPriority,
    getIsChecked,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setIsChecked,
  };
}


/***/ }),

/***/ "./src/modules/taskForm.js":
/*!*********************************!*\
  !*** ./src/modules/taskForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTaskForm)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _taskTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskTable */ "./src/modules/taskTable.js");
/* harmony import */ var _getCurrentProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCurrentProject */ "./src/modules/getCurrentProject.js");

 // eslint-disable-line import/no-cycle


function removeForm() {
  const overlay = document.querySelector("#overlay");
  if (overlay) overlay.remove();

  const form = document.querySelector(".task-form");
  if (form) form.remove();
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  overlay.addEventListener("click", removeForm);

  return overlay;
}

function submitForm(targetTaskList, targetTask) {
  if(targetTaskList.target) {
    targetTaskList.preventDefault();
  }
  const currentProject = (0,_getCurrentProject__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const taskTitle = this.querySelector(".task-title-input").value;
  const taskDescription = this.querySelector(".task-description-input").value;
  const taskDate = this.querySelector(".task-date-input").value;
  const taskPriority = this.querySelector(".task-priority-input").value;

  if (targetTaskList && targetTask && !targetTaskList.target) {
    targetTaskList.setTaskTitle(targetTask, taskTitle);
    targetTask.setDescription(taskDescription);
    targetTask.setDueDate(taskDate);
    targetTask.setPriority(taskPriority);
  } else {
    currentProject
      .getTaskList()
      .addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTitle, taskDescription, taskDate, taskPriority));
  }

  removeForm();
  (0,_taskTable__WEBPACK_IMPORTED_MODULE_1__.renderTableData)();
}

function renderTaskForm(targetTaskList, targetTask) {
  const main = document.querySelector("#main");

  const form = document.createElement("form");
  form.classList.add("task-form");

  const titleInput = document.createElement("input");
  titleInput.classList.add("task-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("required", "true");
  titleInput.setAttribute("placeholder", "Title");
  form.appendChild(titleInput);

  const descriptionInput = document.createElement("input");
  descriptionInput.classList.add("task-description-input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("required", "true");
  descriptionInput.setAttribute("placeholder", "Description");
  form.appendChild(descriptionInput);

  const dateInput = document.createElement("input");
  dateInput.classList.add("task-date-input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("required", "true");
  dateInput.setAttribute("placeholder", "Date");
  form.appendChild(dateInput);

  const priorityHolder = document.createElement("div");
  priorityHolder.classList.add("priority-holder");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority: ";
  priorityHolder.appendChild(priorityLabel);

  const priorityInput = document.createElement("select");
  priorityInput.classList.add("task-priority-input");
  priorityInput.setAttribute("id", "priority");
  priorityInput.setAttribute("required", "true");

  const priority1 = document.createElement("option");
  priority1.setAttribute("value", 0);
  priority1.textContent = "Low";
  priorityInput.appendChild(priority1);
  const priority2 = document.createElement("option");
  priority2.setAttribute("value", 1);
  priority2.textContent = "Medium";
  priorityInput.appendChild(priority2);
  const priority3 = document.createElement("option");
  priority3.setAttribute("value", 2);
  priority3.textContent = "High";
  priorityInput.appendChild(priority3);

  priorityHolder.appendChild(priorityInput);
  form.appendChild(priorityHolder);

  if(targetTaskList && targetTask && !targetTaskList.target) {
    titleInput.value = targetTask.getTitle();
    descriptionInput.value = targetTask.getDescription();
    dateInput.value = targetTask.getDueDate();
    priorityInput.value = targetTask.getNumberedPriority();
  }

  const submitButton = document.createElement("input");
  submitButton.classList.add("task-priority-input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Add");
  form.appendChild(submitButton);

  form.addEventListener("submit", submitForm.bind(form, targetTaskList, targetTask));

  main.appendChild(createOverlay());
  main.appendChild(form);
}


/***/ }),

/***/ "./src/modules/taskList.js":
/*!*********************************!*\
  !*** ./src/modules/taskList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskList)
/* harmony export */ });
function TaskList() {
  const taskList = [];

  const getList = () => taskList;

  const getTaskByName = (taskname) =>
    taskList.filter((task) => task.getTitle() === taskname)[0];

  const addTask = (task) => {
    if (!getTaskByName(task.getTitle())) taskList.push(task);
  };

  const setTaskTitle = (task, title) => {
    if (!getTaskByName(title)) task.setTitle(title);
  };

  const removeByName = (taskName) => {
    const neededTask = getTaskByName(taskName);
    const index = taskList.indexOf(neededTask);
    taskList.splice(index, 1);
  };

  return {
    getList,
    addTask,
    removeByName,
    getTaskByName,
    setTaskTitle,
  };
}


/***/ }),

/***/ "./src/modules/taskTable.js":
/*!**********************************!*\
  !*** ./src/modules/taskTable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskTable": () => (/* binding */ createTaskTable),
/* harmony export */   "renderTableData": () => (/* binding */ renderTableData)
/* harmony export */ });
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _getCurrentProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCurrentProject */ "./src/modules/getCurrentProject.js");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm */ "./src/modules/taskForm.js");



 // eslint-disable-line import/no-cycle

function clearTable() {
  const table = document.querySelector(".task-table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

function removeTask() {
  const currentProject = (0,_getCurrentProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
  currentProject
    .getTaskList()
    .removeByName(this.parentElement.parentElement.id);
  renderTableData(); // eslint-disable-line no-use-before-define
}

function editTask() {
  const currentProject = (0,_getCurrentProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const currentTaskList = currentProject.getTaskList();
  const currentTask = currentTaskList.getTaskByName(
    this.parentElement.parentElement.id
  );
  (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__["default"])(currentTaskList, currentTask);
}

function toggleCheck() {
  const currentProject = (0,_getCurrentProject__WEBPACK_IMPORTED_MODULE_2__["default"])();
  currentProject
    .getTaskList()
    .getTaskByName(this.parentElement.parentElement.id)
    .setIsChecked(this.checked);
  renderTableData(); // eslint-disable-line no-use-before-define
}

function createTableRow(type, task) {
  const cells = ["IsChecked", "Title", "Description", "DueDate", "Priority"];

  const tableRow = document.createElement("tr");
  if (task) {
    tableRow.classList.add("table-row");
    tableRow.setAttribute("id", `${task.getTitle()}`);
  } else tableRow.classList.add("table-heading");

  cells.forEach((cellType) => {
    const cell = document.createElement(type);
    cell.classList.add(`${cellType}`);
    if (type !== "th") {
      const textFunction = `get${cellType}`;
      if (cellType === "IsChecked") {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        const isTaskChecked = task[textFunction]();
        checkbox.checked = isTaskChecked;
        if(isTaskChecked) tableRow.classList.add('checked');
        checkbox.addEventListener("click", toggleCheck);
        cell.appendChild(checkbox);
      } else {
        cell.textContent = task[textFunction]();
        if (cellType === "Priority")
          tableRow.classList.add(task.getPriority().toLowerCase());
      }
    } else {
      cell.textContent = cellType;
    }
    tableRow.appendChild(cell);
  });

  const delCell = document.createElement(type);
  delCell.classList.add("change");
  if (type === "th") {
    delCell.textContent = "Change";
  } else {
    const deleteTaskButton = document.createElement("img");
    deleteTaskButton.setAttribute("src", _images_delete_svg__WEBPACK_IMPORTED_MODULE_0__);
    deleteTaskButton.classList.add("task-delete-svg");
    deleteTaskButton.addEventListener("click", removeTask);
    delCell.appendChild(deleteTaskButton);

    const editTaskButton = document.createElement("img");
    editTaskButton.setAttribute("src", _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__);
    editTaskButton.classList.add("task-edit-svg");
    editTaskButton.addEventListener("click", editTask);
    delCell.appendChild(editTaskButton);
  }
  tableRow.appendChild(delCell);

  return tableRow;
}

function renderTableData() {
  clearTable();
  const table = document.querySelector("table");
  const currentProject = (0,_getCurrentProject__WEBPACK_IMPORTED_MODULE_2__["default"])();

  currentProject
    .getTaskList()
    .getList()
    .forEach((task) => {
      table.appendChild(createTableRow("td", task));
    });
}

function createTaskTable() {
  const table = document.createElement("table");
  table.classList.add("task-table");
  table.setAttribute("cellspacing", "0");

  const colgroup = document.createElement("colgroup");

  const col0 = document.createElement("col");
  col0.setAttribute("span", "1");
  col0.setAttribute("style", "width: 5%");
  colgroup.appendChild(col0);

  const col1 = document.createElement("col");
  col1.setAttribute("span", "1");
  col1.setAttribute("style", "width: 20%");
  colgroup.appendChild(col1);

  const col2 = document.createElement("col");
  col2.setAttribute("span", "1");
  col2.setAttribute("style", "width: 35%");
  colgroup.appendChild(col2);

  const col3 = document.createElement("col");
  col3.setAttribute("span", "1");
  col3.setAttribute("style", "width: 20%");
  colgroup.appendChild(col3);

  const col4 = document.createElement("col");
  col4.setAttribute("span", "1");
  col4.setAttribute("style", "width: 10%");
  colgroup.appendChild(col4);

  const col5 = document.createElement("col");
  col5.setAttribute("span", "1");
  col5.setAttribute("style", "width: 10%");
  colgroup.appendChild(col5);

  table.appendChild(colgroup);
  table.appendChild(createTableRow("th"));

  return table;
}




/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8b39a336d92d4c5c69f.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08d2e54321c6c5094879.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "781620c7c16865a7a907.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page */ "./src/modules/page.js");
/* harmony import */ var _modules_projectContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/projectContainer */ "./src/modules/projectContainer.js");
/* harmony import */ var _modules_projectPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projectPage */ "./src/modules/projectPage.js");
/* harmony import */ var _modules_projectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/projectList */ "./src/modules/projectList.js");


 // Extra line for debugging
 // Extra line for debugging
 // Extra line for debugging

const body = document.querySelector("body");
body.appendChild((0,_modules_page__WEBPACK_IMPORTED_MODULE_1__["default"])());

(0,_modules_projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Extra line for debugging
(0,_modules_projectPage__WEBPACK_IMPORTED_MODULE_3__.renderProjectPage)(_modules_projectList__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectByName('Example')); // Extra line for debugging
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JKNUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDYTtBQUNtQixDQUFDO0FBQ0YsQ0FBQztBQUNYLENBQUM7O0FBRWpEO0FBQ0EsaUJBQWlCLHlEQUFVOztBQUUzQixxRUFBaUIsSUFBSTtBQUNyQix1RUFBaUIsQ0FBQyw2RUFBNEIsY0FBYywyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hZGRQcm9qZWN0QnV0dG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2dldEN1cnJlbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3Byb2plY3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrVGFibGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10ZXh0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGluZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wcm9qZWN0LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLFxcbi5wcm9qZWN0LWVkaXQge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWVkaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWhvbGRlciA+IGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1hcHBseSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyNTUsIDQ3KTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43KTtcXG59XFxuXFxuI21haW4ge1xcbiAgcGFkZGluZzogMTAwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay10YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLXRhYmxlIDppcyh0ZCwgdGgpIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbnRoIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuOmlzKHRkLCB0aCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhYmxlLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZCB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgZ3JlZW47XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50YWJsZS1yb3cubWVkaXVtID4gdGQge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIG9yYW5nZTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YWJsZS1yb3cuaGlnaCA+IHRkIHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCByZWQ7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFibGUtcm93LmxvdyA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50YWJsZS1yb3cubWVkaXVtID4gdGQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YWJsZS1yb3cuaGlnaCA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFibGUtcm93LmxvdyA+IHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50YWJsZS1yb3cubWVkaXVtID4gdGQ6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YWJsZS1yb3cuaGlnaCA+IHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG50ZCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxudGQ6bm90KC5EdWVEYXRlKSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stdGFibGUgdGQuY2hhbmdlIHtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGFuZ2UgPiAqIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLXN2Zzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnRhc2stZWRpdC1zdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnRhc2stdGFibGUgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10ZXh0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGluZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wcm9qZWN0LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLFxcbi5wcm9qZWN0LWVkaXQge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWVkaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWhvbGRlciA+IGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1hcHBseSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyNTUsIDQ3KTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43KTtcXG59XFxuXFxuI21haW4ge1xcbiAgcGFkZGluZzogMTAwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay10YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLXRhYmxlIDppcyh0ZCwgdGgpIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbnRoIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuOmlzKHRkLCB0aCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhYmxlLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZCB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgZ3JlZW47XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50YWJsZS1yb3cubWVkaXVtID4gdGQge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIG9yYW5nZTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YWJsZS1yb3cuaGlnaCA+IHRkIHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCByZWQ7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFibGUtcm93LmxvdyA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50YWJsZS1yb3cubWVkaXVtID4gdGQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YWJsZS1yb3cuaGlnaCA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFibGUtcm93LmxvdyA+IHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50YWJsZS1yb3cubWVkaXVtID4gdGQ6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YWJsZS1yb3cuaGlnaCA+IHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG50ZCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxudGQ6bm90KC5EdWVEYXRlKSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stdGFibGUgdGQuY2hhbmdlIHtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGFuZ2UgPiAqIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLXN2Zzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnRhc2stZWRpdC1zdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnRhc2stdGFibGUgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWRkIGZyb20gXCIuLi9pbWFnZXMvYWRkLnN2Z1wiO1xuaW1wb3J0IGFwcGVuZFByb2plY3RGb3JtIGZyb20gXCIuL3Byb2plY3RGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbigpIHtcbiAgY29uc3QgYWRkTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkTmV3LmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpO1xuICBhZGROZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcGVuZFByb2plY3RGb3JtKTtcblxuICBjb25zdCBhZGRTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBhZGRTdmcuY2xhc3NMaXN0LmFkZChcInN2Zy1ob2xkZXJcIik7XG4gIGFkZFN2Zy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYWRkKTtcbiAgYWRkTmV3LmFwcGVuZENoaWxkKGFkZFN2Zyk7XG5cbiAgY29uc3QgYWRkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhZGRUZXh0LmNsYXNzTGlzdC5hZGQoXCJhZGQtbmV3LXRleHRcIik7XG4gIGFkZFRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBOZXdcIjtcbiAgYWRkTmV3LmFwcGVuZENoaWxkKGFkZFRleHQpO1xuXG4gIHJldHVybiBhZGROZXc7XG59XG4iLCJpbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0TmFtZSA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gUHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5TmFtZShjdXJyZW50UHJvamVjdE5hbWUpO1xuICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59XG4iLCJpbXBvcnQgY3JlYXRlQWRkQnV0dG9uIGZyb20gXCIuL2FkZFByb2plY3RCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkQnV0dG9uKCkpO1xuXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaW5lLmNsYXNzTGlzdC5hZGQoXCJsaW5lXCIpO1xuICBtZW51LmFwcGVuZENoaWxkKGxpbmUpO1xuXG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhvbGRlclwiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0SG9sZGVyKTtcblxuICByZXR1cm4gbWVudTtcbn1cbiIsImltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJpbXBvcnQgVGFza0xpc3QgZnJvbSBcIi4vdGFza0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuICBsZXQgcHJvamVjdFRpdGxlID0gdGl0bGU7XG4gIGNvbnN0IHRhc2tMaXN0ID0gVGFza0xpc3QoKTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHByb2plY3RUaXRsZTtcblxuICBjb25zdCBnZXRUYXNrTGlzdCA9ICgpID0+IHRhc2tMaXN0O1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKHZhbHVlKSA9PiB7XG4gICAgcHJvamVjdFRpdGxlID0gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXRUYXNrTGlzdCxcbiAgICBzZXRUaXRsZSxcbiAgfTtcbn1cbiIsImltcG9ydCBkZWwgZnJvbSBcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCB7IGNsZWFyTWFpblBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcbmltcG9ydCBhcHBlbmRQcm9qZWN0Rm9ybSBmcm9tIFwiLi9wcm9qZWN0Rm9ybVwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1jeWNsZVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIFByb2plY3RMaXN0LnJlbW92ZUJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gIHJlbmRlclByb2plY3RMaXN0KCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblxuICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpO1xuICBpZiAocHJvamVjdEhlYWRpbmcpIHtcbiAgICBpZiAocHJvamVjdE5hbWUgPT09IHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50KSB7XG4gICAgICBjbGVhck1haW5QYWdlKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yRGVsZXRlQnV0dG9uKGNvbnRhaW5lcikge1xuICByZXR1cm4gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1kZWxldGVcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yRWRpdEJ1dHRvbihjb250YWluZXIpIHtcbiAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZWRpdFwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGVsZXRlQnV0dG9uKGUpIHtcbiAgY29uc3QgdGFyZ2V0ZWRDb250YWluZXIgPSBlLnRhcmdldDtcbiAgaWYgKGNoZWNrRm9yRGVsZXRlQnV0dG9uKHRhcmdldGVkQ29udGFpbmVyKSkgcmV0dXJuO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZGVsKTtcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlbGV0ZVwiKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcblxuICB0YXJnZXRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJFZGl0QnV0dG9uKGUpIHtcbiAgY29uc3QgdGFyZ2V0ZWRDb250YWluZXIgPSBlLnRhcmdldDtcbiAgaWYgKGNoZWNrRm9yRWRpdEJ1dHRvbih0YXJnZXRlZENvbnRhaW5lcikpIHJldHVybjtcblxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZWRpdCk7XG4gIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWRpdFwiKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBQcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlOYW1lKGUudGFyZ2V0LmlkKTtcbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4gYXBwZW5kUHJvamVjdEZvcm0oZXZ0LCBjdXJyZW50UHJvamVjdCkpO1xuXG4gIHRhcmdldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEZWxldGVCdXR0b24oZSkge1xuICBjb25zdCB0YXJnZXRlZENvbnRhaW5lciA9IGUudGFyZ2V0O1xuICBpZiAoIWNoZWNrRm9yRGVsZXRlQnV0dG9uKHRhcmdldGVkQ29udGFpbmVyKSkgcmV0dXJuO1xuXG4gIHRhcmdldGVkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1kZWxldGVcIikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVkaXRCdXR0b24oZSkge1xuICBjb25zdCB0YXJnZXRlZENvbnRhaW5lciA9IGUudGFyZ2V0O1xuICBpZiAoIWNoZWNrRm9yRWRpdEJ1dHRvbih0YXJnZXRlZENvbnRhaW5lcikpIHJldHVybjtcblxuICB0YXJnZXRlZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZWRpdFwiKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE5hbWUpO1xuICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICByZW5kZXJQcm9qZWN0UGFnZS5iaW5kKHRoaXMsIFByb2plY3RMaXN0LmdldFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpKVxuICApO1xuXG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCByZW5kZXJFZGl0QnV0dG9uKTtcbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCByZW1vdmVFZGl0QnV0dG9uKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgcmVuZGVyRGVsZXRlQnV0dG9uKTtcbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCByZW1vdmVEZWxldGVCdXR0b24pO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdEhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1ob2xkZXJcIik7XG5cbiAgd2hpbGUgKHByb2plY3RIb2xkZXIuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RIb2xkZXIucmVtb3ZlQ2hpbGQocHJvamVjdEhvbGRlci5maXJzdENoaWxkKTtcbiAgfVxuXG4gIFByb2plY3RMaXN0LmdldExpc3QoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdEhvbGRlci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QuZ2V0VGl0bGUoKSkpO1xuICB9KTtcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHJlbmRlclByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RDb250YWluZXJcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBnZXRDdXJyZW50UHJvamVjdCBmcm9tIFwiLi9nZXRDdXJyZW50UHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gIGlmIChmb3JtKSB7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWUtaW5wdXRcIikudmFsdWU7XG4gIFByb2plY3RMaXN0LmFkZFByb2plY3QoUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICByZW1vdmVGb3JtKCk7XG4gIHJlbmRlclByb2plY3RMaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHRhcmdldGVkUHJvamVjdCkge1xuICBjb25zdCBpc0N1cnJlbnRQcm9qZWN0ID0gKGdldEN1cnJlbnRQcm9qZWN0KCkgPT09IHRhcmdldGVkUHJvamVjdCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZS1pbnB1dFwiKS52YWx1ZTtcbiAgUHJvamVjdExpc3Quc2V0UHJvamVjdFRpdGxlKHRhcmdldGVkUHJvamVjdCwgcHJvamVjdE5hbWUpO1xuICByZW1vdmVGb3JtKCk7XG4gIHJlbmRlclByb2plY3RMaXN0KCk7XG4gIGlmKGlzQ3VycmVudFByb2plY3QpIHtcbiAgICByZW5kZXJQcm9qZWN0UGFnZSgpO1xuICB9XG59XG5cblByb2plY3RMaXN0LmFkZFByb2plY3QoUHJvamVjdChcIkV4YW1wbGVcIikpOyAvLyBFeHRyYSBsaW5lIGZvciBkZWJ1Z2dpbmdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdEZvcm0oZXZ0LCB0YXJnZXRlZFByb2plY3QpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpKSByZXR1cm47XG5cbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaG9sZGVyXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjhcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IG5hbWU6XCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvbi1ob2xkZXJcIik7XG5cbiAgY29uc3QgYnV0dG9uQXBwbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGJ1dHRvbkFwcGx5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbkFwcGx5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQXBwbHlcIik7XG4gIGJ1dHRvbkFwcGx5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvbi1hcHBseVwiKTtcbiAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkFwcGx5KTtcblxuICBjb25zdCBidXR0b25DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGJ1dHRvbkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidXR0b25DYW5jZWwuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDYW5jZWxcIik7XG4gIGJ1dHRvbkNhbmNlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b24tY2FuY2VsXCIpO1xuICBidXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pO1xuICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcblxuICBpZiAodGFyZ2V0ZWRQcm9qZWN0KSB7XG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IHRhcmdldGVkUHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0UHJvamVjdC5iaW5kKGZvcm0sIHRhcmdldGVkUHJvamVjdCkpO1xuICB9IGVsc2Uge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRQcm9qZWN0KTtcbiAgfVxuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uSG9sZGVyKTtcblxuICBpZiAodGFyZ2V0ZWRQcm9qZWN0KSB7XG4gICAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IHByb2plY3RIb2xkZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHt0YXJnZXRlZFByb2plY3QuZ2V0VGl0bGUoKX1gXG4gICAgKTtcbiAgICBjdXJyZW50Q29udGFpbmVyLmFmdGVyKGZvcm0pO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RIb2xkZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIH1cblxuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lLWlucHV0XCIpLmZvY3VzKCk7XG59XG4iLCJjb25zdCBQcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAocHJvamVjdG5hbWUpID0+XG4gICAgcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RuYW1lKVswXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBpZiAoIWdldFByb2plY3RCeU5hbWUocHJvamVjdC5nZXRUaXRsZSgpKSkgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVCeU5hbWUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBuZWVkZWRQcm9qZWN0ID0gZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKG5lZWRlZFByb2plY3QpO1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdFRpdGxlID0gKHByb2plY3QsIHRpdGxlKSA9PiB7XG4gICAgaWYgKCFnZXRQcm9qZWN0QnlOYW1lKHRpdGxlKSkgcHJvamVjdC5zZXRUaXRsZSh0aXRsZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlQnlOYW1lLFxuICAgIGdldFByb2plY3RCeU5hbWUsXG4gICAgc2V0UHJvamVjdFRpdGxlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7XG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrVGFibGUsIHJlbmRlclRhYmxlRGF0YSB9IGZyb20gXCIuL3Rhc2tUYWJsZVwiO1xuaW1wb3J0IHJlbmRlclRhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtXCI7XG5cbmZ1bmN0aW9uIGNsZWFyTWFpblBhZ2UoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBjbGVhck1haW5QYWdlKCk7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkaW5nXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBwcm9qZWN0SGVhZGluZy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgY29uc3QgYWRkTmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZE5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImFkZC1uZXctdGFza1wiKTtcbiAgYWRkTmV3VGFzay50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG4gIGFkZE5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcbiAgcHJvamVjdEhlYWRpbmcuYXBwZW5kQ2hpbGQoYWRkTmV3VGFzayk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGluZyk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrVGFibGUoKSk7XG5cbiAgcmVuZGVyVGFibGVEYXRhKCk7XG59XG5cbmV4cG9ydCB7IGNsZWFyTWFpblBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl07XG5cbiAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlO1xuICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCB0YXNrRHVlRGF0ZSA9IGR1ZURhdGU7XG4gIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGFza1RpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHRhc2tEZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHRhc2tEdWVEYXRlO1xuICBjb25zdCBnZXROdW1iZXJlZFByaW9yaXR5ID0gKCkgPT4gdGFza1ByaW9yaXR5O1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXRpZXNbdGFza1ByaW9yaXR5XTtcbiAgY29uc3QgZ2V0SXNDaGVja2VkID0gKCkgPT4gaXNDaGVja2VkO1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKHZhbHVlKSA9PiB7XG4gICAgdGFza1RpdGxlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKHZhbHVlKSA9PiB7XG4gICAgdGFza0Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldER1ZURhdGUgPSAodmFsdWUpID0+IHtcbiAgICB0YXNrRHVlRGF0ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRQcmlvcml0eSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRhc2tQcmlvcml0eSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRJc0NoZWNrZWQgPSAodmFsdWUpID0+IHtcbiAgICBpc0NoZWNrZWQgPSAhIXZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXROdW1iZXJlZFByaW9yaXR5LFxuICAgIGdldElzQ2hlY2tlZCxcbiAgICBzZXRUaXRsZSxcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBzZXREdWVEYXRlLFxuICAgIHNldFByaW9yaXR5LFxuICAgIHNldElzQ2hlY2tlZCxcbiAgfTtcbn1cbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IHJlbmRlclRhYmxlRGF0YSB9IGZyb20gXCIuL3Rhc2tUYWJsZVwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IGdldEN1cnJlbnRQcm9qZWN0IGZyb20gXCIuL2dldEN1cnJlbnRQcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG4gIGlmIChvdmVybGF5KSBvdmVybGF5LnJlbW92ZSgpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgaWYgKGZvcm0pIGZvcm0ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib3ZlcmxheVwiKTtcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlRm9ybSk7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0odGFyZ2V0VGFza0xpc3QsIHRhcmdldFRhc2spIHtcbiAgaWYodGFyZ2V0VGFza0xpc3QudGFyZ2V0KSB7XG4gICAgdGFyZ2V0VGFza0xpc3QucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCB0YXNrRGF0ZSA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi50YXNrLWRhdGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5LWlucHV0XCIpLnZhbHVlO1xuXG4gIGlmICh0YXJnZXRUYXNrTGlzdCAmJiB0YXJnZXRUYXNrICYmICF0YXJnZXRUYXNrTGlzdC50YXJnZXQpIHtcbiAgICB0YXJnZXRUYXNrTGlzdC5zZXRUYXNrVGl0bGUodGFyZ2V0VGFzaywgdGFza1RpdGxlKTtcbiAgICB0YXJnZXRUYXNrLnNldERlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGFyZ2V0VGFzay5zZXREdWVEYXRlKHRhc2tEYXRlKTtcbiAgICB0YXJnZXRUYXNrLnNldFByaW9yaXR5KHRhc2tQcmlvcml0eSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFByb2plY3RcbiAgICAgIC5nZXRUYXNrTGlzdCgpXG4gICAgICAuYWRkVGFzayhUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KSk7XG4gIH1cblxuICByZW1vdmVGb3JtKCk7XG4gIHJlbmRlclRhYmxlRGF0YSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrRm9ybSh0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaykge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlLWlucHV0XCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRhdGVcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1ob2xkZXJcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICBwcmlvcml0eUhvbGRlci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eS1pbnB1dFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcblxuICBjb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eTEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgMCk7XG4gIHByaW9yaXR5MS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHkxKTtcbiAgY29uc3QgcHJpb3JpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcHJpb3JpdHkyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDEpO1xuICBwcmlvcml0eTIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5Mik7XG4gIGNvbnN0IHByaW9yaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByaW9yaXR5My5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAyKTtcbiAgcHJpb3JpdHkzLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHkzKTtcblxuICBwcmlvcml0eUhvbGRlci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUhvbGRlcik7XG5cbiAgaWYodGFyZ2V0VGFza0xpc3QgJiYgdGFyZ2V0VGFzayAmJiAhdGFyZ2V0VGFza0xpc3QudGFyZ2V0KSB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhcmdldFRhc2suZ2V0VGl0bGUoKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFyZ2V0VGFzay5nZXREZXNjcmlwdGlvbigpO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRhcmdldFRhc2suZ2V0RHVlRGF0ZSgpO1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0YXJnZXRUYXNrLmdldE51bWJlcmVkUHJpb3JpdHkoKTtcbiAgfVxuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5LWlucHV0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQWRkXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0uYmluZChmb3JtLCB0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaykpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlT3ZlcmxheSgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2tMaXN0KCkge1xuICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiB0YXNrTGlzdDtcblxuICBjb25zdCBnZXRUYXNrQnlOYW1lID0gKHRhc2tuYW1lKSA9PlxuICAgIHRhc2tMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrbmFtZSlbMF07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgaWYgKCFnZXRUYXNrQnlOYW1lKHRhc2suZ2V0VGl0bGUoKSkpIHRhc2tMaXN0LnB1c2godGFzayk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGFza1RpdGxlID0gKHRhc2ssIHRpdGxlKSA9PiB7XG4gICAgaWYgKCFnZXRUYXNrQnlOYW1lKHRpdGxlKSkgdGFzay5zZXRUaXRsZSh0aXRsZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQnlOYW1lID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgY29uc3QgbmVlZGVkVGFzayA9IGdldFRhc2tCeU5hbWUodGFza05hbWUpO1xuICAgIGNvbnN0IGluZGV4ID0gdGFza0xpc3QuaW5kZXhPZihuZWVkZWRUYXNrKTtcbiAgICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TGlzdCxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZUJ5TmFtZSxcbiAgICBnZXRUYXNrQnlOYW1lLFxuICAgIHNldFRhc2tUaXRsZSxcbiAgfTtcbn1cbiIsImltcG9ydCBkZWwgZnJvbSBcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdCBmcm9tIFwiLi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFByb2plY3QgZnJvbSBcIi4vZ2V0Q3VycmVudFByb2plY3RcIjtcbmltcG9ydCByZW5kZXJUYXNrRm9ybSBmcm9tIFwiLi90YXNrRm9ybVwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1jeWNsZVxuXG5mdW5jdGlvbiBjbGVhclRhYmxlKCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10YWJsZVwiKTtcbiAgd2hpbGUgKHRhYmxlLnJvd3MubGVuZ3RoID4gMSkge1xuICAgIHRhYmxlLmRlbGV0ZVJvdygxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIGN1cnJlbnRQcm9qZWN0XG4gICAgLmdldFRhc2tMaXN0KClcbiAgICAucmVtb3ZlQnlOYW1lKHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgcmVuZGVyVGFibGVEYXRhKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgY29uc3QgY3VycmVudFRhc2tMaXN0ID0gY3VycmVudFByb2plY3QuZ2V0VGFza0xpc3QoKTtcbiAgY29uc3QgY3VycmVudFRhc2sgPSBjdXJyZW50VGFza0xpc3QuZ2V0VGFza0J5TmFtZShcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxuICApO1xuICByZW5kZXJUYXNrRm9ybShjdXJyZW50VGFza0xpc3QsIGN1cnJlbnRUYXNrKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2soKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgY3VycmVudFByb2plY3RcbiAgICAuZ2V0VGFza0xpc3QoKVxuICAgIC5nZXRUYXNrQnlOYW1lKHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKVxuICAgIC5zZXRJc0NoZWNrZWQodGhpcy5jaGVja2VkKTtcbiAgcmVuZGVyVGFibGVEYXRhKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFibGVSb3codHlwZSwgdGFzaykge1xuICBjb25zdCBjZWxscyA9IFtcIklzQ2hlY2tlZFwiLCBcIlRpdGxlXCIsIFwiRGVzY3JpcHRpb25cIiwgXCJEdWVEYXRlXCIsIFwiUHJpb3JpdHlcIl07XG5cbiAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGlmICh0YXNrKSB7XG4gICAgdGFibGVSb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlLXJvd1wiKTtcbiAgICB0YWJsZVJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHt0YXNrLmdldFRpdGxlKCl9YCk7XG4gIH0gZWxzZSB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGUtaGVhZGluZ1wiKTtcblxuICBjZWxscy5mb3JFYWNoKChjZWxsVHlwZSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtjZWxsVHlwZX1gKTtcbiAgICBpZiAodHlwZSAhPT0gXCJ0aFwiKSB7XG4gICAgICBjb25zdCB0ZXh0RnVuY3Rpb24gPSBgZ2V0JHtjZWxsVHlwZX1gO1xuICAgICAgaWYgKGNlbGxUeXBlID09PSBcIklzQ2hlY2tlZFwiKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGNvbnN0IGlzVGFza0NoZWNrZWQgPSB0YXNrW3RleHRGdW5jdGlvbl0oKTtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGlzVGFza0NoZWNrZWQ7XG4gICAgICAgIGlmKGlzVGFza0NoZWNrZWQpIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNoZWNrKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdGFza1t0ZXh0RnVuY3Rpb25dKCk7XG4gICAgICAgIGlmIChjZWxsVHlwZSA9PT0gXCJQcmlvcml0eVwiKVxuICAgICAgICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQodGFzay5nZXRQcmlvcml0eSgpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbFR5cGU7XG4gICAgfVxuICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICB9KTtcblxuICBjb25zdCBkZWxDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZGVsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlXCIpO1xuICBpZiAodHlwZSA9PT0gXCJ0aFwiKSB7XG4gICAgZGVsQ2VsbC50ZXh0Q29udGVudCA9IFwiQ2hhbmdlXCI7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZGVsKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1zdmdcIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG4gICAgZGVsQ2VsbC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcblxuICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZWRpdCk7XG4gICAgZWRpdFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stZWRpdC1zdmdcIik7XG4gICAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgICBkZWxDZWxsLmFwcGVuZENoaWxkKGVkaXRUYXNrQnV0dG9uKTtcbiAgfVxuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChkZWxDZWxsKTtcblxuICByZXR1cm4gdGFibGVSb3c7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhYmxlRGF0YSgpIHtcbiAgY2xlYXJUYWJsZSgpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gIGN1cnJlbnRQcm9qZWN0XG4gICAgLmdldFRhc2tMaXN0KClcbiAgICAuZ2V0TGlzdCgpXG4gICAgLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGNyZWF0ZVRhYmxlUm93KFwidGRcIiwgdGFzaykpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrVGFibGUoKSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10YWJsZVwiKTtcbiAgdGFibGUuc2V0QXR0cmlidXRlKFwiY2VsbHNwYWNpbmdcIiwgXCIwXCIpO1xuXG4gIGNvbnN0IGNvbGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbGdyb3VwXCIpO1xuXG4gIGNvbnN0IGNvbDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpO1xuICBjb2wwLnNldEF0dHJpYnV0ZShcInNwYW5cIiwgXCIxXCIpO1xuICBjb2wwLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDUlXCIpO1xuICBjb2xncm91cC5hcHBlbmRDaGlsZChjb2wwKTtcblxuICBjb25zdCBjb2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKTtcbiAgY29sMS5zZXRBdHRyaWJ1dGUoXCJzcGFuXCIsIFwiMVwiKTtcbiAgY29sMS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyMCVcIik7XG4gIGNvbGdyb3VwLmFwcGVuZENoaWxkKGNvbDEpO1xuXG4gIGNvbnN0IGNvbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpO1xuICBjb2wyLnNldEF0dHJpYnV0ZShcInNwYW5cIiwgXCIxXCIpO1xuICBjb2wyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDM1JVwiKTtcbiAgY29sZ3JvdXAuYXBwZW5kQ2hpbGQoY29sMik7XG5cbiAgY29uc3QgY29sMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xcIik7XG4gIGNvbDMuc2V0QXR0cmlidXRlKFwic3BhblwiLCBcIjFcIik7XG4gIGNvbDMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjAlXCIpO1xuICBjb2xncm91cC5hcHBlbmRDaGlsZChjb2wzKTtcblxuICBjb25zdCBjb2w0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKTtcbiAgY29sNC5zZXRBdHRyaWJ1dGUoXCJzcGFuXCIsIFwiMVwiKTtcbiAgY29sNC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMCVcIik7XG4gIGNvbGdyb3VwLmFwcGVuZENoaWxkKGNvbDQpO1xuXG4gIGNvbnN0IGNvbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpO1xuICBjb2w1LnNldEF0dHJpYnV0ZShcInNwYW5cIiwgXCIxXCIpO1xuICBjb2w1LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDEwJVwiKTtcbiAgY29sZ3JvdXAuYXBwZW5kQ2hpbGQoY29sNSk7XG5cbiAgdGFibGUuYXBwZW5kQ2hpbGQoY29sZ3JvdXApO1xuICB0YWJsZS5hcHBlbmRDaGlsZChjcmVhdGVUYWJsZVJvdyhcInRoXCIpKTtcblxuICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCB7IHJlbmRlclRhYmxlRGF0YSwgY3JlYXRlVGFza1RhYmxlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0TGlzdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RDb250YWluZXJcIjsgLy8gRXh0cmEgbGluZSBmb3IgZGVidWdnaW5nXG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0UGFnZSB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFBhZ2VcIjsgLy8gRXh0cmEgbGluZSBmb3IgZGVidWdnaW5nXG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0TGlzdFwiOyAvLyBFeHRyYSBsaW5lIGZvciBkZWJ1Z2dpbmdcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlKCkpO1xuXG5yZW5kZXJQcm9qZWN0TGlzdCgpOyAvLyBFeHRyYSBsaW5lIGZvciBkZWJ1Z2dpbmdcbnJlbmRlclByb2plY3RQYWdlKFByb2plY3RMaXN0LmdldFByb2plY3RCeU5hbWUoJ0V4YW1wbGUnKSk7IC8vIEV4dHJhIGxpbmUgZm9yIGRlYnVnZ2luZyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==