export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const TOGGLE_FAVORITES_VIEW = "TOGGLE_FAVORITES_VIEW";
export const SET_VISIBLE_INDEX_FAVORITES = "SET_VISIBLE_INDEX_FAVORITES";

export const toggleFavorite = record => ({
  type: TOGGLE_FAVORITE,
  payload: record
});

export const toggleFavoritesView = () => ({ type: TOGGLE_FAVORITES_VIEW });

export const setVisibleIndex = index => ({
  type: SET_VISIBLE_INDEX_FAVORITES,
  payload: index
});
