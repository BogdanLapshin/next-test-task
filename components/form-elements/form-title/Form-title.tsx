import styles from "../../../styles/form-elements/form-title/form-title.module.scss";
import Link from "next/link";
type FormTitlePropsType = {
  title?: string;
  suggestion?: string;
  suggest_link?: string;
  action?: string;
};
const FormTitle: React.FC<FormTitlePropsType> = ({
  title,
  suggestion,
  suggest_link,
  action,
}): JSX.Element => {
  return (
    <>
      <legend className={styles.form__title}>{title}</legend>
      <div className={styles.form__auth}>
        {suggestion}
        <Link href={"/" + suggest_link}>
          <a className={styles.form__link}>{action}</a>
        </Link>
      </div>
    </>
  );
};

export default FormTitle;
