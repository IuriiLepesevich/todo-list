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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::after,\n::before {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n#container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.menu {\n  background-color: rgb(223, 223, 223);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.add-button {\n  border: 3px solid black;\n  border-radius: 1rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-new-text {\n  margin: auto;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.line {\n  border: 2px solid red;\n}\n\n.project-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-container {\n  position: relative;\n  border: 3px solid black;\n  text-align: center;\n  padding: 10px;\n  border-radius: 2rem;\n  font-size: 2.3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-delete,\n.project-edit {\n  height: 90%;\n}\n\n.project-delete:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-edit:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-form {\n  border-radius: 1rem;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: stretch;\n}\n\n.project-name-input {\n  padding: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2em;\n}\n\n.project-button-holder {\n  display: flex;\n  gap: 10px;\n}\n\n.project-button-holder > input {\n  flex: 1;\n  font-size: 1.3rem;\n  border: none;\n  outline: none;\n  padding: 5px;\n}\n\n.project-button-apply {\n  background-color: rgb(172, 255, 47);\n}\n\n.project-button-cancel {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\n#main {\n  padding: 100px 15%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 50px;\n}\n\n.project-heading {\n  font-size: 4rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.add-new-task {\n  padding: 10px 20px;\n  font-size: 1.5rem;\n}\n\n.task-table {\n  border-spacing: 0px 20px;\n}\n\n.task-table :is(td, th) {\n  text-align: start;\n  padding: 5px 10px;\n}\n\nth {\n  border-bottom: 2px solid black;\n}\n\n:is(td, th):not(:first-child) {\n  border-left: 1px solid black;\n}\n\n.table-heading {\n  font-size: 1.5rem;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.task-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  z-index: 10;\n  background-color: white;\n  width: 850px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.task-form > input {\n  margin: auto;\n  width: 60%;\n  height: 40%;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.priority-holder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.priority-holder > select {\n  width: 40%;\n  height: 40%;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.task-submit {\n  grid-column: 1 / -1;\n}\n\n.table-row.low > td {\n  border-top: 3px solid green;\n  border-bottom: 3px solid green;\n}\n\n.table-row.medium > td {\n  border-top: 3px solid orange;\n  border-bottom: 3px solid orange;\n}\n\n.table-row.high > td {\n  border-top: 3px solid red;\n  border-bottom: 3px solid red;\n}\n\n.table-row.low > td:first-child {\n  border-left: 3px solid green;\n}\n\n.table-row.medium > td:first-child {\n  border-left: 3px solid orange;\n}\n\n.table-row.high > td:first-child {\n  border-left: 3px solid red;\n}\n\n.table-row.low > td:last-child {\n  border-right: 3px solid green;\n}\n\n.table-row.medium > td:last-child {\n  border-right: 3px solid orange;\n}\n\n.table-row.high > td:last-child {\n  border-right: 3px solid red;\n}\n\ntd {\n  font-size: 1.2rem;\n}\n\ntd:not(.DueDate) {\n  font-size: 1.5rem;\n}\n\n.task-table td.change {\n  padding: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.change > * {\n  display: inline-block;\n  height: 50px;\n}\n\n.task-delete-svg:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-edit-svg:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-table input[type=\"checkbox\"] {\n  margin: auto;\n  display: flex;\n  transform: scale(2.5);\n}\n\n.checked {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,QAAQ;AACV;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":["*,\n::after,\n::before {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n#container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.menu {\n  background-color: rgb(223, 223, 223);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.add-button {\n  border: 3px solid black;\n  border-radius: 1rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-new-text {\n  margin: auto;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.line {\n  border: 2px solid red;\n}\n\n.project-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-container {\n  position: relative;\n  border: 3px solid black;\n  text-align: center;\n  padding: 10px;\n  border-radius: 2rem;\n  font-size: 2.3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 5px;\n}\n\n.project-delete,\n.project-edit {\n  height: 90%;\n}\n\n.project-delete:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-edit:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-form {\n  border-radius: 1rem;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: stretch;\n}\n\n.project-name-input {\n  padding: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2em;\n}\n\n.project-button-holder {\n  display: flex;\n  gap: 10px;\n}\n\n.project-button-holder > input {\n  flex: 1;\n  font-size: 1.3rem;\n  border: none;\n  outline: none;\n  padding: 5px;\n}\n\n.project-button-apply {\n  background-color: rgb(172, 255, 47);\n}\n\n.project-button-cancel {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\n#main {\n  padding: 100px 15%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 50px;\n}\n\n.project-heading {\n  font-size: 4rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.add-new-task {\n  padding: 10px 20px;\n  font-size: 1.5rem;\n}\n\n.task-table {\n  border-spacing: 0px 20px;\n}\n\n.task-table :is(td, th) {\n  text-align: start;\n  padding: 5px 10px;\n}\n\nth {\n  border-bottom: 2px solid black;\n}\n\n:is(td, th):not(:first-child) {\n  border-left: 1px solid black;\n}\n\n.table-heading {\n  font-size: 1.5rem;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.task-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  z-index: 10;\n  background-color: white;\n  width: 850px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.task-form > input {\n  margin: auto;\n  width: 60%;\n  height: 40%;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.priority-holder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.priority-holder > select {\n  width: 40%;\n  height: 40%;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.task-submit {\n  grid-column: 1 / -1;\n}\n\n.table-row.low > td {\n  border-top: 3px solid green;\n  border-bottom: 3px solid green;\n}\n\n.table-row.medium > td {\n  border-top: 3px solid orange;\n  border-bottom: 3px solid orange;\n}\n\n.table-row.high > td {\n  border-top: 3px solid red;\n  border-bottom: 3px solid red;\n}\n\n.table-row.low > td:first-child {\n  border-left: 3px solid green;\n}\n\n.table-row.medium > td:first-child {\n  border-left: 3px solid orange;\n}\n\n.table-row.high > td:first-child {\n  border-left: 3px solid red;\n}\n\n.table-row.low > td:last-child {\n  border-right: 3px solid green;\n}\n\n.table-row.medium > td:last-child {\n  border-right: 3px solid orange;\n}\n\n.table-row.high > td:last-child {\n  border-right: 3px solid red;\n}\n\ntd {\n  font-size: 1.2rem;\n}\n\ntd:not(.DueDate) {\n  font-size: 1.5rem;\n}\n\n.task-table td.change {\n  padding: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.change > * {\n  display: inline-block;\n  height: 50px;\n}\n\n.task-delete-svg:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-edit-svg:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-table input[type=\"checkbox\"] {\n  margin: auto;\n  display: flex;\n  transform: scale(2.5);\n}\n\n.checked {\n  background-color: rgba(128, 128, 128, 0.5);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectListLocalStorage": () => (/* binding */ addProjectListLocalStorage),
/* harmony export */   "fillProjectListFromLocalStorage": () => (/* binding */ fillProjectListFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




function addProjectListLocalStorage() {
  const projectListCopy = [];

  _projectList__WEBPACK_IMPORTED_MODULE_0__["default"].getList().forEach((project) => {
    const copyProject = {
      title: project.getTitle(),
      taskList: [],
    };
    project
      .getTaskList()
      .getList()
      .forEach((task) => {
        const copyTask = {
          title: task.getTitle(),
          description: task.getDescription(),
          dueDate: task.getDueDate(),
          priority: task.getNumberedPriority(),
          isChecked: task.getIsChecked(),
        };
        copyProject.taskList.push(copyTask);
      });
    projectListCopy.push(copyProject);
  });

  localStorage.setItem(
    `projectList`,
    JSON.stringify({
      list: projectListCopy,
    })
  );
}

function fillProjectListFromLocalStorage() {
  const savedProjectList = localStorage.getItem("projectList");
  if (!savedProjectList) return;
  JSON.parse(savedProjectList).list.forEach((project) => {
    const tempProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(project.title);
    project.taskList.forEach((task) => {
      const tempTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])(
        task.title,
        task.description,
        task.dueDate,
        task.priority
      );
      tempTask.setIsChecked(task.isChecked);
      tempProject.getTaskList().addTask(tempTask);
    });
    _projectList__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(tempProject);
  });
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");




 // eslint-disable-line import/no-cycle


function deleteProject(e) {
  e.stopPropagation();
  const projectName = this.parentElement.textContent;
  _projectList__WEBPACK_IMPORTED_MODULE_2__["default"].removeByName(projectName);
  renderProjectList(); // eslint-disable-line no-use-before-define
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.addProjectListLocalStorage)();
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
  editButton.addEventListener("click", (evt) =>
    (0,_projectForm__WEBPACK_IMPORTED_MODULE_4__["default"])(evt, currentProject)
  );

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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");


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
  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName);
  _projectList__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(newProject);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.addProjectListLocalStorage)();
  removeForm();
  (0,_projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function editProject(targetedProject) {
  const isCurrentProject = (0,_getCurrentProject__WEBPACK_IMPORTED_MODULE_3__["default"])() === targetedProject;
  const projectName = this.querySelector(".project-name-input").value;
  _projectList__WEBPACK_IMPORTED_MODULE_1__["default"].setProjectTitle(targetedProject, projectName);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.addProjectListLocalStorage)();
  removeForm();
  (0,_projectContainer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  if (isCurrentProject) {
    (0,_projectPage__WEBPACK_IMPORTED_MODULE_4__.renderProjectPage)(targetedProject);
  }
}

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
    isChecked = value;
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");

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
  if (targetTaskList.target) {
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
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.addProjectListLocalStorage)();
  } else {
    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskTitle, taskDescription, taskDate, taskPriority);
    currentProject.getTaskList().addTask(newTask);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.addProjectListLocalStorage)();
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

  if (targetTaskList && targetTask && !targetTaskList.target) {
    titleInput.value = targetTask.getTitle();
    descriptionInput.value = targetTask.getDescription();
    dateInput.value = targetTask.getDueDate();
    priorityInput.value = targetTask.getNumberedPriority();
  }

  const submitButton = document.createElement("input");
  submitButton.classList.add("task-submit");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Add");
  form.appendChild(submitButton);

  form.addEventListener(
    "submit",
    submitForm.bind(form, targetTaskList, targetTask)
  );

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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");



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
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.addProjectListLocalStorage)();
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

  (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.addProjectListLocalStorage)();
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
        if (isTaskChecked) tableRow.classList.add("checked");
        checkbox.addEventListener("click", toggleCheck);
        cell.appendChild(checkbox);
      } else {
        cell.textContent = task[textFunction]();
        if (cellType === "Priority") {
          tableRow.classList.add(task.getPriority().toLowerCase());
        }
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
    const editTaskButton = document.createElement("img");
    editTaskButton.setAttribute("src", _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__);
    editTaskButton.classList.add("task-edit-svg");
    editTaskButton.addEventListener("click", editTask);
    delCell.appendChild(editTaskButton);

    const deleteTaskButton = document.createElement("img");
    deleteTaskButton.setAttribute("src", _images_delete_svg__WEBPACK_IMPORTED_MODULE_0__);
    deleteTaskButton.classList.add("task-delete-svg");
    deleteTaskButton.addEventListener("click", removeTask);
    delCell.appendChild(deleteTaskButton);
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
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _modules_projectContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projectContainer */ "./src/modules/projectContainer.js");





