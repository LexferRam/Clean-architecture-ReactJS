import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'

//slices
import { User } from '../models';
import { userReducer } from './slices';

export interface AppStore {
    user: User;
}

export const store = configureStore<AppStore>({
    reducer:{
       user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch;
