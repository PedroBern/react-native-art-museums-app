import { fetchPersonRecords, fetchPerson, fetchFeed } from "../../api/api";
// import { delayMock, fetchRecordMock } from "../../api/mock";

// action types

export const FETCH_PERSON__SENT = "FETCH_PERSON__SENT";
export const FETCH_PERSON__FULFILLED = "FETCH_PERSON__FULFILLED";
export const FETCH_PERSON__REJECTED = "FETCH_PERSON__REJECTED";
export const FETCH_PERSON_RECORDS__SENT = "FETCH_PERSON_RECORDS__SENT";
export const FETCH_PERSON_RECORDS__FULFILLED =
  "FETCH_PERSON_RECORDS__FULFILLED";
export const FETCH_PERSON_RECORDS__REJECTED = "FETCH_PERSON_RECORDS__REJECTED";
export const RESET_PERSON = "RESET_PERSON";

// action creators

export const loadPerson = id => async dispatch => {
  dispatch({ type: FETCH_PERSON__SENT });
  try {
    const results = await fetchPerson(id);
    dispatch({
      type: FETCH_PERSON__FULFILLED,
      payload: results
    });
  } catch (err) {
    dispatch({ type: FETCH_PERSON__REJECTED, payload: err.message });
  }
};

export const loadPersonRecords = (id, next) => async (dispatch, getState) => {
  dispatch({ type: FETCH_PERSON_RECORDS__SENT });
  try {
    let results;
    console.log("fetching");
    if (next) {
      console.log("next", next);
      results = await fetchFeed(next);
    } else {
      results = await fetchPersonRecords(id);
    }
    dispatch({
      type: FETCH_PERSON_RECORDS__FULFILLED,
      payload: results
    });
  } catch (err) {
    dispatch({ type: FETCH_PERSON_RECORDS__REJECTED, payload: err.message });
  }
};

export const resetPerson = () => async dispatch =>
  dispatch({ type: RESET_PERSON });
