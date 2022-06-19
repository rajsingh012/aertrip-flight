import React, { useEffect } from "react";

const Sorting = (props) => {
  const { sortObj = {}, setSortObj } = props;
  const sortList = [
    {
      id: "airline",
      displyLabel: "Airline",
      className: "first_list",
    },
    {
      id: "depart",
      displyLabel: "Depart",
      className: "second_list",
    },
    {
      id: "arrive",
      displyLabel: "Arrive",
      className: "third_list",
    },
    {
      id: "duration",
      displyLabel: "Duration",
      className: "time_list",
    },
    {
      id: "price",
      displyLabel: "Price",
      className: "btn_list",
    },
  ];
  useEffect(() => {
    setSortObj({ price: true });
  }, []);
  return (
    <div className="flight_listData sort_container">
      {sortList.map((option, index) => {
        const { id = "", className = "", displyLabel = "" } = option;
        return (
          <div className={className} id={id} key={`sorting__${index}`}>
            <span
              onClick={() => {
                setSortObj({ [id]: !sortObj[id] });
              }}
            >
              {" "}
              {displyLabel}
            </span>
            {sortObj[id] == undefined ? (
              ""
            ) : sortObj[id] ? (
              <span
                onClick={() => {
                  setSortObj({ [id]: !sortObj[id] });
                }}
              >
                {" "}
                &#8645;
              </span>
            ) : (
              <span
                onClick={() => {
                  setSortObj({ [id]: !sortObj[id] });
                }}
              >
                {" "}
                &#8645;
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sorting;
