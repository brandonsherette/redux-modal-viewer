import React from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { closeModal } from './actions';

const ModalViewer = ({openModals, onHide}) => (
  <div className="modal-wrapper absolute">
    { openModals.map((modalConfig) => { 
      return (<modalConfig.modal.component {...modalConfig.props} key={'modal-' + modalConfig.modal.slug} show={true} onHide={() => {onHide(modalConfig.modal)}} />);
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    openModals: state.modalViewer.openModals
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: (modal) => { dispatch(closeModal(modal)) }  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalViewer);
