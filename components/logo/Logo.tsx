import styles from "../../styles/logo/logo.module.scss";
const Logo = (props) => {
  const logoSize = props.size + "px";
  return (
    <div className={styles.logo} style={{fontSize: logoSize}}>
      Nukle<span>Ball</span>
    </div>
  );
};

export default Logo;
