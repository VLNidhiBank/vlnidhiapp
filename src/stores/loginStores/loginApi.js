// import axios from "axios";
import { axios } from "../../helper/axios";
import { LOGIN, VALIDATE_MOBILE, WHATSAPP_OTP } from "./loginConstant";


export const loginApi = async (payload) => {
    console.log(payload, "this is payload");
    return axios.post(LOGIN, payload);                //body request
                                                      //body params like get(ConstantName+ `/${payload}` )
}

export const whatsappOtpApi = async (payload) => {
    console.log(payload,"Payload")
    return axios.post(WHATSAPP_OTP, payload);
}
export const validateMobileApi = async (payload) => {
    console.log(payload,"Payload")
    return axios.post(VALIDATE_MOBILE, payload);
}