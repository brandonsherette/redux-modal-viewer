import { ModalConfirm, ModalUtil } from './redux-modal-viewer/index';
import about from './modal-about/modal-about';
import register from './modal-register/modal-register.container';
import welcome from './modal-welcome/modal-welcome'

const modalConfig = ModalUtil.combineModals({
  about,
  register,
  ModalConfirm,
  welcome
});