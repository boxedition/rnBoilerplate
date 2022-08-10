import { configureStore } from "@reduxjs/toolkit";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import {
    persistStore,
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";
import Slices from "./Slices";

//const createDebugger = require('redux-flipper').default;

const persistConfig = {
    key: "rnBoilerplate",
    storage: ExpoFileSystemStorage,
    whitelist: [],
}
const persistedReducers = persistReducer(persistConfig, Slices)

export const store = configureStore({
    reducer: persistedReducers,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(
        //createDebugger()
    )
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)