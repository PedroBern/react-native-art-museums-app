import {
  FETCH_TARGET__SENT,
  FETCH_TARGET__FULFILLED,
  FETCH_TARGET__REJECTED,
  SORT_LIST,
  RESET_LIST,
  FILTER_RECORDS__SENT,
  FILTER_RECORDS__FULFILLED,
  FILTER_RECORDS__REJECTED,
  FILTER_RECORDS__RESET
} from "../../../src/store/actions/explore";

import reducer, {
  initialState as DEFAULT_STATE
} from "../../../src/store/reducers/explore";

describe("explore reducer", () => {
  it("starts loading", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FETCH_TARGET__SENT })
    ).toMatchSnapshot();
  });

  it("receives fetch response", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_TARGET__FULFILLED,
        payload: {
          info: { next: "url", totalrecords: 10 },
          records: [{ some: "data" }],
          target: "target",
          desc: true
        }
      })
    ).toMatchSnapshot();
  });

  it("receives fetch fail", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FETCH_TARGET__REJECTED, payload: "error" })
    ).toMatchSnapshot();
  });

  it("starts loading on filter", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FILTER_RECORDS__SENT })
    ).toMatchSnapshot();
  });

  it("receives filter fail", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FILTER_RECORDS__REJECTED,
        payload: "error"
      })
    ).toMatchSnapshot();
  });

  it("receives filter fetch response", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FILTER_RECORDS__FULFILLED,
        payload: {
          info: { next: "url" },
          records: [{ some: "data" }]
        }
      })
    ).toMatchSnapshot();
  });

  it("reset filter", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FILTER_RECORDS__RESET })
    ).toMatchSnapshot();
  });

  it("change sort order", () => {
    expect(reducer(DEFAULT_STATE, { type: SORT_LIST })).toMatchSnapshot();
  });

  it("reset list", () => {
    expect(reducer(DEFAULT_STATE, { type: RESET_LIST })).toMatchSnapshot();
  });

  it("defaults to state", () => {
    expect(reducer(DEFAULT_STATE, { type: "" })).toMatchSnapshot();
  });
});
