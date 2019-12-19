import React from "react";

import ListFooter from "../../src/components/ListFooter";
import { renderAndSnap } from "../utils";

jest.mock("NativeAnimatedHelper");

describe("ListFooter", () => {
  it("render with loading", () => {
    renderAndSnap(<ListFooter loading={true} />);
  });

  it("render with error", () => {
    renderAndSnap(<ListFooter error="some error" />);
  });
});
