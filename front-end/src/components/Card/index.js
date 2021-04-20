import { Card, CardBody, CardTitle } from "reactstrap";

const CardComponent = ({ title, width, children }) => (
  <Card
    style={{
      width: `${width}%`,
      boxShadow: "-1px 1px 12px 6px rgba(240,81,122,0.56)",
    }}
  >
    <CardBody width="100%">
      {title && <CardTitle tag="h3">{title}</CardTitle>}
      {children.length > 1
        ? children.map((child, index) => {
            return child;
          })
        : children}
    </CardBody>
  </Card>
);

export default CardComponent;
