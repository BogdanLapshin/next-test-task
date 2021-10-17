import Logo from "./Logo/Logo";

import styles from "../styles/BackgroundImg.module.scss";

const BackgroundImg: React.FC = (): JSX.Element => (
  <div className={styles.bg__img}>
    <div className={styles.logo__wrapper}>
      <Logo />
      <div className={styles.project__info}>Краткое описание проекта</div>
    </div>
  </div>
);

export default BackgroundImg;
