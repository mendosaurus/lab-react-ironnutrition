import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <form className="container">
        <div className="form-groups">
          <div className="field has-addons">
            <div className="control">
              <input
                className="form-control"
                name="search"
                type="search"
                placeholder="Search food"
                onChange={this.props.searchInput}
              />
            </div>
            <div className="control">
              <a className="button is-info">Search</a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
