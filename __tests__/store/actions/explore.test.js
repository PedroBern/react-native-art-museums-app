import {
  loadListOf,
  sortList,
  localSearch,
  apiSearch,
  search,
  resetSearch,
  FETCH_TARGET__SENT,
  FETCH_TARGET__FULFILLED,
  FETCH_TARGET__REJECTED,
  SORT_LIST,
  RESET_LIST,
  FILTER_RECORDS__SENT,
  FILTER_RECORDS__FULFILLED,
  FILTER_RECORDS__REJECTED,
  FILTER_RECORDS__RESET
} from "../../../src/store/actions/explore"; //}

import * as api from "../../../src/api/api";
import * as apiMocks from "../../../src/api/mockFunctions";
import * as apiResponses from "../../../src/api/mockResponses";

describe("resetSearch", () => {
  it("returns an action", () => {
    expect(resetSearch()).toMatchSnapshot();
  });
});

describe("search", () => {
  it("call localSearch and find value", async () => {
    const mockDispatch = jest.fn();
    const records = [{ name: "hello" }];
    const value = "hello";
    const res = await search(value, "b", records, "d")(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__FULFILLED,
      payload: { records: records, info: { next: null } }
    });
  });

  it("call localSearch and handle not finding value", async () => {
    const mockDispatch = jest.fn();
    const records = [{ name: "not a value" }];
    const value = "hello";
    const res = await search(value, "b", records, "d")(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__REJECTED,
      payload: "Nothing to show."
    });
  });

  it("call localSearch and handle having too much values", async () => {
    const mockDispatch = jest.fn();
    const records = [...Array(101).keys()].map(() => ({ name: "hello" }));
    const value = "hello";
    const res = await search(value, "b", records, "d")(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__REJECTED,
      payload: "Too many results, try to be more specific."
    });
  });

  it("call apiSearch with url on success", async () => {
    api.fetchFeed = jest.fn(url => apiMocks.fetchFeedSuccess(url));

    const mockDispatch = jest.fn();
    await search("value", "target", null, "url")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__FULFILLED,
      payload: { ...apiResponses.fetchFeedMock }
    });
  });

  it("call apiSearch with url on fail", async () => {
    api.fetchFeed = jest.fn(url => apiMocks.fetchFeedFail(url));

    const mockDispatch = jest.fn();
    await search("value", "target", null, "url")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__REJECTED,
      payload: apiMocks.fetchFeedFailMessage
    });
  });

  it("call apiSearch with url on fail with 0 results", async () => {
    api.fetchFeed = jest.fn(url => ({ records: [] }));

    const mockDispatch = jest.fn();
    await search("value", "target", null, "url")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__REJECTED,
      payload: "Nothing to show."
    });
  });

  it("call apiSearch without url on success", async () => {
    api.fetchListOf = jest.fn(() => apiMocks.fetchListOfSuccess());

    const mockDispatch = jest.fn();
    await search("value", "target")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__FULFILLED,
      payload: { ...apiResponses.fetchListOfMock }
    });
  });

  it("call apiSearch without url on fail", async () => {
    api.fetchListOf = jest.fn(url => apiMocks.fetchListOfFail(url));

    const mockDispatch = jest.fn();
    await search("value", "target")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__REJECTED,
      payload: apiMocks.fetchListOfFailMessage
    });
  });

  it("call apiSearch without url on fail with 0 results", async () => {
    api.fetchListOf = jest.fn(url => ({ records: [] }));

    const mockDispatch = jest.fn();
    await search("value", "target")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FILTER_RECORDS__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__REJECTED,
      payload: "Nothing to show."
    });
  });
});

describe("sortList", () => {
  it("dispatch actions", async () => {
    const mockDispatch = jest.fn();
    sortList({ totalRecords: 1, records: [{ id: 1 }] })(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: SORT_LIST
    });
  });

  it("reset list", async () => {
    const mockDispatch = jest.fn();
    api.fetchListOf = jest.fn(() => apiMocks.fetchListOfFail());
    sortList({ totalRecords: 2, records: [{ id: 1 }] })(mockDispatch);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: RESET_LIST
    });
  });
});

describe("loadListOf", () => {
  it("dispatch thunks on search success", async () => {
    const mockDispatch = jest.fn();
    api.fetchListOf = jest.fn((url, target, desc) =>
      apiMocks.fetchListOfSuccess()
    );

    const target = "person";
    const desc = false;

    await loadListOf(target, "url", desc, false)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_TARGET__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_TARGET__FULFILLED,
      payload: {
        target,
        desc,
        ...apiResponses.fetchListOfMock
      }
    });
  });

  it("dispatch thunks on search fail", async () => {
    const mockDispatch = jest.fn();
    api.fetchListOf = jest.fn((url, target, desc) =>
      apiMocks.fetchListOfFail()
    );

    const target = "person";
    const desc = false;

    await loadListOf(target, "url", desc, false)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_TARGET__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_TARGET__REJECTED,
      payload: apiMocks.fetchListOfFailMessage
    });
  });

  it("dispatch thunks not on search success", async () => {
    const mockDispatch = jest.fn();
    api.fetchListOf = jest.fn((url, target, desc) =>
      apiMocks.fetchListOfSuccess()
    );

    const target = "person";
    const desc = false;

    await loadListOf(target, "url", desc, true)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_TARGET__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__FULFILLED,
      payload: {
        target,
        desc,
        ...apiResponses.fetchListOfMock
      }
    });
  });

  it("dispatch thunks not on search fail", async () => {
    const mockDispatch = jest.fn();
    api.fetchListOf = jest.fn((url, target, desc) =>
      apiMocks.fetchListOfFail()
    );

    const target = "person";
    const desc = false;

    await loadListOf(target, "url", desc, true)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);

    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_TARGET__SENT
    });
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FILTER_RECORDS__REJECTED,
      payload: apiMocks.fetchListOfFailMessage
    });
  });
});
