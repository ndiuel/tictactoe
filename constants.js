"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.UNDO = exports.RESET = exports.RESTART = exports.MOVE = exports.CHANGEAI = exports.CHANGETAB = exports.CREATE = exports.tabs = exports.HOME = exports.MULTI = exports.SINGLE = void 0;

var _initialState;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SINGLE = "single";
exports.SINGLE = SINGLE;
var MULTI = "multi";
exports.MULTI = MULTI;
var HOME = "home";
exports.HOME = HOME;
var tabs = [SINGLE, MULTI];
exports.tabs = tabs;
var CREATE = "create";
exports.CREATE = CREATE;
var CHANGETAB = "changeTab";
exports.CHANGETAB = CHANGETAB;
var CHANGEAI = "changeAi";
exports.CHANGEAI = CHANGEAI;
var MOVE = "move";
exports.MOVE = MOVE;
var RESTART = "restart";
exports.RESTART = RESTART;
var RESET = "reset";
exports.RESET = RESET;
var UNDO = "undo";
exports.UNDO = UNDO;
var initialState = (_initialState = {
  tabs: tabs
}, _defineProperty(_initialState, SINGLE, {
  easy: false,
  currentId: null,
  games: {},
  currentGame: function currentGame() {
    return this.games[this.currentId];
  }
}), _defineProperty(_initialState, MULTI, {
  easy: false,
  currentId: null,
  games: {},
  currentGame: function currentGame() {
    return this.games[this.currentId];
  }
}), _defineProperty(_initialState, "current", HOME), _defineProperty(_initialState, "HOME", {}), _defineProperty(_initialState, "currentTab", function currentTab() {
  return this[this.current];
}), _initialState);
exports.initialState = initialState;
