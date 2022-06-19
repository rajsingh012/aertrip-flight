import Constants from "./../Constants/actions";

const initialState = {
  fetching: false,
  masterList: [],
  filterObj: {},
  filterdList: [],
};

const listReducer = (state = initialState, action) => {
  try {
    const { type, payload } = action;
    switch (type) {
      case Constants.SEARCH.GET_SEARCH_LISTING: {
        return {
          ...state,
          ...payload,
          fetching: false,
        };
      }
      case Constants.SEARCH.SEARCH_FETCHING: {
        return {
          ...state,
          fetching: true,
          masterList: [],
          filterObj: {},
        };
      }
      case Constants.SEARCH.SEARCH_FILTER_LIST: {
        return {
          ...state,
          filterdList: payload,
        };
      }
      default:
        return state;
    }
  } catch (error) {
    return initialState;
  }
};

export default listReducer;
