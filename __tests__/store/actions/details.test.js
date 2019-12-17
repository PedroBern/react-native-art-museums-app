import {
  loadRecord,
  resetDetails,
  FETCH_RECORD__SENT,
  FETCH_RECORD__FULFILLED,
  FETCH_RECORD__REJECTED,
  RESET_DETAILS
} from "../../../src/store/actions/details";

import * as api from "../../../src/api/api";
import * as apiMocks from "../../../src/api/mockFunctions";
import * as apiResponses from "../../../src/api/mockResponses";

describe("resetDetails", () => {
  it("returns an action", () => {
    expect(resetDetails()).toMatchSnapshot();
  });
});

describe("loadRecord", () => {
  it("dispatch thunks", async () => {
    api.fetchRecord = jest.fn(() => apiMocks.fetchRecordSuccess());

    const mockDispatch = jest.fn();
    await loadRecord(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: FETCH_RECORD__SENT });
    expect(api.fetchRecord.mock.calls[0][0]).toBe(1);
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_RECORD__FULFILLED,
      payload: { ...apiResponses.fetchRecordMock }
    });
  });

  it("catch errors", async () => {
    api.fetchRecord = jest.fn(() => apiMocks.fetchRecordFail());

    const mockDispatch = jest.fn();
    await loadRecord(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: FETCH_RECORD__SENT });
    expect(api.fetchRecord.mock.calls[0][0]).toBe(1);
    expect(mockDispatch.mock.calls[1][0]).toEqual({
      type: FETCH_RECORD__REJECTED,
      payload: apiMocks.fetchRecordFailMessage
    });
  });
});
