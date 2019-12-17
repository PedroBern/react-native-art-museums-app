import {
  FETCH_PERSON__SENT,
  FETCH_PERSON__FULFILLED,
  FETCH_PERSON__REJECTED,
  FETCH_PERSON_RECORDS__SENT,
  FETCH_PERSON_RECORDS__FULFILLED,
  FETCH_PERSON_RECORDS__REJECTED
} from "../../../src/store/actions/person";

import reducer, {
  personInitialState as DEFAULT_STATE
} from "../../../src/store/reducers/person";

describe("person reducer", () => {
  it("starts person loading", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FETCH_PERSON__SENT })
    ).toMatchSnapshot();
  });

  it("starts records loading", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FETCH_PERSON_RECORDS__SENT })
    ).toMatchSnapshot();
  });

  it("receives person fetch response", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_PERSON__FULFILLED,
        payload: { records: [{ some: "data" }] }
      })
    ).toMatchSnapshot();
  });

  it("receives records fetch response", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_PERSON_RECORDS__FULFILLED,
        payload: { records: [{ some: "data" }], info: { next: "url" } }
      })
    ).toMatchSnapshot();
  });

  it("receives person fetch fail", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_PERSON__REJECTED,
        payload: "error"
      })
    ).toMatchSnapshot();
  });

  it("receives record fetch fail", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_PERSON_RECORDS__REJECTED,
        payload: "error"
      })
    ).toMatchSnapshot();
  });

  it("defaults to state", () => {
    expect(reducer(DEFAULT_STATE, { type: "" })).toMatchSnapshot();
  });
});
