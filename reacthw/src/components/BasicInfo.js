import React from "react";
import "./BscInfo.css";
const BasicInfo = ({ people }) => {
  return (
    <>
      {people.map((data) => (
        <div className="styling">
          <p>{data.FN}</p>
          <p>{data.LN}</p>
          <p>{data.number}</p>
        </div>
      ))}
    </>
  );
};
export default BasicInfo;
