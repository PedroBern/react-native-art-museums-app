import {
  processFeed,
  fetchFeed,
  processRecordImages,
  processRecordPeople,
  processRecord,
  fetchRecord,
  fetchPersonRecords,
  fetchPerson,
  processList,
  fetchListOf
} from "../../src/api/api";

import * as apiMocks from "../../src/api/mockFunctions";
import * as apiResponses from "../../src/api/mockResponses";

describe("fetchFeed", () => {
  it("handle request success", async () => {
    fetch = jest.fn(url => ({
      json: () => ({ ...apiResponses.fetchFeedMock__raw }),
      ok: true
    }));

    const response = await fetchFeed(null, "totalpageviews", "desc", "");

    expect(response).toEqual(apiResponses.fetchFeedMock);
  });

  it("handle request fail", async () => {
    fetch = jest.fn(url => ({
      ok: false,
      text: () => "error"
    }));

    const fn = async () => await fetchFeed(null, "totalpageviews", "desc", "");

    await expect(fn()).rejects.toThrow("error");
  });

  it("handle request success with url", async () => {
    fetch = jest.fn(url => ({
      json: () => ({ ...apiResponses.fetchFeedMock__raw }),
      ok: true
    }));

    const response = await fetchFeed("url", "totalpageviews", "desc", "");

    expect(response).toEqual(apiResponses.fetchFeedMock);
  });

  it("handle request fail with url", async () => {
    fetch = jest.fn(url => ({
      ok: false,
      text: () => "error"
    }));

    const fn = async () => await fetchFeed("url", "totalpageviews", "desc", "");

    await expect(fn()).rejects.toThrow("error");
  });
});

describe("fetchRecord", () => {
  it("handle request success", async () => {
    fetch = jest.fn(() => ({
      json: () => ({ ...apiResponses.fetchRecordMock__raw }),
      ok: true
    }));
    const response = await fetchRecord(1);

    expect(response).toEqual({ ...apiResponses.fetchRecordMock });
  });

  it("handle request fail", async () => {
    fetch = jest.fn(url => ({
      ok: false,
      text: () => "error"
    }));
    const fn = async () => await fetchRecord(1);

    await expect(fn()).rejects.toThrow("error");
  });
});

describe("fetchPersonRecords", () => {
  it("handle request success", async () => {
    fetch = jest.fn(() => ({
      json: () => ({ ...apiResponses.fetchPersonRecordsMock__raw }),
      ok: true
    }));
    const response = await fetchPersonRecords(1);

    expect(response).toEqual({ ...apiResponses.fetchPersonRecordsMock });
  });

  it("handle request fail", async () => {
    fetch = jest.fn(url => ({
      ok: false,
      text: () => "error"
    }));
    const fn = async () => await fetchPersonRecords(1);

    await expect(fn()).rejects.toThrow("error");
  });
});

describe("fetchPerson", () => {
  it("handle request success", async () => {
    fetch = jest.fn(() => ({
      json: () => ({ ...apiResponses.fetchPersonMock }),
      ok: true
    }));
    const response = await fetchPerson(1);

    expect(response).toEqual({ ...apiResponses.fetchPersonMock });
  });

  it("handle request fail", async () => {
    fetch = jest.fn(url => ({
      ok: false,
      text: () => "error"
    }));
    const fn = async () => await fetchPerson(1);

    await expect(fn()).rejects.toThrow("error");
  });
});

describe("fetchListOf", () => {
  it("handle request success without url of person", async () => {
    fetch = jest.fn(() => ({
      json: () => ({ ...apiResponses.fetchListOfMock__person_raw }),
      ok: true
    }));
    const response = await fetchListOf(null, "person", true, null);
    expect(response).toEqual({ ...apiResponses.fetchListOfMock__person });
  });

  it("handle request success without url of object", async () => {
    fetch = jest.fn(() => ({
      json: () => ({ ...apiResponses.fetchListOfMock__object_raw }),
      ok: true
    }));
    const response = await fetchListOf(null, "object", false, "search");
    expect(response).toEqual({ ...apiResponses.fetchListOfMock__object });
  });

  it("handle request success without url of any type except object/person", async () => {
    fetch = jest.fn(() => ({
      json: () => ({ ...apiResponses.fetchListOfMock__other_raw }),
      ok: true
    }));

    ["culture", "gallery", "century"].forEach(async target => {
      const response = await fetchListOf(null, target, true, "name");
      expect(response).toEqual({ ...apiResponses.fetchListOfMock__other });
    });
  });

  it("handle request success with url", async () => {
    fetch = jest.fn(() => ({
      json: () => ({ ...apiResponses.fetchListOfMock__person_raw }),
      ok: true
    }));
    const response = await fetchListOf(null, "person", true, null);
    expect(response).toEqual({ ...apiResponses.fetchListOfMock__person });
  });

  it("handle request fail", async () => {
    fetch = jest.fn(() => ({
      ok: false,
      text: () => "error"
    }));
    const fn = async () => await fetchListOf(null, "person", false, null);
    await expect(fn()).rejects.toThrow("error");
  });
});
