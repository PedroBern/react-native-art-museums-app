export const SET_CURRENT_DETAIL = "SET_CURRENT_DETAIL";
export const RESET_CURRENT_DETAIL = "RESET_CURRENT_DETAIL";

export const setCurrentDetail = (id, navigate) => (dispatch, getState) => {
  const state = getState().details;
  if (!state.id) {
    dispatch({
      type: SET_CURRENT_DETAIL,
      payload: id
    });
    navigate();
  }
};

export const resetCurrentDetail = () => ({ type: RESET_CURRENT_DETAIL });
