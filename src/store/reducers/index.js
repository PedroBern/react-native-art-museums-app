import { combineReducers } from "redux";
import favorites, { favoritesInitialState } from "./favorites";

export const initialState = {
  favorites: { ...favoritesInitialState }
};

const reducer = combineReducers({
  favorites // objects
  // TODO: favorites people
});

export default reducer;
