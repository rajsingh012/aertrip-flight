import moment from "moment";

const airlineSort = {
  "6E": "IndiGo",
  AI: "Air India",
  UK: "Vistara",
};

export const sortWithAirlineName = (isAsc) => {
  return (a, b) => {
    const { al: aal = "" } = deStructureData(a);
    const { al: bal = "" } = deStructureData(b);
    if (!isAsc) {
      if (airlineSort[aal] < airlineSort[bal]) {
        return -1;
      }
      if (airlineSort[aal] > airlineSort[bal]) {
        return 1;
      }
      return 0;
    }
  };
};

export const sortWithDepart = (isAsc) => {
  return (a, b) => {
    const { dt: adt = "" } = deStructureData(a),
      { dt: bdt = "" } = deStructureData(b);
    if (!isAsc)
      return moment(bdt, "hh:mm").diff(moment(adt, "hh:mm")) > 0 ? 1 : -1;
    return moment(adt, "hh:mm").diff(moment(bdt, "hh:mm")) > 0 ? 1 : -1;
  };
};

export const sortWithArival = (isAsc) => {
  return (a, b) => {
    const { at: aat = "" } = deStructureData(a),
      { at: bat = "" } = deStructureData(b);
    if (!isAsc)
      return moment(bat, "hh:mm").diff(moment(aat, "hh:mm")) > 0 ? 1 : -1;
    return moment(aat, "hh:mm").diff(moment(bat, "hh:mm")) > 0 ? 1 : -1;
  };
};

export const sortWithDuration = (isAsc) => {
  return (a, b) => {
    const { ft: aft = "" } = deStructureData(a),
      { ft: bft = "" } = deStructureData(b);
    if (!isAsc) return bft - aft;
    return aft - bft;
  };
};

export const sortWithPrice = (isAsc) => {
  return (a, b) => {
    const { farepr: afarepr = "" } = deStructureData(a),
      { farepr: bfarepr = "" } = deStructureData(b);
    if (!isAsc) return bfarepr - afarepr;
    return afarepr - bfarepr;
  };
};

export const deStructureData = (flight) => {
  const { pLeg = [], farepr = 0 } = flight,
    [firstObj = []] = pLeg,
    [firstList = {}] = firstObj,
    { al = "", dt = "", at = "", ft = 0 } = firstList;
  return { al, dt, at, ft, farepr };
};

export const applySorting = (list, sortObj) => {
  const newList = [...list];
  const firstKey = Object.keys(sortObj)[0] || "";
  switch (firstKey) {
    case "airline": {
      newList.sort(sortWithAirlineName(sortObj[firstKey]));
      break;
    }
    case "depart": {
      newList.sort(sortWithDepart(sortObj[firstKey]));
      break;
    }
    case "arrive": {
      newList.sort(sortWithArival(sortObj[firstKey]));
      break;
    }
    case "duration": {
      newList.sort(sortWithDuration(sortObj[firstKey]));
      break;
    }
    case "price": {
      newList.sort(sortWithPrice(sortObj[firstKey]));
      break;
    }
  }
  return newList;
};
