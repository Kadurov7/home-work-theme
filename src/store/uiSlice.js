import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    snackbar:{
        isOpen:false,
        massage: "",
        severity: "",
    }
};

export const uiSlice = createSlice({
    name:"ui",
    initialState,
    reducers:{
        showSnackbar(state, action){
           state.snackbar.isOpen = true;
           state.snackbar.massage = action.payload.massage;
           state.snackbar.severity = action.payload.severity;
        },
        closeSnackbar(state, action){
           state.snackbar = initialState.snackbar;
        }
    }
});

export const uiActions = uiSlice.actions;