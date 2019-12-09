import {
  TOGGLE_FAVORITE,
  TOGGLE_FAVORITES_VIEW,
  SET_VISIBLE_INDEX_FAVORITES
} from "../actions/favorites";

export const favoritesInitialState = {
  records: [],
  grid: true,
  visibleIndex: 0
};

const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if (state.records.find(r => r.id === action.payload.id)) {
        return {
          ...state,
          records: state.records.filter(f => f.id !== action.payload.id)
        };
      } else {
        return { ...state, records: [...state.records, action.payload] };
      }

    case TOGGLE_FAVORITES_VIEW:
      return { ...state, grid: !state.grid };

    case SET_VISIBLE_INDEX_FAVORITES:
      return { ...state, visibleIndex: action.payload };

    default:
      return state;
  }
};

export default favoritesReducer;
