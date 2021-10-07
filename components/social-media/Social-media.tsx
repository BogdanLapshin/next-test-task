import styles from "../../styles/social-media/social-media.module.scss";
import Link from "next/link";
const SocialMedia = (props) => {
  return (
    <div className={styles.social__media__wrapper}>
      <div className={styles.media__title}>
        <span />
        <div className={styles.suggestion}>{props.text}</div>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menu__items}>
          <Link href="#">
            <a className={styles.media__link} id={styles.google}></a>
          </Link>
        </li>
        <li className={styles.menu__items}>
          <Link href="#">
            <a className={styles.media__link} id={styles.twitter}></a>
          </Link>
        </li>
        <li className={styles.menu__items}>
          <Link href="#">
            <a className={styles.media__link} id={styles.facebook}></a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
