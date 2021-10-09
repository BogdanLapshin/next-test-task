import styles from "../styles/background-img.module.scss";
import Logo from "./logo/Logo";
const BackgroundImg = () => {
  return (
    <div className={styles.bg__img}>
      <div className={styles.logo__wrapper}>
        <Logo />
        <div className={styles.project__info}>Краткое описание проекта</div>
      </div>
    </div>
  );
};
export default BackgroundImg;
