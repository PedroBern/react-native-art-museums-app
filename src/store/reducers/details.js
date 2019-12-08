import { SET_CURRENT_DETAIL, RESET_CURRENT_DETAIL } from "../actions/details";

export const detailsInitialState = {
  id: null
};

const detailsReducer = (state = detailsInitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_DETAIL:
      console.log("id is", state.id);
      return { ...state, id: action.payload };

    case RESET_CURRENT_DETAIL:
      return { ...state, id: null };

    default:
      return state;
  }
};

export default detailsReducer;
