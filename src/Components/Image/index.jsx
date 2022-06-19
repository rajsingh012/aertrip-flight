import React from "react";

const Images = (props) => {
  const { imgUrl = "", height = "", width = "", className = "" } = props;
  return (
    <img src={imgUrl} className={className} height={height} width={width} />
  );
};

export default Images;
