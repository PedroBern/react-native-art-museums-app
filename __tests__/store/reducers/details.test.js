import {
  FETCH_RECORD__SENT,
  FETCH_RECORD__FULFILLED,
  FETCH_RECORD__REJECTED,
  RESET_DETAILS
} from "../../../src/store/actions/details";

import reducer, {
  detailsInitialState as DEFAULT_STATE
} from "../../../src/store/reducers/details";

describe("details reducer", () => {
  it("starts loading", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FETCH_RECORD__SENT })
    ).toMatchSnapshot();
  });

  it("receives fetch response", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_RECORD__FULFILLED,
        payload: { record: "data" }
      })
    ).toMatchSnapshot();
  });

  it("receives fetch fail", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_RECORD__REJECTED,
        payload: "error"
      })
    ).toMatchSnapshot();
  });

  it("reset", () => {
    expect(reducer(DEFAULT_STATE, { type: RESET_DETAILS })).toMatchSnapshot();
  });

  it("defaults to state", () => {
    expect(reducer(DEFAULT_STATE, { type: "" })).toMatchSnapshot();
  });
});
