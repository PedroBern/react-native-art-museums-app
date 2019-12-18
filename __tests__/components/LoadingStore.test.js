import React from "react";
import renderer from "react-test-renderer";

import LoadingStore from "../../src/components/LoadingStore";

jest.mock("NativeAnimatedHelper");

describe("LoadingStore", () => {
  it("renders", () => {
    const loadingStore = renderer.create(<LoadingStore />).toJSON();
    expect(loadingStore).toMatchSnapshot();
  });
});
