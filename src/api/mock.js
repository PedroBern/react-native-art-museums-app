function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const delayMock = async res => {
  await sleep(1000);
  return res;
};

export const fetchFeedMock = {
  info: {
    page: 1,
    pages: 23369,
    records: 6,
    totalRecords: 233683
  },
  records: [
    {
      dated: "c. 600 BCE-575 BCE",
      division: "Asian and Mediterranean Art",
      id: 291270,
      imageCount: 5,
      images: [
        {
          format: "image/jpeg",
          height: 2550,
          index: 1,
          url: "https://nrs.harvard.edu/urn-3:HUAM:767068",
          width: 1911
        },
        {
          format: "image/jpeg",
          height: 2550,
          index: 2,
          url: "https://nrs.harvard.edu/urn-3:HUAM:767067",
          width: 1911
        },
        {
          format: "image/jpeg",
          height: 2550,
          index: 3,
          url: "https://nrs.harvard.edu/urn-3:HUAM:767069",
          width: 1911
        },
        {
          format: "image/jpeg",
          height: 2550,
          index: 4,
          url: "https://nrs.harvard.edu/urn-3:HUAM:767066",
          width: 1911
        },
        {
          format: "image/jpeg",
          height: 829,
          index: 5,
          url: "https://nrs.harvard.edu/urn-3:HUAM:VRS45699_dynmc",
          width: 1024
        }
      ],
      lastUpdate: "2019-12-04T07:08:12-0500",
      lastUpdateDate: "12/04/19",
      lastUpdateTime: "04:08",
      title: "Black-figure Aryballos: Two heraldic bearded sirens with woman"
    },
    {
      dated: "1st Millennium BCE-1st Millennium CE",
      division: "Asian and Mediterranean Art",
      id: 292430,
      imageCount: 2,
      images: [
        {
          format: "image/jpeg",
          height: 696,
          index: 1,
          url: "https://nrs.harvard.edu/urn-3:HUAM:INV028585_dynmc",
          width: 1024
        },
        {
          format: "image/jpeg",
          height: 1024,
          index: 2,
          url: "https://nrs.harvard.edu/urn-3:HUAM:DDC247710_dynmc",
          width: 683
        }
      ],
      lastUpdate: "2019-12-04T07:08:14-0500",
      lastUpdateDate: "12/04/19",
      lastUpdateTime: "04:08",
      title: "Collection of Beads and Amulets"
    },
    {
      dated: "19th century",
      division: "European and American Art",
      id: 227837,
      imageCount: 1,
      images: [
        {
          format: "image/jpeg",
          height: 1024,
          index: 1,
          url: "https://nrs.harvard.edu/urn-3:HUAM:VRS16822_dynmc",
          width: 818
        }
      ],
      lastUpdate: "2019-12-04T07:06:12-0500",
      lastUpdateDate: "12/04/19",
      lastUpdateTime: "04:06",
      title: "The Laundress"
    },
    {
      dated: "20th century",
      division: "Modern and Contemporary Art",
      id: 227846,
      imageCount: 1,
      images: [
        {
          format: "image/jpeg",
          height: 1024,
          index: 1,
          url: "https://nrs.harvard.edu/urn-3:HUAM:VRS14718_dynmc",
          width: 799
        }
      ],
      lastUpdate: "2019-12-04T07:06:12-0500",
      lastUpdateDate: "12/04/19",
      lastUpdateTime: "04:06",
      title: "Ratapoil"
    },
    {
      dated: "18th-19th century",
      division: "European and American Art",
      id: 227859,
      imageCount: 1,
      images: [
        {
          format: "image/jpeg",
          height: 1024,
          index: 1,
          url: "https://nrs.harvard.edu/urn-3:HUAM:INV140774_dynmc",
          width: 834
        }
      ],
      lastUpdate: "2019-12-04T07:06:12-0500",
      lastUpdateDate: "12/04/19",
      lastUpdateTime: "04:06",
      title: "Bust of a Woman"
    },
    {
      dated: "c. 1200",
      division: "European and American Art",
      id: 227860,
      imageCount: 1,
      images: [
        {
          format: "image/jpeg",
          height: 1024,
          index: 1,
          url: "https://nrs.harvard.edu/urn-3:HUAM:VRS14706_dynmc",
          width: 716
        }
      ],
      lastUpdate: "2019-12-04T07:06:12-0500",
      lastUpdateDate: "12/04/19",
      lastUpdateTime: "04:06",
      title: "Virgin and Child Enthroned"
    }
  ]
};
