import React from "react";

import { renderAndSnap } from "../utils";
import CustomDivider from "../../src/components/Divider";

describe("CustomDivider", () => {
  it("renders", () => {
    renderAndSnap(<CustomDivider />);
  });
});
