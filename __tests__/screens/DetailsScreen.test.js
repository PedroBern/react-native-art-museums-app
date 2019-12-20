import React from "react";
import * as R from "react-native";
import * as navHook from "react-navigation-hooks";
import { render, fireEvent } from "react-native-testing-library";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import DetailsScreen from "../../src/screens/DetailsScreen";
import { renderAndSnap } from "../utils";
import * as api from "../../src/api/api";
import * as apiMocks from "../../src/api/mockFunctions";
import * as apiResponses from "../../src/api/mockResponses";
import { store } from "../../src/store";

const mockPush = jest.fn((screen, args) => {});
const mockGoBack = jest.fn();

navHook.useNavigationParam = param => {
  switch (param) {
    case "id":
      return "some-id";

    case "title":
      return "some-title";

    case "division":
      return "some-division";

    case "primaryimageurl":
      return "some-url";
    case "century":
      return "some-century";

    default:
      return "some-id";
  }
};

navHook.useNavigation = () => ({
  push: mockPush,
  goBack: mockGoBack
});

describe("DetailsScreen", () => {
  afterEach(() => {
    mockPush.mockClear();
    mockGoBack.mockClear();
  });

  it("renders", () => {
    api.fetchRecord = jest.fn(() => apiMocks.fetchRecordSuccess());
    renderAndSnap(<DetailsScreen />);
  });

  it("fetch record", () => {
    api.fetchRecord = jest.fn(() => apiMocks.fetchRecordSuccess());
    const { update } = render(<DetailsScreen />);
    expect(api.fetchRecord).toHaveBeenCalled();
  });

  it("renders with error", () => {
    api.fetchRecord = jest.fn(() => apiMocks.fetchRecordFail());
    renderAndSnap(<DetailsScreen />);
  });

  it("handles error", () => {
    api.fetchRecord = jest.fn(() => apiMocks.fetchRecordFail());
    const { update } = render(<DetailsScreen />);
    expect(api.fetchRecord).toHaveBeenCalled();
  });

  it("go back", () => {
    api.fetchRecord = jest.fn(() => apiMocks.fetchRecordSuccess());
    const { getByTestId } = render(<DetailsScreen />);
    fireEvent.press(getByTestId("go-back-details-screen"));
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  // it("handle navigation", async () => {
  //   api.fetchRecord = jest.fn(() => apiMocks.fetchRecordSuccess());
  //   R.TouchableOpacity = props => (
  //     <R.TouchableOpacity {...props} onClick={props.onPress} />
  //   );
  //   R.Image = props => <R.View />;
  //
  //   const screen = mount(
  //     <Provider store={store}>
  //       <DetailsScreen />
  //     </Provider>
  //   );
  //
  //   expect(api.fetchRecord).toHaveBeenCalled();
  //   await screen.update();
  //
  //   // expect(screen).toMatchSnapshot();
  //
  //   const push = screen.find("#people");
  //   // push.simulate("click");
  //   // screen.update();
  //   // expect(mockPush).toHaveBeenCalledTimes(1);
  // });
});
