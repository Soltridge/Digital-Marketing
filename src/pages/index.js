import React from "react";
import MyNavbar from "./LandingPage/components/Navbar";
import DemandPage from "./LandingPage/components/DemandPage";
import Services from "./LandingPage/components/Services";
import CompanyName from "./LandingPage/components/companyName";
import MarketingTeam from "./LandingPage/components/marketingTeam";
import About from "./LandingPage/components/About";
const Index = () => {
  return (
    <div className="d-flex flex-column">
      <div>
        <MyNavbar />
      </div>
      <div>
        <DemandPage />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <CompanyName />
      </div>
      <div>
        {" "}
        <About />
      </div>
      <div>
        <MarketingTeam />
      </div>
    </div>
  );
};

export default Index;
