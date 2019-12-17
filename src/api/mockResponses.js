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
