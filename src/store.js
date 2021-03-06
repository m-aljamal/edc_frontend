import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth_reducer from "./reducers/auth_reducer";
import campaigns_reducer from './reducers/campaigns_reducer'
import thunk from "redux-thunk";
const middleware = [thunk];
const reducer = combineReducers({
  auth_reducer,
  campaigns_reducer
});
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
