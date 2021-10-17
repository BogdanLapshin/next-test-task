import React, {ReactElement, useState} from "react";
import {UseFormRegister, UseFormTrigger, UseFormWatch} from "react-hook-form";

import Label from "../Labels/Label";
import Input from "../Inputs/Input";
import InputWrapper from "./InputWrapper";

import styles from "../../../styles/FormElements/InputWrapper/InputPassWrapper.module.scss";

type InputPassWrapperPropsType = {
  label?: string;
  inputId?: string;
  tip_content?: ReactElement;
  name?: string;
  register?: UseFormRegister<any>;
  errors?: object;
  trigger?: UseFormTrigger<React.ReactElement>;
  watch?: UseFormWatch<React.ReactElement>;
};

const InputPassWrapper: React.FC<InputPassWrapperPropsType> = ({
  label,
  inputId,
  tip_content,
  name,
  register,
  errors,
  trigger,
  watch,
}): JSX.Element => {
  const [type, setType] = useState(true);
  function viewPassword() {
    setType(!type);
  }
  return (
    <InputWrapper className={styles.input_pass_wrapper}>
      <Label label={label} inputId={inputId} tips={tip_content} />
      <Input
        type={type ? "password" : "text"}
        inputId={inputId}
        name={name}
        register={register(name, {
          required: "This field is required",
          pattern: {
            value: /(?=.*[0-9])[0-9a-z]{6,}/g,
            message: "Invalid password",
          },
          validate: (value) =>
            value === watch || (watch && "Passwords don't match."),
        })}
        errors={errors}
        trigger={trigger}
      />
      <div className={styles.span__wrapper}>
        <span
          onClick={viewPassword}
          className={`${styles.input__eye} ${
            styles[type ? "eye_open" : "eye_close"]
          }`}
        />
      </div>
    </InputWrapper>
  );
};

export default InputPassWrapper;
