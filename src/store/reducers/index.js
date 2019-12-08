import { combineReducers } from "redux";
import feed, { feedInitialState } from "./feed";

export const initialState = {
  feed: { ...feedInitialState }
};

const reducer = combineReducers({
  feed
});

export default reducer;
