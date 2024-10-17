import { axios } from "../../../helper/axios";
import { ADD_DETAILS, MEMBER_LIST, SAVING_ACCOUNTS, } from "./addBeneficiaryConstant";


export const addBeneficiaryApi = async (payload) => {
    console.log(payload,"This is my payload");
    return axios.post(ADD_DETAILS,payload);

};
export const memberBeneficiaryListApi = async (payload) => {
    // console.log(payload,"This is my payload");
    return axios.get(MEMBER_LIST+`/${payload}`);

};
export const memberImpsListApi = async (payload) => {
    console.log(payload,"This is my payload");
    return axios.post(IMPS_DETAILS,payload);

};
export const SavingAccountApi = async (payload) => {
    console.log(payload,"This is my payload");
    return axios.post(SAVING_ACCOUNTS,payload);

};