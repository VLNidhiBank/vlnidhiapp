import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allTransactionApi } from "./transactionApi";


export const allTransactionList = createAsyncThunk('allTransactionList', async payload => {
    try {
        const response = await allTransactionApi(payload);
        console.log(response, "Response after validate")
        return response;
    } catch (error) {
        console.log('error', error);
        throw new Error(error);
    }
},
);

const initialState = {
    allTransactionData: [],
    allTransactionLoading: false,
};

export const transactionSlice = createSlice({
    name: 'transactionSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(allTransactionList.pending, (state) => {
                state.allTransactionLoading = true;
            })
            .addCase(allTransactionList.fulfilled, (state, action) => {
                state.allTransactionData = action.payload;
                state.allTransactionLoading = false;
            })
            .addCase(allTransactionList.rejected, (state) => {
                state.allTransactionLoading = false;
            })
    },
});

export default transactionSlice.reducer;