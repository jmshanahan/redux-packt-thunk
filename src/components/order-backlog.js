import React, { Component } from "react";
import { connect } from "react-redux";
import cuid from "cuid";
import { markOrderAsDone } from "../actions/orderActions";
class OrderBacklog extends Component {
  markAsDone = e => {
    let id = parseInt(e.target.getAttribute("data-id"));
    this.props.markOrderAsDone(id);
  };
  render() {
    let searchTerm = this.props.searchTerm.toLowerCase();
    let backlog = this.props.backlog;
    let searchResults = backlog.filter(order => {
      return order.list.find(item => item.order.toLowerCase() === searchTerm);
    });
    let orderBacklog = searchTerm ? searchResults : backlog;
    return (
      <div>
        {orderBacklog.map(order => (
          <div key={cuid()} className="order-card">
            <div className="clearfix">
              <strong className="float-left py-2 mb-0">Items list:</strong>
              <button
                className="btn btn-sm mt-1 btn-success float-right"
                data-id={order.id}
                onClick={this.markAsDone}
              >
                DONE
              </button>
            </div>
            <table>
              <tbody>
                {order.list.map(item => (
                  <tr key={item.id}>
                    <td>{item.amount}</td>
                    <td>{item.order}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <div>
              Customer:{" "}
              {this.props.customers.find(c => c.id === order.customer).name}
            </div>
            <div>time: {order.time}</div>
            <div className="order-id">{order.id}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  backlog: state.backlog,
  customers: state.customers.list,
  searchTerm: state.searchTerm
});
const mapDispatchToProps = { markOrderAsDone };
export default connect(mapStateToProps, mapDispatchToProps)(OrderBacklog);
