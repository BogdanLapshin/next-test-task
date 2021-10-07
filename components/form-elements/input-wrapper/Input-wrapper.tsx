import styles from "../../../styles/form-elements/input-wrapper/input-wrapper.module.scss";
const InputWrapper = (props) => {
  return <div className={styles.input__wrapper}>{props.children}</div>;
};
export default InputWrapper;
