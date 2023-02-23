import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import { fetchApi } from "../../lib/fetchApi"

export const mealsActionTypes = {
    GET_MEALS_SUCCESS:"GET_MEALS_SUCCESS",
    GET_MEALS_STARTED:"GET_MEALS_STARTED",
    GET_MEALS_FAILED:"GET_MEALS_FAILED",

}

const initialState = {
    meals:[],
    isLoading: false,
    error: "",
}


export const mealsSlice = createSlice({
    name:"meals",
    initialState,
    reducers:{
        mealsStarted(state, action){
          state.isLoading = true;
        },
        mealsSuccess(state, action){
          state.meals = action.payload;
          state.isLoading = false;
          state.error = "";
        },
        mealsFailed(state, action){
          state.isLoading = false;
          state.error = action.payload;
        },
    },

    extraReducers: (builder)=>{
      builder.addCase(getMeals.fulfilled, (state, action)=>{
        state.meals = action.payload;
        state.isLoading = false;
        state.error = "";
      });
      builder.addCase(getMeals.pending, (state, action)=>{
        state.isLoading = true;
        state.error = action.payload;
      });
      builder.addCase(getMeals.rejected, (state, action)=>{
        state.meals = action.payload;
        state.isLoading = false;
        state.error = "";
      });
    }
});

export const mealsActions = mealsSlice.actions;

export const getMeals = createAsyncThunk(
    "meals/getMeals",
    async(payload, {dispatch, rejectWithValue } )=>{
      try{
     const {data } = await fetchApi("foods");
     return data
      }
      catch(error) {
     rejectWithValue(error)
      }
    }
)
