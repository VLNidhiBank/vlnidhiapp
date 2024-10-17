import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { memberDataApi } from "./memberDataApi";

export const memberDetails = createAsyncThunk('memberDetails', async (payload) => {
    try{
        console.log(payload,'This is payload')
        const response = await memberDataApi(payload);

        console.log(response, "API RESPONSE");
        return response;
    } catch(error){
        console.log("Error", error);
        throw new Error(error);
    }
},);

const initialState = {
    memberData: [],
    memberLoading: false,
};

export const memberDataSlice = createSlice({
    name: 'memberDataSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(memberDetails.pending, (state) => {
                
                state.memberLoading = true;
            })
            .addCase(memberDetails.fulfilled, (state, action) => {
                state.memberData = action.payload;
                // console.log(state.memberData, "This is member data");
                state.memberLoading = false;
            })
            .addCase(memberDetails.rejected, (state) => {
                state.memberLoading = false;
            })
    },
});

export default memberDataSlice.reducer;