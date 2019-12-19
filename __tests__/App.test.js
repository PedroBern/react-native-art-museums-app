import React from "react";

import App from "../App";
import { renderAndSnap } from "./utils";

jest.mock("NativeAnimatedHelper");

describe("App", () => {
  it("renders", () => {
    renderAndSnap(<App />);
  });
});
