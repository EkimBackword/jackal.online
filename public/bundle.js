/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var map_1 = __webpack_require__(3);
	var menu_1 = __webpack_require__(4);
	ReactDOM.render((React.createElement("div", { className: "wrapper layout-fill layout-row" },
	    React.createElement(menu_1.default, null),
	    React.createElement(map_1.default, null))), document.getElementById('root'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Map = (function (_super) {
	    __extends(Map, _super);
	    function Map() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Map.prototype.render = function () {
	        var rows = [];
	        for (var j = 0; j < 13; j++) {
	            var column = [];
	            for (var i = 0; i < 13; i++) {
	                var sea = 'layout-column layout-align-center-center map__element';
	                var index = i + j * 12;
	                if (j == 0 || j == 12 || i == 0 || i == 12 ||
	                    index == 13 || index == 23 || index == 133 || index == 143) {
	                    sea += " map__element-sea";
	                }
	                else {
	                    sea += " map__element-land";
	                }
	                var ship = void 0;
	                if ((i == 6 && (j == 0 || j == 12)) ||
	                    (j == 6 && (i == 0 || i == 12))) {
	                    ship = React.createElement("div", { className: "ship" });
	                }
	                column.push(React.createElement("div", { className: sea, key: index }, ship));
	            }
	            rows.push(column);
	        }
	        return (React.createElement("div", { className: "map layout-fill layout-column layout-align-center-center flex-75" }, rows.map(function (i) {
	            return (React.createElement("div", { className: "layout-row" }, i.map(function (item) {
	                return item;
	            })));
	        })));
	    };
	    return Map;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Map;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Menu = (function (_super) {
	    __extends(Menu, _super);
	    function Menu() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Menu.prototype.render = function () {
	        return (React.createElement("div", { className: "menu layout-fill flex-25" },
	            React.createElement("h1", null, "This is menu!"),
	            React.createElement("button", { className: "btn btn-primary" }, "Start Game")));
	    };
	    return Menu;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Menu;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map