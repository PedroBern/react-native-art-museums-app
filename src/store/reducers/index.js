import { combineReducers } from "redux";
import feed, { feedInitialState } from "./feed";
import details, { detailsInitialState } from "./details";
import favorites, { favoritesInitialState } from "./favorites";

export const initialState = {
  feed: { ...feedInitialState },
  details: { ...detailsInitialState },
  favorites: { ...favoritesInitialState }
  // person: { ...personInitialState } //moved to PersonScreen
};

const reducer = combineReducers({
  feed,
  details,
  favorites
  // person //moved to PersonScreen
});

export default reducer;
