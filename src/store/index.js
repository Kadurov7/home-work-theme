import {combineReducers} from "redux"
import { basketSlice } from "./basket/basketSlice"
import { mealsSlice } from "./mealsReducer/mealsSlice"
import { configureStore } from "@reduxjs/toolkit"
import { uiSlice } from "./uiSlice"

const rootReducer = combineReducers({
  [basketSlice.name]: basketSlice.reducer,
  [mealsSlice.name]: mealsSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
})

export const store = configureStore({reducer:rootReducer})

