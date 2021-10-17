import styles from "../../../styles/form-elements/input-wrapper/input-wrapper.module.scss";
type InputWrapperPropsType = {
  className?: string;
  children?: React.ReactNode;
};
const InputWrapper: React.FC<InputWrapperPropsType> = ({
  children,
}): JSX.Element => {
  return <div className={styles.input__wrapper}>{children}</div>;
};
export default InputWrapper;
