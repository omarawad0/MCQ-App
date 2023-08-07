import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studenName: "",
    currentStep: "ENROLL",
}
export const studentSlice = createSlice({
    name: "Student",
    initialState,
    reducers: {
        enrollStudent: (state, action) => {
            state.studenName = action.payload
        },
        nextStep: (state, action) => {
            state.currentStep = action.payload
        }
    }
})

export const {enrollStudent, nextStep} = studentSlice.actions
export default studentSlice.reducer;