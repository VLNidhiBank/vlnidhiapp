import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addBeneficiarySlice from "./addBeneficiaryStores/addBeneficiarySlice";
import loginSlice  from "./loginStores/loginSlice";
import transactionSlice  from "./transaction/transactionSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";


const reducers = combineReducers({
    addBeneficiarySlice: addBeneficiarySlice,
    loginSlice: loginSlice,
    transactionSlice: transactionSlice,
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