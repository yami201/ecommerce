import { compose , legacy_createStore as createStore , applyMiddleware} from "redux"
import { persistStore , persistReducer} from "redux-persist"
import { logger } from "redux-logger"
import { rootReducer } from "./root-reducer"
import storage from "redux-persist/lib/storage"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "@redux-saga/core"
import { rootSaga } from "./root-saga"
/* const loggerMiddlware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action)
    }
    console.log('type',action.type)
    console.log('payload',action.payload)
    console.log("currentState",store.getState())

    next(action)
    console.log("next state",store.getState())
} */

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key:"root",
    storage,
    whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean)
const composeEnhancer = (process.env.NODE_ENV !== "production" && composeWithDevTools) || compose
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer,undefined,composedEnhancers)
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)