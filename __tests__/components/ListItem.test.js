import React from "react";
import renderer from "react-test-renderer";
import * as navHook from "react-navigation-hooks";
import { render, fireEvent } from "react-native-testing-library";

import { renderAndSnap } from "../utils";
import ListItem from "../../src/components/ListItem";

const mockPerson = {
  name: "name",
  id: 1,
  objectcount: 10,
  theme: null,
  target: "person"
};
const mockObject = {
  name: "name",
  id: 1,
  objectcount: null,
  theme: null,
  target: "object"
};
const mockAny0 = {
  name: "name",
  id: 1,
  objectcount: 10,
  theme: "theme",
  target: "target"
};
const mockAny1 = {
  name: "name",
  id: 1,
  objectcount: 10,
  theme: null,
  target: "target"
};

const mockPush = jest.fn((screen, args) => {});
navHook.useNavigation = () => ({
  push: mockPush
});

describe("ListItem", () => {
  afterEach(() => {
    mockPush.mockClear();
  });

  it("renders person", () => {
    renderAndSnap(<ListItem {...mockPerson} />);
  });

  it("renders object", () => {
    renderAndSnap(<ListItem {...mockObject} />);
  });

  it("renders any 0", () => {
    renderAndSnap(<ListItem {...mockAny0} />);
  });

  it("renders any 1", () => {
    renderAndSnap(<ListItem {...mockAny1} />);
  });

  it("handle navigation to Person", () => {
    const { getByTestId } = render(<ListItem {...mockPerson} />);

    fireEvent.press(getByTestId("list-item"));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush.mock.calls[0][0]).toBe("Person");
    expect(mockPush.mock.calls[0][1]).toEqual({
      personid: mockPerson.id,
      name: mockPerson.name,
      role: ""
    });
  });

  it("handle navigation to Object", () => {
    const { getByTestId } = render(<ListItem {...mockObject} />);

    fireEvent.press(getByTestId("list-item"));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush.mock.calls[0][0]).toBe("Details");
    expect(mockPush.mock.calls[0][1]).toEqual({
      title: mockObject.name,
      id: mockObject.id
    });
  });

  it("handle navigation to Feed 0", () => {
    const { getByTestId } = render(<ListItem {...mockAny0} />);

    fireEvent.press(getByTestId("list-item"));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush.mock.calls[0][0]).toBe("Feed");
    expect(mockPush.mock.calls[0][1]).toEqual({
      title: mockAny0.name,
      subtitle: mockAny0.theme || "",
      filter: `&${mockAny0.target.toLowerCase()}=${mockAny0.id}`
    });
  });

  it("handle navigation to Feed 1", () => {
    const { getByTestId } = render(<ListItem {...mockAny1} />);

    fireEvent.press(getByTestId("list-item"));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush.mock.calls[0][0]).toBe("Feed");
    expect(mockPush.mock.calls[0][1]).toEqual({
      title: mockAny1.name,
      subtitle: mockAny1.theme || "",
      filter: `&${mockAny1.target.toLowerCase()}=${mockAny1.id}`
    });
  });
});
