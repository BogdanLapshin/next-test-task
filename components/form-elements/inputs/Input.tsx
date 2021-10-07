import styles from "../../../styles/form-elements/inputs/input.module.scss";
const Input = (props) => {
  return (
    <input
      className={
        styles.form__input +
        (props.custom_class == undefined ? "" : " " + props.custom_class)
      }
      type={props.type}
      id={props.inputId}
      name={props.name}
    />
  );
};
export default Input;
