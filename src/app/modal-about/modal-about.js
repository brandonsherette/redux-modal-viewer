import React from 'react';
import { ModalAbstract } from '../redux-modal-viewer';

class ModalAbout extends ModalAbstract {
  constructor(props) {
    super(props);
  }

  renderTitle() {
    return (<h4>About</h4>);
  }

  renderBody() {
    return (
      <div>
        <h1>About</h1>
        <p>About the application.</p>
      </div>
    )
  }
}

export default ModalAbout;