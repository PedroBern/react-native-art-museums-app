import React from "react";
import renderer from "react-test-renderer";

import CustomDivider from "../../src/components/Divider";

describe("CustomDivider", () => {
  it("renders", () => {
    const divider = renderer.create(<CustomDivider />).toJSON();
    expect(divider).toMatchSnapshot();
  });
});
