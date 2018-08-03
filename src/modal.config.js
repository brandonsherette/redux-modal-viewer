import { ModalConfirm, ModalUtil } from './redux-modal-viewer/index';
import about from './modal-about/modal-about';
import welcome from './modal-welcome/modal-welcome'
import ModalNoHeader from './modal-no-header/modal-no-header';

const modalConfig = ModalUtil.combineModals({
  about,
  ModalConfirm,
  welcome,
  ModalNoHeader,
});