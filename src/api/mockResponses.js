export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const delayMock = async res => {
  await sleep(1000);
  return res;
};

export const fetchFeedMock__raw = {
  info: {
    next:
      "https://api.harvardartmuseums.org/object?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=objectnumber%2Cdated%2Ccentury%2Cdivision%2Cprimaryimageurl%2Ctitle&sort=totalpageviews&page=2&size=44&hasimage=1&sortorder=desc",
    page: 1,
    pages: 4794,
    totalrecords: 210916,
    totalrecordsperquery: 44
  },
  records: [
    {
      century: "19th century",
      dated: "1888",
      division: "European and American Art",
      id: 299843,
      imagepermissionlevel: 0,
      objectnumber: "1951.65",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC251942_dynmc",
      title: "Self-Portrait Dedicated to Paul Gauguin"
    },
    {
      century: "19th century",
      dated: "1877",
      division: "European and American Art",
      id: 228649,
      imagepermissionlevel: 0,
      objectnumber: "1951.53",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC231456_dynmc",
      title: "The Gare Saint-Lazare: Arrival of a Train"
    },
    {
      century: "14th century",
      dated: "c. 1335",
      division: "Asian and Mediterranean Art",
      id: 169542,
      imagepermissionlevel: 0,
      objectnumber: "1960.190",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:770435",
      title:
        "Bahram Gur Fights the Horned Wolf (painting, verso; text, recto), illustrated folio from a manuscript of the Great Ilkhanid Shahnama (Book of Kings)"
    },
    {
      century: "19th century",
      dated: "1839-1840",
      division: "European and American Art",
      id: 299806,
      imagepermissionlevel: 0,
      objectnumber: "1943.251",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51355_dynmc",
      title: "Odalisque, Slave, and Eunuch"
    },
    {
      century: "18th century",
      dated: "1750, with later additions",
      division: "European and American Art",
      id: 303561,
      imagepermissionlevel: 0,
      objectnumber: "1966.47",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51366_dynmc",
      title: "Jeanne-Antoinette Poisson, Marquise de Pompadour"
    },
    {
      century: "20th century",
      dated: "1903-1904",
      division: "Modern and Contemporary Art",
      id: 299997,
      imagepermissionlevel: 1,
      objectnumber: "1965.318",
      primaryimageurl: null,
      title:
        "A Mother and Child and Four Studies of Her Right Hand, 1904; verso:  Self-Portrait Standing, 1903"
    },
    {
      century: "19th century",
      dated: "1875",
      division: "European and American Art",
      id: 228650,
      imagepermissionlevel: 0,
      objectnumber: "1951.54",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC231457_dynmc",
      title: "Red Boats, Argenteuil"
    },
    {
      century: "16th century",
      dated: "1562",
      division: "Asian and Mediterranean Art",
      id: 146520,
      imagepermissionlevel: 0,
      objectnumber: "2002.50.150",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:62173_dynmc",
      title:
        "Court of Gayumars (painting, recto; text, verso), folio from a manuscript of the Shahnama by Firdawsi"
    },
    {
      century: "20th century",
      dated: "1930",
      division: "Modern and Contemporary Art",
      id: 299819,
      imagepermissionlevel: 1,
      objectnumber: "BR56.5",
      primaryimageurl: null,
      title: "Light Prop for an Electric Stage (Light-Space Modulator)"
    },
    {
      century: "20th century",
      dated: "1927",
      division: "Modern and Contemporary Art",
      id: 304344,
      imagepermissionlevel: 1,
      objectnumber: "BR41.37",
      primaryimageurl: null,
      title: "Self-Portrait in Tuxedo"
    },
    {
      century: "19th-20th century",
      dated: "c. 1901",
      division: "Modern and Contemporary Art",
      id: 299993,
      imagepermissionlevel: 1,
      objectnumber: "1951.57",
      primaryimageurl: null,
      title: "Mother and Child"
    },
    {
      century: "19th century",
      dated: "1887-1889",
      division: "European and American Art",
      id: 229060,
      imagepermissionlevel: 0,
      objectnumber: "1951.63",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252007_dynmc",
      title: "The Hangover (Suzanne Valadon)"
    },
    {
      century: "19th century",
      dated: "c. 1873-1878",
      division: "European and American Art",
      id: 303496,
      imagepermissionlevel: 0,
      objectnumber: "1951.47",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252086_dynmc",
      title: "The Rehearsal"
    },
    {
      century: "19th century",
      dated: "1886-1887",
      division: "European and American Art",
      id: 228744,
      imagepermissionlevel: 0,
      objectnumber: "1951.66",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC231470_dynmc",
      title: "Three Pairs of Shoes"
    },
    {
      century: "20th century",
      dated: "1903 (reworked by the artist 1903/1918)",
      division: "European and American Art",
      id: 299849,
      imagepermissionlevel: 0,
      objectnumber: "BR66.4",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50920_dynmc",
      title: "Pear Tree"
    },
    {
      century: "19th century",
      dated: "1866",
      division: "European and American Art",
      id: 303729,
      imagepermissionlevel: 0,
      objectnumber: "1943.277",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50587_dynmc",
      title: "Spring Bouquet"
    },
    {
      century: "19th century",
      dated: "1876-1877",
      division: "European and American Art",
      id: 299926,
      imagepermissionlevel: 0,
      objectnumber: "1943.268",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:21204_dynmc",
      title: "The Apparition"
    },
    {
      century: "15th-16th century",
      dated: "c. 1500",
      division: "European and American Art",
      id: 299923,
      imagepermissionlevel: 0,
      objectnumber: "1924.27",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252445_dynmc",
      title: "Mystic Crucifixion"
    },
    {
      century: "20th century",
      dated: "1911",
      division: "Modern and Contemporary Art",
      id: 222353,
      imagepermissionlevel: 0,
      objectnumber: "2014.301",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:40862_dynmc",
      title: "Grazing Horses IV"
    },
    {
      century: "19th century",
      dated: "1883 - 1884",
      division: "European and American Art",
      id: 299794,
      imagepermissionlevel: 0,
      objectnumber: "1943.150",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51172_dynmc",
      title: "The Breakfast Table"
    },
    {
      century: "19th century",
      dated: "1814",
      division: "European and American Art",
      id: 299807,
      imagepermissionlevel: 0,
      objectnumber: "1943.252",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:756693",
      title: "Raphael and the Fornarina"
    },
    {
      century: "19th century",
      dated: "1876",
      division: "European and American Art",
      id: 230417,
      imagepermissionlevel: 0,
      objectnumber: "1943.172",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:30083_dynmc",
      title: "Nocturne in Grey and Gold: Chelsea Snow"
    },
    {
      century: "17th century",
      dated: "1632",
      division: "European and American Art",
      id: 231830,
      imagepermissionlevel: 0,
      objectnumber: "1930.191",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252711_dynmc",
      title: "Portrait of an Old Man"
    },
    {
      century: "19th century",
      dated: "1863",
      division: "European and American Art",
      id: 303976,
      imagepermissionlevel: 0,
      objectnumber: "1895.698",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:52101_dynmc",
      title: 'Rocky Mountains, "Lander\'s Peak"'
    },
    {
      century: "19th century",
      dated: "1871-1878",
      division: "European and American Art",
      id: 299805,
      imagepermissionlevel: 0,
      objectnumber: "1943.202",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51827_dynmc",
      title: "The Blessed Damozel"
    },
    {
      century: "1st-2nd century CE",
      dated: "1st-2nd century CE",
      division: "Asian and Mediterranean Art",
      id: 303674,
      imagepermissionlevel: 0,
      objectnumber: "1926.48",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:756755",
      title: "Youthful Hero or God"
    },
    {
      century: "18th century",
      dated: "1783",
      division: "European and American Art",
      id: 299877,
      imagepermissionlevel: 0,
      objectnumber: "H74",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50547_dynmc",
      title: "John Adams (1735-1826)"
    },
    {
      century: "13th century BCE",
      dated: "13th century BCE",
      division: "Asian and Mediterranean Art",
      id: 303630,
      imagepermissionlevel: 0,
      objectnumber: "1943.52.103",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:30076_dynmc",
      title: "'Guang' Covered Ritual Wine Vessel with Tiger and Owl Decor"
    }
  ]
};

