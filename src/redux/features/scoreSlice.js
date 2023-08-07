
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    score: 5,
}

export const scoreSlice = createSlice({
    name: "Score",
    initialState,
    reducers: {
        decrementScore: (state, action) => {
            state.score = action.payload ? state.score - 1 : state.score
        },
        resetScore: (state, action) => {
            state.score = action.payload
        },
    }
})

export const {decrementScore, resetScore} = scoreSlice.actions
export default scoreSlice.reducer;