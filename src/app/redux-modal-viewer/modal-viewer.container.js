import React from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { closeModal } from './actions';

require('./modal-viewer.scss');

const ModalViewer = ({openModals, onHide}) => (
  <div className="modal-wrapper absolute">
    { openModals.map((modal) => { 
      return (<modal.component key={'modal-' + modal.slug} show={true} onHide={() => {onHide(modal)}} />);
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
