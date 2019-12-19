import React from "react";
import renderer from "react-test-renderer";
import * as navHook from "react-navigation-hooks";
import { render, fireEvent } from "react-native-testing-library";
import { Provider } from "react-redux";

import { renderAndSnap } from "../utils";
import { FeedItem, FeedItemGrid } from "../../src/components/FeedItem";
import { store } from "../../src/store";

const props = {
  id: "1",
  title: "title",
  primaryimageurl: "url",
  division: "division",
  century: "century",
  dated: "dated"
};

const mockPush = jest.fn((screen, args) => {});
navHook.useNavigation = () => ({
  push: mockPush
});

describe("FeedItem", () => {
  afterEach(() => {
    mockPush.mockClear();
  });

  it("renders", () => {
    renderAndSnap(
      <Provider store={store}>
        <FeedItem {...props} />
      </Provider>
    );
  });

  it("handle navigation", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <FeedItem {...props} />
      </Provider>
    );

    fireEvent.press(getByTestId("feed-item"));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush.mock.calls[0][0]).toBe("Details");
    expect(mockPush.mock.calls[0][1]).toEqual({
      ...props
    });
  });
});

describe("FeedItemGrid", () => {
  afterEach(() => {
    mockPush.mockClear();
  });

  it("renders", () => {
    renderAndSnap(<FeedItemGrid {...props} />);
  });

  it("handle navigation", () => {
    const { getByTestId } = render(<FeedItemGrid {...props} />);

    fireEvent.press(getByTestId("feed-item-grid"));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush.mock.calls[0][0]).toBe("Details");
    expect(mockPush.mock.calls[0][1]).toEqual({
      ...props
    });
  });
});
