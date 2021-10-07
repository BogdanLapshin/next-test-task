import styles from "../../../styles/form-elements/buttons/submit-button.module.scss";
const SubmitButton = (props) => {
  return (
    <button type="submit" className={styles.btn__sbmt}>
      <div className={styles.btn__txt__wrapper}>{props.btn_text}</div>
    </button>
  );
};
export default SubmitButton;
