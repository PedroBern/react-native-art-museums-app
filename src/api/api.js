const API_KEY = "a3a79800-15f2-11ea-af26-8529a4665017";

function dateSort(a, b) {
  a = new Date(a.lastUpdate);
  b = new Date(b.lastUpdate);
  return a > b ? -1 : a < b ? 1 : 0;
}

const processImages = images =>
  images.map(image => ({
    url: image.baseimageurl,
    index: image.displayorder,
    format: image.format,
    height: image.height,
    width: image.width
  }));

const processFeed = results => {
  const processed = {
    info: {
      page: results.info.page,
      pages: results.info.pages
    },
    records: []
  };
  results.records.forEach(record => {
    if (record.images && record.images.length > 0) {
      const acceptedDataFormat = record.lastupdate.slice(0, 19);
      const date = new Date(acceptedDataFormat);
      const r = {
        lastUpdateDate: date.toLocaleDateString("en-US"),
        lastUpdateTime: date
          .toLocaleTimeString("en-US", { hour12: false })
          .slice(0, -3),
        lastUpdate: record.lastupdate,
        imageCount: record.images.length,
        dated: record.dated,
        division: record.division,
        id: record.id,
        images: processImages(record.images),
        title: record.title
      };
      processed.records.push({ ...r });
    }
  });
  processed.records = processed.records.sort(dateSort);
  processed.info.records = processed.records.length;
  processed.info.totalRecords =
    results.info.totalrecords -
    results.info.totalrecordsperquery +
    processed.info.records;
  return processed;
};

export const fetchFeed = async (page = 1) => {
  const aggregation = `{
    "by_lastupdate": {
      "terms": {
        "field": "lastupdate",
        "format": "yyyy-MM-dd"
      }
    }
  }`;

  const url =
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}` +
    `&aggregation=${aggregation}` +
    `&page=${page}` +
    `&size=30`;

  const response = await fetch(url);

  if (response.ok) {
    const results = await response.json();
    return processFeed(results);
  }

  console.log("not ok");
  const errMessage = await response.text();
  throw new Error(errMessage);
};
