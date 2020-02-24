import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeSearchTerm } from "../actions/searchActions";

export class searchbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
    // This is implemented because of an action creator???
    // this.search = this.search.bind(this);
  }

  handleChanges = e => {
    this.setState({ searchTerm: e.target.value });
  };

  search = e => {
    e.preventDefault();
    // We are using the bind above because we need this
    // to be on the same plane ie this.props this.state
    this.props.changeSearchTerm(this.state.searchTerm);
  };

  //This is the way that it should be done.
  clearSearch = e => {
    // this.setState({ searchTerm: "" });
    this.setState(prevState => {
      return { ...prevState, searchTerm: "" };
    });
    this.props.changeSearchTerm("");
  };

  render() {
    return (
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search for order items .."
          name="search"
          value={this.state.searchTerm}
          onChange={this.handleChanges}
        />
        <div className="input-group-append">
          <button
            className={
              "btn btn-outline-danger " +
              (this.state.searchTerm ? "d-block" : "d-none")
            }
            onClick={this.clearSearch}
            type="button"
          >
            &times;
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={this.search}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  changeSearchTerm
};

export default connect(mapStateToProps, mapDispatchToProps)(searchbox);
