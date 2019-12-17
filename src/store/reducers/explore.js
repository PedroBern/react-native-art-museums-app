import {
  FETCH_TARGET__SENT,
  FETCH_TARGET__FULFILLED,
  FETCH_TARGET__REJECTED,
  SORT_LIST,
  RESET_LIST,
  FILTER_RECORDS__SENT,
  FILTER_RECORDS__FULFILLED,
  FILTER_RECORDS__REJECTED,
  FILTER_RECORDS__RESET
} from "../actions/explore";

export const initialState = {
  loading: false,
  refreshing: false,
  desc: false,
  records: [],
  error: null,
  totalRecords: undefined,
  next: "",
  target: "",
  search: "",
  filteredRecords: [],
  nextSearchUrl: null
};

const exploreReducer = (state = initialState, action) => {
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

    case FILTER_RECORDS__SENT:
      return { ...state, error: null, loading: true };

    case FILTER_RECORDS__REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        nextSearchUrl: null
      };

    case FILTER_RECORDS__FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        filteredRecords: [...state.filteredRecords, ...action.payload.records],
        nextSearchUrl: action.payload.info.next
      };

    case FILTER_RECORDS__RESET:
      return {
        ...state,
        error: null,
        filteredRecords: [],
        nextSearchUrl: null
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
