// TODO Form Area PropsTypes, styles at the same folder
import Copyright from "./copyright/Copyright";
import Form from "./form-elements/Form";
import Logo from "./logo/Logo";
import styles from "../styles/form-area.module.scss";
type FormAreaPropsTypes = {
  form_type?: string;
};
const FormArea: React.FC<FormAreaPropsTypes> = ({form_type}): JSX.Element => {
  return (
    <section className={styles.form__area}>
      <Logo className={styles.logo__small} />
      <Form form_type={form_type} />
      <Copyright />
    </section>
  );
};

export default FormArea;