export const fetchFeedMock = {
  info: {
    next:
      "https://api.harvardartmuseums.org/object?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=objectnumber%2Cdated%2Ccentury%2Cdivision%2Cprimaryimageurl%2Ctitle&sort=totalpageviews&page=2&size=44&hasimage=1&sortorder=desc"
  },
  records: [
    {
      century: "19th century",
      dated: "1888",
      division: "European and American Art",
      id: "1951.65",
      imagepermissionlevel: 0,
      objectnumber: "1951.65",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC251942_dynmc",
      title: "Self-Portrait Dedicated to Paul Gauguin"
    },
    {
      century: "19th century",
      dated: "1877",
      division: "European and American Art",
      id: "1951.53",
      imagepermissionlevel: 0,
      objectnumber: "1951.53",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC231456_dynmc",
      title: "The Gare Saint-Lazare: Arrival of a Train"
    },
    {
      century: "14th century",
      dated: "c. 1335",
      division: "Asian and Mediterranean Art",
      id: "1960.190",
      imagepermissionlevel: 0,
      objectnumber: "1960.190",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:770435",
      title:
        "Bahram Gur Fights the Horned Wolf (painting, verso; text, recto), illustrated folio from a manuscript of the Great Ilkhanid Shahnama (Book of Kings)"
    },
    {
      century: "19th century",
      dated: "1839-1840",
      division: "European and American Art",
      id: "1943.251",
      imagepermissionlevel: 0,
      objectnumber: "1943.251",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51355_dynmc",
      title: "Odalisque, Slave, and Eunuch"
    },
    {
      century: "18th century",
      dated: "1750, with later additions",
      division: "European and American Art",
      id: "1966.47",
      imagepermissionlevel: 0,
      objectnumber: "1966.47",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51366_dynmc",
      title: "Jeanne-Antoinette Poisson, Marquise de Pompadour"
    },
    {
      century: "20th century",
      dated: "1903-1904",
      division: "Modern and Contemporary Art",
      id: "1965.318",
      imagepermissionlevel: 1,
      objectnumber: "1965.318",
      primaryimageurl: null,
      title:
        "A Mother and Child and Four Studies of Her Right Hand, 1904; verso:  Self-Portrait Standing, 1903"
    },
    {
      century: "19th century",
      dated: "1875",
      division: "European and American Art",
      id: "1951.54",
      imagepermissionlevel: 0,
      objectnumber: "1951.54",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC231457_dynmc",
      title: "Red Boats, Argenteuil"
    },
    {
      century: "16th century",
      dated: "1562",
      division: "Asian and Mediterranean Art",
      id: "2002.50.150",
      imagepermissionlevel: 0,
      objectnumber: "2002.50.150",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:62173_dynmc",
      title:
        "Court of Gayumars (painting, recto; text, verso), folio from a manuscript of the Shahnama by Firdawsi"
    },
    {
      century: "20th century",
      dated: "1930",
      division: "Modern and Contemporary Art",
      id: "BR56.5",
      imagepermissionlevel: 1,
      objectnumber: "BR56.5",
      primaryimageurl: null,
      title: "Light Prop for an Electric Stage (Light-Space Modulator)"
    },
    {
      century: "20th century",
      dated: "1927",
      division: "Modern and Contemporary Art",
      id: "BR41.37",
      imagepermissionlevel: 1,
      objectnumber: "BR41.37",
      primaryimageurl: null,
      title: "Self-Portrait in Tuxedo"
    },
    {
      century: "19th-20th century",
      dated: "c. 1901",
      division: "Modern and Contemporary Art",
      id: "1951.57",
      imagepermissionlevel: 1,
      objectnumber: "1951.57",
      primaryimageurl: null,
      title: "Mother and Child"
    },
    {
      century: "19th century",
      dated: "1887-1889",
      division: "European and American Art",
      id: "1951.63",
      imagepermissionlevel: 0,
      objectnumber: "1951.63",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252007_dynmc",
      title: "The Hangover (Suzanne Valadon)"
    },
    {
      century: "19th century",
      dated: "c. 1873-1878",
      division: "European and American Art",
      id: "1951.47",
      imagepermissionlevel: 0,
      objectnumber: "1951.47",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252086_dynmc",
      title: "The Rehearsal"
    },
    {
      century: "19th century",
      dated: "1886-1887",
      division: "European and American Art",
      id: "1951.66",
      imagepermissionlevel: 0,
      objectnumber: "1951.66",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC231470_dynmc",
      title: "Three Pairs of Shoes"
    },
    {
      century: "20th century",
      dated: "1903 (reworked by the artist 1903/1918)",
      division: "European and American Art",
      id: "BR66.4",
      imagepermissionlevel: 0,
      objectnumber: "BR66.4",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50920_dynmc",
      title: "Pear Tree"
    },
    {
      century: "19th century",
      dated: "1866",
      division: "European and American Art",
      id: "1943.277",
      imagepermissionlevel: 0,
      objectnumber: "1943.277",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50587_dynmc",
      title: "Spring Bouquet"
    },
    {
      century: "19th century",
      dated: "1876-1877",
      division: "European and American Art",
      id: "1943.268",
      imagepermissionlevel: 0,
      objectnumber: "1943.268",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:21204_dynmc",
      title: "The Apparition"
    },
    {
      century: "15th-16th century",
      dated: "c. 1500",
      division: "European and American Art",
      id: "1924.27",
      imagepermissionlevel: 0,
      objectnumber: "1924.27",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252445_dynmc",
      title: "Mystic Crucifixion"
    },
    {
      century: "20th century",
      dated: "1911",
      division: "Modern and Contemporary Art",
      id: "2014.301",
      imagepermissionlevel: 0,
      objectnumber: "2014.301",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:40862_dynmc",
      title: "Grazing Horses IV"
    },
    {
      century: "19th century",
      dated: "1883 - 1884",
      division: "European and American Art",
      id: "1943.150",
      imagepermissionlevel: 0,
      objectnumber: "1943.150",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51172_dynmc",
      title: "The Breakfast Table"
    },
    {
      century: "19th century",
      dated: "1814",
      division: "European and American Art",
      id: "1943.252",
      imagepermissionlevel: 0,
      objectnumber: "1943.252",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:756693",
      title: "Raphael and the Fornarina"
    },
    {
      century: "19th century",
      dated: "1876",
      division: "European and American Art",
      id: "1943.172",
      imagepermissionlevel: 0,
      objectnumber: "1943.172",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:30083_dynmc",
      title: "Nocturne in Grey and Gold: Chelsea Snow"
    },
    {
      century: "17th century",
      dated: "1632",
      division: "European and American Art",
      id: "1930.191",
      imagepermissionlevel: 0,
      objectnumber: "1930.191",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252711_dynmc",
      title: "Portrait of an Old Man"
    },
    {
      century: "19th century",
      dated: "1863",
      division: "European and American Art",
      id: "1895.698",
      imagepermissionlevel: 0,
      objectnumber: "1895.698",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:52101_dynmc",
      title: 'Rocky Mountains, "Lander\'s Peak"'
    },
    {
      century: "19th century",
      dated: "1871-1878",
      division: "European and American Art",
      id: "1943.202",
      imagepermissionlevel: 0,
      objectnumber: "1943.202",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:51827_dynmc",
      title: "The Blessed Damozel"
    },
    {
      century: "1st-2nd century CE",
      dated: "1st-2nd century CE",
      division: "Asian and Mediterranean Art",
      id: "1926.48",
      imagepermissionlevel: 0,
      objectnumber: "1926.48",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:756755",
      title: "Youthful Hero or God"
    },
    {
      century: "18th century",
      dated: "1783",
      division: "European and American Art",
      id: "H74",
      imagepermissionlevel: 0,
      objectnumber: "H74",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50547_dynmc",
      title: "John Adams (1735-1826)"
    },
    {
      century: "13th century BCE",
      dated: "13th century BCE",
      division: "Asian and Mediterranean Art",
      id: "1943.52.103",
      imagepermissionlevel: 0,
      objectnumber: "1943.52.103",
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:30076_dynmc",
      title: "'Guang' Covered Ritual Wine Vessel with Tiger and Owl Decor"
    }
  ]
};

