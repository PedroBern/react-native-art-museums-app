import {
  loadPerson,
  loadPersonRecords,
  FETCH_PERSON__SENT,
  FETCH_PERSON__FULFILLED,
  FETCH_PERSON__REJECTED,
  FETCH_PERSON_RECORDS__SENT,
  FETCH_PERSON_RECORDS__FULFILLED,
  FETCH_PERSON_RECORDS__REJECTED
} from "../../../src/store/actions/person";

import * as api from "../../../src/api/api";
import * as apiMocks from "../../../src/api/mockFunctions";
import * as apiResponses from "../../../src/api/mockResponses";

describe("loadPerson", () => {
  it("dispatch thunks", async () => {
    api.fetchPerson = jest.fn(() => apiMocks.fetchPersonSuccess());

    const mockDispatch = jest.fn();
    await loadPerson(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_PERSON__SENT
    });
    expect(api.fetchPerson.mock.calls[0][0]).toBe(1);
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_PERSON__FULFILLED,
      payload: { ...apiResponses.fetchPersonMock }
    });
  });

  it("catch errors", async () => {
    api.fetchPerson = jest.fn(() => apiMocks.fetchPersonFail());

    const mockDispatch = jest.fn();
    await loadPerson(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_PERSON__SENT
    });
    expect(api.fetchPerson.mock.calls[0][0]).toBe(1);
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_PERSON__REJECTED,
      payload: apiMocks.fetchPersonFailMessage
    });
  });
});

describe("loadPersonRecords", () => {
  it("dispatch thunks", async () => {
    api.fetchPersonRecords = jest.fn(() =>
      apiMocks.fetchPersonRecordsSuccess()
    );

    const mockDispatch = jest.fn();
    await loadPersonRecords(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_PERSON_RECORDS__SENT
    });
    expect(api.fetchPersonRecords.mock.calls[0][0]).toBe(1);
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_PERSON_RECORDS__FULFILLED,
      payload: { ...apiResponses.fetchPersonRecordsMock }
    });
  });

  it("catch errors", async () => {
    api.fetchPersonRecords = jest.fn(() => apiMocks.fetchPersonRecordsFail());

    const mockDispatch = jest.fn();
    await loadPersonRecords(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_PERSON_RECORDS__SENT
    });
    expect(api.fetchPersonRecords.mock.calls[0][0]).toBe(1);
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_PERSON_RECORDS__REJECTED,
      payload: apiMocks.fetchPersonFailMessage
    });
  });

  it("dispatch thunks - with next url", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedSuccess());

    const mockDispatch = jest.fn();
    await loadPersonRecords(1, "url")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_PERSON_RECORDS__SENT
    });
    expect(api.fetchFeed.mock.calls[0][0]).toBe("url");
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_PERSON_RECORDS__FULFILLED,
      payload: { ...apiResponses.fetchFeedMock }
    });
  });

  it("catch errors - with next url", async () => {
    api.fetchFeed = jest.fn(() => apiMocks.fetchFeedFail());

    const mockDispatch = jest.fn();
    await loadPersonRecords(1, "url")(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: FETCH_PERSON_RECORDS__SENT
    });
    expect(api.fetchFeed.mock.calls[0][0]).toBe("url");
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_PERSON_RECORDS__REJECTED,
      payload: apiMocks.fetchFeedFailMessage
    });
  });
});
