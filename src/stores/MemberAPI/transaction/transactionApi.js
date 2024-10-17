import { axios } from "../../../helper/axios";
import { ALL_TRANSACTION } from "./transactionConstant"


export const allTransactionApi = async (payload) => {
    return axios.get(ALL_TRANSACTION+ `/${payload}`);
};
