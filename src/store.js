import { configureStore } from "@reduxjs/toolkit";
import careerReducer from "./features/career/careerSlice";
import themeReducer from "./features/ThemeSwitch/themeSlice";

export default configureStore({
    reducer: {
        career: careerReducer,
        theme: themeReducer,
    },
});