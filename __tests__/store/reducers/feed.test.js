import {
  FETCH_FEED__SENT,
  FETCH_FEED__FULFILLED,
  FETCH_FEED__REJECTED,
  TOGGLE_FEED_VIEW,
  SET_VISIBLE_INDEX,
  REFRESH_FEED__SENT,
  SORT_FEED
} from "../../../src/store/actions/feed";

import reducer, {
  feedInitialState as DEFAULT_STATE
} from "../../../src/store/reducers/feed";

describe("feed reducer", () => {
  it("starts loading", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FETCH_FEED__SENT })
    ).toMatchSnapshot();
  });

  it("receives fetch response", () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: FETCH_FEED__FULFILLED,
        payload: {
          info: "some info",
          records: [{ id: 1 }, { id: 2 }]
        }
      })
    ).toMatchSnapshot();
  });

  it("receives fetch fail", () => {
    expect(
      reducer(DEFAULT_STATE, { type: FETCH_FEED__REJECTED, payload: "error" })
    ).toMatchSnapshot();
  });

  it("reset on refresh", () => {
    expect(
      reducer(DEFAULT_STATE, { type: REFRESH_FEED__SENT })
    ).toMatchSnapshot();
  });

  it("sort feed", () => {
    expect(
      reducer(DEFAULT_STATE, { type: SORT_FEED, payload: { a: "a" } })
    ).toMatchSnapshot();
  });

  it("change grid on toggle", () => {
    expect(
      reducer(DEFAULT_STATE, { type: TOGGLE_FEED_VIEW })
    ).toMatchSnapshot();
  });

  it("change grid on toggle", () => {
    expect(
      reducer(DEFAULT_STATE, { type: SET_VISIBLE_INDEX, payload: 1 })
    ).toMatchSnapshot();
  });

  it("defaults to state", () => {
    expect(reducer(DEFAULT_STATE, { type: "" })).toMatchSnapshot();
  });
});
