import styles from "../../../styles/FormElements/SubmitButton/SubmitButton.module.scss";

type SubmitButtonPropsTypes = {
  text: string;
};

const SubmitButton: React.FC<SubmitButtonPropsTypes> = ({
  text,
}): JSX.Element => (
  <button type="submit" className={styles.submit}>
    <div className={styles.wrapper}>{text}</div>
  </button>
);

export default SubmitButton;