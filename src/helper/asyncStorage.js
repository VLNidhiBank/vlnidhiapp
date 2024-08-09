import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncStorage = {};

asyncStorage.setToken = (token) => AsyncStorage.setItem("AUTH_TOKEN", token);
asyncStorage.getToken = () => AsyncStorage.getItem("AUTH_TOKEN");
// asyncStorage.setMobile = (mobile) => AsyncStorage.setItem("USER_MOBILE", mobile);
// asyncStorage.getMobile = () => AsyncStorage.getItem("USER_MOBILE");
asyncStorage.setLoginMessage = (success) => AsyncStorage.setItem("LOGIN_MESSAGE", success);

asyncStorage.getLoginMessage = () => AsyncStorage.getItem("LOGIN_MESSAGE");
asyncStorage.setId = (id) => AsyncStorage.setItem("USER_ID", id);
asyncStorage.getId = () => AsyncStorage.getItem("USER_ID");
asyncStorage.removeToken = () => AsyncStorage.removeItem("AUTH_TOKEN");
// asyncStorage.removePassword = () => AsyncStorage.removeItem("USER_PASSWORD");
// asyncStorage.removeName = () => AsyncStorage.removeItem("USER_NAME");
asyncStorage.setUserType = (userType) => AsyncStorage.setItem("USER_TYPE", userType);
asyncStorage.getUserType = () => AsyncStorage.getItem("USER_TYPE");
asyncStorage.removeUserType = () => AsyncStorage.removeItem("USER_TYPE");
asyncStorage.removeLoginMessage = () => AsyncStorage.removeItem("LOGIN_MESSAGE");
export {asyncStorage};