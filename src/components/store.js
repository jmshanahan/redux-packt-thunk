import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// function logger(store) {
//   return function(next) {
//     return function interruptDispatch(action) {
//       console.group("before dispatching ", action.type);
//       let result = next(action);
//       console.log("next state", store.getState());
//       console.groupEnd();
//       return result;
//     };
//   };
// }

let logger = store => next => action => {
  console.group("before dispatching ", action.type);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};
// let FooLogger = store => next => action => {
//   console.log("Foo");
//   next(action);
// };
const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger, thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
// logger(store)(nextMiddleware)(addOrder({ order: "Tea", amount: 2 }));
export default store;
