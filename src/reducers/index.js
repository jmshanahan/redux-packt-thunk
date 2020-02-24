import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import customerReducer from "./customersReducer";
import backlogReducer from "./backlogReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  orders: orderReducer,
  customers: customerReducer,
  backlog: backlogReducer,
  searchTerm: searchReducer
});
