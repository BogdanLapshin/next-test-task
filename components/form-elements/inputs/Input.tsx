import styles from "../../../styles/form-elements/inputs/input.module.scss";
type InputPassWrapperPropsType = {
  custom_class?: string;
  inputId?: string;
  type?: string;
  name?: string;
  register?: any;
  dataRegister?: string;
};
const Input: React.FC<InputPassWrapperPropsType> = ({
  custom_class,
  inputId,
  type,
  name,
  register,
  dataRegister,
}) => {
  return (
    <input
      {...register}
      className={
        styles.form__input +
        (custom_class == undefined ? "" : " " + custom_class)
      }
      type={type}
      id={inputId}
      name={name}
      dataRegister={dataRegister}
    />
  );
};
export default Input;
