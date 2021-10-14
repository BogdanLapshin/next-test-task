import Label from "../labels/Label";
import Input from "../inputs/Input";
import InputWrapper from "./Input-wrapper";
import styles from "../../../styles/form-elements/input-wrapper/input-pass-wrapper.module.scss";
import {useState} from "react";
import Tips from "../labels/Tips";
type InputPassWrapperPropsType = {
  label?: string;
  inputId?: string;
  tip_content?: string;
  name?: string;
  register?: any;
  dataRegister?: string;
};
const InputPassWrapper: React.FC<InputPassWrapperPropsType> = ({
  label,
  inputId,
  tip_content,
  name,
  register,
  dataRegister,
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
        // register={}
        dataRegister={dataRegister}
      />
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
