const API_KEY = "a3a79800-15f2-11ea-af26-8529a4665017";

const processFeed = results => {
  const processed = {
    info: {
      next: results.info.next
    },
    records: results.records.map(r => ({
      ...r,
      // title: r.title[0] === "[" ? r.title.slice(1, -1) : r.title,
      id: r.objectnumber
    }))
  };
  return processed;
};

export const fetchFeed = async (
  url = null,
  sort = "dateoflastpageview",
  sortorder = "desc"
) => {
  if (!url) {
    // const fields = "objectnumber,dated,century,division,primaryimageurl,title";

    url =
      `https://api.harvardartmuseums.org/object?apikey=${API_KEY}` +
      // `&fields=${fields}` +
      `&sort=${sort}` +
      `&page=1` +
      `&size=21` +
      `&hasimage=1` +
      `&sortorder=${sortorder}`;
  }

  const response = await fetch(url);

  if (response.ok) {
    const results = await response.json();
    console.log(results);
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
    "people,technique,classification,labeltext,totalpageviews," +
    "url,culture,accessionyear,accessionmethod,images,dated";

  const url =
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}` +
    `&objectnumber=${id}` +
    `&fields=${fields}`;

  const response = await fetch(url);

  if (response.ok) {
    const results = await response.json();
    return processRecord(results);
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchPerson = async () => {
  const url =
    `https://api.harvardartmuseums.org/person?apikey=${API_KEY}` +
    `&q=displayname:"Claude Monet"`;

  const response = await fetch(url);

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const fetchObjectsFromPerson = async () => {
  const url =
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}` +
    `&person=27651`;

  const response = await fetch(url);

  if (response.ok) {
    const results = await response.json();
    console.log(results);
    return results;
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};
