'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeAllModals = exports.closeModal = exports.openModal = undefined;

var _modal = require('./modal.util');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionTypes = {
  MODAL_VIEWER_OPEN_MODAL: 'MODAL_VIEWER_OPEN_MODAL',
  MODAL_VIEWER_CLOSE_MODAL: 'MODAL_VIEWER_CLOSE_MODAL',
  MODAL_VIEWER_CLOSE_ALL_MODALS: 'MODAL_VIEWER_CLOSE_ALL_MODALS'
};

exports.default = ActionTypes;
var openModal = exports.openModal = function openModal(id) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  // check if modal is viable 
  var modal = _modal2.default.getModal(id);

  if (!modal) {
    throw 'Modal Config Not Found For ' + id + '. You may have forgotten to ModalUtil.combineConfigs() with the modal you specified.';
  }

  return {
    type: ActionTypes.MODAL_VIEWER_OPEN_MODAL,
    payload: {
      modal: modal,
      props: props
    }
  };
};

var closeModal = exports.closeModal = function closeModal(id) {
  // check if modal is viable 
  var modal = _modal2.default.getModal(id);

  if (!modal) {
    throw 'Modal Config Not Found For ' + id;
  }

  return {
    type: ActionTypes.MODAL_VIEWER_CLOSE_MODAL,
    payload: modal
  };
};

var closeAllModals = exports.closeAllModals = function closeAllModals() {
  return {
    type: ActionTypes.MODAL_VIEWER_CLOSE_ALL_MODALS
  };
};