import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/store";
import OrderCounter from "./components/order-counter";
import OrderForm from "./components/order-form";
import OrdersList from "./components/order-list";
import Customers from "./components/customers";
import OrderBacklog from "./components/order-backlog";
import SearchBox from "./components/searchbox";
function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-sm-6">
            <OrderForm />
            <hr />
            <Customers />
            <OrdersList />
          </div>
          <div className="col-sm-6">
            <OrderCounter />
            <SearchBox />
            <OrderBacklog />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
