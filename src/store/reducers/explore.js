import {
  FETCH_TARGET__SENT,
  FETCH_TARGET__FULFILLED,
  FETCH_TARGET__REJECTED,
  SORT_LIST,
  RESET_LIST
} from "../actions/explore";

export const initialState = {
  loading: true,
  refreshing: false,
  desc: false,
  records: [],
  error: null,
  totalRecords: undefined,
  next: "",
  target: "",
  search: ""
};

const exploreReducer = (state = exploreInitialState, action) => {
  switch (action.type) {
    case FETCH_TARGET__SENT:
      return { ...state, loading: true };

    case FETCH_TARGET__FULFILLED:
      const { info, records, target, desc } = action.payload;
      return {
        ...state,
        records: [...state.records, ...records],
        next: info.next,
        totalRecords: info.totalrecords,
        loading: false,
        error: null,
        target,
        desc
      };

    case FETCH_TARGET__REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case SORT_LIST:
      return { ...state, desc: !state.desc };

    case RESET_LIST:
      return { ...initialState };

    default:
      return state;
  }
};

export default exploreReducer;
