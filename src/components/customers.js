import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  markCustomerAsSelected,
  fetchCustomers
} from "../actions/customersActions";
class Customers extends Component {
  componentDidMount = () => {
    if (!this.props.customers.length) this.props.fetchCustomers();
  };
  markAsSelected = e => {
    this.props.markCustomerAsSelected(
      parseInt(e.target.getAttribute("data-id"))
    );
  };
  render() {
    return (
      <div>
        {this.props.isFetching ? "Loading Customers..." : ""}
        {this.props.customers.map(customer => (
          <div
            className={"customer-card " + (customer.selected ? "selected" : "")}
            key={customer.id}
            data-id={customer.id}
            onClick={this.markAsSelected}
          >
            <div className="order-count">
              {"Orders: "}
              {
                this.props.backlog.filter(
                  order => order.customer === customer.id
                ).length
              }
            </div>
            {customer.name}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: state.customers.isFetching,
  customers: state.customers.list,
  backlog: state.backlog
});
const mapDispatchToProps = { markCustomerAsSelected, fetchCustomers };
export default connect(mapStateToProps, mapDispatchToProps)(Customers);
