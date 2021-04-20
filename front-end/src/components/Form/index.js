import { Form } from "reactstrap";
import Card from "../Card";

const FormComponent = ({ title, children }) => (
  <Card title={title} width="40">
    <Form>
      {children.length > 1
        ? children.map((child, index) => {
            return child;
          })
        : children}
    </Form>
  </Card>
);

export default FormComponent;
