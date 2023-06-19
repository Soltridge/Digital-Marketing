import React from "react";
import CompanyNames from "../../../assets/images/companyName.jpg";
import "../../../App.css";
const CompanyName = () => {
  return (
    <div
      className="px-5 pt-5 heading"
      style={{
        background: "#474747",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="headings" style={{}}>
        <p className="pOne pt-4">COMPANY NAME</p>
        <p className="pTwo">
          We help brands thrive in the digital age with a touch of creativity
          and innovation.
        </p>
      </div>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <img className="imageStyle " src={CompanyNames} alt="centerImage " />
      </div>
      <p className="pt-5 mb-0"></p>
    </div>
  );
};

export default CompanyName;
