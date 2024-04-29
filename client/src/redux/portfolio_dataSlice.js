import { createSlice } from "@reduxjs/toolkit";

const portfolio_dataSlice = createSlice({
    name: 'root',
    initialState:{
        loading: false,
        portfolioData: null,
        reloadData: false,
    },
    reducers: {
        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData : (state, action) => {
            state.reloadData = action.payload;
        }
    },
});

export default portfolio_dataSlice.reducer;

export const { SetPortfolioData, ReloadData } = portfolio_dataSlice.actions;