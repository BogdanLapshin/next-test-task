import styles from "../../../styles/form-elements/labels/labels.module.scss";
type LabelPropsType = {
  label__input?: string;
  inputId?: string;
  label?: string;
  tips?: React.ReactNode;
};
const Label: React.FC<LabelPropsType> = (props) => {
  return (
    <label htmlFor={props.inputId} className={styles.label__input}>
      {props.label}
      {props.tips}
    </label>
  );
};

export default Label;
