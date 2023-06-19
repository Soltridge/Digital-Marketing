import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideImage from "../../../assets/images/sideImage.jpg";

const DemandPage = () => {
  return (
    <div style={{ background: "#DDD8D3", width:"100%"}}>
      <Container fluid>
        <Row style={{ height: "100%" }}>
          <Col xl={6} lg={6} md={6} xs={12} sm={12} style={{ overflow: "hidden" }}>
            <div style={{ height: "100%" }}>
              <img
                src={SideImage}
                alt="YourImage"
                style={{
                  width: "100%",
                  height: "100vh",

                  transform: "scale(1.9)",
                }}
              />
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} xs={12} sm={12}>
            <div className="d-flex flex-column align-items-start justify-content-center break-line h-100 px-5">
              <p>Demand more</p>
              <p>from your website</p>
              <p>and social media</p>

              <div 
              style={{
                fontSize:"18px",
                textTransform:"none",
              textAlign:"start",
              alignItems:"start"
          
               
              }}
              className="pl-0 ml-0 pt-4">
                Because they can and will do more for your company. All you need
                is the right digital marketing specialist to unlock your
                website's full potential.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DemandPage;
