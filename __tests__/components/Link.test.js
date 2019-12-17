import React from "react";
import renderer from "react-test-renderer";
import * as WebBrowser from "expo-web-browser";
import { mount } from "enzyme";
import { TouchableOpacity } from "react-native";

import Link from "../../src/components/Link";
import mockPressable from "../_mockPressable";

describe("Link", () => {
  it("renders", () => {
    const link = renderer.create(<Link url="url">Hello</Link>).toJSON();
    expect(link).toMatchSnapshot();
  });

  it("open WebBrowser", () => {
    jest.mock("TouchableOpacity", () => mockPressable("TouchableOpacity"));
    WebBrowser.openBrowserAsync = jest.fn();

    const wrapper = mount(<Link url="url">Hello</Link>);
    const touchable = wrapper.find(TouchableOpacity);
    touchable.simulate("click");
    expect(WebBrowser.openBrowserAsync).toHaveBeenCalledTimes(1);
    expect(WebBrowser.openBrowserAsync.mock.calls[0][0]).toBe("url");
  });
});
