import React from "react";

import EmptyList from "../../src/components/EmptyList";
import { renderAndSnap } from "../utils";

describe("EmptyList", () => {
  it("prop notShow = true", () => {
    renderAndSnap(<EmptyList notShow={true} />);
  });

  it("prop notShow = false", () => {
    renderAndSnap(<EmptyList notShow={false} />);
  });
});
