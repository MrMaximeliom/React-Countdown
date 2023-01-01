import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/users/usersSlice'
import eventSlice from "./features/events/eventSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        event:eventSlice
    }
})