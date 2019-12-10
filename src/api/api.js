const API_KEY = "a3a79800-15f2-11ea-af26-8529a4665017";

const processFeed = results => {
  const processed = {
    info: {
      next: results.info.next
    },
    records: results.records
      .filter(r => ![undefined, null].includes(r.primaryimageurl))
      .map(r => ({ ...r, id: r.objectnumber }))
  };
  return processed;
};

export const fetchFeed = async (url = null, page = 1) => {
  if (!url) {
    const fields =
      "objectnumber,dated,century,division,primaryimageurl,title,lastupdate";
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

const processRecordImages = images => images.map(image => image.baseimageurl);
const processRecordPeople = people =>
  people ? people.map(person => person.displayname) : null;

const processRecord = results => {
  const record = results.records[0];
  const processed = {
    ...record,
    images: processRecordImages(record.images),
    people: processRecordPeople(record.people)
  };
  return processed;
};

export const fetchRecord = async id => {
  const fields =
    "people,technique,classification," +
    "url,culture,accessionyear,accessionmethod,images";

  const url =
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}` +
    `&objectnumber=${id}` +
    `&fields=${fields}`;

  const response = await fetch(url);

  if (response.ok) {
    const results = await response.json();
    // console.log(results);

    return processRecord(results);
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};
