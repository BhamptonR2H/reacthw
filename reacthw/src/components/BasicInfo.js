import React from "react";
import "./BscInfo.css";
const BasicInfo = ({ people }) => {
  return (
    <>
      {people.map((data) => (
        <div className="styling">
          <li>{data.FN}</li>
          <li>{data.LN}</li>
          <li>{data.number}</li>
        </div>
      ))}
    </>
  );
};
export default BasicInfo;
