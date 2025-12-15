import { configureStore } from "@reduxjs/toolkit";
// import { addUser, removeUser } from "./userSlice";
import  useReducer  from "./userSlice";
import  moviesReducer  from "./moviesSlice";

const appStore = configureStore(
    {
        reducer: {
            user: useReducer,
            movies: moviesReducer,
        }
    }
);


export default appStore;