export const fetchRecordMock__raw = {
  info: {
    page: 1,
    pages: 1,
    totalrecords: 1,
    totalrecordsperquery: 10
  },
  records: [
    {
      accessionmethod: "Bequest",
      accessionyear: 1951,
      century: "19th century",
      classification: "Paintings",
      culture: "Dutch",
      dated: "1888",
      id: 299843,
      imagepermissionlevel: 0,
      images: [
        {
          baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC251942_dynmc",
          copyright: "President and Fellows of Harvard College",
          displayorder: 1,
          format: "image/jpeg",
          height: 2550,
          idsid: 47174896,
          iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/47174896",
          imageid: 429030,
          publiccaption: null,
          renditionnumber: "DDC251942",
          width: 2087
        },
        {
          baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC000072_dynmc",
          copyright: "President and Fellows of Harvard College",
          displayorder: 2,
          format: "image/jpeg",
          height: 2550,
          idsid: 18737483,
          iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/18737483",
          imageid: 185978,
          publiccaption: null,
          renditionnumber: "DDC000072",
          width: 2088
        },
        {
          baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC251934_dynmc",
          copyright: "President and Fellows of Harvard College",
          displayorder: 3,
          format: "image/jpeg",
          height: 2550,
          idsid: 47174892,
          iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/47174892",
          imageid: 429028,
          publiccaption: null,
          renditionnumber: "DDC251934",
          width: 2259
        },
        {
          baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:30033_dynmc",
          copyright: "President and Fellows of Harvard College",
          displayorder: 4,
          format: "image/jpeg",
          height: 1024,
          idsid: 43182083,
          iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/43182083",
          imageid: 25781,
          publiccaption: null,
          renditionnumber: "30033",
          width: 844
        },
        {
          baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50493_dynmc",
          copyright: "President and Fellows of Harvard College",
          displayorder: 5,
          format: "image/jpeg",
          height: 2550,
          idsid: 43183405,
          iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/43183405",
          imageid: 19801,
          publiccaption: null,
          renditionnumber: "50493",
          width: 2082
        },
        {
          baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:50849_dynmc",
          copyright: "President and Fellows of Harvard College",
          displayorder: 6,
          format: "image/jpeg",
          height: 2550,
          idsid: 43183422,
          iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/43183422",
          imageid: 42292,
          publiccaption: null,
          renditionnumber: "50849",
          width: 2093
        }
      ],
      labeltext:
        "In early 1888, Van Gogh moved to Arles in the south of France, where he hoped to establish an art colony. Believing that painting could be reinvented through the genre of portraiture, he encouraged his fellow artists to paint themselves, and then to exchange the canvases. After receiving self-portraits from Emile Bernard and Gauguin, who were working together in Brittany at the time, Van Gogh inscribed this painting “To my friend Paul Gauguin,” and sent it to him. He described the process of creating his arresting likeness in several letters to his brother Theo, an art dealer in Paris, explaining how he manipulated his features in response to Japanese prints, changed the contours of his jacket for coloristic effect, and painted the background “pale veronese green” without any shadows. Shortly after he sent the work to Gauguin, however, their friendship deteriorated, and Gauguin sold it for three hundred francs.",
      people: [
        {
          alphasort: "Gogh, Vincent van",
          birthplace: "Groot Zundert (Zundert), The Netherlands",
          culture: "Dutch",
          deathplace: "Auvers-sur-Oise, France",
          displaydate: "1853 - 1890",
          displayname: "Vincent van Gogh",
          displayorder: 1,
          gender: "male",
          name: "Vincent van Gogh",
          personid: 22730,
          prefix: null,
          role: "Artist"
        }
      ],
      seeAlso: [
        {
          format: "application/json",
          id: "https://iiif.harvardartmuseums.org/manifests/object/299843",
          profile: "http://iiif.io/api/presentation/2/context.json",
          type: "IIIF Manifest"
        }
      ],
      technique: null,
      totalpageviews: 31189,
      url: "https://www.harvardartmuseums.org/collections/object/299843"
    }
  ]
};

export const fetchRecordMock = {
  accessionmethod: "Bequest",
  accessionyear: 1951,
  century: "19th century",
  classification: "Paintings",
  culture: "Dutch",
  dated: "1888",
  id: 299843,
  imagepermissionlevel: 0,
  images: [
    "https://nrs.harvard.edu/urn-3:HUAM:DDC251942_dynmc",
    "https://nrs.harvard.edu/urn-3:HUAM:DDC000072_dynmc",
    "https://nrs.harvard.edu/urn-3:HUAM:DDC251934_dynmc",
    "https://nrs.harvard.edu/urn-3:HUAM:30033_dynmc",
    "https://nrs.harvard.edu/urn-3:HUAM:50493_dynmc",
    "https://nrs.harvard.edu/urn-3:HUAM:50849_dynmc"
  ],
  labeltext:
    "In early 1888, Van Gogh moved to Arles in the south of France, where he hoped to establish an art colony. Believing that painting could be reinvented through the genre of portraiture, he encouraged his fellow artists to paint themselves, and then to exchange the canvases. After receiving self-portraits from Emile Bernard and Gauguin, who were working together in Brittany at the time, Van Gogh inscribed this painting “To my friend Paul Gauguin,” and sent it to him. He described the process of creating his arresting likeness in several letters to his brother Theo, an art dealer in Paris, explaining how he manipulated his features in response to Japanese prints, changed the contours of his jacket for coloristic effect, and painted the background “pale veronese green” without any shadows. Shortly after he sent the work to Gauguin, however, their friendship deteriorated, and Gauguin sold it for three hundred francs.",
  people: [
    {
      name: "Vincent van Gogh",
      personid: 22730,
      role: "Artist"
    }
  ],
  seeAlso: [
    {
      format: "application/json",
      id: "https://iiif.harvardartmuseums.org/manifests/object/299843",
      profile: "http://iiif.io/api/presentation/2/context.json",
      type: "IIIF Manifest"
    }
  ],
  technique: null,
  totalpageviews: 31189,
  url: "https://www.harvardartmuseums.org/collections/object/299843"
};

export const fetchPersonRecordsMock__raw = fetchFeedMock__raw;

export const fetchPersonRecordsMock = fetchFeedMock;

export const fetchPersonMock = {
  info: {
    page: 1,
    pages: 1,
    totalrecords: 1,
    totalrecordsperquery: 10
  },
  records: [
    {
      birthplace: "Groot Zundert (Zundert), The Netherlands",
      culture: "Dutch",
      deathplace: "Auvers-sur-Oise, France",
      displaydate: "1853 - 1890",
      displayname: "Vincent van Gogh",
      gender: "male",
      id: 22730,
      url: "https://www.harvardartmuseums.org/collections/person/22730",
      wikipedia_id: "32603"
    }
  ]
};

