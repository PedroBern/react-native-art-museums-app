import React from "react";
import renderer from "react-test-renderer";

import Spinner from "../../src/components/Spinner";

jest.mock("NativeAnimatedHelper");

describe("Spinner", () => {
  it("renders", () => {
    const spinner = renderer.create(<Spinner />).toJSON();
    expect(spinner).toMatchSnapshot();
  });
});
