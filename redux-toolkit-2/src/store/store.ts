import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dogAPI } from "./dogs/dogs.api";

const rootReducer = combineReducers({
[dogAPI.reducerPath] : dogAPI.reducer
})

export const setUpStore = ()=> configureStore({
    reducer: rootReducer,
    devTools:true,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(dogAPI.middleware)
})

