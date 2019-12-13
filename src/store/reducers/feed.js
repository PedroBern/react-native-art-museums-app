import {
  FETCH_FEED__SENT,
  FETCH_FEED__FULFILLED,
  FETCH_FEED__REJECTED,
  TOGGLE_FEED_VIEW,
  SET_VISIBLE_INDEX,
  REFRESH_FEED__SENT,
  SORT_FEED
} from "../actions/feed";

export const feedInitialState = {
  loading: true,
  info: {},
  records: [],
  error: null,
  grid: false,
  visibleIndex: 0,
  refreshing: false,
  sort: "totalpageviews",
  sortOrder: "desc"
};

const feedReducer = (state = feedInitialState, action) => {
  switch (action.type) {
    case FETCH_FEED__SENT:
      return { ...state, loading: true };

    case FETCH_FEED__FULFILLED:
      const { info, records } = action.payload;
      const toAdd = records.filter(
        r => !state.records.find(s => s.id === r.id)
      );
      return {
        ...state,
        info,
        records: [...state.records, ...toAdd],
        loading: false,
        refreshing: false,
        error: null
      };

    case FETCH_FEED__REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        refreshing: false
      };

    case REFRESH_FEED__SENT:
      return {
        ...state,
        records: [],
        info: {},
        loading: true,
        visibleIndex: 0,
        refreshing: true
      };

    case SORT_FEED:
      return {
        ...state,
        ...feedInitialState,
        grid: state.grid,
        ...action.payload
      };

    case TOGGLE_FEED_VIEW:
      return { ...state, grid: !state.grid };

    case SET_VISIBLE_INDEX:
      return { ...state, visibleIndex: action.payload };

    default:
      return state;
  }
};

export default feedReducer;
