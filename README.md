# Redux Modal Viewer
## Description
Master control for react redux modals. Utilizes react-bootstrap for modal creation.

# ModalConfirm
## Setup
Add ModalConfirm to modal.config.js
```js 
import { ModalConfirm, ModalUtil } from './redux-modal-viewer/index';

const modalConfig = ModalUtil.combineModals({
  ModalConfirm,
  // add any other modals to be bound
});
```

## Open Modal Confirm
```js
import { openModal } from 'redux-modal-viewer';

// ...rest of your component configuration

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenConfirm: (payload) => {
      dispatch(openModel('ModalConfirm', {
        body: (
          <div>Are you sure you want to delete {payload.name}?</div>
        ),
        title: 'Confirm Deletion',
        cancelLabel: 'Cancel', /* optional */
        confirmLabel: 'Confirm', /* optional */
        isCancelHidden: false, /* optional default false */
        handleCancel: () => {
          // handle cancel was clicked
        },
        handleConfirm: () => {
          // handle confirm was clicked
          dispatch(deleteItem(payload));
        }
      }))
    }
  }
}
// ... rest of your component configuration
```

# Custom Modal
## Create file modal.welcome.js
```js
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
    const { greeting } = this.props;

    return (
      <div>
        <h1>Welcome</h1>
        <p>Welcome to the application.</p>
        <p>{greeting}</p>
      </div>
    )
  }
}

export default ModalWelcome;
```

## Add Modal To modal.config.js
```js
import { ModalConfirm, ModalUtil } from './redux-modal-viewer/index';
import { ModalWelcome } from './location/to/module/';

const modalConfig = ModalUtil.combineModals({
  ModalConfirm,
  ModalWelcome,
});
```

## Add Modal Viewer Component
app.container.js (or wherever your root component is located)
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalViewer, openModal } from 'redux-modal-viewer';

// combine all modals to config to allow modal viewer to handle opening the correct modal
require('location/to/modal.config.js');
// include styles
require('redux-modal-viewer/dist/redux-modal-viewer.css');

class AppContainer extends Component {
  render() {
    return (
      <div className="my-component">
        <ModalViewer />
        <button type="button" className="btn btn-primary" onClick={handleOpenWelcomeModal}></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // create mapping if needed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenWelcomeModal: () => {
      // can send props to modal (optional)
      const modalProps = {
        greeting: 'Hi',
      };

      dispatch(openModal('ModalWelcome', modalProps))
    }
  };
};

export default (mapStateToProps, mapDispatchToProps)(AppContainer);
```

# Action Creators
## openModal(id, props)
- id : String (required)
  - The exact string value used in **modal.config.js**
- props: Object (optional)
  - The props you want to send to your modal component.

## closeModal(id)
- id : String (required)
  - The modal to close.

## closeAllModals()
  - closes all modals that are currently opened.

# Action Types
MODAL_VIEWER_OPEN_MODAL: 'MODAL_VIEWER_OPEN_MODAL',
MODAL_VIEWER_CLOSE_MODAL: 'MODAL_VIEWER_CLOSE_MODAL',
MODAL_VIEWER_CLOSE_ALL_MODALS: 'MODAL_VIEWER_CLOSE_ALL_MODALS'

# ModalUtil
## Import
```js
import { ModalUtil } from 'redux-modal-viewer';
```
## combineModals(config : Object)
```js
ModalUtil.combineModals({
  'ModalId': ModalComponent
})
```
## getModal(modalId|modalConfigModel) : ModalConfigModel
```js
const modalConfigModel = ModalUtil.getModal('ModalId');
```

# ModalConfigModel
- id : String
  - The id for the modal.
- slug : String
  - The slug variation of the modal (ex. ModalWelcome would be 'modal-welcome').
- component : ReactComponent
  - The react component representation of the modal.