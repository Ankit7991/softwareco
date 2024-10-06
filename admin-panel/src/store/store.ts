import {configureStore, combineReducers, Reducer} from '@reduxjs/toolkit'
import { persistReducer, persistStore, PersistConfig} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/authSlice'

const persistConfig: PersistConfig<any> = {
    key: 'root',
    version: 1,
    storage
};

const combinedReducers = combineReducers({
    auth: authReducer
})

const persistedReducers = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PAUSE', 'persist/REMOVE'
                ]
            }
        })
    }
})

const persistor = persistStore(store)


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
export {persistor}