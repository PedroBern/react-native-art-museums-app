import { combineReducers } from "redux";
import feed, { feedInitialState } from "./feed";
import details, { detailsInitialState } from "./details";

export const initialState = {
  feed: { ...feedInitialState },
  details: { ...detailsInitialState }
};

const reducer = combineReducers({
  feed,
  details
});

export default reducer;
