import React, { Fragment, useState } from "react";
import Input from "./Input";
import IconEyeClose from "components/icon/IconEyeClose";
import IconEyeOpen from "components/icon/IconEyeOpen";

const InputPasswordToggle = ({ control }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!control) return null;
  return (
    <Fragment>
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        control={control}
      >
        {!showPassword ? (
          <IconEyeClose onClick={() => setShowPassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setShowPassword(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
