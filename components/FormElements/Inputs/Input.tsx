import React from "react";
import {UseFormRegisterReturn, UseFormTrigger} from "react-hook-form";

import styles from "../../../styles/FormElements/Inputs/Input.module.scss";

type InputPassWrapperPropsType = {
  inputId?: string;
  type?: string;
  name?: string;
  register?: UseFormRegisterReturn;
  trigger?: UseFormTrigger<any>;
  errors?: object;
};

const Input: React.FC<InputPassWrapperPropsType> = ({
  inputId,
  type,
  name,
  register,
  errors,
  trigger,
}): JSX.Element => {
  const invalidClassname = errors[name] ? ` ${styles.invalid}` : "";
  return (
    <>
      <input
        {...register}
        className={styles.form__input + invalidClassname}
        type={type}
        id={inputId}
        name={name}
        onKeyUp={() => {
          trigger(name);
        }}
      />
      {errors[name] && (
        <p className={styles.input__error__msg}>{errors[name].message}</p>
      )}
    </>
  );
};

export default Input;
