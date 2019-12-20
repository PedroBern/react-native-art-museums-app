import { fetchPersonRecords, fetchPerson, fetchFeed } from "../../api/api";

// action types

export const FETCH_PERSON__SENT = "FETCH_PERSON__SENT";
export const FETCH_PERSON__FULFILLED = "FETCH_PERSON__FULFILLED";
export const FETCH_PERSON__REJECTED = "FETCH_PERSON__REJECTED";
export const FETCH_PERSON_RECORDS__SENT = "FETCH_PERSON_RECORDS__SENT";
export const FETCH_PERSON_RECORDS__FULFILLED =
  "FETCH_PERSON_RECORDS__FULFILLED";
export const FETCH_PERSON_RECORDS__REJECTED = "FETCH_PERSON_RECORDS__REJECTED";

// action creators

export const loadPerson = id => async dispatch => {
  dispatch({ type: FETCH_PERSON__SENT });
  dispatch({ type: FETCH_PERSON_RECORDS__SENT });
  try {
    const results = await fetchPerson(id);
    dispatch({
      type: FETCH_PERSON__FULFILLED,
      payload: results
    });
  } catch (err) {
    dispatch({ type: FETCH_PERSON__REJECTED, payload: err.message });
  }
  try {
    const resultsRecords = await fetchPersonRecords(id);
    dispatch({
      type: FETCH_PERSON_RECORDS__FULFILLED,
      payload: resultsRecords
    });
  } catch (err) {
    dispatch({ type: FETCH_PERSON_RECORDS__REJECTED, payload: err.message });
  }
};

export const loadPersonRecordsOnEndReached = next => async dispatch => {
  dispatch({ type: FETCH_PERSON_RECORDS__SENT });
  try {
    const results = await fetchFeed(next);
    dispatch({
      type: FETCH_PERSON_RECORDS__FULFILLED,
      payload: results
    });
  } catch (err) {
    dispatch({ type: FETCH_PERSON_RECORDS__REJECTED, payload: err.message });
  }
};
