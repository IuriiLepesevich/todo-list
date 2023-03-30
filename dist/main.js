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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::after,\n::before {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n#container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.menu {\n  background-color: rgb(223, 223, 223);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.add-button {\n  border: 3px solid black;\n  border-radius: 1rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-new-text {\n  margin: auto;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.line {\n  border: 2px solid red;\n}\n\n.project-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-container {\n  position: relative;\n  border: 3px solid black;\n  text-align: center;\n  padding: 10px;\n  border-radius: 2rem;\n  font-size: 2.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-delete {\n  position: absolute;\n  right: 10px;\n}\n\n.project-delete:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-form {\n  border-radius: 1rem;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: stretch;\n}\n\n.project-name-input {\n  padding: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2em;\n}\n\n.project-button-holder {\n  display: flex;\n  gap: 10px;\n}\n\n.project-button-holder > input {\n  flex: 1;\n  font-size: 1.3rem;\n  border: none;\n  outline: none;\n  padding: 5px;\n}\n\n.project-button-apply {\n  background-color: rgb(172, 255, 47);\n}\n\n.project-button-cancel {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\n#main {\n  padding: 100px 15%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 50px;\n}\n\n.project-heading {\n  font-size: 4rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.add-new-task {\n  padding: 10px 20px;\n  font-size: 1.5rem;\n}\n\n.task-table {\n  border-spacing: 0px 20px;\n}\n\n.task-table :is(td, th) {\n  text-align: start;\n  padding: 5px 10px;\n}\n\nth {\n  border-bottom: 2px solid black;\n}\n\n:is(td, th):not(:first-child) {\n  border-left: 1px solid black;\n}\n\n.table-heading {\n  font-size: 1.5rem;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.task-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  z-index: 10;\n  background-color: white;\n  width: 850px;\n  height: 400px;\n}\n\n.table-row.low > td {\n  border-top: 3px solid green;\n  border-bottom: 3px solid green;\n}\n\n.table-row.medium > td  {\n  border-top: 3px solid orange;\n  border-bottom: 3px solid orange;\n}\n\n.table-row.high > td  {\n  border-top: 3px solid red;\n  border-bottom: 3px solid red;\n}\n\n.table-row.low > td:first-child {\n  border-left: 3px solid green;\n}\n\n.table-row.medium > td:first-child {\n  border-left: 3px solid orange;\n}\n\n.table-row.high > td:first-child {\n  border-left: 3px solid red;\n}\n\n.table-row.low > td:last-child {\n  border-right: 3px solid green;\n}\n\n.table-row.medium > td:last-child {\n  border-right: 3px solid orange;\n}\n\n.table-row.high > td:last-child {\n  border-right: 3px solid red;\n}\n\ntd {\n  font-size: 1.2rem;\n}\n\ntd:not(.DueDate) {\n  font-size: 1.5rem;\n}\n\n.task-table td.change {\n  padding: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.change > * {\n  display: inline-block;\n  height: 50px;\n}\n\n.task-delete-svg:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-edit-svg:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-table input[type='checkbox'] {\n  margin: auto;\n  display: flex;\n  transform: scale(2.5);\n}\n\n.checked {\n  background-color: rgba(128, 128, 128, 0.541);\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,4CAA4C;AAC9C","sourcesContent":["*,\n::after,\n::before {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n#container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.menu {\n  background-color: rgb(223, 223, 223);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.add-button {\n  border: 3px solid black;\n  border-radius: 1rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-new-text {\n  margin: auto;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.line {\n  border: 2px solid red;\n}\n\n.project-holder {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-container {\n  position: relative;\n  border: 3px solid black;\n  text-align: center;\n  padding: 10px;\n  border-radius: 2rem;\n  font-size: 2.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-delete {\n  position: absolute;\n  right: 10px;\n}\n\n.project-delete:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 1rem;\n}\n\n.project-form {\n  border-radius: 1rem;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: stretch;\n}\n\n.project-name-input {\n  padding: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.2em;\n}\n\n.project-button-holder {\n  display: flex;\n  gap: 10px;\n}\n\n.project-button-holder > input {\n  flex: 1;\n  font-size: 1.3rem;\n  border: none;\n  outline: none;\n  padding: 5px;\n}\n\n.project-button-apply {\n  background-color: rgb(172, 255, 47);\n}\n\n.project-button-cancel {\n  background-color: rgba(255, 0, 0, 0.7);\n}\n\n#main {\n  padding: 100px 15%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 50px;\n}\n\n.project-heading {\n  font-size: 4rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.add-new-task {\n  padding: 10px 20px;\n  font-size: 1.5rem;\n}\n\n.task-table {\n  border-spacing: 0px 20px;\n}\n\n.task-table :is(td, th) {\n  text-align: start;\n  padding: 5px 10px;\n}\n\nth {\n  border-bottom: 2px solid black;\n}\n\n:is(td, th):not(:first-child) {\n  border-left: 1px solid black;\n}\n\n.table-heading {\n  font-size: 1.5rem;\n}\n\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.task-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  z-index: 10;\n  background-color: white;\n  width: 850px;\n  height: 400px;\n}\n\n.table-row.low > td {\n  border-top: 3px solid green;\n  border-bottom: 3px solid green;\n}\n\n.table-row.medium > td  {\n  border-top: 3px solid orange;\n  border-bottom: 3px solid orange;\n}\n\n.table-row.high > td  {\n  border-top: 3px solid red;\n  border-bottom: 3px solid red;\n}\n\n.table-row.low > td:first-child {\n  border-left: 3px solid green;\n}\n\n.table-row.medium > td:first-child {\n  border-left: 3px solid orange;\n}\n\n.table-row.high > td:first-child {\n  border-left: 3px solid red;\n}\n\n.table-row.low > td:last-child {\n  border-right: 3px solid green;\n}\n\n.table-row.medium > td:last-child {\n  border-right: 3px solid orange;\n}\n\n.table-row.high > td:last-child {\n  border-right: 3px solid red;\n}\n\ntd {\n  font-size: 1.2rem;\n}\n\ntd:not(.DueDate) {\n  font-size: 1.5rem;\n}\n\n.task-table td.change {\n  padding: 3px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.change > * {\n  display: inline-block;\n  height: 50px;\n}\n\n.task-delete-svg:hover {\n  background-color: rgba(255, 0, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-edit-svg:hover {\n  background-color: rgba(255, 166, 0, 0.6);\n  border-radius: 0.3rem;\n}\n\n.task-table input[type='checkbox'] {\n  margin: auto;\n  display: flex;\n  transform: scale(2.5);\n}\n\n.checked {\n  background-color: rgba(128, 128, 128, 0.541);\n}\n"],"sourceRoot":""}]);
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
  const projectTitle = title;
  const taskList = (0,_taskList__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const getTitle = () => projectTitle;

  const getTaskList = () => taskList;

  return {
    getTitle,
    getTaskList,
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
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage */ "./src/modules/projectPage.js");




function deleteProject(e) {
  e.stopPropagation();
  const projectName = this.parentElement.textContent;
  _projectList__WEBPACK_IMPORTED_MODULE_1__["default"].removeByName(projectName);
  renderProjectList(); // eslint-disable-line no-use-before-define

  const projectHeading = document.querySelector(".project-name");
  if (projectHeading) {
    if (projectName === projectHeading.textContent) {
      (0,_projectPage__WEBPACK_IMPORTED_MODULE_2__.clearMainPage)();
    }
  }
}

function checkForDeleteButton(container) {
  return container.querySelector(".project-delete");
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

function removeDeleteButton(e) {
  const targetedContainer = e.target;
  if (!checkForDeleteButton(targetedContainer)) return;

  targetedContainer.querySelector(".project-delete").remove();
}

function createProjectContainer(projectName) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  projectContainer.textContent = projectName;

  projectContainer.addEventListener(
    "click",
    _projectPage__WEBPACK_IMPORTED_MODULE_2__.renderProjectPage.bind(this, _projectList__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectByName(projectName))
  );

  projectContainer.addEventListener("mouseover", renderDeleteButton);
  projectContainer.addEventListener("mouseleave", removeDeleteButton);

  return projectContainer;
}

function renderProjectList() {
  const projectHolder = document.querySelector(".project-holder");

  while (projectHolder.firstChild) {
    projectHolder.removeChild(projectHolder.firstChild);
  }

  _projectList__WEBPACK_IMPORTED_MODULE_1__["default"].getList().forEach((project) => {
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

_projectList__WEBPACK_IMPORTED_MODULE_1__["default"].addProject((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])("Example")); // Extra line for debugging

function appendProjectForm() {
  if (document.querySelector(".project-form")) return;

  const projectHolder = document.querySelector(".project-holder");

  const form = document.createElement("form");
  form.classList.add("project-form");

  const projectNameInput = document.createElement("input");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("required", "true");
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

  form.addEventListener("submit", addProject);
  form.appendChild(buttonHolder);

  projectHolder.appendChild(form);

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

  return {
    getList,
    addProject,
    removeByName,
    getProjectByName,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDYTtBQUNtQixDQUFDO0FBQ0YsQ0FBQztBQUNYLENBQUM7O0FBRWpEO0FBQ0EsaUJBQWlCLHlEQUFVOztBQUUzQixxRUFBaUIsSUFBSTtBQUNyQix1RUFBaUIsQ0FBQyw2RUFBNEIsY0FBYywyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hZGRQcm9qZWN0QnV0dG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2dldEN1cnJlbnRQcm9qZWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3Byb2plY3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrTGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90YXNrVGFibGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjphZnRlcixcXG46OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10ZXh0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGluZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wcm9qZWN0LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24taG9sZGVyID4gaW5wdXQge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWFwcGx5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDI1NSwgNDcpO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBwYWRkaW5nOiAxMDBweCAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtbmV3LXRhc2sge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLXRhYmxlIHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLnRhc2stdGFibGUgOmlzKHRkLCB0aCkge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxudGgge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG46aXModGQsIHRoKTpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFibGUtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogODUwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4udGFibGUtcm93LmxvdyA+IHRkIHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBncmVlbjtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhYmxlLXJvdy5tZWRpdW0gPiB0ZCAge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIG9yYW5nZTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YWJsZS1yb3cuaGlnaCA+IHRkICB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFibGUtcm93Lm1lZGl1bSA+IHRkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHJlZDtcXG59XFxuXFxudGQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbnRkOm5vdCguRHVlRGF0ZSkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLXRhYmxlIHRkLmNoYW5nZSB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hhbmdlID4gKiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1zdmc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi50YXNrLWVkaXQtc3ZnOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi50YXNrLXRhYmxlIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU0MSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZ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IjpbXCIqLFxcbjo6YWZ0ZXIsXFxuOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn1cXG5cXG4ubWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1uZXctdGV4dCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpbmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4ucHJvamVjdC1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWhvbGRlciA+IGlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi1hcHBseSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyNTUsIDQ3KTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43KTtcXG59XFxuXFxuI21haW4ge1xcbiAgcGFkZGluZzogMTAwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay10YWJsZSB7XFxuICBib3JkZXItc3BhY2luZzogMHB4IDIwcHg7XFxufVxcblxcbi50YXNrLXRhYmxlIDppcyh0ZCwgdGgpIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbnRoIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuOmlzKHRkLCB0aCk6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhYmxlLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDg1MHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLnRhYmxlLXJvdy5sb3cgPiB0ZCB7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgZ3JlZW47XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi50YWJsZS1yb3cubWVkaXVtID4gdGQgIHtcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBvcmFuZ2U7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4udGFibGUtcm93LmhpZ2ggPiB0ZCAge1xcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YWJsZS1yb3cubG93ID4gdGQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhYmxlLXJvdy5tZWRpdW0gPiB0ZDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuLnRhYmxlLXJvdy5oaWdoID4gdGQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YWJsZS1yb3cubG93ID4gdGQ6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhYmxlLXJvdy5tZWRpdW0gPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuLnRhYmxlLXJvdy5oaWdoID4gdGQ6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZWQ7XFxufVxcblxcbnRkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG50ZDpub3QoLkR1ZURhdGUpIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay10YWJsZSB0ZC5jaGFuZ2Uge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoYW5nZSA+ICoge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4udGFzay1kZWxldGUtc3ZnOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4udGFzay1lZGl0LXN2Zzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4udGFzay10YWJsZSBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41NDEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFkZCBmcm9tIFwiLi4vaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCBhcHBlbmRQcm9qZWN0Rm9ybSBmcm9tIFwiLi9wcm9qZWN0Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24oKSB7XG4gIGNvbnN0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZE5ldy5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ1dHRvblwiKTtcbiAgYWRkTmV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHBlbmRQcm9qZWN0Rm9ybSk7XG5cbiAgY29uc3QgYWRkU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYWRkU3ZnLmNsYXNzTGlzdC5hZGQoXCJzdmctaG9sZGVyXCIpO1xuICBhZGRTdmcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGFkZCk7XG4gIGFkZE5ldy5hcHBlbmRDaGlsZChhZGRTdmcpO1xuXG4gIGNvbnN0IGFkZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYWRkVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWRkLW5ldy10ZXh0XCIpO1xuICBhZGRUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3XCI7XG4gIGFkZE5ldy5hcHBlbmRDaGlsZChhZGRUZXh0KTtcblxuICByZXR1cm4gYWRkTmV3O1xufVxuIiwiaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IFByb2plY3RMaXN0LmdldFByb2plY3RCeU5hbWUoY3VycmVudFByb2plY3ROYW1lKTtcblxuICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59XG4iLCJpbXBvcnQgY3JlYXRlQWRkQnV0dG9uIGZyb20gXCIuL2FkZFByb2plY3RCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkQnV0dG9uKCkpO1xuXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaW5lLmNsYXNzTGlzdC5hZGQoXCJsaW5lXCIpO1xuICBtZW51LmFwcGVuZENoaWxkKGxpbmUpO1xuXG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhvbGRlclwiKTtcbiAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0SG9sZGVyKTtcblxuICByZXR1cm4gbWVudTtcbn1cbiIsImltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJpbXBvcnQgVGFza0xpc3QgZnJvbSBcIi4vdGFza0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aXRsZTtcbiAgY29uc3QgdGFza0xpc3QgPSBUYXNrTGlzdCgpO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gcHJvamVjdFRpdGxlO1xuXG4gIGNvbnN0IGdldFRhc2tMaXN0ID0gKCkgPT4gdGFza0xpc3Q7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXRUYXNrTGlzdCxcbiAgfTtcbn1cbiIsImltcG9ydCBkZWwgZnJvbSBcIi4uL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCB7IGNsZWFyTWFpblBhZ2UsIHJlbmRlclByb2plY3RQYWdlIH0gZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50O1xuICBQcm9qZWN0TGlzdC5yZW1vdmVCeU5hbWUocHJvamVjdE5hbWUpO1xuICByZW5kZXJQcm9qZWN0TGlzdCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cbiAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgaWYgKHByb2plY3RIZWFkaW5nKSB7XG4gICAgaWYgKHByb2plY3ROYW1lID09PSBwcm9qZWN0SGVhZGluZy50ZXh0Q29udGVudCkge1xuICAgICAgY2xlYXJNYWluUGFnZSgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvckRlbGV0ZUJ1dHRvbihjb250YWluZXIpIHtcbiAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGVsZXRlXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZWxldGVCdXR0b24oZSkge1xuICBjb25zdCB0YXJnZXRlZENvbnRhaW5lciA9IGUudGFyZ2V0O1xuICBpZiAoY2hlY2tGb3JEZWxldGVCdXR0b24odGFyZ2V0ZWRDb250YWluZXIpKSByZXR1cm47XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBkZWwpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlXCIpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuXG4gIHRhcmdldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURlbGV0ZUJ1dHRvbihlKSB7XG4gIGNvbnN0IHRhcmdldGVkQ29udGFpbmVyID0gZS50YXJnZXQ7XG4gIGlmICghY2hlY2tGb3JEZWxldGVCdXR0b24odGFyZ2V0ZWRDb250YWluZXIpKSByZXR1cm47XG5cbiAgdGFyZ2V0ZWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRlbGV0ZVwiKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIHJlbmRlclByb2plY3RQYWdlLmJpbmQodGhpcywgUHJvamVjdExpc3QuZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0TmFtZSkpXG4gICk7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHJlbmRlckRlbGV0ZUJ1dHRvbik7XG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcmVtb3ZlRGVsZXRlQnV0dG9uKTtcblxuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaG9sZGVyXCIpO1xuXG4gIHdoaWxlIChwcm9qZWN0SG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0SG9sZGVyLnJlbW92ZUNoaWxkKHByb2plY3RIb2xkZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBQcm9qZWN0TGlzdC5nZXRMaXN0KCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RIb2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0LmdldFRpdGxlKCkpKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0Q29udGFpbmVyXCI7XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBmb3JtLnJlbW92ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZS1pbnB1dFwiKS52YWx1ZTtcbiAgUHJvamVjdExpc3QuYWRkUHJvamVjdChQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gIHJlbW92ZUZvcm0oKTtcbiAgcmVuZGVyUHJvamVjdExpc3QoKTtcbn1cblxuUHJvamVjdExpc3QuYWRkUHJvamVjdChQcm9qZWN0KFwiRXhhbXBsZVwiKSk7IC8vIEV4dHJhIGxpbmUgZm9yIGRlYnVnZ2luZ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0Rm9ybSgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpKSByZXR1cm47XG5cbiAgY29uc3QgcHJvamVjdEhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1ob2xkZXJcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG5cbiAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG4gIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IG5hbWU6XCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvbi1ob2xkZXJcIik7XG5cbiAgY29uc3QgYnV0dG9uQXBwbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGJ1dHRvbkFwcGx5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbkFwcGx5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQXBwbHlcIik7XG4gIGJ1dHRvbkFwcGx5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvbi1hcHBseVwiKTtcbiAgYnV0dG9uSG9sZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkFwcGx5KTtcblxuICBjb25zdCBidXR0b25DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGJ1dHRvbkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidXR0b25DYW5jZWwuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDYW5jZWxcIik7XG4gIGJ1dHRvbkNhbmNlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b24tY2FuY2VsXCIpO1xuICBidXR0b25DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pO1xuICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYWRkUHJvamVjdCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uSG9sZGVyKTtcblxuICBwcm9qZWN0SG9sZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGZvcm0ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWUtaW5wdXRcIikuZm9jdXMoKTtcbn1cbiIsImNvbnN0IFByb2plY3RMaXN0ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChwcm9qZWN0bmFtZSkgPT5cbiAgICBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdG5hbWUpWzBdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGlmICghZ2V0UHJvamVjdEJ5TmFtZShwcm9qZWN0LmdldFRpdGxlKCkpKSBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IG5lZWRlZFByb2plY3QgPSBnZXRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YobmVlZGVkUHJvamVjdCk7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldExpc3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVCeU5hbWUsXG4gICAgZ2V0UHJvamVjdEJ5TmFtZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGFza1RhYmxlLCByZW5kZXJUYWJsZURhdGEgfSBmcm9tIFwiLi90YXNrVGFibGVcIjtcbmltcG9ydCByZW5kZXJUYXNrRm9ybSBmcm9tIFwiLi90YXNrRm9ybVwiO1xuXG5mdW5jdGlvbiBjbGVhck1haW5QYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RQYWdlKHByb2plY3QpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbiAgY2xlYXJNYWluUGFnZSgpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGluZ1wiKTtcblxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdEhlYWRpbmcuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGFkZE5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGROZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJhZGQtbmV3LXRhc2tcIik7XG4gIGFkZE5ld1Rhc2sudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgdGFza1wiO1xuICBhZGROZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJUYXNrRm9ybSk7XG4gIHByb2plY3RIZWFkaW5nLmFwcGVuZENoaWxkKGFkZE5ld1Rhc2spO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRpbmcpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza1RhYmxlKCkpO1xuXG4gIHJlbmRlclRhYmxlRGF0YSgpO1xufVxuXG5leHBvcnQgeyBjbGVhck1haW5QYWdlLCByZW5kZXJQcm9qZWN0UGFnZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdO1xuXG4gIGxldCB0YXNrVGl0bGUgPSB0aXRsZTtcbiAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgdGFza0R1ZURhdGUgPSBkdWVEYXRlO1xuICBsZXQgdGFza1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGxldCBpc0NoZWNrZWQgPSBmYWxzZTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRhc2tUaXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB0YXNrRGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB0YXNrRHVlRGF0ZTtcbiAgY29uc3QgZ2V0TnVtYmVyZWRQcmlvcml0eSA9ICgpID0+IHRhc2tQcmlvcml0eTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0aWVzW3Rhc2tQcmlvcml0eV07XG4gIGNvbnN0IGdldElzQ2hlY2tlZCA9ICgpID0+IGlzQ2hlY2tlZDtcblxuICBjb25zdCBzZXRUaXRsZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRhc2tUaXRsZSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgIHRhc2tEZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9O1xuICBjb25zdCBzZXREdWVEYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgdGFza0R1ZURhdGUgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAodmFsdWUpID0+IHtcbiAgICB0YXNrUHJpb3JpdHkgPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0SXNDaGVja2VkID0gKHZhbHVlKSA9PiB7XG4gICAgaXNDaGVja2VkID0gISF2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0TnVtYmVyZWRQcmlvcml0eSxcbiAgICBnZXRJc0NoZWNrZWQsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RHVlRGF0ZSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBzZXRJc0NoZWNrZWQsXG4gIH07XG59XG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyByZW5kZXJUYWJsZURhdGEgfSBmcm9tIFwiLi90YXNrVGFibGVcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBnZXRDdXJyZW50UHJvamVjdCBmcm9tIFwiLi9nZXRDdXJyZW50UHJvamVjdFwiO1xuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpO1xuICBpZiAob3ZlcmxheSkgb3ZlcmxheS5yZW1vdmUoKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gIGlmIChmb3JtKSBmb3JtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm92ZXJsYXlcIik7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUZvcm0pO1xuXG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKHRhcmdldFRhc2tMaXN0LCB0YXJnZXRUYXNrKSB7XG4gIGlmKHRhcmdldFRhc2tMaXN0LnRhcmdldCkge1xuICAgIHRhcmdldFRhc2tMaXN0LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiKS52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlLWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wcmlvcml0eS1pbnB1dFwiKS52YWx1ZTtcblxuICBpZiAodGFyZ2V0VGFza0xpc3QgJiYgdGFyZ2V0VGFzayAmJiAhdGFyZ2V0VGFza0xpc3QudGFyZ2V0KSB7XG4gICAgdGFyZ2V0VGFza0xpc3Quc2V0VGFza1RpdGxlKHRhcmdldFRhc2ssIHRhc2tUaXRsZSk7XG4gICAgdGFyZ2V0VGFzay5zZXREZXNjcmlwdGlvbih0YXNrRGVzY3JpcHRpb24pO1xuICAgIHRhcmdldFRhc2suc2V0RHVlRGF0ZSh0YXNrRGF0ZSk7XG4gICAgdGFyZ2V0VGFzay5zZXRQcmlvcml0eSh0YXNrUHJpb3JpdHkpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQcm9qZWN0XG4gICAgICAuZ2V0VGFza0xpc3QoKVxuICAgICAgLmFkZFRhc2soVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSkpO1xuICB9XG5cbiAgcmVtb3ZlRm9ybSgpO1xuICByZW5kZXJUYWJsZURhdGEoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0odGFyZ2V0VGFza0xpc3QsIHRhcmdldFRhc2spIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZS1pbnB1dFwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEYXRlXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgY29uc3QgcHJpb3JpdHlIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUhvbGRlci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaG9sZGVyXCIpO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgcHJpb3JpdHlIb2xkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcInRhc2stcHJpb3JpdHktaW5wdXRcIik7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcInRydWVcIik7XG5cbiAgY29uc3QgcHJpb3JpdHkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcHJpb3JpdHkxLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIDApO1xuICBwcmlvcml0eTEudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5MSk7XG4gIGNvbnN0IHByaW9yaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByaW9yaXR5Mi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCAxKTtcbiAgcHJpb3JpdHkyLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eTIpO1xuICBjb25zdCBwcmlvcml0eTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eTMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgMik7XG4gIHByaW9yaXR5My50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5Myk7XG5cbiAgcHJpb3JpdHlIb2xkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlIb2xkZXIpO1xuXG4gIGlmKHRhcmdldFRhc2tMaXN0ICYmIHRhcmdldFRhc2sgJiYgIXRhcmdldFRhc2tMaXN0LnRhcmdldCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXJnZXRUYXNrLmdldFRpdGxlKCk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhcmdldFRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSB0YXJnZXRUYXNrLmdldER1ZURhdGUoKTtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFyZ2V0VGFzay5nZXROdW1iZXJlZFByaW9yaXR5KCk7XG4gIH1cblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eS1pbnB1dFwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkFkZFwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRGb3JtLmJpbmQoZm9ybSwgdGFyZ2V0VGFza0xpc3QsIHRhcmdldFRhc2spKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU92ZXJsYXkoKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrTGlzdCgpIHtcbiAgY29uc3QgdGFza0xpc3QgPSBbXTtcblxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gdGFza0xpc3Q7XG5cbiAgY29uc3QgZ2V0VGFza0J5TmFtZSA9ICh0YXNrbmFtZSkgPT5cbiAgICB0YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza25hbWUpWzBdO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIGlmICghZ2V0VGFza0J5TmFtZSh0YXNrLmdldFRpdGxlKCkpKSB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IHNldFRhc2tUaXRsZSA9ICh0YXNrLCB0aXRsZSkgPT4ge1xuICAgIGlmICghZ2V0VGFza0J5TmFtZSh0aXRsZSkpIHRhc2suc2V0VGl0bGUodGl0bGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUJ5TmFtZSA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IG5lZWRlZFRhc2sgPSBnZXRUYXNrQnlOYW1lKHRhc2tOYW1lKTtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tMaXN0LmluZGV4T2YobmVlZGVkVGFzayk7XG4gICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldExpc3QsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVCeU5hbWUsXG4gICAgZ2V0VGFza0J5TmFtZSxcbiAgICBzZXRUYXNrVGl0bGUsXG4gIH07XG59XG4iLCJpbXBvcnQgZGVsIGZyb20gXCIuLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkaXQgZnJvbSBcIi4uL2ltYWdlcy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGdldEN1cnJlbnRQcm9qZWN0IGZyb20gXCIuL2dldEN1cnJlbnRQcm9qZWN0XCI7XG5pbXBvcnQgcmVuZGVyVGFza0Zvcm0gZnJvbSBcIi4vdGFza0Zvcm1cIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tY3ljbGVcblxuZnVuY3Rpb24gY2xlYXJUYWJsZSgpIHtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGFibGVcIik7XG4gIHdoaWxlICh0YWJsZS5yb3dzLmxlbmd0aCA+IDEpIHtcbiAgICB0YWJsZS5kZWxldGVSb3coMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzaygpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICBjdXJyZW50UHJvamVjdFxuICAgIC5nZXRUYXNrTGlzdCgpXG4gICAgLnJlbW92ZUJ5TmFtZSh0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCk7XG4gIHJlbmRlclRhYmxlRGF0YSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIGNvbnN0IGN1cnJlbnRUYXNrTGlzdCA9IGN1cnJlbnRQcm9qZWN0LmdldFRhc2tMaXN0KCk7XG4gIGNvbnN0IGN1cnJlbnRUYXNrID0gY3VycmVudFRhc2tMaXN0LmdldFRhc2tCeU5hbWUoXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRcbiAgKTtcbiAgcmVuZGVyVGFza0Zvcm0oY3VycmVudFRhc2tMaXN0LCBjdXJyZW50VGFzayk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNoZWNrKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIGN1cnJlbnRQcm9qZWN0XG4gICAgLmdldFRhc2tMaXN0KClcbiAgICAuZ2V0VGFza0J5TmFtZSh0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZClcbiAgICAuc2V0SXNDaGVja2VkKHRoaXMuY2hlY2tlZCk7XG4gIHJlbmRlclRhYmxlRGF0YSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlUm93KHR5cGUsIHRhc2spIHtcbiAgY29uc3QgY2VsbHMgPSBbXCJJc0NoZWNrZWRcIiwgXCJUaXRsZVwiLCBcIkRlc2NyaXB0aW9uXCIsIFwiRHVlRGF0ZVwiLCBcIlByaW9yaXR5XCJdO1xuXG4gIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBpZiAodGFzaykge1xuICAgIHRhYmxlUm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1yb3dcIik7XG4gICAgdGFibGVSb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7dGFzay5nZXRUaXRsZSgpfWApO1xuICB9IGVsc2UgdGFibGVSb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlLWhlYWRpbmdcIik7XG5cbiAgY2VsbHMuZm9yRWFjaCgoY2VsbFR5cGUpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoYCR7Y2VsbFR5cGV9YCk7XG4gICAgaWYgKHR5cGUgIT09IFwidGhcIikge1xuICAgICAgY29uc3QgdGV4dEZ1bmN0aW9uID0gYGdldCR7Y2VsbFR5cGV9YDtcbiAgICAgIGlmIChjZWxsVHlwZSA9PT0gXCJJc0NoZWNrZWRcIikge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBjb25zdCBpc1Rhc2tDaGVja2VkID0gdGFza1t0ZXh0RnVuY3Rpb25dKCk7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBpc1Rhc2tDaGVja2VkO1xuICAgICAgICBpZihpc1Rhc2tDaGVja2VkKSB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDaGVjayk7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHRhc2tbdGV4dEZ1bmN0aW9uXSgpO1xuICAgICAgICBpZiAoY2VsbFR5cGUgPT09IFwiUHJpb3JpdHlcIilcbiAgICAgICAgICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKHRhc2suZ2V0UHJpb3JpdHkoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNlbGxUeXBlO1xuICAgIH1cbiAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGRlbENlbGwuY2xhc3NMaXN0LmFkZChcImNoYW5nZVwiKTtcbiAgaWYgKHR5cGUgPT09IFwidGhcIikge1xuICAgIGRlbENlbGwudGV4dENvbnRlbnQgPSBcIkNoYW5nZVwiO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGRlbCk7XG4gICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtc3ZnXCIpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2spO1xuICAgIGRlbENlbGwuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG5cbiAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGVkaXQpO1xuICAgIGVkaXRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXQtc3ZnXCIpO1xuICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XG4gICAgZGVsQ2VsbC5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG4gIH1cbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoZGVsQ2VsbCk7XG5cbiAgcmV0dXJuIHRhYmxlUm93O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYWJsZURhdGEoKSB7XG4gIGNsZWFyVGFibGUoKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIik7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcblxuICBjdXJyZW50UHJvamVjdFxuICAgIC5nZXRUYXNrTGlzdCgpXG4gICAgLmdldExpc3QoKVxuICAgIC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChjcmVhdGVUYWJsZVJvdyhcInRkXCIsIHRhc2spKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza1RhYmxlKCkge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgdGFibGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGFibGVcIik7XG4gIHRhYmxlLnNldEF0dHJpYnV0ZShcImNlbGxzcGFjaW5nXCIsIFwiMFwiKTtcblxuICBjb25zdCBjb2xncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xncm91cFwiKTtcblxuICBjb25zdCBjb2wwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKTtcbiAgY29sMC5zZXRBdHRyaWJ1dGUoXCJzcGFuXCIsIFwiMVwiKTtcbiAgY29sMC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiA1JVwiKTtcbiAgY29sZ3JvdXAuYXBwZW5kQ2hpbGQoY29sMCk7XG5cbiAgY29uc3QgY29sMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xcIik7XG4gIGNvbDEuc2V0QXR0cmlidXRlKFwic3BhblwiLCBcIjFcIik7XG4gIGNvbDEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMjAlXCIpO1xuICBjb2xncm91cC5hcHBlbmRDaGlsZChjb2wxKTtcblxuICBjb25zdCBjb2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKTtcbiAgY29sMi5zZXRBdHRyaWJ1dGUoXCJzcGFuXCIsIFwiMVwiKTtcbiAgY29sMi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAzNSVcIik7XG4gIGNvbGdyb3VwLmFwcGVuZENoaWxkKGNvbDIpO1xuXG4gIGNvbnN0IGNvbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29sXCIpO1xuICBjb2wzLnNldEF0dHJpYnV0ZShcInNwYW5cIiwgXCIxXCIpO1xuICBjb2wzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDIwJVwiKTtcbiAgY29sZ3JvdXAuYXBwZW5kQ2hpbGQoY29sMyk7XG5cbiAgY29uc3QgY29sNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb2xcIik7XG4gIGNvbDQuc2V0QXR0cmlidXRlKFwic3BhblwiLCBcIjFcIik7XG4gIGNvbDQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMTAlXCIpO1xuICBjb2xncm91cC5hcHBlbmRDaGlsZChjb2w0KTtcblxuICBjb25zdCBjb2w1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbFwiKTtcbiAgY29sNS5zZXRBdHRyaWJ1dGUoXCJzcGFuXCIsIFwiMVwiKTtcbiAgY29sNS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiAxMCVcIik7XG4gIGNvbGdyb3VwLmFwcGVuZENoaWxkKGNvbDUpO1xuXG4gIHRhYmxlLmFwcGVuZENoaWxkKGNvbGdyb3VwKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGFibGVSb3coXCJ0aFwiKSk7XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5leHBvcnQgeyByZW5kZXJUYWJsZURhdGEsIGNyZWF0ZVRhc2tUYWJsZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9wYWdlXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdExpc3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0Q29udGFpbmVyXCI7IC8vIEV4dHJhIGxpbmUgZm9yIGRlYnVnZ2luZ1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RQYWdlXCI7IC8vIEV4dHJhIGxpbmUgZm9yIGRlYnVnZ2luZ1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdExpc3RcIjsgLy8gRXh0cmEgbGluZSBmb3IgZGVidWdnaW5nXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZSgpKTtcblxucmVuZGVyUHJvamVjdExpc3QoKTsgLy8gRXh0cmEgbGluZSBmb3IgZGVidWdnaW5nXG5yZW5kZXJQcm9qZWN0UGFnZShQcm9qZWN0TGlzdC5nZXRQcm9qZWN0QnlOYW1lKCdFeGFtcGxlJykpOyAvLyBFeHRyYSBsaW5lIGZvciBkZWJ1Z2dpbmciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=