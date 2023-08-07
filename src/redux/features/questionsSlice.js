import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {
          question: "What is the best frontend Framework?",
          id: "1",
          answers: ["React", "Angular", "Vue", "Ember"],
        },
        {
          question: "How many rings are on the Olympic flag?",
          id: "2",
          answers: ["None", "4", "5", "7"],
        },
        {
          question:
            "In darts, whats the most points you can score with a single throw?",
          id: "3",
          answers: ["20", "60", "100", "30"],
        },
        {
          question: "How many holes are on a standard bowling ball?",
          id: "4",
          answers: ["5", "6", "7", "2"],
        },
        {
          question:
            "In the nursery rhyme, how many blackbirds were baked in a pie?",
          id: "5",
          answers: ["11", "20", "44", "24"],
        },
    ],
}
export const questionsSlice = createSlice({
    name: "Questions",
    initialState,
    reducers: {
        shuffleQuestions: (state, action) => {
            state.questions = action.payload;
        }
    }
})

export const {shuffleQuestions} = questionsSlice.actions;

export default questionsSlice.reducer;