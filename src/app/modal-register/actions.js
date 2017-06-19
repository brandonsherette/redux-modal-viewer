const ActionTypes = {
  REGISTER_RESET_SAVE_STATE: 'REGISTER_RESET_SAVE_STATE',
  REGISTER_SAVE_START: 'REGISTER_SAVE_START',
  REGISTER_SAVE_FAILURE: 'REGISTER_SAVE_FAILURE',
  REGISTER_SAVE_SUCCESS: 'REGISTER_SAVE_SUCCESS'
};

export default ActionTypes;

export const resetSaveState = () => {
  return {
    type: ActionTypes.REGISTER_RESET_SAVE_STATE
  };
};

export const save = (values) => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.REGISTER_SAVE_START});

    // simulate saving the to the server 
    window.setTimeout(() => {
      dispatch({type: ActionTypes.REGISTER_SAVE_SUCCESS, payload: values});
    }, 1000);
  };
};