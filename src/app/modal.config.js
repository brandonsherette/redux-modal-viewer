import { ModalUtil } from './redux-modal-viewer/index';
import About from './modal-about/modal-about';
import Welcome from './modal-welcome/modal-welcome'

const modalConfig = ModalUtil.combineModals({
  About,
  Welcome
});