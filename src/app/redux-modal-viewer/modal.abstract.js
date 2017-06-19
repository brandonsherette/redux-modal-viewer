import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class ModalAbstract extends Component {
  constructor(props) {
    super(props);
  }

  getDefaultModalProps() {
    return {
      modalProps: {
        bsSize: null,
        backdrop: true
      },
      headerProps: {
        closeButton: true,
      },
      titleProps: {
        componentClass: 'div'
      },
      bodyProps: null,
      footerProps: null,
    };
  }

  getModalProps() {
    return null;
  }

  combineModalProps() {
    return Object.assign({}, this.getDefaultModalProps(), this.getModalProps());
  }

  render() {
    const { modalProps, headerProps, titleProps, bodyProps, footerProps } = this.combineModalProps();
    const { show, onHide } = this.props;
    const footer = this.renderFooter();

    return (
      <Modal {...modalProps} show={show} onHide={onHide}>
        <Modal.Header {...headerProps}>
          <Modal.Title {...titleProps}>{this.renderTitle() }</Modal.Title>
        </Modal.Header>
        <Modal.Body {...bodyProps}>{this.renderBody() }</Modal.Body>
        {footer && (<Modal.Footer {...footerProps}>{footer}</Modal.Footer>)}
      </Modal>
    )
  }
  renderTitle() { return null; }
  renderBody() { return (<div>Body Content</div>) }
  renderFooter() {
    const { onHide } = this.props;

    return (<div className="text-right"><button className="btn btn-primary" onClick={onHide}>Close</button></div>)
  }
}

ModalAbstract.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default ModalAbstract;
