// TODO Form Area PropsTypes, styles at the same folder
import Copyright from "./copyright/Copyright";
import Form from "./form-elements/Form";
import Logo from "./logo/Logo";

import styles from "../styles/form-area.module.scss";

const FormArea = (props) => {
  return (
    <section className={styles.form__area}>
      <Logo isSmall={true} />
      <Form form_type={props.form_type} />
      <Copyright />
    </section>
  );
};

export default FormArea;
