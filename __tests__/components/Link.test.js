import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import * as WebBrowser from "expo-web-browser";

import Link from "../../src/components/Link";
import { renderAndSnap } from "../utils";

describe("Link", () => {
  it("renders", () => {
    renderAndSnap(<Link url="url">Hello</Link>);
  });

  it("open WebBrowser 2", () => {
    WebBrowser.openBrowserAsync = jest.fn();

    const { getByTestId } = render(<Link url="url">Hello</Link>);

    fireEvent.press(getByTestId("hyperlink"));
    expect(WebBrowser.openBrowserAsync).toHaveBeenCalledTimes(1);
    expect(WebBrowser.openBrowserAsync.mock.calls[0][0]).toBe("url");
  });
});
