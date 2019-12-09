function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const delayMock = async res => {
  await sleep(1000);
  return res;
};

export const fetchFeedMock = {
  info: {
    next:
      "https://api.harvardartmuseums.org/object?apikey=a3a79800-15f2-11ea-af26-8529a4665017&fields=%22fields%22%3A%22dated%2Ccentury%2Cdivision%2Cid%2Cprimaryimageurl%2Ctitle%2Clastupdate%22&aggregation=%7B%20%20%20%20%20%20%22by_lastupdate%22%3A%20%7B%20%20%20%20%20%20%20%20%22terms%22%3A%20%7B%20%20%20%20%20%20%20%20%20%20%22field%22%3A%20%22lastupdate%22%2C%20%20%20%20%20%20%20%20%20%20%22format%22%3A%20%22yyyy-MM-dd%22%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%7D%20%20%20%20%7D&page=2&size=30"
  },
  records: [
    {
      century: "6th century BCE",
      division: "Asian and Mediterranean Art",
      id: 291270,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:767068",
      title: "Black-figure Aryballos: Two heraldic bearded sirens with woman"
    },
    {
      century: "1st millennium BCE-1st millenium CE",
      division: "Asian and Mediterranean Art",
      id: 292430,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:INV028585_dynmc",
      title: "Collection of Beads and Amulets"
    },
    {
      century: "19th century",
      division: "European and American Art",
      id: 227837,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS16822_dynmc",
      title: "The Laundress"
    },
    {
      century: "20th century",
      division: "Modern and Contemporary Art",
      id: 227846,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS14718_dynmc",
      title: "Ratapoil"
    },
    {
      century: "18th-19th century",
      division: "European and American Art",
      id: 227859,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:INV140774_dynmc",
      title: "Bust of a Woman"
    },
    {
      century: "12th-13th century",
      division: "European and American Art",
      id: 227860,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS14706_dynmc",
      title: "Virgin and Child Enthroned"
    },
    {
      century: "20th century",
      division: "Modern and Contemporary Art",
      id: 227877,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:INV182564_dynmc",
      title: "Flowers in a Landscape"
    },
    {
      century: "13th century",
      division: "European and American Art",
      id: 227901,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC252570_dynmc",
      title: "The Virgin and Child Enthroned"
    },
    {
      century: "17th-18th century",
      division: "European and American Art",
      id: 227902,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS40442_dynmc",
      title: "Landscape"
    },
    {
      century: "20th century",
      division: "Modern and Contemporary Art",
      id: 227909,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS19534_dynmc",
      title: '"Waniugo" Funerary Mask'
    },
    {
      century: "18th-19th century",
      division: "European and American Art",
      id: 227915,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC111121_dynmc",
      title: "Young Woman Carrying a Child on Her Left Shoulder"
    },
    {
      century: "19th century",
      division: "European and American Art",
      id: 227918,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS46868_dynmc",
      title: "Boats at Anchor and Beachhead"
    },
    {
      century: "16th century",
      division: "European and American Art",
      id: 227929,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:DDC253260_dynmc",
      title: "Portrait Bust of a Woman"
    },
    {
      century: "19th century",
      division: "European and American Art",
      id: 227933,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:771191",
      title: "Seascape"
    },
    {
      century: "18th century",
      division: "European and American Art",
      id: 227936,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:61397_dynmc",
      title: "Two-Handled Cup"
    },
    {
      century: "20th century",
      division: "Modern and Contemporary Art",
      id: 227939,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS43273_dynmc",
      title: "Sorcier"
    },
    {
      century: "15th century",
      division: "European and American Art",
      id: 227947,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS42456_dynmc",
      title: "Saint Dominic"
    },
    {
      century: "13th-14th century",
      division: "European and American Art",
      id: 227948,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:INV138651_dynmc",
      title: "Fragment of a Draped Figure"
    },
    {
      century: "15th century",
      division: "European and American Art",
      id: 227952,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS14680_dynmc",
      title: "Virgin and Child"
    },
    {
      century: "18th-19th century",
      division: "European and American Art",
      id: 227954,
      imagepermissionlevel: 0,
      primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:VRS14264_dynmc",
      title: "Diana"
    }
  ]
};
