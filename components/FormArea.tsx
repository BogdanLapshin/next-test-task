import Copyright from "./Сopyright/Copyright";
import Form from "./FormElements/Form";
import Logo from "./Logo/Logo";

import styles from "../styles/FormArea.module.scss";

type FormAreaPropsTypes = {
  form_type?: string;
};

const FormArea: React.FC<FormAreaPropsTypes> = ({form_type}): JSX.Element => (
  <section className={styles.form__area}>
    <Logo className={styles.logo__small} />
    <Form form_type={form_type} />
    <Copyright />
  </section>
);

export default FormArea;
