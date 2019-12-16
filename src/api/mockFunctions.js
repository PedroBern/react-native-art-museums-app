import { fetchFeedMock } from "./mockResponses";

export const fetchFeedSuccess = async (url, sort, sortorder, extra) => {
  return { ...fetchFeedMock };
};

export const fetchFeedFailMessage = "Internal server error";

export const fetchFeedFail = async (url, sort, sortorder, extra) => {
  throw new Error(fetchFeedFailMessage);
};
