import React, { Component } from "react";
import { connect } from "react-redux";
import SearchList from "./../Components/SearchList/";
import { getFilghtList, applyFilter } from "../Actions/searchActions";

class ListContainer extends Component {
  componentWillMount() {
    this.props.getFilghtList();
  }

  render() {
    const { fetching = false, masterList = [], filterObj = {} } = this.props;
    return (
      <div className="listing_body">
        <SearchList
          masterList={masterList}
          fetching={fetching}
          filterObj={filterObj}
          applyFilter={this.props.applyFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { flightListing = {} } = state;
  const { filterdList = [] } = flightListing;
  return {
    ...flightListing,
    masterList: filterdList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFilghtList: () => dispatch(getFilghtList()),
  applyFilter: (payload) => dispatch(applyFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
