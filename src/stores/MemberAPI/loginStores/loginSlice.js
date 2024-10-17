import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, validateMobileApi, whatsappOtpApi } from "./loginApi";
import { asyncStorage } from "../../../helper/asyncStorage";



export const login = createAsyncThunk('login', async (payload) => {
    try {
        const response = await loginApi(payload);
        asyncStorage.setToken(response.Token);
        asyncStorage.setId(response.username);
        console.log(response, "This is my response"); 
        return response;
    } catch (error) {
        console.log(error, "Error inside LOGIN API");
        throw new Error(error);
    }
},
);
export const validateMobile = createAsyncThunk('validateMobile', async payload => {
    try {
        const response = await validateMobileApi(payload);
        return response;
    } catch (error) {
        console.log("Error", error);
        throw new Error(error);
    }
},
);


export const whatsappOtp = createAsyncThunk('whatsappOtp', async payload => {
    try{
        const response = await whatsappOtpApi(payload);
        console.log(response, 'Response of whatsappOTP API');
        if(response !== undefined){
            return response;
        }
    } catch (error) {
        console.log('error', error);
        throw new Error(error);
    }
},
);


const initialState = {
    loginData: [],
    loginLoading: false,
    whatsappOtpData: [],
    whatsappOtpLoading: false,
    validateMobileData: [],
    validateMobileLoading: false,
};

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        logout: (state) => {
            state.loginData = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loginLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loginData = action.payload;
                state.loginLoading = false;
            })
            .addCase(login.rejected, (state) => {
                state.loginLoading = false;
            })
            .addCase(validateMobile.pending, (state) => {
                state.validateMobileLoading = true;
            })
            .addCase(validateMobile.fulfilled, (state, action) => {
                state.validateMobileData = action.payload;
                state.validateMobileLoading = false;
            })
            .addCase(validateMobile.rejected, (state) => {
                state.validateMobileLoading = false;
            })
            .addCase(whatsappOtp.pending, (state) => {
                state.whatsappOtpLoading = true;
            })
            .addCase(whatsappOtp.fulfilled, (state, action) => {
                state.whatsappOtpData = action.payload;
                state.whatsappOtpLoading = false;
            })
            .addCase(whatsappOtp.rejected, (state) => {
                state.whatsappOtpLoading = false;
            })
    },
});

export const {logout} = loginSlice.actions;
export default loginSlice.reducer;
