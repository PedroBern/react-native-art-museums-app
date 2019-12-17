import React from "react";
import renderer from "react-test-renderer";

import EmptyList from "../../src/components/EmptyList";

describe("EmptyList", () => {
  it("prop notShow = true", () => {
    const emptyList = renderer.create(<EmptyList notShow={true} />).toJSON();
    expect(emptyList).toMatchSnapshot();
  });

  it("prop notShow = false", () => {
    const emptyList = renderer.create(<EmptyList notShow={false} />).toJSON();
    expect(emptyList).toMatchSnapshot();
  });
});