export const fetchListOfMock__person_raw = {
  info: {
    next:
      "https://api.harvardartmuseums.org/person?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=id%2Cobjectcount%2Cdisplayname&sortorder=asc&size=100&sort=displayname&page=2",
    page: 1,
    pages: 394,
    totalrecords: 39352,
    totalrecordsperquery: 100
  },
  records: [
    {
      displayname: "P.S.1 Contemporary Art Center",
      id: 6156,
      objectcount: 0
    },
    {
      displayname: "Quai des Celestins, 10",
      id: 43955,
      objectcount: 0
    },
    {
      displayname: "Rue Saint-Anastase, 10",
      id: 43974,
      objectcount: 0
    },
    {
      displayname: "Actes du 116e Congrès National des Sociétés Savantes",
      id: 55553,
      objectcount: 0
    },
    {
      displayname: "Anonymous Germany 1199",
      id: 34117,
      objectcount: 1
    },
    {
      displayname: "12, Rue Chaptal (Chaussé d'Antin)",
      id: 43986,
      objectcount: 0
    },
    {
      displayname: "The Painter of London D 12",
      id: 27561,
      objectcount: 3
    },
    {
      displayname: "Confidential 1291",
      id: 1291,
      objectcount: 0
    },
    {
      displayname: "Anonymous Germany 1470",
      id: 18808,
      objectcount: 4
    },
    {
      displayname: "Anonymous Italy (Verona) 1472",
      id: 34079,
      objectcount: 3
    },
    {
      displayname: "Anonymous Germany (Augsburg) 1476",
      id: 34120,
      objectcount: 167
    },
    {
      displayname: "Anonymous Germany 1479",
      id: 24331,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Venice) 1482",
      id: 23738,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany (Ulm) 1483",
      id: 34127,
      objectcount: 13
    },
    {
      displayname: "Anonymous Italy (Venice) 1485",
      id: 23740,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Brescia) 1487",
      id: 34074,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany (Magdeburg) 1487",
      id: 18252,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany 1488",
      id: 24359,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Venice) 1489",
      id: 19397,
      objectcount: 5
    },
    {
      displayname: "Anonymous Italy (Florence) 1490",
      id: 24329,
      objectcount: 0
    },
    {
      displayname: "Anonymous Italy (Venice) 1490",
      id: 23741,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Venice) 1491",
      id: 19794,
      objectcount: 110
    },
    {
      displayname: "Anonymous Italy (Venice) 1493",
      id: 23519,
      objectcount: 147
    },
    {
      displayname: "Anonymous Italy (Venice) 1494",
      id: 23518,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Florence) 1495",
      id: 24330,
      objectcount: 0
    },
    {
      displayname: "Anonymous Germany (Strassburg) 1495",
      id: 34143,
      objectcount: 7
    },
    {
      displayname: "Anonymous Italy 1497",
      id: 24586,
      objectcount: 0
    },
    {
      displayname: "Anonymous Italy (Ferrara) 1497",
      id: 34075,
      objectcount: 180
    },
    {
      displayname: "Anonymous Italy (Venice) 1498",
      id: 23742,
      objectcount: 64
    },
    {
      displayname: "Anonymous Switzerland (Basle) 1499",
      id: 34112,
      objectcount: 61
    },
    {
      displayname: "Anonymous Italy 1499",
      id: 34073,
      objectcount: 10
    },
    {
      displayname: "Anonymous Italy (Pavia) 1499",
      id: 34076,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany (Strassburg) 1499",
      id: 34126,
      objectcount: 21
    },
    {
      displayname: "Anonymous France (Lyons) 1499",
      id: 34057,
      objectcount: 7
    },
    {
      displayname: "Anonymous Italy (Florence) 1499",
      id: 34080,
      objectcount: 16
    },
    {
      displayname: "Anonymous France 1499",
      id: 34056,
      objectcount: 11
    },
    {
      displayname: "Anonymous France (Paris) 1499",
      id: 34058,
      objectcount: 105
    },
    {
      displayname: "Anonymous Germany (Munich) 1499",
      id: 34123,
      objectcount: 2
    },
    {
      displayname: "Anonymous Germany (Nuremberg) 1499",
      id: 34124,
      objectcount: 13
    },
    {
      displayname: "Anonymous Italy (Venice) 1499",
      id: 23743,
      objectcount: 162
    },
    {
      displayname: "Anonymous Germany 1499",
      id: 34118,
      objectcount: 26
    },
    {
      displayname: "Anonymous Germany (Mainz) 1499",
      id: 34122,
      objectcount: 2
    },
    {
      displayname: "Anonymous Germany (Cologne) 1499",
      id: 34121,
      objectcount: 5
    },
    {
      displayname: "Anonymous Italy (North Italian School) 1499",
      id: 34081,
      objectcount: 16
    },
    {
      displayname: "Anonymous Netherlands (Antwerp) 1499",
      id: 34104,
      objectcount: 2
    },
    {
      displayname: "Anonymous England 14th c.",
      id: 24290,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany 1500",
      id: 34128,
      objectcount: 235
    },
    {
      displayname: "Anonymous Germany (Lübeck) 1507",
      id: 25544,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany 1510",
      id: 18092,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Venice) 1515",
      id: 24327,
      objectcount: 0
    },
    {
      displayname: "Master of 1518",
      id: 27488,
      objectcount: 5
    },
    {
      displayname: "Anonymous France (Avignon?) 1525",
      id: 34060,
      objectcount: 2
    },
    {
      displayname: "Master of 1527",
      id: 18824,
      objectcount: 1
    },
    {
      displayname: "Anonymous France (Paris) 1528",
      id: 34064,
      objectcount: 320
    },
    {
      displayname: "Anonymous Germany 1530",
      id: 23181,
      objectcount: 0
    },
    {
      displayname: "Master MF 1536",
      id: 30653,
      objectcount: 2
    },
    {
      displayname: "Anonymous England 1539",
      id: 34049,
      objectcount: 90
    },
    {
      displayname: "Master of the 1540s",
      id: 27489,
      objectcount: 1
    },
    {
      displayname: "Confidential 15468",
      id: 15468,
      objectcount: 0
    },
    {
      displayname: "Anonymous Italy 1553",
      id: 34093,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Venice) 1563",
      id: 24591,
      objectcount: 0
    },
    {
      displayname: "Joachim Fries (1579-1620)",
      id: 63157,
      objectcount: 0
    },
    {
      displayname: "Anonymous Netherlands 1580",
      id: 22270,
      objectcount: 1
    },
    {
      displayname: "Anonymous France (Paris) 1587",
      id: 22835,
      objectcount: 1
    },
    {
      displayname: "Anonymous Netherlands 1593",
      id: 18259,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany (Wittenberg) 1599",
      id: 34144,
      objectcount: 26
    },
    {
      displayname: "Anonymous Germany (Cologne) 1599",
      id: 34137,
      objectcount: 29
    },
    {
      displayname: "Anonymous France (Poitiers) 1599",
      id: 34065,
      objectcount: 1
    },
    {
      displayname: "Anonymous France (Troyes) 1599",
      id: 34068,
      objectcount: 1
    },
    {
      displayname: "Anonymous Germany (Palatinate) 1599",
      id: 34142,
      objectcount: 10
    },
    {
      displayname: "Anonymous Netherlands 1599",
      id: 18054,
      objectcount: 34
    },
    {
      displayname: "Anonymous Italy (Florence) 1599",
      id: 34085,
      objectcount: 8
    },
    {
      displayname: "Anonymous France (School of Fontainebleau) 1599",
      id: 34061,
      objectcount: 3
    },
    {
      displayname: "Anonymous Germany (Mainz) 1599",
      id: 34140,
      objectcount: 5
    },
    {
      displayname: "Anonymous Germany (Frankfort on the Main) 1599",
      id: 34138,
      objectcount: 4
    },
    {
      displayname: "Anonymous Italy (Verona) 1599",
      id: 34092,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Venice) 1599",
      id: 34089,
      objectcount: 272
    },
    {
      displayname: "Anonymous Italy (Fano) 1599",
      id: 34084,
      objectcount: 8
    },
    {
      displayname: "Anonymous Germany (Lübeck) 1599",
      id: 34139,
      objectcount: 72
    },
    {
      displayname: "Anonymous Spain 1599",
      id: 34111,
      objectcount: 72
    },
    {
      displayname: "Anonymous France (Orthez) 1599",
      id: 34063,
      objectcount: 1
    },
    {
      displayname: "Anonymous Italy (Naples) 1599",
      id: 34088,
      objectcount: 1
    }
  ]
};

