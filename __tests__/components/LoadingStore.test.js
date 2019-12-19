import React from "react";

import LoadingStore from "../../src/components/LoadingStore";
import { renderAndSnap } from "../utils";

jest.mock("NativeAnimatedHelper");

describe("LoadingStore", () => {
  it("renders", () => {
    renderAndSnap(<LoadingStore />);
  });
});
