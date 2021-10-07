import Input from "../inputs/Input";
import Label from "../labels/Label";
import InputWrapper from "./Input-wrapper";
import styles from "../../../styles/form-elements/input-wrapper/input-checkbox-wrapper.module.scss";
import {useState} from "react";
const InputCheckboxWrapper = (props) => {
  const [role, setRole] = useState("");
  const roleTxt = {
    "role-1": "Подсказка для определенной роли 1",
    "role-2": "Подсказка для определенной роли 2",
    "role-3": "Подсказка для определенной роли 3",
  };
  function showRole(event) {
    setRole(event.target.id);
  }
  return (
    <InputWrapper>
      <Label label={props.label} tips={props.label_tip} />
      <div className={styles.checkboxes__wrapper} onChange={showRole}>
        <div className={styles.checkboxes__inner}>
          <Input
            type="radio"
            inputId="role-1"
            name={props.name}
            custom_class={styles.input__checkbox}
          />
          <label htmlFor="role-1">Кнопка1</label>
        </div>
        <div className={styles.checkboxes__inner}>
          <Input
            type="radio"
            inputId="role-2"
            name={props.name}
            custom_class={styles.input__checkbox}
          />
          <label htmlFor="role-2">Кнопка2</label>
        </div>
        <div className={styles.checkboxes__inner}>
          <Input
            type="radio"
            inputId="role-3"
            name={props.name}
            custom_class={styles.input__checkbox}
          />
          <label htmlFor="role-3">Кнопка3</label>
        </div>
      </div>
      <div className={styles.role__info}>{roleTxt[role]}</div>
    </InputWrapper>
  );
};

export default InputCheckboxWrapper;