export const fetchListOfMock__person = {
  info: {
    next:
      "https://api.harvardartmuseums.org/person?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=id%2Cobjectcount%2Cdisplayname&sortorder=asc&size=100&sort=displayname&page=2",
    page: 1,
    pages: 394,
    totalrecords: 39352,
    totalrecordsperquery: 100
  },
  records: [
    {
      id: 6156,
      name: "P.S.1 Contemporary Art Center",
      objectcount: null
    },
    {
      id: 43955,
      name: "Quai des Celestins, 10",
      objectcount: null
    },
    {
      id: 43974,
      name: "Rue Saint-Anastase, 10",
      objectcount: null
    },
    {
      id: 55553,
      name: "Actes du 116e Congrès National des Sociétés Savantes",
      objectcount: null
    },
    {
      id: 34117,
      name: "Anonymous Germany 1199",
      objectcount: 1
    },
    {
      id: 43986,
      name: "12, Rue Chaptal (Chaussé d'Antin)",
      objectcount: null
    },
    {
      id: 27561,
      name: "The Painter of London D 12",
      objectcount: 3
    },
    {
      id: 1291,
      name: "Confidential 1291",
      objectcount: null
    },
    {
      id: 18808,
      name: "Anonymous Germany 1470",
      objectcount: 4
    },
    {
      id: 34079,
      name: "Anonymous Italy (Verona) 1472",
      objectcount: 3
    },
    {
      id: 34120,
      name: "Anonymous Germany (Augsburg) 1476",
      objectcount: 167
    },
    {
      id: 24331,
      name: "Anonymous Germany 1479",
      objectcount: 1
    },
    {
      id: 23738,
      name: "Anonymous Italy (Venice) 1482",
      objectcount: 1
    },
    {
      id: 34127,
      name: "Anonymous Germany (Ulm) 1483",
      objectcount: 13
    },
    {
      id: 23740,
      name: "Anonymous Italy (Venice) 1485",
      objectcount: 1
    },
    {
      id: 34074,
      name: "Anonymous Italy (Brescia) 1487",
      objectcount: 1
    },
    {
      id: 18252,
      name: "Anonymous Germany (Magdeburg) 1487",
      objectcount: 1
    },
    {
      id: 24359,
      name: "Anonymous Germany 1488",
      objectcount: 1
    },
    {
      id: 19397,
      name: "Anonymous Italy (Venice) 1489",
      objectcount: 5
    },
    {
      id: 24329,
      name: "Anonymous Italy (Florence) 1490",
      objectcount: null
    },
    {
      id: 23741,
      name: "Anonymous Italy (Venice) 1490",
      objectcount: 1
    },
    {
      id: 19794,
      name: "Anonymous Italy (Venice) 1491",
      objectcount: 110
    },
    {
      id: 23519,
      name: "Anonymous Italy (Venice) 1493",
      objectcount: 147
    },
    {
      id: 23518,
      name: "Anonymous Italy (Venice) 1494",
      objectcount: 1
    },
    {
      id: 24330,
      name: "Anonymous Italy (Florence) 1495",
      objectcount: null
    },
    {
      id: 34143,
      name: "Anonymous Germany (Strassburg) 1495",
      objectcount: 7
    },
    {
      id: 24586,
      name: "Anonymous Italy 1497",
      objectcount: null
    },
    {
      id: 34075,
      name: "Anonymous Italy (Ferrara) 1497",
      objectcount: 180
    },
    {
      id: 23742,
      name: "Anonymous Italy (Venice) 1498",
      objectcount: 64
    },
    {
      id: 34112,
      name: "Anonymous Switzerland (Basle) 1499",
      objectcount: 61
    },
    {
      id: 34073,
      name: "Anonymous Italy 1499",
      objectcount: 10
    },
    {
      id: 34076,
      name: "Anonymous Italy (Pavia) 1499",
      objectcount: 1
    },
    {
      id: 34126,
      name: "Anonymous Germany (Strassburg) 1499",
      objectcount: 21
    },
    {
      id: 34057,
      name: "Anonymous France (Lyons) 1499",
      objectcount: 7
    },
    {
      id: 34080,
      name: "Anonymous Italy (Florence) 1499",
      objectcount: 16
    },
    {
      id: 34056,
      name: "Anonymous France 1499",
      objectcount: 11
    },
    {
      id: 34058,
      name: "Anonymous France (Paris) 1499",
      objectcount: 105
    },
    {
      id: 34123,
      name: "Anonymous Germany (Munich) 1499",
      objectcount: 2
    },
    {
      id: 34124,
      name: "Anonymous Germany (Nuremberg) 1499",
      objectcount: 13
    },
    {
      id: 23743,
      name: "Anonymous Italy (Venice) 1499",
      objectcount: 162
    },
    {
      id: 34118,
      name: "Anonymous Germany 1499",
      objectcount: 26
    },
    {
      id: 34122,
      name: "Anonymous Germany (Mainz) 1499",
      objectcount: 2
    },
    {
      id: 34121,
      name: "Anonymous Germany (Cologne) 1499",
      objectcount: 5
    },
    {
      id: 34081,
      name: "Anonymous Italy (North Italian School) 1499",
      objectcount: 16
    },
    {
      id: 34104,
      name: "Anonymous Netherlands (Antwerp) 1499",
      objectcount: 2
    },
    {
      id: 24290,
      name: "Anonymous England 14th c.",
      objectcount: 1
    },
    {
      id: 34128,
      name: "Anonymous Germany 1500",
      objectcount: 235
    },
    {
      id: 25544,
      name: "Anonymous Germany (Lübeck) 1507",
      objectcount: 1
    },
    {
      id: 18092,
      name: "Anonymous Germany 1510",
      objectcount: 1
    },
    {
      id: 24327,
      name: "Anonymous Italy (Venice) 1515",
      objectcount: null
    },
    {
      id: 27488,
      name: "Master of 1518",
      objectcount: 5
    },
    {
      id: 34060,
      name: "Anonymous France (Avignon?) 1525",
      objectcount: 2
    },
    {
      id: 18824,
      name: "Master of 1527",
      objectcount: 1
    },
    {
      id: 34064,
      name: "Anonymous France (Paris) 1528",
      objectcount: 320
    },
    {
      id: 23181,
      name: "Anonymous Germany 1530",
      objectcount: null
    },
    {
      id: 30653,
      name: "Master MF 1536",
      objectcount: 2
    },
    {
      id: 34049,
      name: "Anonymous England 1539",
      objectcount: 90
    },
    {
      id: 27489,
      name: "Master of the 1540s",
      objectcount: 1
    },
    {
      id: 15468,
      name: "Confidential 15468",
      objectcount: null
    },
    {
      id: 34093,
      name: "Anonymous Italy 1553",
      objectcount: 1
    },
    {
      id: 24591,
      name: "Anonymous Italy (Venice) 1563",
      objectcount: null
    },
    {
      id: 63157,
      name: "Joachim Fries (1579-1620)",
      objectcount: null
    },
    {
      id: 22270,
      name: "Anonymous Netherlands 1580",
      objectcount: 1
    },
    {
      id: 22835,
      name: "Anonymous France (Paris) 1587",
      objectcount: 1
    },
    {
      id: 18259,
      name: "Anonymous Netherlands 1593",
      objectcount: 1
    },
    {
      id: 34144,
      name: "Anonymous Germany (Wittenberg) 1599",
      objectcount: 26
    },
    {
      id: 34137,
      name: "Anonymous Germany (Cologne) 1599",
      objectcount: 29
    },
    {
      id: 34065,
      name: "Anonymous France (Poitiers) 1599",
      objectcount: 1
    },
    {
      id: 34068,
      name: "Anonymous France (Troyes) 1599",
      objectcount: 1
    },
    {
      id: 34142,
      name: "Anonymous Germany (Palatinate) 1599",
      objectcount: 10
    },
    {
      id: 18054,
      name: "Anonymous Netherlands 1599",
      objectcount: 34
    },
    {
      id: 34085,
      name: "Anonymous Italy (Florence) 1599",
      objectcount: 8
    },
    {
      id: 34061,
      name: "Anonymous France (School of Fontainebleau) 1599",
      objectcount: 3
    },
    {
      id: 34140,
      name: "Anonymous Germany (Mainz) 1599",
      objectcount: 5
    },
    {
      id: 34138,
      name: "Anonymous Germany (Frankfort on the Main) 1599",
      objectcount: 4
    },
    {
      id: 34092,
      name: "Anonymous Italy (Verona) 1599",
      objectcount: 1
    },
    {
      id: 34089,
      name: "Anonymous Italy (Venice) 1599",
      objectcount: 272
    },
    {
      id: 34084,
      name: "Anonymous Italy (Fano) 1599",
      objectcount: 8
    },
    {
      id: 34139,
      name: "Anonymous Germany (Lübeck) 1599",
      objectcount: 72
    },
    {
      id: 34111,
      name: "Anonymous Spain 1599",
      objectcount: 72
    },
    {
      id: 34063,
      name: "Anonymous France (Orthez) 1599",
      objectcount: 1
    },
    {
      id: 34088,
      name: "Anonymous Italy (Naples) 1599",
      objectcount: 1
    }
  ]
};

