import { axios } from "../../helper/axios";
import { ADD_DETAILS, MEMBER_LIST, } from "./addBeneficiaryConstant";


export const addBeneficiaryApi = async (payload) => {
    console.log(payload,"This is my payload");
    return axios.post(ADD_DETAILS,payload);

};
export const memberBeneficiaryListApi = async (payload) => {
    // console.log(payload,"This is my payload");
    return axios.get(MEMBER_LIST);

};