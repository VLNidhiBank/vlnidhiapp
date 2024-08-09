import * as CoreAxios from "axios";
import { asyncStorage } from "./asyncStorage";
import { ShowErrorMessage, ShowSuccessMessage } from "../component/Common/FlashMessage";


export const axios = CoreAxios.default.create({
    baseURL: "http://192.168.142.212:9090",
    headers: {
        "Content-Type": "application/json"
    }
});

axios.interceptors.request.use(async request => {
    const authToken = await asyncStorage.getToken();
    if (authToken) {
        request.headers.Authorization = `Bearer ${authToken}`;
    }
    return request;
});

axios.interceptors.response.use(async response => {
    const { method } = response.config;
    if (method !== 'get') {
        // ToastAndroid.show("API hit Successfully", ToastAndroid.SHORT);
        ShowSuccessMessage('API hit Successfully')
    }
    return response.data;
},
    error => {
        // console.log('Response error:', error.response.status);
        // console.log('Response data:', error.response.data);
        console.log(error, "message from error in axios")
        console.log(error, "error in axiossssss")
        if (error.response.status == 406) {
            ShowErrorMessage(error.response.data.message || "Invalid Data. Please recheck!")
        }
        else {
            //   ToastAndroid.show("API Failed",ToastAndroid.SHORT);
            ShowErrorMessage('API Failed')
            console.log(error.response || error.message, "This is the error from axios")
        }
        // console.log(error.response.status,"REsponse from error in axios")
    }
);