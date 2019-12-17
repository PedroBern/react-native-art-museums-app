import {
  fetchFeedMock,
  fetchRecordMock,
  fetchPersonRecordsMock,
  fetchPersonMock,
  fetchListOfMock
} from "./mockResponses";

// -
export const fetchFeedSuccess = async (url, sort, sortorder, extra) => {
  return { ...fetchFeedMock };
};

export const fetchFeedFailMessage = "Internal server error";

export const fetchFeedFail = async (url, sort, sortorder, extra) => {
  throw new Error(fetchFeedFailMessage);
};
// -

// -
export const fetchRecordSuccess = async id => {
  return { ...fetchRecordMock };
};

export const fetchRecordFailMessage = "Internal server error";

export const fetchRecordFail = async id => {
  throw new Error(fetchRecordFailMessage);
};
// -

// -
export const fetchPersonRecordsSuccess = async personid => {
  return { ...fetchPersonRecordsMock };
};

export const fetchPersonRecordsFailMessage = "Internal server error";

export const fetchPersonRecordsFail = async personid => {
  throw new Error(fetchPersonRecordsFailMessage);
};
// -

// -
export const fetchPersonSuccess = async personid => {
  return { ...fetchPersonMock };
};

export const fetchPersonFailMessage = "Internal server error";

export const fetchPersonFail = async personid => {
  throw new Error(fetchPersonFailMessage);
};
// -

// -
export const fetchListOfSuccess = async (url, target, desc, search) => {
  return { ...fetchListOfMock };
};

export const fetchListOfFailMessage = "Internal server error";

export const fetchListOfFail = async (url, target, desc, search) => {
  throw new Error(fetchListOfFailMessage);
};
// -
