import Link from "next/link";
import styles from "../../styles/SocialMedia/SocialMedia.module.scss";

const SocialMedia = (props) => (
  <div className={styles.social__media__wrapper}>
    <div className={styles.media__title}>
      <span />
      <div className={styles.suggestion}>{props.text}</div>
    </div>
    <ul className={styles.menu}>
      <li className={styles.menu__items}>
        <Link href="#">
          <a className={styles.media__link} id={styles.google} />
        </Link>
      </li>
      <li className={styles.menu__items}>
        <Link href="https://twitter.com/">
          <a className={styles.media__link} id={styles.twitter} />
        </Link>
      </li>
      <li className={styles.menu__items}>
        <Link href="https://twitter.com/">
          <a className={styles.media__link} id={styles.facebook} />
        </Link>
      </li>
    </ul>
  </div>
);

export default SocialMedia;
