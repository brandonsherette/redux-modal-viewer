import ModalUtil from './modal.util';

/**
 * @var ActionTypes The action types available for any modal viewer actions.
 */
const ActionTypes = {
  MODAL_VIEWER_OPEN_MODAL: 'MODAL_VIEWER_OPEN_MODAL',
  MODAL_VIEWER_CLOSE_MODAL: 'MODAL_VIEWER_CLOSE_MODAL',
  MODAL_VIEWER_CLOSE_ALL_MODALS: 'MODAL_VIEWER_CLOSE_ALL_MODALS'
};

export default ActionTypes;

/**
 * Opens the specified modal.
 * @method openModal
 * @param {string} id the modal id used in your modal config file. 
 * @param {any} props any props you want to send to the modal.
 * @return {Object} the action creator object.
 */
export const openModal = (id, props = null) => {
  // check if modal is viable 
  const modal = ModalUtil.getModal(id);

  if (!modal) {
    throw 'Modal Config Not Found For ' + id + '. You may have forgotten to ModalUtil.combineConfigs() with the modal you specified.';
  }

  return {
    type: ActionTypes.MODAL_VIEWER_OPEN_MODAL,
    payload: {
      modal,
      props
    }
  };
};

/**
 * Closes the specified modal.
 * @method closeModal
 * @param {string} id the id of the modal to close (the value in the your modal config file).
 * @return {Object} the action creator object.
 */
export const closeModal = (id) => {
  // check if modal is viable 
  const modal = ModalUtil.getModal(id);

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
export const closeAllModals = () => {
  return {
    type: ActionTypes.MODAL_VIEWER_CLOSE_ALL_MODALS
  };
};
