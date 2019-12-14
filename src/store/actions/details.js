import { fetchRecord } from "../../api/api";
// import { delayMock, fetchRecordMock } from "../../api/mock";

// action types

export const FETCH_RECORD__SENT = "FETCH_RECORD__SENT";
export const FETCH_RECORD__FULFILLED = "FETCH_RECORD__FULFILLED";
export const FETCH_RECORD__REJECTED = "FETCH_RECORD__REJECTED";
export const RESET_DETAILS = "RESET_DETAILS";

// action creators

export const loadRecord = id => async dispatch => {
  dispatch({ type: FETCH_RECORD__SENT });
  try {
    const results = await fetchRecord(id);

    dispatch({
      type: FETCH_RECORD__FULFILLED,
      payload: results
    });
  } catch (err) {
    dispatch({ type: FETCH_RECORD__REJECTED, payload: err.message });
  }
};

export const resetDetails = () => ({ type: RESET_DETAILS });
