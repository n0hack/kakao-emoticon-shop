/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_icon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_topbnr_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_sidemenu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_nav_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_search_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_profile_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_footer_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_screens_number_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_screens_faq_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35);
// Imports















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_icon_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_button_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_topbnr_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_header_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_sidemenu_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_nav_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_search_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_profile_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_footer_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_screens_number_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_screens_faq_css__WEBPACK_IMPORTED_MODULE_14__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Base */\n/* Component */\n/* Screen */\n.kakao-wrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: overlay;\n  z-index: var(--z-wrap); }\n\n.kakao-wrap::-webkit-scrollbar {\n  width: 14px; }\n\n.kakao-wrap::-webkit-scrollbar-thumb:hover {\n  width: 20px; }\n\n.kakao-wrap::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.4);\n  background-clip: padding-box;\n  border: 3px solid transparent;\n  border-radius: 10px;\n  transition: all 5s ease; }\n\n.kakao-wrap--sidemenu-overlay {\n  max-height: 100vh;\n  overflow: hidden; }\n\n.kakao-wrap--search-overlay {\n  max-height: 100vh;\n  overflow: hidden; }\n\n.screen-out {\n  position: absolute;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  text-indent: -9999px; }\n\n.main {\n  position: relative;\n  width: 100%;\n  padding-top: calc(var(--h-topbnr) + var(--h-header) + var(--h-nav));\n  z-index: var(--z-main);\n  background-color: var(--bgc-section);\n  overflow: hidden; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
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
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: inherit;\n  font-family: 'Noto Sans KR', sans-serif;\n}\n\nhtml {\n  height: 100%;\n  font-size: 62.5%;\n  overflow-y: overlay;\n}\n\nbody {\n  height: 100%;\n  color: var(--fc-title);\n  font-size: 1.2rem;\n  line-height: 1.5rem;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n}\n\nlabel {\n  cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(18), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Common */\n.ico-common {\n  display: inline-block;\n  color: transparent;\n  font-size: 1px;\n  overflow: hidden;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: 830px 230px;\n}\n\n/* Topbnr */\n.ico-closew {\n  width: 12px;\n  height: 12px;\n  background-position: -700px -40px;\n}\n\n/* Sidemenu */\n.ico-mymenu-new {\n  position: absolute;\n  top: -3px;\n  left: 50%;\n  width: 15px;\n  height: 15px;\n  margin-left: 0.6rem;\n  background-position: -330px -30px;\n}\n\n.ico-buy {\n  width: 30px;\n  height: 30px;\n  background-position: -210px -60px;\n}\n\n.ico-gift {\n  width: 30px;\n  height: 30px;\n  background-position: -240px -60px;\n}\n\n.ico-coupon {\n  width: 30px;\n  height: 30px;\n  background-position: -270px -60px;\n}\n\n.ico-good {\n  width: 30px;\n  height: 30px;\n  background-position: -300px -60px;\n}\n\n.ico-sidelogo {\n  width: 136px;\n  height: 20px;\n  background-position: -210px -90px;\n}\n\n/* Header */\n.ico-menu {\n  position: absolute;\n  left: calc(50% - 12px);\n  top: calc(50% - 12px);\n  width: 24px;\n  height: 24px;\n  background-position: -210px -30px;\n}\n\n.ico-new {\n  position: absolute;\n  top: 13px;\n  right: 4px;\n  width: 4px;\n  height: 4px;\n  background-color: #fa4637;\n  border-radius: 50%;\n}\n\n.ico-logo {\n  position: absolute;\n  left: calc(50% - 81px);\n  top: calc(50% - 12px);\n  width: 163px;\n  height: 24px;\n  background-image: url(https://t1.kakaocdn.net/estoreweb/images/20210728172518/m/ico_comm_201125.png);\n  background-position: -210px 0;\n}\n\n.ico-search {\n  position: absolute;\n  left: calc(50% - 12px);\n  top: calc(50% - 12px);\n  width: 24px;\n  height: 24px;\n  background-position: -260px -30px;\n}\n\n.ico-remove {\n  width: 15px;\n  height: 15px;\n  background-image: url(https://t1.kakaocdn.net/estoreweb/images/20210728172518/m/ico_comm_201125.png);\n  background-position: -350px -90px;\n}\n\n.ico-copy {\n  width: 9px;\n  height: 9px;\n  background-position: -310px -30px;\n}\n\n.ico-arr {\n  width: 7px;\n  height: 6px;\n  background-position: -300px -30px;\n}\n\n.footer__check:checked + .footer__link-copy .ico-arr {\n  transform: rotateX(180deg);\n}\n\n.ico-movetop {\n  width: 44px;\n  height: 44px;\n  background-position: -350px -30px;\n}\n\n.ico-card {\n  position: absolute;\n  top: 60px;\n  left: 50%;\n  width: 75px;\n  height: 75px;\n  background-position: 0px 0px;\n  transform: translateX(-50%);\n}\n\n.ico-faq-open {\n  position: absolute;\n  right: 25px;\n  top: 23px;\n  width: 14px;\n  height: 9px;\n  background-position: 0 -80px;\n  transform: rotateX(180deg);\n}\n\nli.on .ico-faq-open {\n  transform: rotateX(0deg);\n}\n\n@media screen and (min-width: 768px) {\n  .ico-menu {\n    background-position: -210px -30px;\n  }\n\n  .ico-logo {\n    left: calc(50% - 95px);\n    top: calc(50% - 14px);\n    width: 190px;\n    height: 28px;\n    background-position: -210px 0;\n  }\n\n  .ico-new {\n    top: 18px;\n    right: 6px;\n    background-color: #fa4637;\n  }\n\n  .ico-search {\n    background-position: -260px -30px;\n  }\n\n  .ico-remove {\n    width: 20px;\n    height: 20px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: -350px -90px;\n  }\n\n  .btn-remove:hover .ico-remove {\n    background-position: -390px -90px;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".topbnr {\n  position: fixed;\n  width: 100%;\n  height: var(--h-topbnr);\n  background-color: var(--bgc-topbnr);\n  z-index: var(--z-topbnr);\n}\n\n.topbnr--hide {\n  display: none;\n}\n\n.topbnr__inner {\n  position: relative;\n  width: 100%;\n  max-width: 964px;\n  margin: 0 auto;\n  padding: 0 4.6rem 0 2rem;\n}\n\n.topbnr__link {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.topbnr__text {\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 300;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.topbnr__icon {\n  width: 50px;\n  margin-left: 1rem;\n}\n\n@media screen and (min-width: 768px) {\n  .topbnr__inner {\n    padding: 0;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-close-topbnr {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  width: 40px;\n  height: 100%;\n}\n\n.btn-open-sidemenu,\n.btn-open-search {\n  position: relative;\n  width: 40px;\n}\n\n.btn-open-profile {\n  width: 48px;\n  display: none;\n}\n\n.btn-remove {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: none;\n  padding: 1rem 0.7rem;\n}\n\n.btn-remove--show {\n  display: block;\n}\n\n.btn-cancel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 56px;\n  line-height: 5.4rem;\n}\n\n.btn-logout {\n  width: 100%;\n  padding: 1.4rem 0;\n  font-size: 1.2rem;\n  background-color: var(--c-white);\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.btn-search {\n  display: none;\n}\n\n.btn-movetop {\n  margin: 2rem 0;\n}\n\n.btn-next {\n  width: 100%;\n  height: 50px;\n  color: rgba(0, 0, 0, 0.2);\n  background-color: rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n}\n\n.btn-next--active {\n  color: var(--fc-title);\n  background-color: var(--bgc-kakao);\n}\n\n.btn-tab {\n  background-color: var(--c-white);\n  padding: 0.6rem 1.4rem;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 2rem;\n}\n\n.faq__item-tab--on .btn-tab {\n  color: #fff;\n  font-weight: 500;\n  background-color: #3b3b3b;\n}\n\n.btn-faq {\n  text-align: left;\n  padding: 0 4rem 0 2rem;\n  width: 100%;\n  height: 55px;\n  font-size: 1.5rem;\n  background-color: #fff;\n}\n\n.faq__item-faq.on .btn-faq {\n  font-weight: bold;\n}\n\n@media screen and (min-width: 768px) {\n  .btn-close-topbnr,\n  .btn-open-sidemenu,\n  .btn-open-search {\n    width: 44px;\n  }\n\n  .btn-open-profile {\n    display: block;\n  }\n\n  .btn-remove {\n    position: absolute;\n    top: 0;\n    right: 50px;\n    padding: 1.6rem 0.7rem;\n  }\n\n  .btn-cancel {\n    display: none;\n  }\n\n  .btn-search {\n    position: absolute;\n    top: 0;\n    right: 13px;\n    display: block;\n    width: 44px;\n    height: 100%;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .btn-logout:hover {\n    background-color: rgba(0, 0, 0, 0.02);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Mobile 768 Tablet 1024 Desktop */\n  /* Height */\n  --h-nav: 50px;\n\n  /* Color Palette*/\n  /* Common Color */\n  --c-white: #fff;\n  --c-black: #000;\n\n  /* Font Color */\n  --fc-title: #191919;\n  --fc-text: #808080;\n  --fc-nav: #999999;\n  --fc-new: #fa4637;\n  --fc-illust: #b1e08b;\n  --fc-message: #c0c2f9;\n  --fc-animal: #fcbc8b;\n\n  /* Background Colors */\n  --bgc-kakao: #ffeb2d;\n  --bgc-topbnr: #af88bd;\n  --bgc-homebnr-1: #91b6d0;\n  --bgc-homebnr-2: #f2abb9;\n  --bgc-newbnr: #ffe56a;\n  --bgc-hotbnr: #6cccff;\n  --bgc-stylebnr: #ff8252;\n  --bgc-mypagebnr: #6195ef;\n  --bgc-side-hover: #fafafa;\n  --bgc-new: #fa4637;\n  --bgc-search: #fafafa;\n  --bgc-section: #fafafa;\n  /* (+opacity: .3) rgba와 달리 상속됨 */\n  --bgc-overlay: #191919;\n\n  /* z-index */\n  --z-wrap: 1000;\n  --z-topbnr: 999;\n  --z-header: 100;\n  --z-sidemenu: 610;\n  --z-sidemenu-overlay: 600;\n  --z-nav: 450;\n  --z-search: 510;\n  --z-search-overlay: 500;\n  --z-profile: 550;\n  --z-main: -1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --h-header: 50px;\n}\n\n.header {\n  position: fixed;\n  top: var(--h-topbnr);\n  width: 100%;\n  height: 50px;\n  background-color: var(--c-white);\n}\n\n.header__inner {\n  width: 100%;\n  height: 50px;\n  padding: 0 0.8rem;\n  display: flex;\n}\n\n.header__title {\n  flex: 1;\n  height: 50px;\n  text-align: center;\n}\n\n.header__link-home {\n  position: relative;\n  display: inline-block;\n  width: 210px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.header__user-thumb {\n  width: 28px;\n  border-radius: 12px;\n}\n\n@media screen and (min-width: 768px) {\n  :root {\n    --h-header: 60px;\n  }\n\n  .header {\n    height: 60px;\n  }\n\n  .header__inner {\n    height: 60px;\n  }\n\n  .header__title {\n    height: 60px;\n    padding-left: 4.4rem;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32f35f22f2b3af869f0a.png";

/***/ }),
/* 19 */
/***/ (() => {

const topbnr = document.querySelector('#js-topbnr');
const btnCloseTopbnr = document.querySelector('#js-close-topbnr');

const handleCloseTopbnr = () => {
  // localStorage.setItem('topbnr', 'hidden');
  topbnr.classList.add('topbnr--hide');
  document.documentElement.style.setProperty('--h-topbnr', '0px');
};
if (btnCloseTopbnr) btnCloseTopbnr.addEventListener('click', handleCloseTopbnr);

if (localStorage.getItem('topbnr') === 'hidden') {
  document.documentElement.style.setProperty('--h-topbnr', '0px');
  if (topbnr) topbnr.classList.add('topbnr--hide');
} else {
  document.documentElement.style.setProperty('--h-topbnr', '50px');
  if (topbnr) topbnr.classList.remove('topbnr--hide');
}

if (!topbnr) document.documentElement.style.setProperty('--h-topbnr', '0px');


/***/ }),
/* 20 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n  position: relative;\n  top: 0;\n  height: 50px;\n  background-color: var(--c-white);\n  overflow: hidden;\n  z-index: var(--z-nav);\n  transition: height 0.3s ease;\n}\n\n.nav--hide {\n  height: 0;\n}\n\n.nav--fixed {\n  height: 50px;\n}\n\n.nav__list {\n  max-width: 616px;\n  margin: 0 auto;\n  clear: both;\n}\n\n.nav__item {\n  width: 25%;\n  float: left;\n}\n\n.nav__link {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  color: var(--fc-text);\n  font-size: 1.5rem;\n  text-align: center;\n  line-height: 5rem;\n}\n\n.nav__item--on .nav__link {\n  color: var(--fc-title);\n  font-weight: bold;\n}\n\n.nav__item--on .nav__link::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: '';\n  width: 100%;\n  height: 2px;\n  background-color: #191919;\n}\n\n@media screen and (min-width: 1024px) {\n  .nav--hide {\n    height: 50px;\n  }\n\n  .nav__item:hover .nav__link {\n    color: var(--fc-title);\n    font-weight: bold;\n  }\n\n  .nav__item:hover .nav__link::after {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    content: '';\n    width: 100%;\n    height: 2px;\n    background-color: #191919;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 21 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidemenu {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 290px;\n  height: calc(100vh - var(--h-topbnr));\n  background-color: var(--c-white);\n  z-index: var(--z-sidemenu);\n}\n\n.sidemenu__inner {\n  height: calc(100% - 54px);\n  padding: 1.8rem 0 1.2rem;\n}\n\n.sidemenu--hide {\n  display: none;\n}\n\n.sidemenu__profile {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 1.2rem 2rem;\n}\n\n.sidemenu__user-thumb {\n  width: 56px;\n  height: 56px;\n  border-radius: 24px;\n}\n\n.sidemenu__user-info {\n  flex: 1;\n  line-height: 2.4rem;\n}\n\n.sidemenu__user-name {\n  display: block;\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n\n.sidemenu__user-email {\n  color: var(--fc-text);\n  line-height: 1.6rem;\n}\n\n.sidemenu__list-mypage {\n  display: flex;\n  padding: 0 1.1rem;\n}\n\n.sidemenu__item-mypage {\n  width: 25%;\n  padding: 1.2rem 0;\n}\n\n.sidemenu__link-mypage {\n  position: relative;\n  display: block;\n  text-align: center;\n}\n\n.sidemenu__txt-mypage {\n  display: block;\n  margin-top: 0.6rem;\n}\n\n.sidemenu__txt-count {\n  display: inline-block;\n  margin-top: 0.2rem;\n  padding-left: 0.2rem;\n  vertical-align: top;\n  color: var(--fc-new);\n}\n\n.sidemenu__list-nav {\n  margin-top: 0.9rem;\n  padding: 1.3rem 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n}\n\n.sidemenu__item-nav {\n  height: 50px;\n}\n\n.sidemenu__link-nav {\n  display: block;\n  width: 100%;\n  padding-left: 2rem;\n  font-size: 1.6rem;\n  line-height: 5rem;\n}\n\n.sidemenu__list-aside {\n  padding-top: 1.3rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n}\n\n.sidemenu__item-aside {\n  height: 40px;\n}\n\n.sidemenu__link-aside {\n  display: block;\n  width: 100%;\n  padding-left: 2rem;\n  color: var(--fc-text);\n  font-size: 1.4rem;\n  line-height: 4rem;\n}\n\n.sidemenu__corp {\n  position: relative;\n  height: 54px;\n  margin-top: auto;\n  padding: 1.2rem 1rem;\n  background-color: var(--c-white);\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.sidemenu__link-shop {\n  display: inline-block;\n  padding: 0.5rem 1rem 0.5rem;\n}\n\n.sidemenu__link-corp {\n  position: absolute;\n  top: 12px;\n  right: 10px;\n  display: inline-block;\n  padding: 0.6rem 1rem 0.5rem;\n  color: var(--fc-text);\n  font-size: 1.1rem;\n  font-weight: 300;\n}\n\n.sidemenu-overlay {\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - var(--h-topbnr));\n  background-color: var(--bgc-overlay);\n  opacity: 0.3;\n  z-index: var(--z-sidemenu-overlay);\n}\n\n.sidemenu-overlay--hide {\n  display: none;\n}\n\n@media screen and (min-width: 1024px) {\n  :is(.sidemenu__item-nav, .sidemenu__item-aside):hover {\n    background-color: var(--bgc-side-hover);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 22 */
/***/ (() => {

const kakaoWrap = document.querySelector('#js-kakao-wrap');
const sidemenu = document.querySelector('#js-sidemenu');
const sidemenuOverlay = document.querySelector('#js-sidemenu-overlay');
const btnOpenSidemenu = document.querySelector('#js-open-sidemenu');
const nav = document.querySelector('#js-nav');
const profile = document.querySelector('#js-profile');

const handleOpenSidemenu = () => {
  // 최상단으로 이동
  kakaoWrap.scrollTo(0, 0);
  nav.classList.remove('nav--hide');
  window.tempY = 0;
  profile.classList.remove('profile--show');
  window.isProfileOpen = false;

  kakaoWrap.classList.add('kakao-wrap--sidemenu-overlay');
  sidemenu.classList.remove('sidemenu--hide');
  sidemenuOverlay.classList.remove('sidemenu-overlay--hide');
  sidemenuOverlay.addEventListener('click', handleCloseSidemenu);
};

const handleCloseSidemenu = () => {
  kakaoWrap.classList.remove('kakao-wrap--sidemenu-overlay');
  sidemenu.classList.add('sidemenu--hide');
  sidemenuOverlay.classList.add('sidemenu-overlay--hide');
  sidemenuOverlay.removeEventListener('click', handleCloseSidemenu);
};

if (btnOpenSidemenu) btnOpenSidemenu.addEventListener('click', handleOpenSidemenu);

// 사이드메뉴 버튼
const btnOpenNumberPopup = document.querySelector('#js-open-popup');

const handleOpenPopup = () => {
  window.open('number.html', '카카오 이모티콘샵', 'width=500, height=770');
};

if (btnOpenNumberPopup) btnOpenNumberPopup.addEventListener('click', handleOpenPopup);


/***/ }),
/* 23 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(24), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(25), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search {\n  position: fixed;\n  top: var(--h-topbnr);\n  left: 0;\n  width: 100%;\n  height: 54px;\n  background-color: var(--c-white);\n  z-index: var(--z-search);\n}\n\n.search--hide {\n  display: none;\n}\n\n.search__inner {\n  position: relative;\n  padding: 1rem 5.8rem 1rem 1.8rem;\n}\n\n.search__form {\n  position: relative;\n  height: 34px;\n  padding: 1rem 3.4rem 1rem 1.2rem;\n  background-color: rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n}\n\n.search__input {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.search__input::-webkit-search-cancel-button {\n  display: none;\n}\n\n.search-overlay {\n  position: absolute;\n  top: var(--h-header);\n  width: 100%;\n  height: calc(100vh - var(--h-topbnr) - var(--h-header));\n  background-color: var(--bgc-overlay);\n  opacity: 0.3;\n  z-index: var(--z-search-overlay);\n}\n\n.search-overlay--hide {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .search {\n    position: absolute;\n    top: calc(var(--h-topbnr) + 60px);\n    left: 0;\n    height: 116px;\n    background-color: var(--bgc-section);\n  }\n\n  .search__inner {\n    position: relative;\n    width: 100%;\n    margin: 0 auto;\n    padding: 3rem 10rem;\n  }\n\n  .search__inner::before {\n    position: absolute;\n    top: 0;\n    left: 30px;\n    content: '';\n    width: 130px;\n    height: 117px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n    background-size: 130px 117px;\n    z-index: -1;\n  }\n\n  .search__inner::after {\n    position: absolute;\n    bottom: 0;\n    right: 30px;\n    content: '';\n    width: 130px;\n    height: 117px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n    background-size: 130px 117px;\n    z-index: -1;\n  }\n\n  .search__form {\n    position: relative;\n    width: 568px;\n    height: 54px;\n    margin: 0 auto;\n    padding: 0 9rem 0 1.4rem;\n    background-color: var(--c-white);\n    border: 1px solid rgba(0, 0, 0, 0.08);\n    border-radius: 8px;\n  }\n\n  .search__input {\n    width: 100%;\n    height: 100%;\n    font-size: 1.6rem;\n    background-color: transparent;\n    border: 0;\n    outline: 0;\n  }\n\n  .search__input::-webkit-search-cancel-button {\n    display: none;\n  }\n\n  .search-overlay {\n    top: calc(var(--h-header) + 50px);\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .search__inner {\n    width: 944px;\n    margin: 0 auto;\n    padding: 3rem 16.4rem;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e4682483e9b6e12c4a00.png";

/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "efe081abc7cb5e357870.png";

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);


const kakaoWrap = document.querySelector('#js-kakao-wrap');
const nav = document.querySelector('#js-nav');
const profile = document.querySelector('#js-profile');
const search = document.querySelector('#js-search');
const searchOverlay = document.querySelector('#js-search-overlay');
const inputSearch = document.querySelector('#js-input-search');
const btnOpenSearch = document.querySelector('#js-open-search');
const btnRemoveInput = document.querySelector('#js-remove-input');
const btnCancelSearch = document.querySelector('#js-cancel-search');

const handleOpenSearch = () => {
  // 최상단으로 이동
  kakaoWrap.scrollTo(0, 0);
  nav.classList.remove('nav--hide');
  window.tempY = 0;
  profile.classList.remove('profile--show');
  window.isProfileOpen = false;

  kakaoWrap.classList.add('kakao-wrap--search-overlay');
  search.classList.remove('search--hide');
  searchOverlay.classList.remove('search-overlay--hide');
  searchOverlay.addEventListener('click', handleCloseSearch);
  inputSearch.addEventListener('input', (0,_lib_throttle__WEBPACK_IMPORTED_MODULE_0__["default"])(onChangeSearch, 300));
  btnRemoveInput.addEventListener('click', handleRemoveInput);
  btnCancelSearch.addEventListener('click', handleCloseSearch);
};

const handleCloseSearch = () => {
  kakaoWrap.classList.remove('kakao-wrap--search-overlay');
  search.classList.add('search--hide');
  searchOverlay.classList.add('search-overlay--hide');
  searchOverlay.removeEventListener('click', handleCloseSearch);
  inputSearch.removeEventListener('input', (0,_lib_throttle__WEBPACK_IMPORTED_MODULE_0__["default"])(onChangeSearch, 300));
  btnRemoveInput.removeEventListener('click', handleRemoveInput);
  btnCancelSearch.removeEventListener('click', handleCloseSearch);
  handleRemoveInput();
};

const handleRemoveInput = () => {
  inputSearch.value = '';
  btnRemoveInput.classList.remove('btn-remove--show');
};

const onChangeSearch = (e) => {
  if (e.target.value.length >= 1) btnRemoveInput.classList.add('btn-remove--show');
  else btnRemoveInput.classList.remove('btn-remove--show');
};

if (btnOpenSearch) btnOpenSearch.addEventListener('click', handleOpenSearch);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);


const nav = document.querySelector('#js-nav');
const wrap = document.querySelector('#js-kakao-wrap');

window.tempY = 0;

const handleToggleNav = () => {
  if (window.innerWidth >= 1024) {
    nav.classList.remove('nav--hide');
  } else {
    if (tempY > wrap.scrollTop) {
      nav.classList.remove('nav--hide');
    } else if (tempY < wrap.scrollTop && wrap.scrollTop >= 50) {
      nav.classList.add('nav--hide');
    }
    tempY = wrap.scrollTop;
  }
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    if (nav) nav.classList.remove('nav--hide');
  }
};

if (window) window.addEventListener('resize', (0,_lib_throttle__WEBPACK_IMPORTED_MODULE_0__["default"])(handleResize), 300);
if (wrap) wrap.addEventListener('wheel', (0,_lib_throttle__WEBPACK_IMPORTED_MODULE_0__["default"])(handleToggleNav, 300));


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ throttle)
/* harmony export */ });
function throttle(callback, delay) {
  let timer = null;

  return (e) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(e);
      timer = null;
    }, delay);
  };
}


