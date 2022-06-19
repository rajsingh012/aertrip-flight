import getSearchResult from "./../Connector/getSearchResult";
import listingResponse from "./../Decorator/listingResponse";
import getList from "./../Connector/applyPriceFilter";
import Constants from "../Constants/actions";
import * as R from "ramda";
const then = R.curry((f, p) => p.then(f));

const getFilghtList = () => {
  return async (dispatch) => {
    dispatch({ type: Constants.SEARCH.SEARCH_FETCHING });
    const response = await R.pipe(getSearchResult, then(listingResponse))();
    dispatch({
      type: Constants.SEARCH.GET_SEARCH_LISTING,
      payload: response,
    });
  };
};

const applyFilter = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    const { flightListing = {} } = state,
      { masterList = [] } = flightListing;
    const { list = [] } = await R.pipe(getList)({
      list: masterList,
      filterObj: payload,
    });
    dispatch({
      type: Constants.SEARCH.SEARCH_FILTER_LIST,
      payload: list,
    });
  };
};

export { getFilghtList, applyFilter };
