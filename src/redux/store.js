import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { reducer } from './reducer';
const { configureStore } = require('@reduxjs/toolkit');

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
