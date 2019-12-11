import {
  FETCH_PERSON__SENT,
  FETCH_PERSON__FULFILLED,
  FETCH_PERSON__REJECTED,
  FETCH_PERSON_RECORDS__SENT,
  FETCH_PERSON_RECORDS__FULFILLED,
  FETCH_PERSON_RECORDS__REJECTED
} from "../actions/person";

export const personInitialState = {
  person: {
    data: null,
    loading: true,
    error: null
  },
  records: {
    data: [],
    loading: true,
    error: null,
    next: null
  }
};

const personReducer = (state = personInitialState, action) => {
  switch (action.type) {
    case FETCH_PERSON__SENT:
      return { ...state, person: { ...state.person, loading: true } };

    case FETCH_PERSON__FULFILLED:
      return {
        ...state,
        person: {
          data: action.payload.records[0],
          loading: false,
          error: null
        }
      };

    case FETCH_PERSON__REJECTED:
      return {
        ...state,
        person: {
          data: null,
          error: action.payload,
          loading: false
        }
      };

    case FETCH_PERSON_RECORDS__SENT:
      return { ...state, records: { ...state.records, loading: true } };

    case FETCH_PERSON_RECORDS__FULFILLED:
      const { info, records } = action.payload;
      const toAdd = records.filter(
        r => !state.records.data.find(s => s.id === r.id)
      );
      return {
        ...state,
        records: {
          data: [...state.records.data, ...toAdd],
          loading: false,
          error: null,
          next: info.next
        }
      };

    case FETCH_PERSON_RECORDS__REJECTED:
      return {
        ...state,
        records: {
          next: null,
          data: null,
          error: action.payload,
          loading: false
        }
      };

    default:
      return state;
  }
};

export default personReducer;
