import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./Authglobal";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import rootReducer from './Authglobal'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer: any = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})
