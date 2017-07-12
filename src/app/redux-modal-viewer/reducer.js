import ActionTypes from './actions';

const initialState = {
  openModals: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.MODAL_VIEWER_CLOSE_ALL_MODALS: {
      return Object.assign({}, initialState);
    }

    case ActionTypes.MODAL_VIEWER_OPEN_MODAL: {
      const openModals = state.openModals.slice();

      return Object.assign({}, state, {
        openModals: [...openModals, action.payload]
      });
    }

    case ActionTypes.MODAL_VIEWER_CLOSE_MODAL: {
      const openModals = state.openModals.slice();

      // find index of modal to close 
      const modalIndex = openModals.findIndex((config) => {
        return (config.modal.slug === action.payload.slug);
      });

      if (modalIndex === -1) {
        return state;
      }

      // remove modal
      openModals.splice(modalIndex, 1);

      return Object.assign({}, state, { openModals });
    }

    default: { return state; }
  };
};
