import styles from "../../../styles/form-elements/form-title/form-title.module.scss";
import Link from "next/link";
const FormTitle = (props) => {
  return (
    <>
      <legend className={styles.form__title}>{props.title}</legend>
      <div className={styles.form__auth}>
        {props.suggestion}
        <Link href={"/" + props.suggest_link}>
          <a className={styles.form__link}>{props.action}</a>
        </Link>
      </div>
    </>
  );
};

export default FormTitle;
