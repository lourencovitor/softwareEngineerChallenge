import { Container } from "./styles";
import { useState } from "react";
import { Button } from "reactstrap";
import Form from "../../components/Form";
import { backendClient } from "../../utils/http";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { createNotification } from "../../utils/hellpers";
import "react-notifications/lib/notifications.css";
import { COUNTRIES } from "../../constants/paises";
import { TYPES } from "../../constants/types";
import InputComponent from "../../components/Input";

const initialValues = {
  name: "",
  bid: "",
  type: "",
  advertiser: "",
  country: "",
};

const RegisterCampaign = () => {
  const [data, setData] = useState({ ...initialValues });

  const onSubmit = async () => {
    try {
      const res = await backendClient.post("/campaign", data);
      if (res.status === 201) {
        createNotification(
          "success",
          "Success",
          "Campaign created successfully"
        );
        return setData({ ...initialValues });
      }
      createNotification("error", "Error", "Error when creating campaign");
    } catch (error) {
      createNotification("error", "Error", "Error when creating campaign");
    }
  };

  return (
    <>
      <Container>
        <Form>
          <h3 style={{ color: "#f0517a" }} className="mb-5 text-first">
            <strong>Register Campaign</strong>
          </h3>
          <div className="d-flex justify-content-between">
            <InputComponent name="name" value={data.name} setState={setData} />
            <InputComponent
              name="bid"
              type="number"
              value={data.bid}
              setState={setData}
            />
          </div>
          <div className="d-flex justify-content-between">
            <InputComponent
              name="type"
              value={data.type}
              setState={setData}
              type="select"
              options={[{ label: "", value: "" }].concat(TYPES)}
            />
            <InputComponent
              name="publisher"
              value={"Coca-cola"}
              setState={setData}
              disabled={true}
            />
          </div>
          <div className="d-flex justify-content-between">
            <InputComponent
              name="advertiser"
              value={data.advertiser}
              setState={setData}
            />
            <InputComponent
              name="country"
              value={data.advertiser}
              setState={setData}
              type="select"
              options={[{ label: "", value: "" }]
                .concat(COUNTRIES)
                .map((country) => {
                  return {
                    label: country.country_name_int,
                    value: country.abbreviation,
                  };
                })}
            />
          </div>

          <div className="d-flex justify-content-end mt-2">
            <Button
              type="button"
              style={{ backgroundColor: "#f0517a", border: "none" }}
              onClick={() => onSubmit()}
            >
              Register
            </Button>
          </div>
        </Form>
        <NotificationContainer />
      </Container>
    </>
  );
};

export default RegisterCampaign;