const body = document.querySelector("body");
body.appendChild((0,_modules_page__WEBPACK_IMPORTED_MODULE_1__["default"])());

(0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.fillProjectListFromLocalStorage)();
(0,_modules_projectContainer__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0VBQWtFLDJCQUEyQixpQkFBaUIsZ0JBQWdCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLHFDQUFxQyxHQUFHLFdBQVcseUNBQXlDLGtCQUFrQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxpQkFBaUIsNEJBQTRCLHdCQUF3QixzQkFBc0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxtQkFBbUIsaUJBQWlCLG9CQUFvQixzQkFBc0IsR0FBRyxXQUFXLDBCQUEwQixHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyx3QkFBd0IsdUJBQXVCLDRCQUE0Qix1QkFBdUIsa0JBQWtCLHdCQUF3QixzQkFBc0Isa0JBQWtCLGtDQUFrQyx3QkFBd0IsYUFBYSxHQUFHLHFDQUFxQyxnQkFBZ0IsR0FBRywyQkFBMkIsMkNBQTJDLHdCQUF3QixHQUFHLHlCQUF5Qiw2Q0FBNkMsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixrQkFBa0Isa0JBQWtCLDJCQUEyQixhQUFhLHlCQUF5QixHQUFHLHlCQUF5QixpQkFBaUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsR0FBRyw0QkFBNEIsa0JBQWtCLGNBQWMsR0FBRyxvQ0FBb0MsWUFBWSxzQkFBc0IsaUJBQWlCLGtCQUFrQixpQkFBaUIsR0FBRywyQkFBMkIsd0NBQXdDLEdBQUcsNEJBQTRCLDJDQUEyQyxHQUFHLFdBQVcsdUJBQXVCLGtCQUFrQiwyQkFBMkIseUJBQXlCLGNBQWMsR0FBRyxzQkFBc0Isb0JBQW9CLGtCQUFrQixrQ0FBa0Msd0JBQXdCLEdBQUcsbUJBQW1CLHVCQUF1QixzQkFBc0IsR0FBRyxpQkFBaUIsNkJBQTZCLEdBQUcsNkJBQTZCLHNCQUFzQixzQkFBc0IsR0FBRyxRQUFRLG1DQUFtQyxHQUFHLG1DQUFtQyxpQ0FBaUMsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0IsV0FBVyxZQUFZLGFBQWEsY0FBYyx5Q0FBeUMsR0FBRyxnQkFBZ0Isb0JBQW9CLGFBQWEsY0FBYyxxQ0FBcUMsNEJBQTRCLGdCQUFnQiw0QkFBNEIsaUJBQWlCLGtCQUFrQixrQkFBa0IsMENBQTBDLHVDQUF1QyxHQUFHLHdCQUF3QixpQkFBaUIsZUFBZSxnQkFBZ0Isc0JBQXNCLHNCQUFzQixHQUFHLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixzQkFBc0Isc0JBQXNCLEdBQUcsK0JBQStCLGVBQWUsZ0JBQWdCLHNCQUFzQixzQkFBc0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLGdDQUFnQyxtQ0FBbUMsR0FBRyw0QkFBNEIsaUNBQWlDLG9DQUFvQyxHQUFHLDBCQUEwQiw4QkFBOEIsaUNBQWlDLEdBQUcscUNBQXFDLGlDQUFpQyxHQUFHLHdDQUF3QyxrQ0FBa0MsR0FBRyxzQ0FBc0MsK0JBQStCLEdBQUcsb0NBQW9DLGtDQUFrQyxHQUFHLHVDQUF1QyxtQ0FBbUMsR0FBRyxxQ0FBcUMsZ0NBQWdDLEdBQUcsUUFBUSxzQkFBc0IsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsMkJBQTJCLGlCQUFpQixrQkFBa0Isa0NBQWtDLHdCQUF3QixHQUFHLGlCQUFpQiwwQkFBMEIsaUJBQWlCLEdBQUcsNEJBQTRCLDJDQUEyQywwQkFBMEIsR0FBRywwQkFBMEIsNkNBQTZDLDBCQUEwQixHQUFHLDBDQUEwQyxpQkFBaUIsa0JBQWtCLDBCQUEwQixHQUFHLGNBQWMsK0NBQStDLEdBQUcsU0FBUyx3RkFBd0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxP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Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxSjVDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDYTtBQUNpQztBQUNkOztBQUUzRDtBQUNBLGlCQUFpQix5REFBVTs7QUFFM0Isc0ZBQStCO0FBQy9CLHFFQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2FkZFByb2plY3RCdXR0b24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvZ2V0Q3VycmVudFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3Byb2plY3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrVGFibGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10ZXh0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGluZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wcm9qZWN0LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLFxcbi5wcm9qZWN0LWVkaXQge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWVkaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWhvbGRlciA+IGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1hcHBseSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyNTUsIDQ3KTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43KTtcXG59XFxuXFxuI21haW4ge1xcbiAgcGFkZGluZzogMTAwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay10YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLXRhYmxlIDppcyh0ZCwgdGgpIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbnRoIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuOmlzKHRkLCB0aCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhYmxlLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGlucHV0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1ob2xkZXIgPiBzZWxlY3Qge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stc3VibWl0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbi50YWJsZS1yb3cubG93ID4gdGQge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGdyZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkIHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBvcmFuZ2U7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZCB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxudGQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbnRkOm5vdCguRHVlRGF0ZSkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLXRhYmxlIHRkLmNoYW5nZSB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hhbmdlID4gKiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1zdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi50YXNrLWVkaXQtc3ZnOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi50YXNrLXRhYmxlIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10ZXh0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGluZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wcm9qZWN0LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLFxcbi5wcm9qZWN0LWVkaXQge1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWVkaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWhvbGRlciA+IGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1hcHBseSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyNTUsIDQ3KTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43KTtcXG59XFxuXFxuI21haW4ge1xcbiAgcGFkZGluZzogMTAwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay10YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLXRhYmxlIDppcyh0ZCwgdGgpIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbnRoIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuOmlzKHRkLCB0aCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhYmxlLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGlucHV0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvcml0eS1ob2xkZXIgPiBzZWxlY3Qge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stc3VibWl0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbi50YWJsZS1yb3cubG93ID4gdGQge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGdyZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkIHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBvcmFuZ2U7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZCB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxudGQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbnRkOm5vdCguRHVlRGF0ZSkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLXRhYmxlIHRkLmNoYW5nZSB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hhbmdlID4gKiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1zdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi50YXNrLWVkaXQtc3ZnOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi50YXNrLXRhYmxlIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZCBmcm9tIFwiLi4vaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCBhcHBlbmRQcm9qZWN0Rm9ybSBmcm9tIFwiLi9wcm9qZWN0Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24oKSB7XG4gIGNvbnN0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZE5ldy5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ1dHRvblwiKTtcbiAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHBlbmRQcm9qZWN0Rm9ybSk7XG5cbiAgY29uc3QgYWRkU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWRkU3ZnLmNsYXNzTGlzdC5hZGQoXCJzdmctaG9sZGVyXCIpO1xuICBhZGRTdmcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGFkZCk7XG4gIGFkZE5ldy5hcHBlbmRDaGlsZChhZGRTdmcpO1xuXG4gIGNvbnN0IGFkZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWRkVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWRkLW5ldy10ZXh0XCIpO1xuICBhZGRUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3XCI7XG4gIGFkZE5ldy5hcHBlbmRDaGlsZChhZGRUZXh0KTtcblxuICByZXR1cm4gYWRkTmV3O1xufVxuIiwiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IFByb2plY3RMaXN0LmdldFByb2plY3RCeU5hbWUoY3VycmVudFByb2plY3ROYW1lKTtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xufVxuIiwiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0TG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdENvcHkgPSBbXTtcblxuICBQcm9qZWN0TGlzdC5nZXRMaXN0KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGNvcHlQcm9qZWN0ID0ge1xuICAgICAgdGl0bGU6IHByb2plY3QuZ2V0VGl0bGUoKSxcbiAgICAgIHRhc2tMaXN0OiBbXSxcbiAgICB9O1xuICAgIHByb2plY3RcbiAgICAgIC5nZXRUYXNrTGlzdCgpXG4gICAgICAuZ2V0TGlzdCgpXG4gICAgICAuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBjb3B5VGFzayA9IHtcbiAgICAgICAgICB0aXRsZTogdGFzay5nZXRUaXRsZSgpLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmdldERlc2NyaXB0aW9uKCksXG4gICAgICAgICAgZHVlRGF0ZTogdGFzay5nZXREdWVEYXRlKCksXG4gICAgICAgICAgcHJpb3JpdHk6IHRhc2suZ2V0TnVtYmVyZWRQcmlvcml0eSgpLFxuICAgICAgICAgIGlzQ2hlY2tlZDogdGFzay5nZXRJc0NoZWNrZWQoKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29weVByb2plY3QudGFza0xpc3QucHVzaChjb3B5VGFzayk7XG4gICAgICB9KTtcbiAgICBwcm9qZWN0TGlzdENvcHkucHVzaChjb3B5UHJvamVjdCk7XG4gIH0pO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIGBwcm9qZWN0TGlzdGAsXG4gICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbGlzdDogcHJvamVjdExpc3RDb3B5LFxuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGZpbGxQcm9qZWN0TGlzdEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHNhdmVkUHJvamVjdExpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpO1xuICBpZiAoIXNhdmVkUHJvamVjdExpc3QpIHJldHVybjtcbiAgSlNPTi5wYXJzZShzYXZlZFByb2plY3RMaXN0KS5saXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0ZW1wUHJvamVjdCA9IFByb2plY3QocHJvamVjdC50aXRsZSk7XG4gICAgcHJvamVjdC50YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wVGFzayA9IFRhc2soXG4gICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgdGFzay5wcmlvcml0eVxuICAgICAgKTtcbiAgICAgIHRlbXBUYXNrLnNldElzQ2hlY2tlZCh0YXNrLmlzQ2hlY2tlZCk7XG4gICAgICB0ZW1wUHJvamVjdC5nZXRUYXNrTGlzdCgpLmFkZFRhc2sodGVtcFRhc2spO1xuICAgIH0pO1xuICAgIFByb2plY3RMaXN0LmFkZFByb2plY3QodGVtcFByb2plY3QpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UsIGZpbGxQcm9qZWN0TGlzdEZyb21Mb2NhbFN0b3JhZ2UgfTtcbiIsImltcG9ydCBjcmVhdGVBZGRCdXR0b24gZnJvbSBcIi4vYWRkUHJvamVjdEJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVBZGRCdXR0b24oKSk7XG5cbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpbmUuY2xhc3NMaXN0LmFkZChcImxpbmVcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobGluZSk7XG5cbiAgY29uc3QgcHJvamVjdEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RIb2xkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaG9sZGVyXCIpO1xuICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RIb2xkZXIpO1xuXG4gIHJldHVybiBtZW51O1xufVxuIiwiaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi90YXNrTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlKSB7XG4gIGxldCBwcm9qZWN0VGl0bGUgPSB0aXRsZTtcbiAgY29uc3QgdGFza0xpc3QgPSBUYXNrTGlzdCgpO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gcHJvamVjdFRpdGxlO1xuXG4gIGNvbnN0IGdldFRhc2tMaXN0ID0gKCkgPT4gdGFza0xpc3Q7XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAodmFsdWUpID0+IHtcbiAgICBwcm9qZWN0VGl0bGUgPSB2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldFRhc2tMaXN0LFxuICAgIHNldFRpdGxlLFxuICB9O1xufVxuIiwiaW1wb3J0IGRlbCBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuLi9pbWFnZXMvZWRpdC5zdmdcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgY2xlYXJNYWluUGFnZSwgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xuaW1wb3J0IGFwcGVuZFByb2plY3RGb3JtIGZyb20gXCIuL3Byb2plY3RGb3JtXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBhZGRQcm9qZWN0TGlzdExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIFByb2plY3RMaXN0LnJlbW92ZUJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gIHJlbmRlclByb2plY3RMaXN0KCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgYWRkUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgaWYgKHByb2plY3RIZWFkaW5nKSB7XG4gICAgaWYgKHByb2plY3ROYW1lID09PSBwcm9qZWN0SGVhZGluZy50ZXh0Q29udGVudCkge1xuICAgICAgY2xlYXJNYWluUGFnZSgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvckRlbGV0ZUJ1dHRvbihjb250YWluZXIpIHtcbiAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGVsZXRlXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckVkaXRCdXR0b24oY29udGFpbmVyKSB7XG4gIHJldHVybiBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWVkaXRcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlbGV0ZUJ1dHRvbihlKSB7XG4gIGNvbnN0IHRhcmdldGVkQ29udGFpbmVyID0gZS50YXJnZXQ7XG4gIGlmIChjaGVja0ZvckRlbGV0ZUJ1dHRvbih0YXJnZXRlZENvbnRhaW5lcikpIHJldHVybjtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGRlbCk7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZWxldGVcIik7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdCk7XG5cbiAgdGFyZ2V0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRWRpdEJ1dHRvbihlKSB7XG4gIGNvbnN0IHRhcmdldGVkQ29udGFpbmVyID0gZS50YXJnZXQ7XG4gIGlmIChjaGVja0ZvckVkaXRCdXR0b24odGFyZ2V0ZWRDb250YWluZXIpKSByZXR1cm47XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGVkaXQpO1xuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVkaXRcIik7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gUHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5TmFtZShlLnRhcmdldC5pZCk7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+XG4gICAgYXBwZW5kUHJvamVjdEZvcm0oZXZ0LCBjdXJyZW50UHJvamVjdClcbiAgKTtcblxuICB0YXJnZXRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGVsZXRlQnV0dG9uKGUpIHtcbiAgY29uc3QgdGFyZ2V0ZWRDb250YWluZXIgPSBlLnRhcmdldDtcbiAgaWYgKCFjaGVja0ZvckRlbGV0ZUJ1dHRvbih0YXJnZXRlZENvbnRhaW5lcikpIHJldHVybjtcblxuICB0YXJnZXRlZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGVsZXRlXCIpLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFZGl0QnV0dG9uKGUpIHtcbiAgY29uc3QgdGFyZ2V0ZWRDb250YWluZXIgPSBlLnRhcmdldDtcbiAgaWYgKCFjaGVja0ZvckVkaXRCdXR0b24odGFyZ2V0ZWRDb250YWluZXIpKSByZXR1cm47XG5cbiAgdGFyZ2V0ZWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWVkaXRcIikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lKTtcbiAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgcmVuZGVyUHJvamVjdFBhZ2UuYmluZCh0aGlzLCBQcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKSlcbiAgKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgcmVuZGVyRWRpdEJ1dHRvbik7XG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcmVtb3ZlRWRpdEJ1dHRvbik7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHJlbmRlckRlbGV0ZUJ1dHRvbik7XG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcmVtb3ZlRGVsZXRlQnV0dG9uKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaG9sZGVyXCIpO1xuXG4gIHdoaWxlIChwcm9qZWN0SG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0SG9sZGVyLnJlbW92ZUNoaWxkKHByb2plY3RIb2xkZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBQcm9qZWN0TGlzdC5nZXRMaXN0KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RIb2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0LmdldFRpdGxlKCkpKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0Q29udGFpbmVyXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgZ2V0Q3VycmVudFByb2plY3QgZnJvbSBcIi4vZ2V0Q3VycmVudFByb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcbmltcG9ydCB7IGFkZFByb2plY3RMaXN0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBmb3JtLnJlbW92ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZS1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUpO1xuICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBhZGRQcm9qZWN0TGlzdExvY2FsU3RvcmFnZSgpO1xuICByZW1vdmVGb3JtKCk7XG4gIHJlbmRlclByb2plY3RMaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHRhcmdldGVkUHJvamVjdCkge1xuICBjb25zdCBpc0N1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKSA9PT0gdGFyZ2V0ZWRQcm9qZWN0O1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWUtaW5wdXRcIikudmFsdWU7XG4gIFByb2plY3RMaXN0LnNldFByb2plY3RUaXRsZSh0YXJnZXRlZFByb2plY3QsIHByb2plY3ROYW1lKTtcbiAgYWRkUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UoKTtcbiAgcmVtb3ZlRm9ybSgpO1xuICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuICBpZiAoaXNDdXJyZW50UHJvamVjdCkge1xuICAgIHJlbmRlclByb2plY3RQYWdlKHRhcmdldGVkUHJvamVjdCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdEZvcm0oZXZ0LCB0YXJnZXRlZFByb2plY3QpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpKSByZXR1cm47XG5cbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaG9sZGVyXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjhcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IG5hbWU6XCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvbi1ob2xkZXJcIik7XG5cbiAgY29uc3QgYnV0dG9uQXBwbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGJ1dHRvbkFwcGx5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbkFwcGx5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQXBwbHlcIik7XG4gIGJ1dHRvbkFwcGx5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvbi1hcHBseVwiKTtcbiAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkFwcGx5KTtcblxuICBjb25zdCBidXR0b25DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGJ1dHRvbkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidXR0b25DYW5jZWwuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDYW5jZWxcIik7XG4gIGJ1dHRvbkNhbmNlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b24tY2FuY2VsXCIpO1xuICBidXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pO1xuICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcblxuICBpZiAodGFyZ2V0ZWRQcm9qZWN0KSB7XG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IHRhcmdldGVkUHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0UHJvamVjdC5iaW5kKGZvcm0sIHRhcmdldGVkUHJvamVjdCkpO1xuICB9IGVsc2Uge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhZGRQcm9qZWN0KTtcbiAgfVxuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uSG9sZGVyKTtcblxuICBpZiAodGFyZ2V0ZWRQcm9qZWN0KSB7XG4gICAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IHByb2plY3RIb2xkZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHt0YXJnZXRlZFByb2plY3QuZ2V0VGl0bGUoKX1gXG4gICAgKTtcbiAgICBjdXJyZW50Q29udGFpbmVyLmFmdGVyKGZvcm0pO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RIb2xkZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIH1cblxuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lLWlucHV0XCIpLmZvY3VzKCk7XG59XG4iLCJjb25zdCBQcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAocHJvamVjdG5hbWUpID0+XG4gICAgcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RuYW1lKVswXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBpZiAoIWdldFByb2plY3RCeU5hbWUocHJvamVjdC5nZXRUaXRsZSgpKSkgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVCeU5hbWUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBuZWVkZWRQcm9qZWN0ID0gZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKG5lZWRlZFByb2plY3QpO1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdFRpdGxlID0gKHByb2plY3QsIHRpdGxlKSA9PiB7XG4gICAgaWYgKCFnZXRQcm9qZWN0QnlOYW1lKHRpdGxlKSkgcHJvamVjdC5zZXRUaXRsZSh0aXRsZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlQnlOYW1lLFxuICAgIGdldFByb2plY3RCeU5hbWUsXG4gICAgc2V0UHJvamVjdFRpdGxlLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7XG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrVGFibGUsIHJlbmRlclRhYmxlRGF0YSB9IGZyb20gXCIuL3Rhc2tUYWJsZVwiO1xuaW1wb3J0IHJlbmRlclRhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtXCI7XG5cbmZ1bmN0aW9uIGNsZWFyTWFpblBhZ2UoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICBjbGVhck1haW5QYWdlKCk7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkaW5nXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICBwcm9qZWN0SGVhZGluZy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgY29uc3QgYWRkTmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZE5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImFkZC1uZXctdGFza1wiKTtcbiAgYWRkTmV3VGFzay50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyB0YXNrXCI7XG4gIGFkZE5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclRhc2tGb3JtKTtcbiAgcHJvamVjdEhlYWRpbmcuYXBwZW5kQ2hpbGQoYWRkTmV3VGFzayk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGluZyk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrVGFibGUoKSk7XG5cbiAgcmVuZGVyVGFibGVEYXRhKCk7XG59XG5cbmV4cG9ydCB7IGNsZWFyTWFpblBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgY29uc3QgcHJpb3JpdGllcyA9IFtcIkxvd1wiLCBcIk1lZGl1bVwiLCBcIkhpZ2hcIl07XG5cbiAgbGV0IHRhc2tUaXRsZSA9IHRpdGxlO1xuICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCB0YXNrRHVlRGF0ZSA9IGR1ZURhdGU7XG4gIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGFza1RpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHRhc2tEZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHRhc2tEdWVEYXRlO1xuICBjb25zdCBnZXROdW1iZXJlZFByaW9yaXR5ID0gKCkgPT4gdGFza1ByaW9yaXR5O1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXRpZXNbdGFza1ByaW9yaXR5XTtcbiAgY29uc3QgZ2V0SXNDaGVja2VkID0gKCkgPT4gaXNDaGVja2VkO1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKHZhbHVlKSA9PiB7XG4gICAgdGFza1RpdGxlID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKHZhbHVlKSA9PiB7XG4gICAgdGFza0Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH07XG4gIGNvbnN0IHNldER1ZURhdGUgPSAodmFsdWUpID0+IHtcbiAgICB0YXNrRHVlRGF0ZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRQcmlvcml0eSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRhc2tQcmlvcml0eSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXRJc0NoZWNrZWQgPSAodmFsdWUpID0+IHtcbiAgICBpc0NoZWNrZWQgPSB2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0TnVtYmVyZWRQcmlvcml0eSxcbiAgICBnZXRJc0NoZWNrZWQsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RHVlRGF0ZSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBzZXRJc0NoZWNrZWQsXG4gIH07XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyByZW5kZXJUYWJsZURhdGEgfSBmcm9tIFwiLi90YXNrVGFibGVcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBnZXRDdXJyZW50UHJvamVjdCBmcm9tIFwiLi9nZXRDdXJyZW50UHJvamVjdFwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgaWYgKG92ZXJsYXkpIG92ZXJsYXkucmVtb3ZlKCk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICBpZiAoZm9ybSkgZm9ybS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvdmVybGF5XCIpO1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVGb3JtKTtcblxuICByZXR1cm4gb3ZlcmxheTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybSh0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaykge1xuICBpZiAodGFyZ2V0VGFza0xpc3QudGFyZ2V0KSB7XG4gICAgdGFyZ2V0VGFza0xpc3QucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCB0YXNrRGF0ZSA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi50YXNrLWRhdGUtaW5wdXRcIikudmFsdWU7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5LWlucHV0XCIpLnZhbHVlO1xuXG4gIGlmICh0YXJnZXRUYXNrTGlzdCAmJiB0YXJnZXRUYXNrICYmICF0YXJnZXRUYXNrTGlzdC50YXJnZXQpIHtcbiAgICB0YXJnZXRUYXNrTGlzdC5zZXRUYXNrVGl0bGUodGFyZ2V0VGFzaywgdGFza1RpdGxlKTtcbiAgICB0YXJnZXRUYXNrLnNldERlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgdGFyZ2V0VGFzay5zZXREdWVEYXRlKHRhc2tEYXRlKTtcbiAgICB0YXJnZXRUYXNrLnNldFByaW9yaXR5KHRhc2tQcmlvcml0eSk7XG4gICAgYWRkUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSk7XG4gICAgY3VycmVudFByb2plY3QuZ2V0VGFza0xpc3QoKS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIGFkZFByb2plY3RMaXN0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICByZW1vdmVGb3JtKCk7XG4gIHJlbmRlclRhYmxlRGF0YSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUYXNrRm9ybSh0YXJnZXRUYXNrTGlzdCwgdGFyZ2V0VGFzaykge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGUtaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlLWlucHV0XCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRhdGVcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICBjb25zdCBwcmlvcml0eUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1ob2xkZXJcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICBwcmlvcml0eUhvbGRlci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eS1pbnB1dFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcblxuICBjb25zdCBwcmlvcml0eTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eTEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgMCk7XG4gIHByaW9yaXR5MS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHkxKTtcbiAgY29uc3QgcHJpb3JpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcHJpb3JpdHkyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDEpO1xuICBwcmlvcml0eTIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5Mik7XG4gIGNvbnN0IHByaW9yaXR5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByaW9yaXR5My5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAyKTtcbiAgcHJpb3JpdHkzLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHkzKTtcblxuICBwcmlvcml0eUhvbGRlci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUhvbGRlcik7XG5cbiAgaWYgKHRhcmdldFRhc2tMaXN0ICYmIHRhcmdldFRhc2sgJiYgIXRhcmdldFRhc2tMaXN0LnRhcmdldCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXJnZXRUYXNrLmdldFRpdGxlKCk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhcmdldFRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSB0YXJnZXRUYXNrLmdldER1ZURhdGUoKTtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFyZ2V0VGFzay5nZXROdW1iZXJlZFByaW9yaXR5KCk7XG4gIH1cblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1zdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJBZGRcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJzdWJtaXRcIixcbiAgICBzdWJtaXRGb3JtLmJpbmQoZm9ybSwgdGFyZ2V0VGFza0xpc3QsIHRhcmdldFRhc2spXG4gICk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVPdmVybGF5KCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFza0xpc3QoKSB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gW107XG5cbiAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IHRhc2tMaXN0O1xuXG4gIGNvbnN0IGdldFRhc2tCeU5hbWUgPSAodGFza25hbWUpID0+XG4gICAgdGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tuYW1lKVswXTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICBpZiAoIWdldFRhc2tCeU5hbWUodGFzay5nZXRUaXRsZSgpKSkgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgfTtcblxuICBjb25zdCBzZXRUYXNrVGl0bGUgPSAodGFzaywgdGl0bGUpID0+IHtcbiAgICBpZiAoIWdldFRhc2tCeU5hbWUodGl0bGUpKSB0YXNrLnNldFRpdGxlKHRpdGxlKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVCeU5hbWUgPSAodGFza05hbWUpID0+IHtcbiAgICBjb25zdCBuZWVkZWRUYXNrID0gZ2V0VGFza0J5TmFtZSh0YXNrTmFtZSk7XG4gICAgY29uc3QgaW5kZXggPSB0YXNrTGlzdC5pbmRleE9mKG5lZWRlZFRhc2spO1xuICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaXN0LFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlQnlOYW1lLFxuICAgIGdldFRhc2tCeU5hbWUsXG4gICAgc2V0VGFza1RpdGxlLFxuICB9O1xufVxuIiwiaW1wb3J0IGRlbCBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuLi9pbWFnZXMvZWRpdC5zdmdcIjtcbmltcG9ydCBnZXRDdXJyZW50UHJvamVjdCBmcm9tIFwiLi9nZXRDdXJyZW50UHJvamVjdFwiO1xuaW1wb3J0IHJlbmRlclRhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBhZGRQcm9qZWN0TGlzdExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBjbGVhclRhYmxlKCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10YWJsZVwiKTtcbiAgd2hpbGUgKHRhYmxlLnJvd3MubGVuZ3RoID4gMSkge1xuICAgIHRhYmxlLmRlbGV0ZVJvdygxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIGN1cnJlbnRQcm9qZWN0XG4gICAgLmdldFRhc2tMaXN0KClcbiAgICAucmVtb3ZlQnlOYW1lKHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgYWRkUHJvamVjdExpc3RMb2NhbFN0b3JhZ2UoKTtcbiAgcmVuZGVyVGFibGVEYXRhKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgY29uc3QgY3VycmVudFRhc2tMaXN0ID0gY3VycmVudFByb2plY3QuZ2V0VGFza0xpc3QoKTtcbiAgY29uc3QgY3VycmVudFRhc2sgPSBjdXJyZW50VGFza0xpc3QuZ2V0VGFza0J5TmFtZShcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxuICApO1xuICByZW5kZXJUYXNrRm9ybShjdXJyZW50VGFza0xpc3QsIGN1cnJlbnRUYXNrKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2hlY2soKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgY3VycmVudFByb2plY3RcbiAgICAuZ2V0VGFza0xpc3QoKVxuICAgIC5nZXRUYXNrQnlOYW1lKHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKVxuICAgIC5zZXRJc0NoZWNrZWQodGhpcy5jaGVja2VkKTtcblxuICBhZGRQcm9qZWN0TGlzdExvY2FsU3RvcmFnZSgpO1xuICByZW5kZXJUYWJsZURhdGEoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZVJvdyh0eXBlLCB0YXNrKSB7XG4gIGNvbnN0IGNlbGxzID0gW1wiSXNDaGVja2VkXCIsIFwiVGl0bGVcIiwgXCJEZXNjcmlwdGlvblwiLCBcIkR1ZURhdGVcIiwgXCJQcmlvcml0eVwiXTtcblxuICBjb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgaWYgKHRhc2spIHtcbiAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGUtcm93XCIpO1xuICAgIHRhYmxlUm93LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Rhc2suZ2V0VGl0bGUoKX1gKTtcbiAgfSBlbHNlIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1oZWFkaW5nXCIpO1xuXG4gIGNlbGxzLmZvckVhY2goKGNlbGxUeXBlKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGAke2NlbGxUeXBlfWApO1xuICAgIGlmICh0eXBlICE9PSBcInRoXCIpIHtcbiAgICAgIGNvbnN0IHRleHRGdW5jdGlvbiA9IGBnZXQke2NlbGxUeXBlfWA7XG4gICAgICBpZiAoY2VsbFR5cGUgPT09IFwiSXNDaGVja2VkXCIpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgY29uc3QgaXNUYXNrQ2hlY2tlZCA9IHRhc2tbdGV4dEZ1bmN0aW9uXSgpO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gaXNUYXNrQ2hlY2tlZDtcbiAgICAgICAgaWYgKGlzVGFza0NoZWNrZWQpIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2hlY2spO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0YXNrW3RleHRGdW5jdGlvbl0oKTtcbiAgICAgICAgaWYgKGNlbGxUeXBlID09PSBcIlByaW9yaXR5XCIpIHtcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKHRhc2suZ2V0UHJpb3JpdHkoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gY2VsbFR5cGU7XG4gICAgfVxuICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICB9KTtcblxuICBjb25zdCBkZWxDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZGVsQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlXCIpO1xuICBpZiAodHlwZSA9PT0gXCJ0aFwiKSB7XG4gICAgZGVsQ2VsbC50ZXh0Q29udGVudCA9IFwiQ2hhbmdlXCI7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlZGl0KTtcbiAgICBlZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1lZGl0LXN2Z1wiKTtcbiAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuICAgIGRlbENlbGwuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdXR0b24pO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZGVsKTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1zdmdcIik7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG4gICAgZGVsQ2VsbC5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcbiAgfVxuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChkZWxDZWxsKTtcblxuICByZXR1cm4gdGFibGVSb3c7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhYmxlRGF0YSgpIHtcbiAgY2xlYXJUYWJsZSgpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gIGN1cnJlbnRQcm9qZWN0XG4gICAgLmdldFRhc2tMaXN0KClcbiAgICAuZ2V0TGlzdCgpXG4gICAgLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGNyZWF0ZVRhYmxlUm93KFwidGRcIiwgdGFzaykpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrVGFibGUoKSB7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10YWJsZVwiKTtcbiAgdGFibGUuc2V0QXR0cmlidXRlKFwiY2VsbHNwYWNpbmdcIiwgXCIwXCIpO1xuXG4gIGNvbnN0IGNvbGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbGdyb3VwXCIpO1xuXG4gIGNvbnN0IGNvbDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpO1xuICBjb2wwLnNldEF0dHJpYnV0ZShcInNwYW5cIiwgXCIxXCIpO1xuICBjb2wwLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDUlXCIpO1xuICBjb2xncm91cC5hcHBlbmRDaGlsZChjb2wwKTtcblxuICBjb25zdCBjb2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKTtcbiAgY29sMS5zZXRBdHRyaWJ1dGUoXCJzcGFuXCIsIFwiMVwiKTtcbiAgY29sMS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAyMCVcIik7XG4gIGNvbGdyb3VwLmFwcGVuZENoaWxkKGNvbDEpO1xuXG4gIGNvbnN0IGNvbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpO1xuICBjb2wyLnNldEF0dHJpYnV0ZShcInNwYW5cIiwgXCIxXCIpO1xuICBjb2wyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDM1JVwiKTtcbiAgY29sZ3JvdXAuYXBwZW5kQ2hpbGQoY29sMik7XG5cbiAgY29uc3QgY29sMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xcIik7XG4gIGNvbDMuc2V0QXR0cmlidXRlKFwic3BhblwiLCBcIjFcIik7XG4gIGNvbDMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjAlXCIpO1xuICBjb2xncm91cC5hcHBlbmRDaGlsZChjb2wzKTtcblxuICBjb25zdCBjb2w0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKTtcbiAgY29sNC5zZXRBdHRyaWJ1dGUoXCJzcGFuXCIsIFwiMVwiKTtcbiAgY29sNC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMCVcIik7XG4gIGNvbGdyb3VwLmFwcGVuZENoaWxkKGNvbDQpO1xuXG4gIGNvbnN0IGNvbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpO1xuICBjb2w1LnNldEF0dHJpYnV0ZShcInNwYW5cIiwgXCIxXCIpO1xuICBjb2w1LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDEwJVwiKTtcbiAgY29sZ3JvdXAuYXBwZW5kQ2hpbGQoY29sNSk7XG5cbiAgdGFibGUuYXBwZW5kQ2hpbGQoY29sZ3JvdXApO1xuICB0YWJsZS5hcHBlbmRDaGlsZChjcmVhdGVUYWJsZVJvdyhcInRoXCIpKTtcblxuICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCB7IHJlbmRlclRhYmxlRGF0YSwgY3JlYXRlVGFza1RhYmxlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VcIjtcbmltcG9ydCB7IGZpbGxQcm9qZWN0TGlzdEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHJlbmRlclByb2plY3RMaXN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdENvbnRhaW5lclwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2UoKSk7XG5cbmZpbGxQcm9qZWN0TGlzdEZyb21Mb2NhbFN0b3JhZ2UoKTtcbnJlbmRlclByb2plY3RMaXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9