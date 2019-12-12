// import { fetchFeed } from "../../api/api";
// import { delayMock, fetchFeedMock } from "../../api/mock";
//
// // action types
//
// export const FETCH_FEED__SENT = "FETCH_FEED__SENT";
// export const FETCH_FEED__FULFILLED = "FETCH_FEED__FULFILLED";
// export const FETCH_FEED__REJECTED = "FETCH_FEED__REJECTED";
// export const TOGGLE_FEED_VIEW = "TOGGLE_FEED_VIEW";
// export const SET_VISIBLE_INDEX = "SET_VISIBLE_INDEX";
// export const REFRESH_FEED__SENT = "REFRESH_FEED__SENT";
//
// // action creators
//
// export const loadFeed = () => async (dispatch, getState) => {
//   dispatch({ type: FETCH_FEED__SENT });
//   try {
//     const feed = getState().feed;
//     const results = await fetchFeed(feed.info.next ? feed.info.next : null);
//     // const results = await delayMock(fetchFeedMock);
//     dispatch({
//       type: FETCH_FEED__FULFILLED,
//       payload: {
//         ...results
//       }
//     });
//   } catch (err) {
//     dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
//   }
// };
//
// export const refreshFeed = (extra = "") => async dispatch => {
//   dispatch({ type: REFRESH_FEED__SENT });
//   try {
//     const results = await fetchFeed(null, "dateoflastpageview", "desc", extra);
//     // const results = await delayMock(fetchFeedMock);
//     dispatch({
//       type: FETCH_FEED__FULFILLED,
//       payload: {
//         ...results
//       }
//     });
//   } catch (err) {
//     dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
//   }
// };
//
// export const sortFeed = (sort, sortOrder, extra = "") => async dispatch => {
//   dispatch({ type: REFRESH_FEED__SENT });
//   try {
//     const results = await fetchFeed(null, sort, sortOrder, extra);
//     // const results = await delayMock(fetchFeedMock);
//     dispatch({
//       type: FETCH_FEED__FULFILLED,
//       payload: {
//         ...results
//       }
//     });
//   } catch (err) {
//     dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
//   }
// };
//
// export const toggleFeedView = () => ({ type: TOGGLE_FEED_VIEW });
//
// export const setVisibleIndex = index => ({
//   type: SET_VISIBLE_INDEX,
//   payload: index
// });
//
// // uncontrolled (controlled by useReducer, instead of redux)
// // used in UncontrolledFeedScreen
//
// export const loadFeedUncontrolled = extra => async (dispatch, state) => {
//   dispatch({ type: FETCH_FEED__SENT });
//   try {
//     const results = await fetchFeed(
//       state.info.next ? state.info.next : null,
//       "dateoflastpageview",
//       "desc",
//       extra
//     );
//     dispatch({
//       type: FETCH_FEED__FULFILLED,
//       payload: {
//         ...results
//       }
//     });
//   } catch (err) {
//     dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
//   }
// };

import { fetchFeed } from "../../api/api";
import { delayMock, fetchFeedMock } from "../../api/mock";

// action types

export const FETCH_FEED__SENT = "FETCH_FEED__SENT";
export const FETCH_FEED__FULFILLED = "FETCH_FEED__FULFILLED";
export const FETCH_FEED__REJECTED = "FETCH_FEED__REJECTED";
export const TOGGLE_FEED_VIEW = "TOGGLE_FEED_VIEW";
export const SET_VISIBLE_INDEX = "SET_VISIBLE_INDEX";
export const REFRESH_FEED__SENT = "REFRESH_FEED__SENT";
export const SORT_FEED = "SORT_FEED";

// action creators

export const refreshFeed = (extra, sort, sortOrder) => async dispatch => {
  dispatch({ type: REFRESH_FEED__SENT });
  try {
    const results = await fetchFeed(null, sort, sortOrder, extra);
    // const results = await delayMock(fetchFeedMock);
    dispatch({
      type: FETCH_FEED__FULFILLED,
      payload: {
        ...results
      }
    });
  } catch (err) {
    dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
  }
};

export const sortFeed = (sort, sortOrder, extra = "") => async dispatch => {
  dispatch({ type: SORT_FEED, payload: { sort, sortOrder } });
  try {
    const results = await fetchFeed(null, sort, sortOrder, extra);
    // const results = await delayMock(fetchFeedMock);
    dispatch({
      type: FETCH_FEED__FULFILLED,
      payload: {
        ...results
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

export const loadFeed = (extra, next) => async dispatch => {
  dispatch({ type: FETCH_FEED__SENT });
  try {
    const results = next
      ? await fetchFeed(next)
      : await fetchFeed(null, "dateoflastpageview", "desc", extra);
    dispatch({
      type: FETCH_FEED__FULFILLED,
      payload: {
        ...results
      }
    });
  } catch (err) {
    dispatch({ type: FETCH_FEED__REJECTED, payload: err.message });
  }
};
