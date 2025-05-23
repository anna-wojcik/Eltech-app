import { createSlice } from "@reduxjs/toolkit";

const careerSlice = createSlice({
    name: 'carrier',
    initialState: {
        selectedJobId: null,
        showSummary: false,
    },
    reducers: {
        setSelectedJobId: (state, action) => {
            state.selectedJobId = action.payload;
        },
    },

});

export const { 
    setSelectedJobId,
} = careerSlice.actions;

export const selectSelectedJobId = state => state.career.selectedJobId;
export default careerSlice.reducer;