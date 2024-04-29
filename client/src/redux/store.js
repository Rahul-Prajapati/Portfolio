import portfolio_dataSlice from "./portfolio_dataSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    root: portfolio_dataSlice,
});

const store = configureStore({
    reducer,
});

export default store;