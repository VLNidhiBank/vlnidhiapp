import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBeneficiaryApi, memberBeneficiaryListApi, SavingAccountApi } from "./addBeneficiaryApi";

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

export const impsBeneficiary = createAsyncThunk(
    'impsBeneficiary',
    async payload => {
        try {
            const response = await memberImpsListApi(payload);
            console.log(response, "Response after validate")
            return response;
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    },
);

export const accountSaving = createAsyncThunk(
    'accountSaving',
    async payload => {
        try {
            const response = await SavingAccountApi(payload);
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
    impsBeneficiaryData: [],
    impsBeneficiaryLoading: false,
    savingAccountData: [],
    savingAccountLoading: false,
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
            .addCase(impsBeneficiary.pending, (state) => {
                state.impsBeneficiaryLoading = true;
            })
            .addCase(impsBeneficiary.fulfilled, (state, action) => {
                state.impsBeneficiaryData = action.payload;
                state.impsBeneficiaryLoading = false;
            })
            .addCase(impsBeneficiary.rejected, (state) => {
                state.impsBeneficiaryLoading = false;
            })
            .addCase(accountSaving.pending, (state) => {
                state.savingAccountLoading = true;
            })
            .addCase(accountSaving.fulfilled, (state, action) => {
                state.savingAccountData = action.payload;
                state.savingAccountLoading = false;
            })
            .addCase(accountSaving.rejected, (state) => {
                state.savingAccountLoading = false;
            })
    },
});

export default addBeneficiarySlice.reducer;