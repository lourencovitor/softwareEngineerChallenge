import { Input, Label } from "reactstrap";
import { Container } from "./styles";

const InputComponent = ({
  name,
  type = "text",
  disabled = false,
  value,
  setState,
  options,
}) => {
  return (
    <Container>
      <Label style={{ color: "#f696af", fontSize: "0.9rem" }}>
        {name.replace(/\b[a-z]/g, (x) => x.toUpperCase())}
      </Label>
      {type === "select" ? (
        <Input
          type={"select"}
          name={name}
          id={name}
          onChange={(e) => {
            setState(e.target.value);
          }}
          disabled={disabled}
          value={value}
          placeholder={name.replace(/\b[a-z]/g, (x) => x.toUpperCase())}
          className="mb-2 w-100"
        >
          {options.map((option) => (
            <option value={option.value} disabled={!option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      ) : (
        <Input
          type={type}
          name={name}
          id={name}
          onChange={(e) => {
            setState(e.target.value);
          }}
          disabled={disabled}
          value={value}
          placeholder={name.replace(/\b[a-z]/g, (x) => x.toUpperCase())}
          className="mb-2"
        />
      )}
    </Container>
  );
};

export default InputComponent;
