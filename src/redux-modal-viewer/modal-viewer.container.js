import React from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { closeModal } from './actions';

/**
 * Main component hub for all modals. The ModalViewer is in charge of adding open modals to the dom (or removing them).
 * @param {Object} props {openModals: Array, onHide: function} openModals is an array of modals to already have open, onHide the function to trigger on hide.
 */
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
