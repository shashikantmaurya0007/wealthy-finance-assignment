import { createStore, applyMiddleware } from "redux";
import * as thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk.default));

export default store;