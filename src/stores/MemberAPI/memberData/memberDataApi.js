import { axios } from "../../../helper/axios";
import { MEMBER_DETAILS } from "./memberDataConstant";

export const memberDataApi = async (payload) => {
    console.log(payload, "this is payload inside API");
    return axios.get(MEMBER_DETAILS+`/${payload}`);
}