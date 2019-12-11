import { combineReducers } from "redux";
import feed, { feedInitialState } from "./feed";
import details, { detailsInitialState } from "./details";
import favorites, { favoritesInitialState } from "./favorites";
import person, { personInitialState } from "./person";

export const initialState = {
  feed: { ...feedInitialState },
  details: { ...detailsInitialState },
  favorites: { ...favoritesInitialState },
  person: { ...personInitialState }
};

const reducer = combineReducers({
  feed,
  details,
  favorites,
  person
});

export default reducer;
