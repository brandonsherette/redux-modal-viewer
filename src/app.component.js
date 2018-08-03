import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal, ModalViewer, openModal } from './redux-modal-viewer/index';

// combine modals 
import modalConfig from './modal.config';

class AppComponent extends Component {
  render() {
    const { 
      handleOpenAboutModal, 
      handleOpenConfirmModal, 
      handleOpenNoHeaderModal,
      handleOpenWelcomeModal,
      handleOpenMultipleModals,
    } = this.props;

    return (
      <div className="app-component">
        <ModalViewer />
        <div className="app-header">
          <h1>Modal Viewer</h1>
          <h5>Full Access to All App Wide Modals</h5>
        </div>
        <div className="container">
          <h1>Modal Examples</h1>
          <div className="break-4x btn-group" role="group">
            <button onClick={handleOpenWelcomeModal} type="button" className="btn btn-primary">Open Welcome Modal</button>
            <button onClick={handleOpenAboutModal} type="button" className="btn btn-primary">Open About Modal</button>
            <button onClick={handleOpenConfirmModal} type="button" className="btn btn-primary">Open Confirm Modal</button>
            <button onClick={handleOpenNoHeaderModal} type="button" className="btn btn-primary">Open No Header Modal</button>
            <button onClick={handleOpenMultipleModals} type="button" className="btn btn-primary">Open Multiple Modals</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenAboutModal: () => { dispatch(openModal('about')) },
    handleOpenWelcomeModal: () => { dispatch(openModal('welcome')) },
    handleOpenNoHeaderModal: () => { dispatch(openModal('ModalNoHeader'))},
    handleOpenConfirmModal: () => { dispatch(openModal('ModalConfirm', getConfirmModalProps(dispatch))) },
    handleOpenMultipleModals: () => { dispatch(openModal('welcome')); dispatch(openModal('about')); dispatch(openModal('ModalConfirm', getConfirmModalProps(dispatch))); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

function getConfirmModalProps(dispatch) {
  return {
    body: (<h1>Are You Sure?</h1>),
    cancelLabel: 'Close',
    confirmLabel: 'Indeed',
    handleCancel: () => { console.debug('Cancel Was Triggered!'); dispatch(closeModal('ModalConfirm')) },
    handleConfirm: () => { console.debug('Confirm Was Triggered!'); dispatch(closeModal('ModalConfirm')) },
    isCancelHidden: false,
    title: 'Confirm Registration'
  };
}