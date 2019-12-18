import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-native-testing-library";
import { Searchbar } from "react-native-paper";

import SearchBarComponent from "../../src/components/SearchBar";

const getUnderlyingComponent = testInstance =>
  testInstance.root.findByType(Searchbar);

describe("SearchBar", () => {
  it("renders", () => {
    const search = renderer
      .create(<SearchBarComponent dismiss={() => {}} onSubmit={() => {}} />)
      .toJSON();
    expect(search).toMatchSnapshot();
  });

  it("handle submit", () => {
    const callbackMock = jest.fn();

    const { getByTestId } = render(
      <SearchBarComponent dismiss={() => {}} onSubmit={callbackMock} />
    );

    fireEvent.changeText(getByTestId("search-bar"), "something");
    fireEvent(getByTestId("search-bar"), "onSubmitEditing");

    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock.mock.calls[0][0]).toBe("something");
  });

  it("do not submit with no text", () => {
    const callbackMock = jest.fn();

    const { getByTestId } = render(
      <SearchBarComponent dismiss={() => {}} onSubmit={callbackMock} />
    );

    fireEvent(getByTestId("search-bar"), "onSubmitEditing");

    expect(callbackMock).not.toHaveBeenCalled();
  });
});
