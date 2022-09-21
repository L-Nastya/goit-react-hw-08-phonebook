import { configureStore} from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


import contactReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-reducer';
import UserSlice from './auth/auth-slice';


const persistConfig = {
    key: "token",
    storage,
    whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, UserSlice);

export const store = configureStore({
   reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    register: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
  
})

export const persistor = persistStore(store);
