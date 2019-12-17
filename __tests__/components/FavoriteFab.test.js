import React from "react";
import renderer from "react-test-renderer";

import { FavoriteFab } from "../../src/components/FavoriteFab";

const recordsMock = [{ id: 1 }, { id: 2 }, { id: 3 }];

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
});
