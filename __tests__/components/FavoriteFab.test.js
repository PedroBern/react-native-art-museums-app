import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-native-testing-library";
import { FAB } from "react-native-paper";

import { FavoriteFab } from "../../src/components/FavoriteFab";

const recordsMock = [{ id: 1 }, { id: 2 }, { id: 3 }];

const getUnderlyingComponent = testInstance =>
  testInstance.root.findByType(FAB);

describe("FavoriteFab", () => {
  it("renders", () => {
    const favoriteFab = renderer
      .create(
        <FavoriteFab
          favorites={recordsMock}
          record={recordsMock[0]}
          toggleFavorite={() => {}}
        />
      )
      .toJSON();
    expect(favoriteFab).toMatchSnapshot();
  });

  it("fire callback on press with record argument", () => {
    const callbackMock = jest.fn();

    const { getByTestId } = render(
      <FavoriteFab
        favorites={recordsMock}
        record={recordsMock[0]}
        toggleFavorite={callbackMock}
      />
    );

    fireEvent.press(getByTestId("favorite-fab"));
    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock.mock.calls[0][0]).toEqual(recordsMock[0]);
  });

  it("is colored if record is a favorite", () => {
    const favoriteFab = getUnderlyingComponent(
      renderer.create(
        <FavoriteFab
          favorites={recordsMock}
          record={recordsMock[0]}
          toggleFavorite={() => {}}
        />
      )
    );

    expect(favoriteFab.props.color).not.toBe("black");
  });

  it("is black color if record is not a favorite", () => {
    const favoriteFab = getUnderlyingComponent(
      renderer.create(
        <FavoriteFab
          favorites={recordsMock}
          record={{ id: 10 }}
          toggleFavorite={() => {}}
        />
      )
    );

    expect(favoriteFab.props.color).toBe("black");
  });
});
