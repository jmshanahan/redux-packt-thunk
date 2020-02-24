import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addOrder } from "../actions/orderActions";
class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "",
      amount: 1
    };
    this.addOrder = this.addOrder.bind(this);
  }
  addOrder = e => {
    e.preventDefault();
    this.props.addOrder(this.state);
    this.setState(prevState => {
      return { ...prevState, order: "", amount: 1 };
    });
  };
  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };
  render() {
    return (
      <form action="" onSubmit={this.addOrder}>
        <div className="form-group">
          <label htmlFor="order">Order:</label>
          <input
            type="text"
            className="form-control"
            name="order"
            onChange={this.handleChange}
            value={this.state.order}
            placeholder="Order"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            className="form-control"
            name="amount"
            type="number"
            onChange={this.handleChange}
            value={this.state.amount}
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-block">
          Add
        </button>
      </form>
    );
  }
}
OrderForm.propTypes = {
  addOrder: PropTypes.func.isRequired
};

export default connect(null, { addOrder })(OrderForm);
