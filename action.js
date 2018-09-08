"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.move = exports.undo = exports.reset = exports.restart = exports.changeTab = exports.createGame = exports.createAction = exports.handleAction = void 0;

var _constants = require("./constants.js");

var handleAction = function handleAction(dispatch, action) {
  if (dispatch) {
    return dispatch(action);
  } else {
    return action;
  }
};

exports.handleAction = handleAction;

var createAction = function createAction(type) {
  return function (props) {
    var action = {
      type: type
    };
    var dispatch = props.dispatch;
    delete props.dispatch;
    for (var prop in props) {
      action[prop] = props[prop];
    }

    return handleAction(dispatch, action);
  };
};

exports.createAction = createAction;
var createGame = createAction(_constants.CREATE);
exports.createGame = createGame;
var changeTab = createAction(_constants.CHANGETAB);
exports.changeTab = changeTab;
var restart = createAction(_constants.RESTART);
exports.restart = restart;
var reset = createAction(_constants.RESET);
exports.reset = reset;
var undo = createAction(_constants.UNDO);
exports.undo = undo;
var move = createAction(_constants.MOVE);
exports.move = move;
