import React from 'react';
import PropTypes from 'prop-types';
import ModalAbstract from './modal.abstract';

class ModalConfirm extends ModalAbstract {
  getModalProps() {
    return {
      modalProps: {
        backdrop: 'static',
      },
      headerProps: {
        className: 'modal-header-warning'
      }
    }
  }

  renderTitle() {
    return (<h4 className="font-warning"><i className="fa fa-exclamation-triangle"></i>&nbsp;{this.props.title}</h4>)
  }

  renderBody() {
    return (
      <div className="modal-confirm__body">
        {this.props.body}
      </div>
    )
  }

  renderFooter() {
    const { cancelLabel, confirmLabel, handleCancel, handleConfirm, isCancelHidden, onHide } = this.props;

    return (
      <div className="modal-confirm__footer">
        {!isCancelHidden && (
          <div className="pull-left"><button type="button" className="btn btn-danger" onClick={() => {handleCancel();}}><i className="fa fa-times-circle"></i>&nbsp;{cancelLabel}</button></div>
        )}
        <div className="pull-right">
          <button type="button" className="btn btn-success" onClick={() => {handleConfirm();}}><i className="fa fa-check-circle"></i>&nbsp;{confirmLabel}</button>
        </div>
      </div>
    )
  }
}

ModalConfirm.propTypes = {
  body: PropTypes.element.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  handleCancel: PropTypes.func,
  handleConfirm: PropTypes.func.isRequired,
  isCancelHidden: PropTypes.bool,
  title: PropTypes.string.isRequired
};

ModalConfirm.defaultProps = {
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
  handleCancel: () => {},
  isCancelHidden: false
};

export default ModalConfirm;