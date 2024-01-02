import { createSlice } from "@reduxjs/toolkit";

const configlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
    },
});

export const {changeLanguage} = configlice.actions;
export default configlice.reducer;