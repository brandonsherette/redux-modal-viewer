import { combineReducers } from 'redux';
import { reducer as modalViewer } from './redux-modal-viewer/index';
import { reducer as form } from 'redux-form';
import register from './modal-register/reducer';

export default combineReducers({
  form,
  modalViewer,
  register,
});
