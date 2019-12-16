import {
  refreshFeed,
  sortFeed,
  toggleFeedView,
  setVisibleIndex,
  loadFeed,
  FETCH_FEED__SENT,
  FETCH_FEED__FULFILLED,
  FETCH_FEED__REJECTED,
  TOGGLE_FEED_VIEW,
  SET_VISIBLE_INDEX,
  REFRESH_FEED__SENT,
  SORT_FEED
} from "../../../src/store/actions/feed";

import * as api from "../../../src/api/api";
import * as apiMocks from "../../../src/api/mockFunctions";
import * as apiResponses from "../../../src/api/mockResponses";

describe("setVisibleIndex", () => {
  it("returns an action", () => {
    expect(setVisibleIndex(1)).toMatchSnapshot();
  });

  it("returns an action 2", () => {
    expect(setVisibleIndex()).toMatchSnapshot();
  });
});

describe("toggleFeedView", () => {
  it("returns an action", () => {
    expect(setVisibleIndex()).toMatchSnapshot();
  });
});

describe("loadFeed", () => {
  it("dispatch thunks", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedSuccess());

    const mockDispatch = jest.fn();
    await loadFeed()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: FETCH_FEED__SENT });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_FEED__FULFILLED,
      payload: { ...apiResponses.fetchFeedMock }
    });
  });

  it("catch errors", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedFail());

    const mockDispatch = jest.fn();
    await loadFeed()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: FETCH_FEED__SENT });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_FEED__REJECTED,
      payload: apiMocks.fetchFeedFailMessage
    });
  });

  it("handle next url", async () => {
    api.fetchFeed = jest.fn(next => apiMocks.fetchFeedSuccess(next));

    const mockDispatch = jest.fn();
    await loadFeed(null, "next")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: FETCH_FEED__SENT });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_FEED__FULFILLED,
      payload: { ...apiResponses.fetchFeedMock }
    });
    expect(api.fetchFeed.mock.calls[0][0]).toBe("next");
  });
});

describe("sortFeed", () => {
  it("dispatch thunks", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedSuccess());

    const mockDispatch = jest.fn();
    await sortFeed("a", "b")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: SORT_FEED,
      payload: { sort: "a", sortOrder: "b" }
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_FEED__FULFILLED,
      payload: { ...apiResponses.fetchFeedMock }
    });
  });

  it("catch errors", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedFail());

    const mockDispatch = jest.fn();
    await sortFeed("a", "b")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: SORT_FEED,
      payload: { sort: "a", sortOrder: "b" }
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_FEED__REJECTED,
      payload: apiMocks.fetchFeedFailMessage
    });
  });
});

describe("refreshFeed", () => {
  it("dispatch thunks", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedSuccess());

    const mockDispatch = jest.fn();
    await refreshFeed()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: REFRESH_FEED__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_FEED__FULFILLED,
      payload: { ...apiResponses.fetchFeedMock }
    });
  });

  it("catch errors", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedFail());

    const mockDispatch = jest.fn();
    await refreshFeed()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: REFRESH_FEED__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_FEED__REJECTED,
      payload: apiMocks.fetchFeedFailMessage
    });
  });
});
