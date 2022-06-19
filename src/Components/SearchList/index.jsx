import React, { useState, useEffect, Fragment } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { formatTravelTime, formatPrice } from "./../../Utils/utils";
import { applySorting } from "./../../Utils/sortingHelper";
import Sorting from "./Sorting";
import Loader from "./../Loader/index";
import indigo from "./6E.png";
import airIndia from "./AI.png";
import vistara from "./UK.png";
import Images from "../Image";

const airlinesLogo = {
  names: {
    "6E": "IndiGo",
    AI: "Air India",
    UK: "Vistara",
  },
  images: {
    "6E": indigo,
    AI: airIndia,
    UK: vistara,
  },
};

const Listing = (props) => {
  const { masterList = [], fetching = false } = props;
  const [sortList, setSortList] = useState([]);
  const [sortObj, setSortObj] = useState({});

  useEffect(() => {
    setSortList(applySorting(masterList, sortObj));
  }, [masterList, sortObj]);

  const isMobile = 768 > document.documentElement.clientWidth;
  const list = ({ data, index, style }) => {
    const { id = "", pLeg = [], farepr = 0 } = sortList[index],
      [firstLeg = []] = pLeg,
      [firstFlight = {}] = firstLeg;
    const stops = firstLeg.length;
    const { dt = "", at = "", al = "", ft = 0 } = firstFlight;
    return (
      <div
        className="flight__container"
        data-id={id}
        key={`${id}__flight-${index}`}
        style={style}
      >
        <ul className="flight_listData">
          <li className="first_list">
            <Images imgUrl={airlinesLogo.images[al]} width={25} height={25} />
            <p> {airlinesLogo.names[al]}</p>
          </li>
          <li className="second_list">
            {dt}
            <span className="orging_flex">
              {firstLeg.map((flight, index) => {
                const { fr, to } = flight;
                return (
                  <span key={to + index}>
                    {fr}-
                    {index != firstLeg.length - 1 ? "" : <span> {to}</span>}
                  </span>
                );
              })}
            </span>
          </li>
          <li className="third_list">{at}</li>
          <li className="time_list">
            <p>{formatTravelTime(ft)}</p>
            <p>
              {stops == 1 ? "Non" : stops} stop{stops > 1 ? "s" : ""}
            </p>
          </li>
          <li className="btn_list">
            <span className="farePrice">{formatPrice(farepr)}</span>
            <button className="book__button" type="button">
              Book
            </button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="listing__container">
      <Sorting sortObj={sortObj} setSortObj={setSortObj} />
      {fetching && sortList.length === 0 ? (
        <Loader />
      ) : !fetching && sortList.length === 0 ? (
        <Fragment> No Flights Found </Fragment>
      ) : (
        <Fragment>
          <AutoSizer className="listAutoSizer">
            {({ height, width }) => (
              <List
                useIsScrolling
                className="listingData"
                overscanCount={7}
                height={height}
                itemCount={sortList.length}
                itemSize={isMobile == true ? 100 : 80}
                width={width}
              >
                {list}
              </List>
            )}
          </AutoSizer>
        </Fragment>
      )}
    </div>
  );
};

export default Listing;
