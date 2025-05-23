import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./features/career/careerSlice";

export default configureStore({
    reducer: {
        career: careerReducer,
    },
});