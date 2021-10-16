import Label from "../labels/Label";
import Input from "../inputs/Input";
import InputWrapper from "./Input-wrapper";
import styles from "../../../styles/form-elements/input-wrapper/input-pass-wrapper.module.scss";
import {ReactElement, useState} from "react";
import Tips from "../labels/Tips";
type InputPassWrapperPropsType = {
  label?: string;
  inputId?: string;
  tip_content?: ReactElement;
  name?: string;
  register?: any;
  errors?: any;
  trigger?: any;
  watch?: any;
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
}) => {
  const [type, setType] = useState(true);
  function viewPassword() {
    setType(!type);
  }
  return (
    <InputWrapper className={styles.input_pass_wrapper}>
      <Label
        label={label}
        inputId={inputId}
        tips={<Tips content={tip_content} />}
      />
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
          className={
            styles.input__eye + " " + styles[type ? "eye_open" : "eye_close"]
          }
        />
      </div>
    </InputWrapper>
  );
};

export default InputPassWrapper;
