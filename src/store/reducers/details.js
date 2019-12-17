import {
  FETCH_RECORD__SENT,
  FETCH_RECORD__FULFILLED,
  FETCH_RECORD__REJECTED,
  RESET_DETAILS
} from "../actions/details";

export const detailsInitialState = {
  loading: true,
  record: {
    accessionmethod: "",
    accessionyear: null,
    classification: "",
    culture: "",
    images: [],
    people: [],
    technique: "",
    url: ""
  },
  error: null
};

const detailsReducer = (state = detailsInitialState, action) => {
  switch (action.type) {
    case FETCH_RECORD__SENT:
      return { ...state, loading: true };

    case FETCH_RECORD__FULFILLED:
      return {
        ...state,
        record: action.payload,
        loading: false,
        error: null
      };

    case FETCH_RECORD__REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case RESET_DETAILS:
      return {
        ...detailsInitialState
      };

    default:
      return state;
  }
};

export default detailsReducer;
