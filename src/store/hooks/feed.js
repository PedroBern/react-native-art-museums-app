import { useCallback } from "react";
import useCancelableThunkReducer from "use-cancelable-thunk-reducer";

import {
  loadFeed,
  toggleFeedView,
  setVisibleIndex,
  refreshFeed,
  sortFeed
} from "../actions/feed";
import reducer, { feedInitialState } from "../reducers/feed";

const setVisibleIndexFactory = ({ viewableItems, changed }) => dispatch => {
  if (viewableItems[0]) {
    const firstViewable = changed.find(el => el.isViewable);
    if (firstViewable) {
      dispatch(
        setVisibleIndex(Math.min(viewableItems[0].index, firstViewable.index))
      );
    } else {
      dispatch(setVisibleIndex(viewableItems[0].index));
    }
  }
};

export default function useFeedReducer(filter) {
  const [state, dispatch] = useCancelableThunkReducer(
    reducer,
    feedInitialState
  );

  const _loadFeed = useCallback(next => dispatch(loadFeed(filter, next)), [
    filter
  ]);
  const _refreshFeed = useCallback(
    (sort, sortOrder) => dispatch(refreshFeed(filter, sort, sortOrder)),
    [filter]
  );
  const _toggleFeedView = useCallback(() => dispatch(toggleFeedView()), []);
  const _sortFeed = useCallback(
    (sort, order) => dispatch(sortFeed(sort, order, filter)),
    [filter]
  );
  const _setVisibleIndex = useCallback(
    ({ viewableItems, changed }) =>
      dispatch(setVisibleIndexFactory({ viewableItems, changed })),
    []
  );
  const _onEndReached = useCallback(
    () => state.info.next && _loadFeed(state.info.next),
    [state.info.next]
  );

  return {
    state,
    actions: {
      loadFeed: _loadFeed,
      refreshFeed: _refreshFeed,
      toggleFeedView: _toggleFeedView,
      sortFeed: _sortFeed,
      setVisibleIndex: _setVisibleIndex,
      onEndReached: _onEndReached
    }
  };
}
