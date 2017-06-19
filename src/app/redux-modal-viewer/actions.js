import ModalUtil from './modal.util';

const ActionTypes = {
  MODAL_VIEWER_OPEN_MODAL: 'MODAL_VIEWER_OPEN_MODAL',
  MODAL_VIEWER_CLOSE_MODAL: 'MODAL_VIEWER_CLOSE_MODAL',
  MODAL_VIEWER_CLOSE_ALL_MODALS: 'MODAL_VIEWER_CLOSE_ALL_MODALS'
};

export default ActionTypes;

export const openModal = (id) => {
  // check if modal is viable 
  const modal = ModalUtil.getModal(id);

  if (!modal) {
    throw 'Modal Config Not Found For ' + id + '. You may have forgotten to ModalUtil.combineConfigs() with the modal you specified.';
  }

  return {
    type: ActionTypes.MODAL_VIEWER_OPEN_MODAL,
    payload: modal
  };
};

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

export const closeAllModals = () => {
  return {
    type: ActionTypes.MODAL_VIEWER_CLOSE_ALL_MODALS
  };
};
