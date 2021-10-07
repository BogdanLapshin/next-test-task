import styles from "../../../styles/form-elements/labels/labels.module.scss";
const Label = (props) => {
  return (
    <label htmlFor={props.inputId} className={styles.label__input}>
      {props.label}
      {props.tips}
    </label>
  );
};

export default Label;
