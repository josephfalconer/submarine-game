import { SIMPLE_STATE_UPDATE } from './actions';

const INITIAL_STATE = {}

export default function simpleReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SIMPLE_STATE_UPDATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}