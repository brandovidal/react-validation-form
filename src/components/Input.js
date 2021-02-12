import React from "react";

import {
  IconInput,
  InputGroup,
  Input,
  Label,
  LegendError,
} from "../elements/Form";

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const InputComponent = ({
  status,
  changeStatus,
  id,
  type = "text",
  label,
  placeholder = "",
  legend = "",
  regex = "",
  validRepeatPassword = null,
} = {}) => {
  const onChange = (e) => {
    console.log(e.target.value);
    changeStatus({ ...status, field: e.target.value });
  };

  const validate = () => {
    if (regex) {
      if (!regex.test(status.field)) {
        console.log("input incorrecto");
        changeStatus({ ...status, valid: "false" });
        return;
      }
      changeStatus({ ...status, valid: "true" });
      console.log("input correcto");
    }

    if (!validRepeatPassword) {
      return;
    }
    validRepeatPassword();
  };

  return (
    <div>
      <Label htmlFor={id} valid={status?.valid}>
        {label}
      </Label>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          id={id}
          value={status?.field}
          onChange={onChange}
          onKeyUp={validate}
          onBlur={validate}
          valid={status?.valid}
          autoComplete="false"
        />
        <IconInput
          valid={status?.valid}
          icon={status?.valid === "true" ? faCheckCircle : faTimesCircle}
        />
      </InputGroup>
      <LegendError valid={status?.valid}>{legend}</LegendError>
    </div>
  );
};

export default InputComponent;
