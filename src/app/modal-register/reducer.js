import ActionTypes from './actions';
import { ActionTypes as ModalViewerActionTypes } from '../redux-modal-viewer/index';

const initialState = {
  error: null,
  isSaving: false,
  isSaveCompleted: false,
  model: {
    username: '',
    firstname: '',
    lastname: ''
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER_SAVE_START: {
      return Object.assign({}, state, {isSaving: true});
    }
    case ActionTypes.REGISTER_SAVE_FAILURE: {
      return Object.assign({}, state, {isSaving: false, error: action.payload});
    }
    case ActionTypes.REGISTER_SAVE_SUCCESS: {
      return Object.assign({}, state, {
        isSaveCompleted: true,
        isSaving: false,
        model: Object.assign({}, action.payload)
      });
    }
    case ModalViewerActionTypes.MODAL_VIEWER_CLOSE_MODAL: {
      // reset save state
      if (action.payload.id === 'register') {
        return Object.assign({}, state, {
          isSaveCompleted: false,
          isSaving: false,
          error: null
        });
      }

      return state;
    }
    default: { return state; }
  }
}