import styles from "../../../styles/form-elements/form-title/form-title.module.scss";
import Link from "next/link";
type FormTitlePropsType = {
  title?: string;
  suggestion?: string;
  suggest_link?: string;
  action?: string;
};
const FormTitle: React.FC<FormTitlePropsType> = (props) => {
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
