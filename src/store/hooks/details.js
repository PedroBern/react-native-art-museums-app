import useCancelableThunkReducer from "use-cancelable-thunk-reducer";

import { loadRecord as loadRecordById } from "../actions/details";
import reducer, { detailsInitialState as initial } from "../reducers/details";

export default function useDetailsReducer(id) {
  const [state, dispatch] = useCancelableThunkReducer(reducer, initial);

  const loadRecord = () => dispatch(loadRecordById(id));

  return {
    state,
    actions: {
      loadRecord
    }
  };
}
