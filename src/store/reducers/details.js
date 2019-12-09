import { SET_CURRENT_DETAIL, RESET_CURRENT_DETAIL } from "../actions/details";

export const detailsInitialState = {};

const detailsReducer = (state = detailsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default detailsReducer;