export const fetchListOfMock__object_raw = {
  info: {
    next:
      "https://api.harvardartmuseums.org/object?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=objectnumber%2Ctitle&sortorder=asc&size=100&hasimage=1&sort=title&page=2",
    page: 1,
    pages: 2110,
    totalrecords: 210916,
    totalrecordsperquery: 100
  },
  records: [
    {
      id: 191640,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.90.174",
      title:
        'Frank Residence, Pittsburgh, Pennsylvania, 1939-1940: Living room furniture plan (1/2" = 1\'-0")'
    },
    {
      id: 191643,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.5",
      title:
        "Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan (1/16\" =1'-0')"
    },
    {
      id: 191706,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.6",
      title:
        "Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: First floor plan (1/16\" =1'-0')"
    },
    {
      id: 191748,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.21",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan (1/16" = 1\'-0")'
    },
    {
      id: 191788,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.19",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan (1/16" = 1\'-0")'
    },
    {
      id: 193346,
      imagepermissionlevel: 1,
      objectnumber: "33.1999.A",
      title: "0 - 9 (0)"
    },
    {
      id: 193348,
      imagepermissionlevel: 1,
      objectnumber: "33.1999.C",
      title: "0 - 9"
    },
    {
      id: 193767,
      imagepermissionlevel: 1,
      objectnumber: "33.1999.I",
      title: "0 - 9"
    },
    {
      id: 213136,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.93.36",
      title:
        'Abele Residence, Framingham, Massachusetts, 1940-1941: South and east elevations (1/8" = 1\'-0")'
    },
    {
      id: 256062,
      imagepermissionlevel: 1,
      objectnumber: "M14721",
      title: "0 Through 9"
    },
    {
      id: 164902,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.85",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: West and south elevations (1/8" =1\'-0")'
    },
    {
      id: 164942,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.105.4",
      title:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office unit: plan, elevations, section (1/16" and 1/8" = 1\'-0")'
    },
    {
      id: 165006,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.106.62",
      title:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Plan and sections (1/8" =1\'-0")'
    },
    {
      id: 165025,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.106.67",
      title:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Second floor plan (1/8" =1\'-0")'
    },
    {
      id: 165031,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.105",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Roof plan (1/16"  = 1\'-0")'
    },
    {
      id: 165032,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.106",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Elevations and sections (1/16"  = 1\'-0")'
    },
    {
      id: 165033,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.110",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Wall spandrel sections (3/8"  = 1\'-0")'
    },
    {
      id: 165047,
      imagepermissionlevel: 1,
      objectnumber: "BRGA.97.89.A",
      title:
        '"Packaged House" System, 1942-1952: Building type TDU-1: horizontal section (1/4" =1\'-0")'
    },
    {
      id: 165052,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.97.102",
      title:
        '"Packaged House" System, 1942-1952: House type B: plans, elevations (1/4" =1\'-0")'
    },
    {
      id: 165065,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.108",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Details of locker rooms and toilets: ground floor plan and sections (1/4"  = 1\'-0")'
    },
    {
      id: 165118,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.105.5",
      title:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office unit: plan, elevations, section (1/16" and 1/8" = 1\'-0")'
    },
    {
      id: 165154,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.105.10",
      title:
        'Office and Factory Buildings, Cali, Colombia, 1945: Revisions: elevation, section (1/8" and 1/2" =1\'-0")'
    },
    {
      id: 165236,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.105.23",
      title:
        'Office and Factory Buildings, Cali, Colombia, 1945: Elevations (1/16" =1\'-0")'
    },
    {
      id: 165265,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.104.19",
      title:
        'Howlett Residence, Belmont, Massachusetts, 1945-1946: Kitchen cabinet: plan, elevations, and sections (1/4" and 1/2" = 1-0")'
    },
    {
      id: 165303,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.105.40",
      title:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office unit: plans, elevations, details (1/8" = 1\'-0")'
    },
    {
      id: 165313,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.106.38",
      title:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Small parts storeroom: section (1/4" =1\'-0")'
    },
    {
      id: 165375,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.106.2",
      title:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Ground floor plan (1/8" = 1\'-0")'
    },
    {
      id: 165426,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.106.14",
      title:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Elevation of locker unit (1/8" = 1\'-0")'
    },
    {
      id: 165427,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.106.15",
      title:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Elevation and typical wall section (1/8" and 3/4" = 1\'-0")'
    },
    {
      id: 165535,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.106.9",
      title:
        "Building Addition and Alterations, Philadelphia, 1944-1946: Plan of men's and women's lockers (1/8\" =1'-0\")"
    },
    {
      id: 165542,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.104.5",
      title:
        'Howlett Residence, Belmont, Massachusetts, 1945-1946: North and south elevations (1/4" =1\'-0")'
    },
    {
      id: 165633,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.129",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Stairs: plans. elevation, and section, scheme D (1/4" and 3/8" =1\'-0")'
    },
    {
      id: 165723,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.98.32",
      title:
        '"Growing and Shrinking House", 1942-1945: Roof plan (1/4" = 1\'-0")'
    },
    {
      id: 165726,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.126",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan, scheme D  (1/16"  = 1\'-0")'
    },
    {
      id: 165730,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.105.65",
      title:
        'Office and Factory Buildings, Cali, Colombia, 1945: Boiler and turbine room, ground floor: plan, sections, details (3/8" =1\'-0")'
    },
    {
      id: 165747,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.79",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: North elevation (1/16" =1\'-0")'
    },
    {
      id: 165763,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.121",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: First floor plan with electrical installation and details (1/16"  = 1\'-0")'
    },
    {
      id: 165764,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.107.122",
      title:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Partial ground floor and first floor plans with electrical installation and detail (1/8"  = 1\'-0")'
    },
    {
      id: 165767,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.105.63",
      title:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office building, lighting: plans, sections, details (1/8" = 1\'-0")'
    },
    {
      id: 165810,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.93.9",
      title:
        'Abele Residence, Framingham, Massachusetts, 1940-1941: South elevation (1/4" =1\'-0" )'
    },
    {
      id: 165811,
      imagepermissionlevel: 0,
      objectnumber: "BRGA.93.12",
      title:
        'Abele Residence, Framingham, Massachusetts, 1940-1941: Second floor framing plan and section (1/4"  and  3" =1\'-0" )'
    }
  ]
};

export const fetchListOfMock__object = {
  info: {
    next:
      "https://api.harvardartmuseums.org/object?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=objectnumber%2Ctitle&sortorder=asc&size=100&hasimage=1&sort=title&page=2",
    page: 1,
    pages: 2110,
    totalrecords: 210916,
    totalrecordsperquery: 100
  },
  records: [
    {
      id: "BRGA.90.174",
      name:
        'Frank Residence, Pittsburgh, Pennsylvania, 1939-1940: Living room furniture plan (1/2" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.5",
      name:
        "Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan (1/16\" =1'-0')",
      objectcount: null
    },
    {
      id: "BRGA.107.6",
      name:
        "Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: First floor plan (1/16\" =1'-0')",
      objectcount: null
    },
    {
      id: "BRGA.107.21",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan (1/16" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.19",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan (1/16" = 1\'-0")',
      objectcount: null
    },
    {
      id: "33.1999.A",
      name: "0 - 9 (0)",
      objectcount: null
    },
    {
      id: "33.1999.C",
      name: "0 - 9",
      objectcount: null
    },
    {
      id: "33.1999.I",
      name: "0 - 9",
      objectcount: null
    },
    {
      id: "BRGA.93.36",
      name:
        'Abele Residence, Framingham, Massachusetts, 1940-1941: South and east elevations (1/8" = 1\'-0")',
      objectcount: null
    },
    {
      id: "M14721",
      name: "0 Through 9",
      objectcount: null
    },
    {
      id: "BRGA.107.85",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: West and south elevations (1/8" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.105.4",
      name:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office unit: plan, elevations, section (1/16" and 1/8" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.106.62",
      name:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Plan and sections (1/8" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.106.67",
      name:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Second floor plan (1/8" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.105",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Roof plan (1/16"  = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.106",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Elevations and sections (1/16"  = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.110",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Wall spandrel sections (3/8"  = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.97.89.A",
      name:
        '"Packaged House" System, 1942-1952: Building type TDU-1: horizontal section (1/4" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.97.102",
      name:
        '"Packaged House" System, 1942-1952: House type B: plans, elevations (1/4" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.108",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Details of locker rooms and toilets: ground floor plan and sections (1/4"  = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.105.5",
      name:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office unit: plan, elevations, section (1/16" and 1/8" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.105.10",
      name:
        'Office and Factory Buildings, Cali, Colombia, 1945: Revisions: elevation, section (1/8" and 1/2" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.105.23",
      name:
        'Office and Factory Buildings, Cali, Colombia, 1945: Elevations (1/16" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.104.19",
      name:
        'Howlett Residence, Belmont, Massachusetts, 1945-1946: Kitchen cabinet: plan, elevations, and sections (1/4" and 1/2" = 1-0")',
      objectcount: null
    },
    {
      id: "BRGA.105.40",
      name:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office unit: plans, elevations, details (1/8" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.106.38",
      name:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Small parts storeroom: section (1/4" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.106.2",
      name:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Ground floor plan (1/8" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.106.14",
      name:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Elevation of locker unit (1/8" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.106.15",
      name:
        'Building Addition and Alterations, Philadelphia, 1944-1946: Elevation and typical wall section (1/8" and 3/4" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.106.9",
      name:
        "Building Addition and Alterations, Philadelphia, 1944-1946: Plan of men's and women's lockers (1/8\" =1'-0\")",
      objectcount: null
    },
    {
      id: "BRGA.104.5",
      name:
        'Howlett Residence, Belmont, Massachusetts, 1945-1946: North and south elevations (1/4" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.129",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Stairs: plans. elevation, and section, scheme D (1/4" and 3/8" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.98.32",
      name:
        '"Growing and Shrinking House", 1942-1945: Roof plan (1/4" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.126",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Ground floor plan, scheme D  (1/16"  = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.105.65",
      name:
        'Office and Factory Buildings, Cali, Colombia, 1945: Boiler and turbine room, ground floor: plan, sections, details (3/8" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.79",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: North elevation (1/16" =1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.121",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: First floor plan with electrical installation and details (1/16"  = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.107.122",
      name:
        'Office Unit and Factory Building, Greensboro, North Carolina, 1944-1946: Partial ground floor and first floor plans with electrical installation and detail (1/8"  = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.105.63",
      name:
        'Office and Factory Buildings, Cali, Colombia, 1945: Office building, lighting: plans, sections, details (1/8" = 1\'-0")',
      objectcount: null
    },
    {
      id: "BRGA.93.9",
      name:
        'Abele Residence, Framingham, Massachusetts, 1940-1941: South elevation (1/4" =1\'-0" )',
      objectcount: null
    },
    {
      id: "BRGA.93.12",
      name:
        'Abele Residence, Framingham, Massachusetts, 1940-1941: Second floor framing plan and section (1/4"  and  3" =1\'-0" )',
      objectcount: null
    }
  ]
};

export const fetchListOfMock__other_raw = {
  info: {
    next:
      "https://api.harvardartmuseums.org/culture?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=id%2Cname%2Cobjectcount&sortorder=asc&size=100&sort=name&page=2",
    page: 1,
    pages: 3,
    totalrecords: 255,
    totalrecordsperquery: 100
  },
  records: [
    {
      id: 37525941,
      name: "Achaemenid",
      objectcount: 25
    },
    {
      id: 37525950,
      name: "Afghan",
      objectcount: 28
    },
    {
      id: 37526742,
      name: "African",
      objectcount: 8
    },
    {
      id: 37526751,
      name: "Akkadian",
      objectcount: 2
    },
    {
      id: 37526760,
      name: "Aksumite",
      objectcount: 1
    },
    {
      id: 37526769,
      name: "Algerian",
      objectcount: 6
    },
    {
      id: 37526778,
      name: "American",
      objectcount: 88596
    },
    {
      id: 37526787,
      name: "Amlash",
      objectcount: 3
    },
    {
      id: 37526796,
      name: "Anatolian",
      objectcount: 156
    },
    {
      id: 37526805,
      name: "Anglo-Saxon",
      objectcount: 14
    },
    {
      id: 37526814,
      name: "Annamese",
      objectcount: 3
    },
    {
      id: 37526823,
      name: "Arab",
      objectcount: 215
    },
    {
      id: 37526832,
      name: "Arabian",
      objectcount: 1
    },
    {
      id: 37526841,
      name: "Arabo-Byzantine",
      objectcount: 7
    },
    {
      id: 37526850,
      name: "Arabo-Sassanian",
      objectcount: 1
    },
    {
      id: 37526859,
      name: "Argentinian",
      objectcount: 46
    },
    {
      id: 37526868,
      name: "Armenian",
      objectcount: 57
    },
    {
      id: 37526877,
      name: "Asiatic",
      objectcount: 7
    },
    {
      id: 37526886,
      name: "Assyrian",
      objectcount: 18
    },
    {
      id: 37526895,
      name: "Australian",
      objectcount: 22
    },
    {
      id: 37526904,
      name: "Australian Aboriginal",
      objectcount: 44
    },
    {
      id: 37526913,
      name: "Austrian",
      objectcount: 504
    },
    {
      id: 37526922,
      name: "Austro-Hungarian",
      objectcount: 7
    },
    {
      id: 37526931,
      name: "Avar",
      objectcount: 59
    },
    {
      id: 37526940,
      name: "Azerbaijan",
      objectcount: 2
    },
    {
      id: 37526949,
      name: "Aztec",
      objectcount: 5
    },
    {
      id: 37526958,
      name: "Babylonian",
      objectcount: 5
    },
    {
      id: 37526967,
      name: "Bactrian",
      objectcount: 1
    },
    {
      id: 37526976,
      name: "Baule",
      objectcount: 1
    },
    {
      id: 37526985,
      name: "Belgian",
      objectcount: 155
    },
    {
      id: 37526994,
      name: "Benin",
      objectcount: 1
    },
    {
      id: 37527003,
      name: "Berber",
      objectcount: 15
    },
    {
      id: 37527012,
      name: "Bhutanese",
      objectcount: 1
    },
    {
      id: 37527021,
      name: "Bohemian",
      objectcount: 9
    },
    {
      id: 37527030,
      name: "Brazilian",
      objectcount: 310
    },
    {
      id: 37527039,
      name: "British",
      objectcount: 10936
    },
    {
      id: 37527048,
      name: "Bulgarian",
      objectcount: 13
    },
    {
      id: 37527057,
      name: "Burmese",
      objectcount: 9
    },
    {
      id: 37527066,
      name: "Byzantine",
      objectcount: 9809
    },
    {
      id: 37527075,
      name: "Cambodian",
      objectcount: 71
    },
    {
      id: 37527084,
      name: "Canadian",
      objectcount: 204
    },
    {
      id: 37527093,
      name: "Carthaginian",
      objectcount: 4
    },
    {
      id: 37527102,
      name: "Caucasian",
      objectcount: 15
    },
    {
      id: 37527111,
      name: "Celtic",
      objectcount: 83
    },
    {
      id: 37527120,
      name: "Celto-Iberian",
      objectcount: 1
    },
    {
      id: 37527129,
      name: "Central African",
      objectcount: 1
    },
    {
      id: 37527138,
      name: "Central American",
      objectcount: 6
    },
    {
      id: 37527147,
      name: "Central Asian",
      objectcount: 232
    },
    {
      id: 37527156,
      name: "Ceylonese",
      objectcount: 2
    },
    {
      id: 37527165,
      name: "Chilean",
      objectcount: 12
    },
    {
      id: 37527174,
      name: "Chinese",
      objectcount: 6582
    },
    {
      id: 37527183,
      name: "Colombian",
      objectcount: 29
    },
    {
      id: 37527192,
      name: "Congolese",
      objectcount: 2
    },
    {
      id: 37527201,
      name: "Coptic",
      objectcount: 340
    },
    {
      id: 37527210,
      name: "Costa Rican",
      objectcount: 2
    },
    {
      id: 37527219,
      name: "Croatian",
      objectcount: 1381
    },
    {
      id: 37527228,
      name: "Crusader",
      objectcount: 44
    },
    {
      id: 37527237,
      name: "Cuban",
      objectcount: 194
    },
    {
      id: 37527246,
      name: "Cycladic",
      objectcount: 45
    },
    {
      id: 37527255,
      name: "Cypriot",
      objectcount: 132
    },
    {
      id: 37527264,
      name: "Czech",
      objectcount: 116
    },
    {
      id: 37527273,
      name: "Dalmatian",
      objectcount: 2
    },
    {
      id: 37527282,
      name: "Danish",
      objectcount: 60
    },
    {
      id: 37527291,
      name: "Deccani",
      objectcount: 2
    },
    {
      id: 37559736,
      name: "Dogon",
      objectcount: 2
    },
    {
      id: 37527300,
      name: "Dutch",
      objectcount: 4979
    },
    {
      id: 37527579,
      name: "Early Roman",
      objectcount: 43
    },
    {
      id: 37559745,
      name: "East African",
      objectcount: 1
    },
    {
      id: 37527309,
      name: "East Asian",
      objectcount: 25
    },
    {
      id: 37527318,
      name: "Egyptian",
      objectcount: 1083
    },
    {
      id: 37527327,
      name: "Elamite",
      objectcount: 1
    },
    {
      id: 37527336,
      name: "English",
      objectcount: 219
    },
    {
      id: 37527345,
      name: "Ethiopian",
      objectcount: 106
    },
    {
      id: 37527354,
      name: "Etruscan",
      objectcount: 316
    },
    {
      id: 37527363,
      name: "European",
      objectcount: 2091
    },
    {
      id: 37527372,
      name: "Faliscan",
      objectcount: 1
    },
    {
      id: 37527381,
      name: "Fang",
      objectcount: 1
    },
    {
      id: 37527390,
      name: "Finnish",
      objectcount: 8
    },
    {
      id: 37527399,
      name: "Flemish",
      objectcount: 1766
    },
    {
      id: 37527408,
      name: "Franco-Flemish",
      objectcount: 2
    },
    {
      id: 37527417,
      name: "Frankish",
      objectcount: 1
    },
    {
      id: 37527426,
      name: "French",
      objectcount: 25882
    },
    {
      id: 37527435,
      name: "Gallo-Roman",
      objectcount: 1
    },
    {
      id: 37527444,
      name: "Gandharan",
      objectcount: 15
    },
    {
      id: 37527453,
      name: "German",
      objectcount: 33655
    },
    {
      id: 37527462,
      name: "German-Brazilian",
      objectcount: 2
    },
    {
      id: 37527471,
      name: "Germanic",
      objectcount: 1
    },
    {
      id: 37527480,
      name: "Graeco-Bactrian",
      objectcount: 24
    },
    {
      id: 37527489,
      name: "Graeco-Palestinian",
      objectcount: 1
    },
    {
      id: 37527498,
      name: "Graeco-Persian",
      objectcount: 2
    },
    {
      id: 37527507,
      name: "Graeco-Phoenician",
      objectcount: 2
    },
    {
      id: 37527516,
      name: "Graeco-Roman",
      objectcount: 83
    },
    {
      id: 37527525,
      name: "Graeco-Scythian",
      objectcount: 2
    },
    {
      id: 37527534,
      name: "Greek",
      objectcount: 9196
    },
    {
      id: 37527543,
      name: "Guatemalan",
      objectcount: 4
    },
    {
      id: 37527552,
      name: "Haitian",
      objectcount: 3
    },
    {
      id: 37527561,
      name: "Helladic",
      objectcount: 15
    },
    {
      id: 37527570,
      name: "Hellenistic",
      objectcount: 135
    },
    {
      id: 37527588,
      name: "Himyarite",
      objectcount: 3
    },
    {
      id: 37527597,
      name: "Hispano-Carthaginian",
      objectcount: 1
    }
  ]
};

export const fetchListOfMock__other = {
  info: {
    next:
      "https://api.harvardartmuseums.org/culture?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=id%2Cname%2Cobjectcount&sortorder=asc&size=100&sort=name&page=2",
    page: 1,
    pages: 3,
    totalrecords: 255,
    totalrecordsperquery: 100
  },
  records: [
    {
      id: 37525941,
      name: "Achaemenid",
      objectcount: 25
    },
    {
      id: 37525950,
      name: "Afghan",
      objectcount: 28
    },
    {
      id: 37526742,
      name: "African",
      objectcount: 8
    },
    {
      id: 37526751,
      name: "Akkadian",
      objectcount: 2
    },
    {
      id: 37526760,
      name: "Aksumite",
      objectcount: 1
    },
    {
      id: 37526769,
      name: "Algerian",
      objectcount: 6
    },
    {
      id: 37526778,
      name: "American",
      objectcount: 88596
    },
    {
      id: 37526787,
      name: "Amlash",
      objectcount: 3
    },
    {
      id: 37526796,
      name: "Anatolian",
      objectcount: 156
    },
    {
      id: 37526805,
      name: "Anglo-Saxon",
      objectcount: 14
    },
    {
      id: 37526814,
      name: "Annamese",
      objectcount: 3
    },
    {
      id: 37526823,
      name: "Arab",
      objectcount: 215
    },
    {
      id: 37526832,
      name: "Arabian",
      objectcount: 1
    },
    {
      id: 37526841,
      name: "Arabo-Byzantine",
      objectcount: 7
    },
    {
      id: 37526850,
      name: "Arabo-Sassanian",
      objectcount: 1
    },
    {
      id: 37526859,
      name: "Argentinian",
      objectcount: 46
    },
    {
      id: 37526868,
      name: "Armenian",
      objectcount: 57
    },
    {
      id: 37526877,
      name: "Asiatic",
      objectcount: 7
    },
    {
      id: 37526886,
      name: "Assyrian",
      objectcount: 18
    },
    {
      id: 37526895,
      name: "Australian",
      objectcount: 22
    },
    {
      id: 37526904,
      name: "Australian Aboriginal",
      objectcount: 44
    },
    {
      id: 37526913,
      name: "Austrian",
      objectcount: 504
    },
    {
      id: 37526922,
      name: "Austro-Hungarian",
      objectcount: 7
    },
    {
      id: 37526931,
      name: "Avar",
      objectcount: 59
    },
    {
      id: 37526940,
      name: "Azerbaijan",
      objectcount: 2
    },
    {
      id: 37526949,
      name: "Aztec",
      objectcount: 5
    },
    {
      id: 37526958,
      name: "Babylonian",
      objectcount: 5
    },
    {
      id: 37526967,
      name: "Bactrian",
      objectcount: 1
    },
    {
      id: 37526976,
      name: "Baule",
      objectcount: 1
    },
    {
      id: 37526985,
      name: "Belgian",
      objectcount: 155
    },
    {
      id: 37526994,
      name: "Benin",
      objectcount: 1
    },
    {
      id: 37527003,
      name: "Berber",
      objectcount: 15
    },
    {
      id: 37527012,
      name: "Bhutanese",
      objectcount: 1
    },
    {
      id: 37527021,
      name: "Bohemian",
      objectcount: 9
    },
    {
      id: 37527030,
      name: "Brazilian",
      objectcount: 310
    },
    {
      id: 37527039,
      name: "British",
      objectcount: 10936
    },
    {
      id: 37527048,
      name: "Bulgarian",
      objectcount: 13
    },
    {
      id: 37527057,
      name: "Burmese",
      objectcount: 9
    },
    {
      id: 37527066,
      name: "Byzantine",
      objectcount: 9809
    },
    {
      id: 37527075,
      name: "Cambodian",
      objectcount: 71
    },
    {
      id: 37527084,
      name: "Canadian",
      objectcount: 204
    },
    {
      id: 37527093,
      name: "Carthaginian",
      objectcount: 4
    },
    {
      id: 37527102,
      name: "Caucasian",
      objectcount: 15
    },
    {
      id: 37527111,
      name: "Celtic",
      objectcount: 83
    },
    {
      id: 37527120,
      name: "Celto-Iberian",
      objectcount: 1
    },
    {
      id: 37527129,
      name: "Central African",
      objectcount: 1
    },
    {
      id: 37527138,
      name: "Central American",
      objectcount: 6
    },
    {
      id: 37527147,
      name: "Central Asian",
      objectcount: 232
    },
    {
      id: 37527156,
      name: "Ceylonese",
      objectcount: 2
    },
    {
      id: 37527165,
      name: "Chilean",
      objectcount: 12
    },
    {
      id: 37527174,
      name: "Chinese",
      objectcount: 6582
    },
    {
      id: 37527183,
      name: "Colombian",
      objectcount: 29
    },
    {
      id: 37527192,
      name: "Congolese",
      objectcount: 2
    },
    {
      id: 37527201,
      name: "Coptic",
      objectcount: 340
    },
    {
      id: 37527210,
      name: "Costa Rican",
      objectcount: 2
    },
    {
      id: 37527219,
      name: "Croatian",
      objectcount: 1381
    },
    {
      id: 37527228,
      name: "Crusader",
      objectcount: 44
    },
    {
      id: 37527237,
      name: "Cuban",
      objectcount: 194
    },
    {
      id: 37527246,
      name: "Cycladic",
      objectcount: 45
    },
    {
      id: 37527255,
      name: "Cypriot",
      objectcount: 132
    },
    {
      id: 37527264,
      name: "Czech",
      objectcount: 116
    },
    {
      id: 37527273,
      name: "Dalmatian",
      objectcount: 2
    },
    {
      id: 37527282,
      name: "Danish",
      objectcount: 60
    },
    {
      id: 37527291,
      name: "Deccani",
      objectcount: 2
    },
    {
      id: 37559736,
      name: "Dogon",
      objectcount: 2
    },
    {
      id: 37527300,
      name: "Dutch",
      objectcount: 4979
    },
    {
      id: 37527579,
      name: "Early Roman",
      objectcount: 43
    },
    {
      id: 37559745,
      name: "East African",
      objectcount: 1
    },
    {
      id: 37527309,
      name: "East Asian",
      objectcount: 25
    },
    {
      id: 37527318,
      name: "Egyptian",
      objectcount: 1083
    },
    {
      id: 37527327,
      name: "Elamite",
      objectcount: 1
    },
    {
      id: 37527336,
      name: "English",
      objectcount: 219
    },
    {
      id: 37527345,
      name: "Ethiopian",
      objectcount: 106
    },
    {
      id: 37527354,
      name: "Etruscan",
      objectcount: 316
    },
    {
      id: 37527363,
      name: "European",
      objectcount: 2091
    },
    {
      id: 37527372,
      name: "Faliscan",
      objectcount: 1
    },
    {
      id: 37527381,
      name: "Fang",
      objectcount: 1
    },
    {
      id: 37527390,
      name: "Finnish",
      objectcount: 8
    },
    {
      id: 37527399,
      name: "Flemish",
      objectcount: 1766
    },
    {
      id: 37527408,
      name: "Franco-Flemish",
      objectcount: 2
    },
    {
      id: 37527417,
      name: "Frankish",
      objectcount: 1
    },
    {
      id: 37527426,
      name: "French",
      objectcount: 25882
    },
    {
      id: 37527435,
      name: "Gallo-Roman",
      objectcount: 1
    },
    {
      id: 37527444,
      name: "Gandharan",
      objectcount: 15
    },
    {
      id: 37527453,
      name: "German",
      objectcount: 33655
    },
    {
      id: 37527462,
      name: "German-Brazilian",
      objectcount: 2
    },
    {
      id: 37527471,
      name: "Germanic",
      objectcount: 1
    },
    {
      id: 37527480,
      name: "Graeco-Bactrian",
      objectcount: 24
    },
    {
      id: 37527489,
      name: "Graeco-Palestinian",
      objectcount: 1
    },
    {
      id: 37527498,
      name: "Graeco-Persian",
      objectcount: 2
    },
    {
      id: 37527507,
      name: "Graeco-Phoenician",
      objectcount: 2
    },
    {
      id: 37527516,
      name: "Graeco-Roman",
      objectcount: 83
    },
    {
      id: 37527525,
      name: "Graeco-Scythian",
      objectcount: 2
    },
    {
      id: 37527534,
      name: "Greek",
      objectcount: 9196
    },
    {
      id: 37527543,
      name: "Guatemalan",
      objectcount: 4
    },
    {
      id: 37527552,
      name: "Haitian",
      objectcount: 3
    },
    {
      id: 37527561,
      name: "Helladic",
      objectcount: 15
    },
    {
      id: 37527570,
      name: "Hellenistic",
      objectcount: 135
    },
    {
      id: 37527588,
      name: "Himyarite",
      objectcount: 3
    },
    {
      id: 37527597,
      name: "Hispano-Carthaginian",
      objectcount: 1
    }
  ]
};
