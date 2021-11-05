import {
  ENROLL_STUDENT,
  NEXT_STEP,
  SHUFFLE_QUESTIONS,
  DECREMENT_SCORE,
  RESET_SCORE,
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_STUDENT:
      return {
        ...state,
        studenName: action.payload,
      };
    case NEXT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case SHUFFLE_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case DECREMENT_SCORE:
      return {
        ...state,
        score: action.payload ? state.score - 1 : state.score,
      };
    case RESET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
