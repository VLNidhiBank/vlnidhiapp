import { axios } from "../../../helper/axios";
import { MEMBER_INVESTMENT_DETAILS } from "./investmentConstant";

export const memberInvestmentDetailsApi = async (payload) => {
    console.log(payload, "This is payload");
    return axios.get(MEMBER_INVESTMENT_DETAILS+ `/${payload}`);
}