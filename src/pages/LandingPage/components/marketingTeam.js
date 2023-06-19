import React from "react";
import { Row, Col } from "react-bootstrap";
import EmployeeOne from "../../../assets/images/EOne.jpg";
import EmployeeTwo from "../../../assets/images/ETwo.jpg";
import EmployeeThree from "../../../assets/images/EThree.jpg";
import EmployeeFour from "../../../assets/images/EFour.jpg";
import "../../../App.css";
const MarketingTeam = () => {
  const List = [
    {
      image: EmployeeOne,
      name: "Hannah Morales",
      designation: "Chief Marketing Officer",
    },
    {
      image: EmployeeTwo,
      name: "Chun Hei Kim",
      designation: "Head of Digital Marketing",
    },
    {
      image: EmployeeThree,
      name: "Ariadne Snyder",
      designation: "Creative Director",
    },
    {
      image: EmployeeFour,
      name: "Wanda Strom",
      designation: "Brand Director",
    },
  ];

  const renderEmployesList = () => {
    return (
      <div className="d-flex flex-column gap-4">
        {List &&
          List.map((item) => {
            return (
              <>
              
                <div  className="d-flex flex-row align-items-center  gap-2">
               
                <div class="EmployImages">
                <img
                    
                    src={item.image}
                    alt="employes"
                  />
</div>

                
            

                  <div className="d-flex flex-column">
                    <span>{item.name}</span>
                    <span>{item.designation}</span>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    );
  };

  return (
    <div
      className="p-5"
      style={{
        background: "#DDD8D3",
        width: "100%",
        height: "100%",
      }}
    >
      <Row>
        <Col xl={6} lg={6} md={12} xs={12} sm={12}>
          <p className="marketingHeading">
            Meet the marketing team that crafts perfection
          </p>
        </Col>
        <Col xl={6} lg={6} md={12} xs={12} sm={12}>
          {renderEmployesList()}
        </Col>
      </Row>
    </div>
  );
};

export default MarketingTeam;
