import React from "react";
import renderer from "react-test-renderer";

import TabBarIcon from "../../src/components/TabBarIcon";

jest.mock("NativeAnimatedHelper");

describe("TabBarIcon", () => {
  it("renders", () => {
    const tabBar = renderer
      .create(<TabBarIcon route={{ icon: "icon" }} />)
      .toJSON();
    expect(tabBar).toMatchSnapshot();
  });

  it("renders focused", () => {
    const tabBar = renderer
      .create(<TabBarIcon route={{ icon: "icon" }} focused={true} />)
      .toJSON();
    expect(tabBar).toMatchSnapshot();
  });
});
