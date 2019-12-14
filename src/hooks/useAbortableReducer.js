import React, { useReducer, useEffect, useCallback } from "react";

function useAbortableReducer(
  reducer,
  initialState,
  init = undefined,
  verbose = false
) {
  const should = { abort: false };

  const [state, regularDispatch] = useReducer(reducer, initialState, init);

  const dispatch = useCallback(
    action => {
      return should.abort
        ? verbose
          ? console.log("Aborted: ", action.type)
          : null
        : regularDispatch(action);
    },
    [regularDispatch]
  );

  useEffect(() => {
    return () => {
      should.abort = true;
    };
  }, []);

  return { state, dispatch };
}

export default useAbortableReducer;
