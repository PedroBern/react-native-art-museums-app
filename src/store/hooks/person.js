import useCancelableThunkReducer from "use-cancelable-thunk-reducer";

import {
  loadPersonRecords,
  loadPersonRecordsOnEndReached,
  loadPerson
} from "../actions/person";
import reducer, {
  personInitialState as initialState
} from "../reducers/person";

export default function useDetailsReducer(id) {
  const [state, dispatch] = useCancelableThunkReducer(reducer, initialState);

  // const _loadPersonRecords = () => dispatch(loadPersonRecords(id));
  const _loadPerson = () => dispatch(loadPerson(id));
  const onEndReached = () =>
    state.records.next &&
    dispatch(loadPersonRecordsOnEndReached(state.records.next));

  return {
    person: state.person,
    records: state.records,
    actions: {
      // loadPersonRecords: _loadPersonRecords,
      loadPerson: _loadPerson,
      onEndReached
    }
  };
}
