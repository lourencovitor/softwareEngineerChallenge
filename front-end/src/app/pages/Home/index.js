import { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

import { Container } from "./styles";
import classnames from "classnames";
import RegisterCampaign from "../../../containers/RegisterCampaign";
import BestCampaign from "../../../containers/BestCampaign";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Register Campaign");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Nav tabs className="px-3 mt-1">
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            style={{ color: "#f0517a", textDecoration: "none" }}
            className={classnames({
              active: activeTab === "Register Campaign",
            })}
            onClick={() => {
              toggle("Register Campaign");
            }}
          >
            Register Campaign
          </NavLink>
        </NavItem>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            style={{ color: "#f0517a", textDecoration: "none" }}
            className={classnames({ active: activeTab === "Best campaign" })}
            onClick={() => {
              toggle("Best campaign");
            }}
          >
            Best campaign
          </NavLink>
        </NavItem>
      </Nav>
      <Container>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="Register Campaign">
            <RegisterCampaign />
          </TabPane>
          <TabPane tabId="Best campaign">
            <BestCampaign />
          </TabPane>
        </TabContent>
      </Container>
    </>
  );
};

export default Home;
