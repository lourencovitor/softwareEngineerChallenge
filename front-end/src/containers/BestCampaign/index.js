import Card from "../../components/Card";
import { formatCurrency } from "../../utils/hellpers";

import { Container, NameGroup, Title, Value } from "./styles";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { useEffect, useState } from "react";
import { backendClient } from "../../utils/http";

const BestCampaign = () => {
  const [data, setData] = useState({});

  const refreshData = async () => {
    const res = await backendClient.get("/campaign/fetch");
    return setData(res.data);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Container>
      <Card width="30">
        <div className="w-100 d-flex justify-content-between align-items-center mb-5">
          <h3 style={{ color: "#f0517a" }}>
            <strong>Best Campaign</strong>
          </h3>
          <AutorenewIcon
            fontSize="small"
            style={{ color: "#f696af", cursor: "pointer" }}
            onClick={() => refreshData()}
          />
        </div>
        <NameGroup>
          <Title>name:</Title>
          <Value> {data.name}</Value>
        </NameGroup>
        <hr />
        <NameGroup>
          <Title>bid:</Title>
          <Value> {formatCurrency(data.bid)}</Value>
        </NameGroup>
        <hr />
        <NameGroup>
          <Title>type:</Title>
          <Value> {data.type}</Value>
        </NameGroup>
        <hr />
        <NameGroup>
          <Title>publisher:</Title>
          <Value> {data.publisher}</Value>
        </NameGroup>
        <hr />
        <NameGroup>
          <Title>advertiser:</Title>
          <Value> {data.advertiser}</Value>
        </NameGroup>
        <hr />
        <NameGroup>
          <Title>country:</Title>
          <Value> {data.country}</Value>
        </NameGroup>
      </Card>
    </Container>
  );
};

export default BestCampaign;
