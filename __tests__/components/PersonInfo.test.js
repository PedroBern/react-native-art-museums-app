import React from "react";

import PersonInfo from "../../src/components/PersonInfo";
import { renderAndSnap } from "../utils";

jest.mock("NativeAnimatedHelper");

const dataMock = {
  birthplace: "Groot Zundert (Zundert), The Netherlands",
  culture: "Dutch",
  deathplace: "Auvers-sur-Oise, France",
  displaydate: "1853 - 1890",
  displayname: "Vincent van Gogh",
  gender: "male",
  id: 22730,
  url: "https://www.harvardartmuseums.org/collections/person/22730",
  wikipedia_id: "32603"
};

const personMock0 = {
  loading: false,
  error: null,
  data: { ...dataMock }
};

const personMock1 = {
  loading: true,
  error: null,
  data: {}
};

const personMock2 = {
  loading: false,
  error: "Some error",
  data: {}
};

const personMock3 = {
  loading: false,
  error: null,
  data: {
    displayname: dataMock.displayname,
    id: dataMock.id,
    url: dataMock.url
  }
};

describe("PersonInfo", () => {
  it("renders ok", () => {
    renderAndSnap(<PersonInfo person={personMock0} />);
  });

  it("renders loading", () => {
    renderAndSnap(<PersonInfo person={personMock1} />);
  });

  it("renders error", () => {
    renderAndSnap(<PersonInfo person={personMock2} />);
  });

  it("renders ok bare", () => {
    renderAndSnap(<PersonInfo person={personMock3} />);
  });
});
