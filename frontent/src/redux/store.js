import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/userSlice'  // no curly braces!

export const store = configureStore({
    reducer: {
        user: userReducer,

    },
})