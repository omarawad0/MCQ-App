import {
  DECREMENT_SCORE,
  ENROLL_STUDENT,
  NEXT_STEP,
  RESET_SCORE,
  SHUFFLE_QUESTIONS,
} from "./actionTypes";

const enrollStudent = (payload) => ({ type: ENROLL_STUDENT, payload });
const nextStep = (payload) => ({ type: NEXT_STEP, payload });
const decrementScore = (payload) => ({ type: DECREMENT_SCORE, payload });
const shuffleQuestions = (payload) => ({ type: SHUFFLE_QUESTIONS, payload });
const resetScore = (payload) => ({ type: RESET_SCORE, payload });

export {
  enrollStudent,
  nextStep,
  decrementScore,
  shuffleQuestions,
  resetScore,
};
