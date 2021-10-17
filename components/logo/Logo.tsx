import styles from "../../styles/Logo/Logo.module.scss";

type LogoPropsTypes = {
  className?: string;
};

const Logo: React.FC<LogoPropsTypes> = ({className}): JSX.Element => {
  const classNames = [styles.logo];
  className !== "" && classNames.push(className);

  return (
    <div className={classNames.join(" ")}>
      Nukle
      <span>Ball</span>
    </div>
  );
};

export default Logo;
