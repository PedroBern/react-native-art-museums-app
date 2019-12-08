import { fetchFeed } from "../../api/api";
import { delayMock, fetchFeedMock } from "../../api/mock";

// action types

export const FETCH_FEED__SENT = "FETCH_FEED__SENT";
export const FETCH_FEED__FULFILLED = "FETCH_FEED__FULFILLED";
export const FETCH_FEED__REJECTED = "FETCH_FEED__REJECTED";
export const TOGGLE_FEED_VIEW = "TOGGLE_FEED_VIEW";
export const SET_VISIBLE_INDEX = "SET_VISIBLE_INDEX";
export const REFRESH_FEED__SENT = "REFRESH_FEED__SENT";

// action creators

export const loadFeed = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_FEED__SENT });
  try {
    const feed = getState().feed;
    // const results = await fetchFeed(feed.info.next ? feed.info.next : null);
    const results = await delayMock(fetchFeedMock);
    dispatch({
      type: FETCH_FEED__FULFILLED,
      payload: {
        ...results,
        nextPage: feed.nextPage + 1
      }
    });
  } catch (err) {
    dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
  }
};

export const refreshFeed = () => async dispatch => {
  dispatch({ type: REFRESH_FEED__SENT });
  try {
    // const results = await fetchFeed();
    const results = await delayMock(fetchFeedMock);
    dispatch({
      type: FETCH_FEED__FULFILLED,
      payload: {
        ...results,
        nextPage: 2
      }
    });
  } catch (err) {
    dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
  }
};

export const toggleFeedView = () => ({ type: TOGGLE_FEED_VIEW });

export const setVisibleIndex = index => ({
  type: SET_VISIBLE_INDEX,
  payload: index
});
