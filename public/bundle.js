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
	var menu_1 = __webpack_require__(7);
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
	var map_service_1 = __webpack_require__(4);
	var map_item_1 = __webpack_require__(8);
	var Map = (function (_super) {
	    __extends(Map, _super);
	    function Map(props) {
	        var _this = _super.call(this, props) || this;
	        _this.mapService = new map_service_1.MapService();
	        _this.generateMap();
	        return _this;
	    }
	    Map.prototype.generateMap = function (isOld) {
	        if (isOld === void 0) { isOld = true; }
	        this.rows = this.mapService.genStandartMap();
	    };
	    Map.prototype.render = function () {
	        return (React.createElement("div", { className: "map layout-fill layout-column layout-align-center-center flex-75" }, this.rows.map(function (i, ind) {
	            return (React.createElement("div", { key: ind, className: "layout-row" }, i.map(function (item, index) {
	                return (React.createElement("div", { key: index, className: "layout-column layout-align-center-center map__element" },
	                    React.createElement(map_item_1.MapItem, { item: item })));
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
	var item_1 = __webpack_require__(5);
	var consts_1 = __webpack_require__(6);
	var MapService = (function () {
	    function MapService() {
	    }
	    MapService.prototype.getRandomInt = function (min, max) {
	        return Math.floor(Math.random() * (max - min)) + min;
	    };
	    MapService.prototype.getRandomTileName = function (counterTile) {
	        var keys = Object.keys(counterTile).filter(function (key) { return counterTile[key] != 0; });
	        var index = this.getRandomInt(0, keys.length);
	        counterTile[keys[index]]--;
	        return keys[index];
	    };
	    MapService.prototype.genStandartMap = function () {
	        var rows = [];
	        var counterTile = consts_1.StandartGameTileCount;
	        var seaCounter = consts_1.seaTile;
	        for (var j = 0; j < 13; j++) {
	            var items = [];
	            for (var i = 0; i < 13; i++) {
	                var currentTile = new item_1.itemModel();
	                var index = i + j * 12;
	                if (j == 0 || j == 12 || i == 0 || i == 12 ||
	                    index == 13 || index == 23 || index == 133 || index == 143) {
	                    currentTile.name = "sea";
	                }
	                else {
	                    currentTile.name = this.getRandomTileName(counterTile);
	                }
	                if ((i == 6 && (j == 0 || j == 12)) ||
	                    (j == 6 && (i == 0 || i == 12))) {
	                    var ship = {
	                        name: "ship",
	                        address: i + "_" + j,
	                        canMove: true,
	                        ourColor: null,
	                        pirates: [],
	                        friendColor: null
	                    };
	                    ship.ourColor = ship.address == "6_0" ? consts_1.TEAM.black :
	                        ship.address == "0_6" ? consts_1.TEAM.red :
	                            ship.address == "12_6" ? consts_1.TEAM.white : consts_1.TEAM.yellow;
	                    currentTile.items.push(ship);
	                }
	                items.push(currentTile);
	            }
	            rows.push(items);
	        }
	        console.log(counterTile);
	        return rows;
	    };
	    MapService.prototype.genAdditionMap = function () {
	    };
	    return MapService;
	}());
	exports.MapService = MapService;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var itemModel = (function () {
	    function itemModel() {
	        this.items = [];
	    }
	    return itemModel;
	}());
	exports.itemModel = itemModel;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	exports.TEAM = {
	    "red": 'red',
	    "white": 'white',
	    "black": 'black',
	    "yellow": 'yellow'
	};
	exports.seaTile = 52;
	exports.StandartGameTileCount = {
	    "empty-1": 10, "empty-2": 10, "empty-3": 10, "empty-4": 10,
	    "arrow-1": 3, "arrow-2": 3, "arrow-3": 3, "arrow-4": 3, "arrow-5": 3, "arrow-6": 3, "arrow-7": 3,
	    "horse": 2,
	    "keg-of-rum": 4,
	    "rotate-2": 5, "rotate-3": 4, "rotate-4": 2, "rotate-5": 1,
	    "ice": 6,
	    "trap": 3,
	    "crocodile": 4,
	    "cannibal": 1,
	    "fort": 2,
	    "heal-fort": 1,
	    "coins-1": 5, "coins-2": 5, "coins-3": 3, "coins-4": 2, "coins-5": 1,
	    "aerostat": 2,
	    "airplane": 1,
	    "cannon": 2
	};
	exports.AdditionGameTileCount = {
	    "empty-1": 5, "empty-2": 4, "empty-3": 5, "empty-4": 4,
	    "arrow-1": 3, "arrow-2": 3, "arrow-3": 3, "arrow-4": 3, "arrow-5": 3, "arrow-6": 3, "arrow-7": 3,
	    "horse": 2,
	    "rotate-2": 5, "rotate-3": 4, "rotate-4": 2, "rotate-5": 1,
	    "ice": 6,
	    "trap": 3,
	    "crocodile": 4,
	    "cannibal": 1,
	    "fort": 2,
	    "heal-fort": 1,
	    "coins-1": 5, "coins-2": 5, "coins-3": 3, "coins-4": 2, "coins-5": 1,
	    "gold-box": 1,
	    "airplane": 1,
	    "karramba": 1,
	    "aerostat": 2,
	    "cannon": 2,
	    "lighthouse": 1,
	    "earthquake": 1,
	    "grass": 2,
	    "jungle": 3,
	    "ben-gunn": 1,
	    "missionary": 1,
	    "friday": 1,
	    "rum-1": 3, "rum-2": 2, "rum-3": 1,
	    "cave": 4,
	    "keg-of-rum": 4,
	};


/***/ },
/* 7 */
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
	    function Menu(props) {
	        var _this = _super.call(this, props) || this;
	        _this.flip = function () {
	            _this.setState({ isFlip: !_this.state.isFlip });
	        };
	        _this.state = {
	            isFlip: false,
	        };
	        return _this;
	    }
	    Menu.prototype.render = function () {
	        var flipContainer = this.state.isFlip ? "flip-container hover" : "flip-container";
	        return (React.createElement("div", { className: "menu layout-fill flex-25" },
	            React.createElement("h1", null, "This is menu!"),
	            React.createElement("button", { className: "btn btn-primary", onClick: this.flip }, "Flip"),
	            React.createElement("div", { className: flipContainer },
	                React.createElement("div", { className: "flipper" },
	                    React.createElement("div", { className: "front" }),
	                    React.createElement("div", { className: "back" })))));
	    };
	    return Menu;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Menu;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var MapItem = (function (_super) {
	    __extends(MapItem, _super);
	    function MapItem(props) {
	        var _this = _super.call(this, props) || this;
	        _this.flip = function () {
	            _this.setState({ isFlip: !_this.state.isFlip });
	        };
	        _this.state = {
	            isFlip: false,
	        };
	        return _this;
	    }
	    MapItem.prototype.render = function () {
	        var flipContainer = this.state.isFlip ? "flip-container" : "flip-container flip";
	        var styleFront = { backgroundImage: "url('../img/tile/" + this.props.item.name + ".png')" };
	        var styleBack = { backgroundImage: "url('../img/tile/back.png')" };
	        if (this.props.item.name == "sea") {
	            var items = this.props.item.items.filter(function (item) { return item.name == "ship"; });
	            var ship = items.length == 1 ? React.createElement("div", { className: 'ship', style: { backgroundColor: items[0].ourColor } }) : null;
	            return (React.createElement("div", { className: "layout-column layout-align-center-center map__element map__element-sea" }, ship));
	        }
	        return (React.createElement("div", { className: flipContainer, onClick: this.flip },
	            React.createElement("div", { className: "flipper" },
	                React.createElement("div", { className: "back", style: styleBack }),
	                React.createElement("div", { className: "front", style: styleFront }))));
	    };
	    return MapItem;
	}(React.Component));
	exports.MapItem = MapItem;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map