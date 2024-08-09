import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBeneficiaryApi, memberBeneficiaryListApi } from "./addBeneficiaryApi";

export const addBeneficiary = createAsyncThunk(
    'addBeneficiary',
    async payload => {
        try {
            const response = await addBeneficiaryApi(payload);
            console.log(response, "Response after validate")
            return response;
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    },
);
export const memberBeneficiaryList = createAsyncThunk(
    'memberBeneficiaryList',
    async payload => {
        try {
            const response = await memberBeneficiaryListApi(payload);
            console.log(response, "Response after validate")
            return response;
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    },
);


const initialState = {
    addBeneficiaryData: [],
    addBeneficiaryLoading: false,
    memberBeneficiaryListData: [],
    memberBeneficiaryListLoading: false,
};

export const addBeneficiarySlice = createSlice({
    name: 'addBeneficiarySlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addBeneficiary.pending, (state) => {
                state.addBeneficiaryLoading = true;
            })
            .addCase(addBeneficiary.fulfilled, (state, action) => {
                state.addBeneficiaryData = action.payload;
                state.addBeneficiaryLoading = false;
            })
            .addCase(addBeneficiary.rejected, (state) => {
                state.addBeneficiaryLoading = false;
            })
            .addCase(memberBeneficiaryList.pending, (state) => {
                state.memberBeneficiaryListLoading = true;
            })
            .addCase(memberBeneficiaryList.fulfilled, (state, action) => {
                // console.log(action.payload,"payload inside state")
                state.memberBeneficiaryListData = action.payload;
                state.memberBeneficiaryListLoading = false;
            })
            .addCase(memberBeneficiaryList.rejected, (state) => {
                state.memberBeneficiaryListLoading = false;
            })
    },
});

export default addBeneficiarySlice.reducer;