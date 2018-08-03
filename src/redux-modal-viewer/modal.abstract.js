import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

/**
 * Abstract class for all modals in the ModalViewer.
 * @class ModalAbstract
 */
class ModalAbstract extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * @method getDefaultModalProps
   * @private
   * @return {Object} the default modal props.
   */
  getDefaultModalProps() {
    return {
      modalProps: {
        bsSize: null,
        backdrop: true
      },
      headerProps: {
        closeButton: true,
        displayHeader: true
      },
      titleProps: {
        componentClass: 'div'
      },
      bodyProps: null,
      footerProps: null,
    };
  }

  /**
   * Overrides/Merges any default modal props.
   * @method getModalProps
   * @return {Object|null} the custom modal props.
   */
  getModalProps() {
    return null;
  }

  /**
   * Combines getDefaultModalProps and getModalProps together.
   * @method combineModalProps
   * @return {Object} the combined mocal props
   */
  combineModalProps() {
    return Object.assign({}, this.getDefaultModalProps(), this.getModalProps());
  }
  
  render() {
    const { modalProps, headerProps, titleProps, bodyProps, footerProps, headerProps: {displayHeader} } = this.combineModalProps();
    const { show, onHide } = this.props;
    const footer = this.renderFooter();

    return (
      <Modal {...modalProps} show={show} onHide={onHide}>
        {displayHeader && <Modal.Header {...headerProps}>
          <Modal.Title {...titleProps}>{this.renderTitle() }</Modal.Title>
        </Modal.Header>}
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
