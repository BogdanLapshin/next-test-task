import styles from "../styles/form-area.module.scss";
import Form from "./form-elements/Form";
import Logo from "./logo/Logo";
const FormArea = () => {
  return (
    <section className={styles.form__area}>
      <Logo size="16" />
      <Form />
    </section>
  );
};

export default FormArea;
