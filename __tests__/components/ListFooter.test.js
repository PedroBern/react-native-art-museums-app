import React from "react";
import renderer from "react-test-renderer";

import ListFooter from "../../src/components/ListFooter";

jest.mock("NativeAnimatedHelper");

describe("ListFooter", () => {
  it("render with loading", () => {
    const listFooter = renderer.create(<ListFooter loading={true} />).toJSON();
    expect(listFooter).toMatchSnapshot();
  });

  it("render with error", () => {
    const listFooter = renderer
      .create(<ListFooter error="some error" />)
      .toJSON();
    expect(listFooter).toMatchSnapshot();
  });
});
