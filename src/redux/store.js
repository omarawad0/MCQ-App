import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/studentslice";
import questionsSlice from "./features/questionsSlice";
import scoreSlice from "./features/scoreSlice";

// configureStore calls combineReducers for us

 const store = configureStore({
  reducer: {
    questions: questionsSlice,
    student: studentSlice, 
    score: scoreSlice,
  }
})

export default store;