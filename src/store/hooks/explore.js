import useCancelableThunkReducer from "use-cancelable-thunk-reducer";

import { loadListOf, search, resetSearch } from "../actions/explore";
import reducer, { initialState } from "../reducers/explore";

export default function useExploreReducer(target) {
  const [state, dispatch] = useCancelableThunkReducer(reducer, initialState);

  const showingAllRecords = state.totalRecords === state.records.length;

  const loadList = () => dispatch(loadListOf(target));

  const onEndReached = () =>
    state.next && dispatch(loadListOf(target, state.next));

  const onSubmitSearch = text => {
    dispatch(resetSearch());
    dispatch(search(text, target, showingAllRecords ? state.records : null));
  };

  const onEndReachedSearch = () =>
    state.nextSearchUrl &&
    dispatch(loadListOf(target, state.nextSearchUrl, false, true));

  return {
    state,
    actions: {
      loadList,
      onEndReached,
      onSubmitSearch,
      onEndReachedSearch
    }
  };
}
