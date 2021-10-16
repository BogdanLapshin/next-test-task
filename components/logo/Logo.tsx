import styles from "./Logo.module.scss";

type LogoPropsTypes = {
  className?: string;
};

const Logo: React.FC<LogoPropsTypes> = (props) => {
  const classNames = [styles.logo];
  props.className !== "" && classNames.push(props.className);

  return (
    <div className={classNames.join(" ")}>
      Nukle<span>Ball</span>
    </div>
  );
};
export default Logo;
