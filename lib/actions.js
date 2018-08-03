'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeAllModals = exports.closeModal = exports.openModal = undefined;

var _modal = require('./modal.util');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @var ActionTypes The action types available for any modal viewer actions.
 */
var ActionTypes = {
  MODAL_VIEWER_OPEN_MODAL: 'MODAL_VIEWER_OPEN_MODAL',
  MODAL_VIEWER_CLOSE_MODAL: 'MODAL_VIEWER_CLOSE_MODAL',
  MODAL_VIEWER_CLOSE_ALL_MODALS: 'MODAL_VIEWER_CLOSE_ALL_MODALS'
};

exports.default = ActionTypes;

/**
 * Opens the specified modal.
 * @method openModal
 * @param {string} id the modal id used in your modal config file. 
 * @param {any} props any props you want to send to the modal.
 * @return {Object} the action creator object.
 */

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

/**
 * Closes the specified modal.
 * @method closeModal
 * @param {string} id the id of the modal to close (the value in the your modal config file).
 * @return {Object} the action creator object.
 */
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

/**
 * Closes all modals that are currently open.
 * @method closeAllModals
 * @return {Object} the action creator object.
 */
var closeAllModals = exports.closeAllModals = function closeAllModals() {
  return {
    type: ActionTypes.MODAL_VIEWER_CLOSE_ALL_MODALS
  };
};