/***/ }),
/* 29 */
/***/ (() => {

const kakaoWrap = document.querySelector('#js-kakao-wrap');
const btnMovetop = document.querySelector('#js-movetop');
const nav = document.querySelector('#js-nav');

if (btnMovetop) {
  btnMovetop.addEventListener('click', () => {
    kakaoWrap.scrollTo(0, 0);
    window.tempY = 0;
    nav.classList.remove('nav--hide');
  });
}


/***/ }),
/* 30 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer__inner {\n  max-width: 1025px;\n  margin: 0 auto;\n  padding: 0 2.4rem;\n  color: var(--fc-text);\n  font-weight: 300;\n}\n\n.footer__service {\n  padding-top: 3rem;\n}\n\n.footer__link-service {\n  display: block;\n  margin-right: 2rem;\n  padding-bottom: 1rem;\n  font-size: 1.3rem;\n}\n\n.footer__desc-service {\n  padding-top: 1rem;\n  font-size: 1.2rem;\n}\n\n.footer__copy {\n  padding: 1rem 0;\n}\n\n.footer__txt-copy {\n  margin: 0 0.4rem;\n}\n\n.footer__check:checked ~ .footer__list-copy {\n  height: 0;\n}\n\n.footer__list-copy {\n  overflow: hidden;\n}\n\n.footer__item-copy {\n  padding-top: 1rem;\n  line-height: 2rem;\n}\n\n.footer__title-copy {\n  display: inline-block;\n  padding-bottom: 0.5rem;\n  color: var(--fc-title);\n  font-weight: 400;\n}\n\n.footer__movetop {\n  text-align: center;\n}\n\n@media screen and (min-width: 768px) {\n  .footer__link-service {\n    float: left;\n  }\n\n  .footer__desc-service {\n    clear: both;\n  }\n\n  .footer__item-copy {\n    float: left;\n    width: 50%;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 31 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".number-area {\n  width: 100%;\n  height: 100%;\n  padding-top: 50px;\n  background-color: var(--c-white);\n\n  /* Variables */\n  --h-header: 0px;\n  --h-nav: 0px;\n}\n\n.number__header {\n  position: relative;\n  width: 100%;\n  height: 116px;\n  padding-top: 2.4rem;\n  text-align: center;\n  background-color: var(--bgc-kakao);\n}\n\n.number__title {\n  font-size: 1.5rem;\n}\n\n.number__form {\n  padding: 4rem 3rem;\n}\n\n.number__input {\n  width: 100%;\n  padding: 1.2rem 1rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: 0;\n}\n\n.number__input::placeholder {\n  color: var(--fc-text);\n}\n\n.number__tit-caution {\n  display: inline-block;\n  margin-top: 4rem;\n  margin-bottom: 1rem;\n  font-size: 1.7rem;\n}\n\n.number__item-caution {\n  position: relative;\n  margin-top: 1rem;\n  padding-left: 1.5rem;\n  color: var(--fc-text);\n  line-height: 1.8rem;\n  text-align: justify;\n}\n\n.number__item-caution::before {\n  position: absolute;\n  content: '·';\n  left: 3px;\n  top: 0;\n}\n\n.number__button {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 2rem 3rem;\n  background-color: var(--c-white);\n}\n\n@media screen and (min-width: 1024px) {\n  .number-area {\n    padding-top: 60px;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);


const inputNumber = document.querySelector('#js-number-input');
const btnNext = document.querySelector('#js-next');

const onChange = (e) => {
  if (e.target.value.length >= 10) {
    btnNext.classList.add('btn-next--active');
  } else {
    btnNext.classList.remove('btn-next--active');
  }
};

if (inputNumber) inputNumber.addEventListener('input', (0,_lib_throttle__WEBPACK_IMPORTED_MODULE_0__["default"])(onChange, 300));


/***/ }),
/* 33 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".profile {\n  position: absolute;\n  top: 55px;\n  right: 20px;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  padding-top: 1rem;\n  background-color: var(--c-white);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  z-index: var(--z-profile);\n}\n\n.profile--show {\n  display: flex;\n}\n\n.profile__image {\n  width: 38px;\n  margin: 1rem 0;\n  border-radius: 17px;\n}\n\n.profile__name {\n  margin-bottom: 0.4rem;\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.profile__email {\n  margin-bottom: 2rem;\n  color: var(--fc-text);\n  font-size: 1.1rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 34 */
/***/ (() => {

const profile = document.querySelector('#js-profile');
const btnOpenProfile = document.querySelector('#js-open-profile');

window.isProfileOpen = false;

const handleOpenProfile = (e) => {
  if (window.isProfileOpen) {
    profile.classList.remove('profile--show');
    window.isProfileOpen = false;
  } else {
    profile.classList.add('profile--show');
    window.isProfileOpen = true;
  }
  e.stopPropagation();
};

const handleCloseProfile = (e) => {
  if (window.isProfileOpen && !e.target.closest('.profile')) {
    profile.classList.remove('profile--show');
    window.isProfileOpen = false;
  }
};

const handleProfileResize = () => {
  if (window.innerWidth > 767 && window.isProfileOpen) {
    profile.classList.add('profile--show');
  } else {
    profile.classList.remove('profile--show');
  }
};

if (btnOpenProfile) btnOpenProfile.addEventListener('click', handleOpenProfile);
if (profile) document.addEventListener('click', handleCloseProfile);
if (profile) window.addEventListener('resize', handleProfileResize);


/***/ }),
/* 35 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".faq {\n  background-color: var(--bgc-section);\n}\n\n.faq-top {\n  position: relative;\n}\n\n.faq__title {\n  padding: 3rem 2rem 0;\n}\n\n.faq__area-tab {\n  padding: 1.5rem 0;\n}\n\n.faq__list-tab {\n  transform: translateX(0px);\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.out-left {\n  transition: transform 0.3s ease;\n}\n\n.faq__item-tab {\n  display: inline-block;\n  padding-right: 0.8rem;\n}\n\n.faq__item-tab:first-child {\n  padding-left: 2rem;\n}\n\n.faq__image {\n  display: none;\n  position: absolute;\n  right: 40px;\n  bottom: 0;\n  width: 90px;\n}\n\n.faq__list-faq {\n  padding: 1rem;\n  padding-top: 0;\n  display: none;\n}\n\n.faq__item-faq {\n  position: relative;\n  width: 100%;\n  margin-bottom: 0.8rem;\n}\n\n.faq__desc {\n  background-color: #fff;\n  height: 0;\n  overflow: hidden;\n}\n\n.faq__text {\n  text-align: justify;\n  line-height: 1.8rem;\n  color: var(--fc-text);\n}\n\n.faq__item-faq.on .faq__desc {\n  padding: 1rem;\n  padding-top: 0;\n  height: 100%;\n}\n\n.faq__list-faq.on {\n  display: block;\n}\n\n@media screen and (min-width: 768px) {\n  .faq {\n    padding: 4rem;\n    max-width: 1024px;\n    margin: 0 auto;\n  }\n\n  .faq__list-tab {\n    margin-top: 1.7rem;\n  }\n\n  .faq__title {\n    font-size: 2.4rem;\n  }\n\n  .faq__image {\n    display: block;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 36 */
/***/ (() => {

const tabFAQ = document.querySelector('#js-faq-tab');
const tabFAQItems = [...tabFAQ.children];
const allItemWidth = [...tabFAQ.children].reduce((cur, acc) => {
  return cur + acc.clientWidth;
}, 0);
const listFAQ = document.querySelectorAll('.faq__list-faq');
const itemFAQ = document.querySelectorAll('#js-oepn-faq');

let startX;
let now;
let wrapperWidth = tabFAQ.clientWidth;
let evented;

// function addDragScroll(element, selector, padding) {
//   console.log(2131);
//   const allItemsWidth = [...element.children].reduce((cur, acc) => cur + acc.ClientWidth, 0);
//   let wrapperWidth = element.clientWidth;
//   let startX;
//   let elementX;

//   const dargStart = (e) => {
//     elementX = Number(element.style.transform.replace(/[^-\d]/g, ''));
//     if (e.target.closest(selector)) {
//       startX = e.x;
//     }
//     window.addEventListener('mousemove', dragMove);
//     window.addEventListener('mouseup', dragFinish);
//   };

//   const dragMove = (e) => {
//     if (e.x > startX) {
//       element.style.transform = `translateX(${elementX + Math.abs(startX - e.x)}px)`;
//     } else if (e.x < startX) {
//       element.style.transform = `translateX(${elementX - Math.abs(startX - e.x)}px)`;
//     }
//   };

//   const dragFinish = () => {
//     const movable = wrapperWidth - allItemsWidth;
//     elementX = Number(element.style.transform.replace(/[^-\d]/g, ''));

//     if (elementX !== 0 && allItemsWidth <= wrapperWidth) {
//       element.classList.add('out-left');
//       element.style.transform = `translateX(0px)`;
//       setTimeout(() => {
//         element.classList.remove('out-left');
//       }, 300);
//     } else if (allItemsWidth > wrapperWidth) {
//       if (elementX > 0) {
//         element.classList.add('out-left');
//         element.style.transform = `translateX(0px)`;
//         setTimeout(() => {
//           element.classList.remove('out-left');
//         }, 300);
//       } else if (elementX < movable - padding) {
//         element.classList.add('out-left');
//         element.style.transform = `translateX(${movable - padding}px)`;
//         setTimeout(() => {
//           element.classList.remove('out-left');
//         }, 300);
//       }
//     }
//     window.removeEventListener('mousemove', dragMove);
//     window.removeEventListener('mouseup', dragFinish);
//   };
// }

// addDragScroll(tabFAQ, '#js-faq-tab', 28);

// function removeDragScroll(element) {}

const handleDragStart = (e) => {
  now = Number(tabFAQ.style.transform.replace(/[^-\d]/g, ''));
  if (e.target.closest('#js-faq-tab')) {
    startX = e.x;
    window.addEventListener('mousemove', handleDragSlide);
    window.addEventListener('mouseup', handleDragFinish);
  }
};

const handleDragSlide = (e) => {
  if (e.x > startX) {
    tabFAQ.style.transform = `translateX(${now + Math.abs(startX - e.x)}px)`;
  } else if (e.x < startX) {
    tabFAQ.style.transform = `translateX(${now - Math.abs(startX - e.x)}px)`;
  }
};

const handleDragFinish = (e) => {
  window.removeEventListener('mousemove', handleDragSlide);
  window.removeEventListener('mouseup', handleDragFinish);
  now = Number(tabFAQ.style.transform.replace(/[^-\d]/g, ''));

  // 조건 추가하긴 해야 함 (더 길 때)
  if (now !== 0 && allItemWidth <= wrapperWidth) {
    tabFAQ.classList.add('out-left');
    tabFAQ.style.transform = `translateX(0px)`;
    setTimeout(() => {
      tabFAQ.classList.remove('out-left');
    }, 300);
  } else if (allItemWidth > wrapperWidth) {
    if (now > 0) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(0px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
      // 래퍼 - 요소 총 길이 - 좌우 끝 패딩
    } else if (now < wrapperWidth - allItemWidth - 28) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(${wrapperWidth - allItemWidth - 28}px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
    }
  }
};

const handleResize = () => {
  if (now !== 0 && allItemWidth <= wrapperWidth) {
    tabFAQ.classList.add('out-left');
    tabFAQ.style.transform = `translateX(0px)`;
    setTimeout(() => {
      tabFAQ.classList.remove('out-left');
    }, 300);
  } else if (allItemWidth > wrapperWidth) {
    now = Number(tabFAQ.style.transform.replace(/[^-\d]/g, ''));
    if (now > 0) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(0px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
      // 래퍼 - 요소 총 길이 - 좌우 끝 패딩
    } else if (now < wrapperWidth - allItemWidth - 28) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(${wrapperWidth - allItemWidth - 28}px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
    }
  }
  wrapperWidth = tabFAQ.clientWidth;

  if (window.innerWidth > 768) {
    if (evented !== false) {
      window.removeEventListener('mousedown', handleDragStart);
      // window.removeEventListener('mousemove', handleDragSlide);
      // window.removeEventListener('mouseup', handleDragFinish);
      evented = false;
    }
  } else {
    if (evented === false) {
      window.addEventListener('mousedown', handleDragStart);
      // window.addEventListener('mousemove', handleDragSlide);
      // window.addEventListener('mouseup', handleDragFinish);
      evented = true;
    }
  }
};

if (window.innerWidth < 768) {
  window.addEventListener('mousedown', handleDragStart);
  evented = true;
} else {
  evented = false;
}
window.addEventListener('resize', handleResize);

tabFAQ.addEventListener('click', (e) => {
  if (window.innerWidth > 767 || e.x === startX) {
    switch (e.target.dataset.category) {
      case 'info':
        tabFAQItems.forEach((e) => e.classList.remove('faq__item-tab--on'));
        tabFAQItems[0].classList.add('faq__item-tab--on');
        listFAQ.forEach((e) => e.classList.remove('on'));
        listFAQ[0].classList.add('on');
        break;
      case 'etc':
        tabFAQItems.forEach((e) => e.classList.remove('faq__item-tab--on'));
        tabFAQItems[1].classList.add('faq__item-tab--on');
        listFAQ.forEach((e) => e.classList.remove('on'));
        listFAQ[1].classList.add('on');
        break;
    }
  }
});

itemFAQ.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.closest('li').classList.toggle('on');
  });
});


/***/ })
/******/ 	]);
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_topbnr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _components_topbnr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_topbnr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidemenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _components_sidemenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_sidemenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_profile__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_footer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _screens_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _screens_faq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var _screens_faq__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_screens_faq__WEBPACK_IMPORTED_MODULE_8__);
// Stylesheet


// Components







// Screens



})();

/******/ })()
;