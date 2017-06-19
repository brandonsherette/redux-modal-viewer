const ModalUtil = {
  combineModals,
  getModal,
  _modals: {},
};

export default ModalUtil;

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
  if (!modals && !typeof modals === 'object') {
    throw 'Configs needs to be an object map.';
  }

  const formattedModals = {};

  for (let key in modals) {
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
  const checkByObject = (mModal) => { return (modal.id === mModal.id); };
  const checkByString = (mModal) => { return (modal === mModal.id); };
  const check = (typeof modal === 'object') ? checkByObject : checkByString;
    
  if (!modal) {
    throw 'Modal config missing.';
  }

  const modals = Object.assign({}, this._modals);

  for (let key in modals) {
    if (check(modals[key])) {
      return modals[key];
    }
  }

  return null;
}

function sanitizeSlug(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}