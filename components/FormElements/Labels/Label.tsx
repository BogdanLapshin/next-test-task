import styles from "../../../styles/FormElements/Labels/Labels.module.scss";

type LabelPropsType = {
  inputId?: string;
  label?: string;
  tips?: React.ReactNode;
};

const Label: React.FC<LabelPropsType> = ({
  inputId,
  label,
  tips,
}): JSX.Element => (
  <label htmlFor={inputId} className={styles.label__input}>
    {label}
    {tips}
  </label>
);

export default Label;
