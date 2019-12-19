import React from "react";

import Spinner from "../../src/components/Spinner";
import { renderAndSnap } from "../utils";

jest.mock("NativeAnimatedHelper");

describe("Spinner", () => {
  it("renders", () => {
    renderAndSnap(<Spinner />);
  });
});
