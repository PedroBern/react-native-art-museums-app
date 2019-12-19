import React from "react";

import AboutScreen from "../../src/screens/AboutScreen";
import { renderAndSnap } from "../utils";

describe("AboutScreen", () => {
  it("renders", () => {
    renderAndSnap(<AboutScreen />);
  });
});
