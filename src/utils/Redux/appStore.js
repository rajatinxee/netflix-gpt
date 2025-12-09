import { configureStore } from "@reduxjs/toolkit";
// import { addUser, removeUser } from "./userSlice";
import  useReducer  from "./userSlice";

const appStore = configureStore(
    {
        reducer: {
            user: useReducer,
        }
    }
);


export default appStore;