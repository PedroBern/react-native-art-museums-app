import {
  toggleFavorite,
  toggleFavoritesView,
  setVisibleIndex,
  TOGGLE_FAVORITE,
  TOGGLE_FAVORITES_VIEW,
  SET_VISIBLE_INDEX_FAVORITES
} from "../../../src/store/actions/favorites";

describe("toggleFavorite", () => {
  it("returns an action", () => {
    expect(toggleFavorite(1)).toMatchSnapshot();
  });
});

describe("toggleFavoritesView", () => {
  it("returns an action", () => {
    expect(toggleFavoritesView()).toMatchSnapshot();
  });
});

describe("setVisibleIndex", () => {
  it("returns an action", () => {
    expect(setVisibleIndex(1)).toMatchSnapshot();
  });
});
