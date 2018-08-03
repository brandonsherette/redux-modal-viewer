'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ModalUtil = {
  combineModals: combineModals,
  getModal: getModal,
  _modals: {}
};

exports.default = ModalUtil;

//////////////

/**
 * Combines configurations that can be used for the entire app.
 * 
 * Example:
 * 
 * ModalUtil.combineModals({
 *  welcome: WelcomeComponent
 *  about: AboutComponent
 * });
 * 
 * @method combineModals
 * @param {Object} object of confiruations to set.
 */

function combineModals(modals) {
  if (!modals && !(typeof modals === 'undefined' ? 'undefined' : _typeof(modals)) === 'object') {
    throw 'Configs needs to be an object map.';
  }

  var formattedModals = {};

  for (var key in modals) {
    formattedModals[key] = {
      id: key,
      slug: sanitizeSlug(key),
      component: modals[key]
    };
  }

  this._modals = Object.assign({}, this._modals, formattedModals);
};

/**
 * Gets the configuration of a modal with the specified object or id of the configuration.
 * 
 * Example: 
 * 
 * const modalConfigWelcome = ModalUtil.getConfig('WELCOME');
 * modalConfigWelcome.component // react component 
 * modalConfigWelcome.id // id used for key and identifying what modal is what
 * 
 * @method getModal 
 * @param {Object|String} modal the modal configuration or id of the modal config to search for. The is the value you specified in modals.config.js from the combineConfigs was used.
 * @return {Object|null} the found configuration found.
 */
function getModal(modal) {
  var checkByObject = function checkByObject(mModal) {
    return modal.id === mModal.id;
  };
  var checkByString = function checkByString(mModal) {
    return modal === mModal.id;
  };
  var check = (typeof modal === 'undefined' ? 'undefined' : _typeof(modal)) === 'object' ? checkByObject : checkByString;

  if (!modal) {
    throw 'Modal config missing.';
  }

  var modals = Object.assign({}, this._modals);

  for (var key in modals) {
    if (check(modals[key])) {
      return modals[key];
    }
  }

  return null;
}

function sanitizeSlug(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}