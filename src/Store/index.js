import { createStore, combineReducers,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "./Reducer/authReducer";
import idreducer from "./Reducer/idreducer";
import listReducer from "./Reducer/listReducer";
import mySaga from "./Sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  id: idreducer,
  list:listReducer
});


const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;
