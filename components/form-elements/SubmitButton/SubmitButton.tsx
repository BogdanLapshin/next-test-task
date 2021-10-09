import styles from "./SubmitButton.module.scss";

type SubmitButtonPropsTypes = {
  text: string
}

const SubmitButton: React.FC<SubmitButtonPropsTypes> = (props) => {
  return (
    <button type="submit" className={styles.submit}>
      <div className={styles.wrapper}>{props.text}</div>
    </button>
  );
};

export default SubmitButton;
