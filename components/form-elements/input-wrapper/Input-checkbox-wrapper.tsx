import Input from "../inputs/Input";
import Label from "../labels/Label";
import InputWrapper from "./Input-wrapper";
import styles from "../../../styles/form-elements/input-wrapper/input-checkbox-wrapper.module.scss";
import {useState} from "react";
type InputCheckboxPropsType = {
  label?: string;
  label_tip?: React.ReactNode;
  name?: string;
  register?: any;
};
const InputCheckboxWrapper: React.FC<InputCheckboxPropsType> = ({
  label,
  label_tip,
  name,
  register,
}) => {
  const [role, setRole] = useState("Подсказка для определенной роли 1");
  function changeChecked(event) {
    setRole(event.target.value);
  }
  return (
    <InputWrapper>
      <Label label={label} tips={label_tip} />
      <ul className={styles.checkboxes__wrapper} onChange={changeChecked}>
        <li className={styles.checkboxes__inner}>
          <input
            type="radio"
            id="role-1"
            name="role"
            value="Подсказка для определенной роли 1"
            checked={role == "Подсказка для определенной роли 1"}
            className={styles.input__checkbox}
            {...register}
          />
          <label htmlFor="role-1">Роль 1</label>
          <div className={styles.radio__border}></div>
        </li>
        <li className={styles.checkboxes__inner}>
          <input
            type="radio"
            id="role-2"
            name="role"
            value="Подсказка для определенной роли 2"
            checked={role == "Подсказка для определенной роли 2"}
            className={styles.input__checkbox}
            {...register}
          />
          <label htmlFor="role-2">Роль 2</label>
          <div className={styles.radio__border}></div>
        </li>
        <li className={styles.checkboxes__inner}>
          <input
            type="radio"
            id="role-3"
            name="role"
            value="Подсказка для определенной роли 3"
            checked={role == "Подсказка для определенной роли 3"}
            className={styles.input__checkbox}
            {...register}
          />
          <label htmlFor="role-3">Роль 3</label>
          <div className={styles.radio__border}></div>
        </li>
      </ul>
      <div className={styles.role__info}>{role}</div>
    </InputWrapper>
  );
};

export default InputCheckboxWrapper;
