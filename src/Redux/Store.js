import Reducer from "./Reducer/Reducer";
import { createStore } from "redux";
import {combineReducer} from "./Reducer/CombineReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const persistConfig = {
 key: 'root',
 storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducer)

export const store = createStore(persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const persistor = persistStore(store)

