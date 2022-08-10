import { createSlice } from "@reduxjs/toolkit";

export const DefaultSlice = createSlice({
    name: 'Default',
    initialState: {
        defaultText: "Default Text",
    },
    reducers: {
        setChangeDefaultText: (state, action) => {
            return {
                ...state,
                defaultText: action.payload,
            }
        }
    },
})

export const {
    setChangeDefaultText,
} = DefaultSlice.actions

export default DefaultSlice.reducer