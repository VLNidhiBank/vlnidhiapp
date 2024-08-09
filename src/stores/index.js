import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addBeneficiarySlice from "./addBeneficiaryStores/addBeneficiarySlice";


const reducers = combineReducers({
    addBeneficiarySlice: addBeneficiarySlice,
})

const store = configureStore({
    reducer: reducers,
})

export {store};