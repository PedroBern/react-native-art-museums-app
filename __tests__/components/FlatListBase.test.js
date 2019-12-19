import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import * as navHook from "react-navigation-hooks";
import { Provider } from "react-redux";

import { store } from "../../src/store";
import { renderAndSnap } from "../utils";
import FlatListBase from "../../src/components/FlatListBase";

const recordsMock = [
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
  }
];

const setVisibleIndexMock = jest.fn();

const props = {
  records: recordsMock,
  setVisibleIndex: setVisibleIndexMock,
  visibleIndex: 1,
  listKey: "key"
};

const gridProps = {
  grid: true,
  ...props
};

const listProps = {
  grid: false,
  ...props
};

const mockPush = jest.fn((screen, args) => {});
navHook.useNavigation = () => ({
  push: mockPush
});

describe("FlatListBase", () => {
  it("renders grid", () => {
    renderAndSnap(<FlatListBase {...gridProps} />);
  });

  it("renders not grid", () => {
    renderAndSnap(
      <Provider store={store}>
        <FlatListBase {...listProps} />
      </Provider>
    );
  });
});
