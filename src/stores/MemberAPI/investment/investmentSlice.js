import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { memberInvestmentDetailsApi } from "./investmentApi";

export const memberInvestmentDetails = createAsyncThunk('memberInvestmentDetails', async (payload) => {
    try{
        console.log(payload, "This is payload");
        const response = await memberInvestmentDetailsApi(payload);
        
        console.log(response, "API RESPONSE");
        return response;
    } catch(error) {
        throw new Error(error);
    }
},);


const initialState = {
    memberInvestmentData: [],
    memberInvestmentLoading: false,
};

export const investmentSlice = createSlice({
    name: 'investmentSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(memberInvestmentDetails.pending, (state) => {
                state.memberInvestmentLoading = true;
            })
            .addCase(memberInvestmentDetails.fulfilled, (state, action) => {
                state.memberInvestmentData = action.payload;
                state.memberInvestmentLoading = false;
            })
            .addCase(memberInvestmentDetails.rejected, (state) => {
                state.memberInvestmentLoading = false;
            })
    },
});


export default investmentSlice.reducer;