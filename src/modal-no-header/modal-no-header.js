import React from 'react';
import { ModalAbstract } from '../redux-modal-viewer/';

class ModalNoHeader extends ModalAbstract {
  constructor(props) {
    super(props);
  }

  getModalProps() {
    return {
      headerProps: {
        displayHeader: false,
      }
    };
  }

  renderTitle() {
    return (<h4>Shouldn't Show</h4>);
  }

  renderBody() {
    return (
      <div>
        <h1>Modal w/o Header</h1>
      </div>
    )
  }
}

export default ModalNoHeader;