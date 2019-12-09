import { combineReducers } from "redux";
import feed, { feedInitialState } from "./feed";
import details, { detailsInitialState } from "./details";
import favorites, { favoritesInitialState } from "./favorites";

export const initialState = {
  feed: { ...feedInitialState },
  details: { ...detailsInitialState },
  favorites: { ...favoritesInitialState }
};

const reducer = combineReducers({
  feed,
  details,
  favorites
});

export default reducer;
