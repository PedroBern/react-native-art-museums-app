import React from "react";

import TabBarIcon from "../../src/components/TabBarIcon";
import { renderAndSnap } from "../utils";

jest.mock("NativeAnimatedHelper");

describe("TabBarIcon", () => {
  it("renders", () => {
    renderAndSnap(<TabBarIcon route={{ icon: "icon" }} />);
  });

  it("renders focused", () => {
    renderAndSnap(<TabBarIcon route={{ icon: "icon" }} focused={true} />);
  });
});
