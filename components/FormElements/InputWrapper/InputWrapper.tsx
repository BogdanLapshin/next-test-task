import styles from "../../../styles/FormElements/InputWrapper/InputWrapper.module.scss";

type InputWrapperPropsType = {
  className?: string;
  children?: React.ReactNode;
};

const InputWrapper: React.FC<InputWrapperPropsType> = ({
  children,
}): JSX.Element => <div className={styles.input__wrapper}>{children}</div>;

export default InputWrapper;
