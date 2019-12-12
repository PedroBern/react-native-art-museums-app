import { fetchListOf } from "../../api/api";

// action types

export const FETCH_TARGET__SENT = "FETCH_TARGET__SENT";
export const FETCH_TARGET__FULFILLED = "FETCH_TARGET__FULFILLED";
export const FETCH_TARGET__REJECTED = "FETCH_TARGET__REJECTED";
export const SORT_LIST = "SORT_LIST";
export const RESET_LIST = "RESET_LIST";

// action creators

export const loadListOf = (
  target,
  url = null,
  desc = false
) => async dispatch => {
  dispatch({ type: FETCH_TARGET__SENT });
  try {
    const results = await fetchListOf(url, target, desc);
    dispatch({
      type: FETCH_TARGET__FULFILLED,
      payload: { ...results, target, desc }
    });
  } catch (err) {
    dispatch({ type: FETCH_TARGET__REJECTED, payload: err.message });
  }
};

export const sortList = state => dispatch => {
  if (state.totalRecords === state.records.length) {
    dispatch({ type: SORT_LIST });
  } else {
    const { target, desc } = state;
    dispatch({ type: RESET_LIST });
    loadListOf(target, null, !desc)(dispatch);
  }
};
