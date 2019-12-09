const API_KEY = "a3a79800-15f2-11ea-af26-8529a4665017";

const processFeed = results => {
  const processed = {
    info: {
      next: results.info.next
    },
    records: results.records.filter(
      r => ![undefined, null].includes(r.primaryimageurl)
    )
  };
  return processed;
};

export const fetchFeed = async (url = null, page = 1) => {
  if (!url) {
    const fields = `"fields":"dated,century,division,id,primaryimageurl,title,lastupdate"`;
    const aggregation = `{
      "by_lastupdate": {
        "terms": {
          "field": "lastupdate",
          "format": "yyyy-MM-dd"
        }
      }
    }`;
    url =
      `https://api.harvardartmuseums.org/object?apikey=${API_KEY}` +
      `&fields=${fields}` +
      `&aggregation=${aggregation}` +
      `&page=${page}` +
      `&size=30`;
  }

  const response = await fetch(url);

  if (response.ok) {
    const results = await response.json();
    return processFeed(results);
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};
