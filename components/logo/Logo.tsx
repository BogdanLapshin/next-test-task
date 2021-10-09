import styles from "../../styles/logo/logo.module.scss";
const Logo = (props) => {
  return (
    <div
      className={
        styles.logo +
        (props.custom_class == undefined
          ? ""
          : " " + styles[props.custom_class])
      }
    >
      Nukle<span>Ball</span>
    </div>
  );
};

export default Logo;
