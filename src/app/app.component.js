import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalViewer, openModal } from './redux-modal-viewer/index';

// combine modals 
import modalConfig from './modal.config';

class AppComponent extends Component {
  render() {
    const { handleOpenAboutModal, handleOpenRegisterModal, handleOpenWelcomeModal } = this.props;

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
            <button onClick={handleOpenRegisterModal} type="button" className="btn btn-primary">Open Register Modal</button>
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
    handleOpenRegisterModal: () => { dispatch(openModal('register')) },
    handleOpenWelcomeModal: () => { dispatch(openModal('welcome')) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);