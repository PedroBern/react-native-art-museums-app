import {
  TOGGLE_FAVORITE,
  TOGGLE_FAVORITES_VIEW,
  SET_VISIBLE_INDEX_FAVORITES
} from "../../../src/store/actions/favorites";

import reducer, {
  favoritesInitialState as DEFAULT_STATE
} from "../../../src/store/reducers/favorites";

describe("favorites reducer", () => {
  it("change grid on toggle", () => {
    expect(
      reducer(DEFAULT_STATE, { type: TOGGLE_FAVORITES_VIEW })
    ).toMatchSnapshot();
  });

  it("change visible index", () => {
    expect(
      reducer(DEFAULT_STATE, { type: SET_VISIBLE_INDEX_FAVORITES, payload: 1 })
    ).toMatchSnapshot();
  });

  it("add to favotites", () => {
    expect(
      reducer(DEFAULT_STATE, { type: TOGGLE_FAVORITE, payload: { id: 1 } })
    ).toMatchSnapshot();
  });

  it("remove from favotites", () => {
    expect(
      reducer(
        { ...DEFAULT_STATE, records: [{ id: 1 }] },
        { type: TOGGLE_FAVORITE, payload: { id: 1 } }
      )
    ).toMatchSnapshot();
  });

  it("defaults to state", () => {
    expect(reducer(DEFAULT_STATE, { type: "" })).toMatchSnapshot();
  });
});
