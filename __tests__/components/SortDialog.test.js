// #TODO: Portal tests

import React from "react";
// import { render, fireEvent } from "react-native-testing-library";

import { renderAndSnap } from "../utils";
import SortDialog from "../../src/components/SortDialog";

const mockOnPress = jest.fn();
const mockOnDismiss = jest.fn();

const props = {
  buttons: [{ title: "title", onPress: mockOnPress }],
  onDismiss: mockOnDismiss
};

describe("SortDialog", () => {
  // afterEach(() => {
  //   mockOnDismiss.mockClear();
  //   mockOnPress.mockClear();
  // });

  it("renders not visible", () => {
    renderAndSnap(<SortDialog {...props} />);
  });

  // it("handle onPress and onDismiss", () => {
  //   const { getByTestId } = render(<SortDialog {...props} visible={true} />);
  //
  //   fireEvent.press(getByTestId("sort-dialog-button-title"));
  //   expect(mockOnPress).toHaveBeenCalledTimes(1);
  //   expect(mockOnDismiss).toHaveBeenCalledTimes(1);
  // });
  //
  // it("handle onDismiss", () => {
  //   const { getByTestId } = render(<SortDialog {...props} visible={true} />);
  //
  //   fireEvent.press(getByTestId("sort-dialog-cancel"));
  //   expect(mockOnDismiss).toHaveBeenCalledTimes(1);
  // });
});
