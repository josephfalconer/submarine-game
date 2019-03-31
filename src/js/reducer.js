import { SIMPLE_STATE_UPDATE } from './actions';

export const INITIAL_STATE = {
  scrollTop: 0,
  scrollPercent: 0,
  doneQuestions: [],
  score: 0,
  chosenAnswerIndex: null,
  isCorrectAnswer: null,
  quizQuestion: null,
}

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