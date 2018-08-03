'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  openModals: []
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.MODAL_VIEWER_CLOSE_ALL_MODALS:
      {
        return Object.assign({}, initialState);
      }

    case _actions2.default.MODAL_VIEWER_OPEN_MODAL:
      {
        var openModals = state.openModals.slice();

        return Object.assign({}, state, {
          openModals: [].concat(_toConsumableArray(openModals), [action.payload])
        });
      }

    case _actions2.default.MODAL_VIEWER_CLOSE_MODAL:
      {
        var _openModals = state.openModals.slice();

        // find index of modal to close 
        var modalIndex = _openModals.findIndex(function (config) {
          return config.modal.slug === action.payload.slug;
        });

        if (modalIndex === -1) {
          return state;
        }

        // remove modal
        _openModals.splice(modalIndex, 1);

        return Object.assign({}, state, { openModals: _openModals });
      }

    default:
      {
        return state;
      }
  };
};