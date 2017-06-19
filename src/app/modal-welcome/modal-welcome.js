import React from 'react';
import { ModalAbstract } from '../redux-modal-viewer';

class ModalWelcome extends ModalAbstract {
  constructor(props) {
    super(props);
  }

  getModalProps() {
    return {
      modalProps: {
        bsSize: null,
        backdrop: 'static'
      }
    };
  }

  renderTitle() {
    return (<h4>Welcome</h4>);
  }

  renderBody() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Welcome to the application.</p>
      </div>
    )
  }
}

export default ModalWelcome;