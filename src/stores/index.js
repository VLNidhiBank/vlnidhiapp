import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice  from "./MemberAPI/loginStores/loginSlice";
import transactionSlice  from "./MemberAPI/transaction/transactionSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import memberDataSlice from "./MemberAPI/memberData/memberDataSlice";
import addBeneficiarySlice from "./MemberAPI/addBeneficiaryStores/addBeneficiarySlice";



const reducers = combineReducers({
    addBeneficiarySlice: addBeneficiarySlice,
    loginSlice: loginSlice,
    transactionSlice: transactionSlice,
    memberDataSlice: memberDataSlice,
})

//Configure persist reducer
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['loginSlice'],
};

const persisteReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persisteReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export {store, persistor};