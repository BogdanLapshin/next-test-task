import Label from "../labels/Label";
import Input from "../inputs/Input";
import InputWrapper from "./Input-wrapper";
import styles from "../../../styles/form-elements/input-wrapper/input-pass-wrapper.module.scss";
import {useState} from "react";
import Tips from "../labels/Tips";
const InputPassWrapper = (props) => {
  const [type, setType] = useState(true);
  function viewPassword() {
    setType(!type);
  }
  return (
    <InputWrapper className={styles.input_pass_wrapper}>
      <Label
        label={props.label}
        inputId={props.inputId}
        tips={<Tips content={props.tip_content} />}
      />
      <Input type={type ? "password" : "text"} inputId={props.inputId} />
      <span
        onClick={viewPassword}
        className={
          styles.input__eye + " " + styles[type ? "eye_open" : "eye_close"]
        }
      />
    </InputWrapper>
  );
};

export default InputPassWrapper;
