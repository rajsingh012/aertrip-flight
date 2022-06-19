const processFlightResult = (singleResult, flightInfo) => {
  const { qid = "", alMaster = {}, aldet = {} } = flightInfo,
    {
      vendor = "",
      id = "",
      farepr = 0,
      fare = {},
      dt = "",
      at = "",
      tt = [],
      leg = [],
      pca = "",
    } = singleResult;
  const processedLeg = leg.map((tripInfo) => {
    const { flights = [] } = tripInfo;
    return flights.map((flight) => {
      const {
        fr = "",
        dt = "",
        to = "",
        at = "",
        al = "",
        ft = 0,
        farepr = 0,
      } = flight;
      return { fr, dt, to, at, al, ft, farepr, al };
    });
  });
  return {
    pLeg: processedLeg,
    farepr,
    id,
    vendor,
    fare,
    dt,
    at,
    tt,
    qid,
    alMaster,
    aldet,
    pca,
  };
};

const mergeFilterObj = (list) => {
  const [{ minPrice = 0, maxPrice = 0 } = {}] = list;
  let _minPrice = minPrice,
    _maxPrice = maxPrice;
  list.forEach((filter) => {
    if (_minPrice > filter.minPrice) {
      _minPrice = filter.minPrice;
    }
    if (_maxPrice < filter.maxPrice) {
      _maxPrice = filter.maxPrice;
    }
  });
  return { minPrice, maxPrice };
};

const formatListingResponse = (response) => {
  const { data = {} } = response,
    { flights = [] } = data;
  const masterList = [],
    filterList = [];
  flights.forEach((flight) => {
    const { results = {}, ...restFlightData } = flight,
      { f = [], j = [] } = results;
    j.forEach((result) => {
      masterList.push(processFlightResult(result, restFlightData));
    });
    f.forEach((filter) => {
      const { pr = {} } = filter,
        { minPrice = 0, maxPrice = 0 } = pr;
      filterList.push({ minPrice, maxPrice });
    });
  });
  return {
    filterdList: masterList,
    masterList,
    filterObj: mergeFilterObj(filterList),
  };
};

export default formatListingResponse;
