import React from 'react';
import PropTypes from 'prop-types';
import { ModalAbstract, closeModal } from '../redux-modal-viewer/index';
import { reduxForm } from 'redux-form';
import Step1 from './step1'
import Step2 from './step2';
import validate from './validate';
import { connect } from 'react-redux';
import { resetSaveState, save } from './actions';
import classNames from 'classnames';
import { MultiStepForm } from 'redux-form-ext';
import Loading from '../vendor/loading/loading';

// require for form
require('redux-form-ext/dist/redux-form-ext.css');

class ModalRegister extends ModalAbstract {
  constructor(props) {
    super(props);
  }

  getModalProps() {
    return {
      modalProps: {
        backdrop: 'static'
      }
    };
  }

  renderTitle() {
    return (<h4>Register</h4>);
  }

  renderBody() {
    const { handleClose, handleSubmit, handleSave, isSaveCompleted, isSaving, saveError } = this.props;
    const steps = [
      <MultiStepForm.Step title="Login Details"><Step1 /></MultiStepForm.Step>,
      <MultiStepForm.Step title="User Details"><Step2 /></MultiStepForm.Step>
    ];

    if (isSaving) {
      return (<Loading title="Saving..." />);
    }

    if (isSaveCompleted) {
      return (
        <div className="text-center">
          <h2>Save Completed!</h2>
          <div className="break-2x">
            <button type="button" onClick={handleClose} className="btn btn-primary">Continue</button>
          </div>
        </div>
      );
    }

    return (
      <MultiStepForm handleSave={handleSave} handleSubmit={handleSubmit} isSaving={isSaving} saveError={saveError} steps={steps} />
    );
  }

  renderFooter() {
    return null;
  }
}

ModalRegister.propTypes = {
  handleSave: PropTypes.func.isRequired,
  isSaveCompleted: PropTypes.bool.isRequired,
  isSaving: PropTypes.bool.isRequired,
  saveError: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    initialValues: state.register.model,
    isSaveCompleted: state.register.isSaveCompleted,
    isSaving: state.register.isSaving,
    saveError: state.register.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => { dispatch(closeModal('register'))},
    handleResetSaveState: () => {dispatch(resetSaveState())},
    handleSave: (values) => { dispatch(save(values)); }
  };
};

const ModalRegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRegister);

export default reduxForm({
  form: 'register',
  validate: validate
})(ModalRegisterContainer);
