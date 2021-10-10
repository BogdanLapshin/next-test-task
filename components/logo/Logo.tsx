import styles from "./Logo.module.scss";

type LogoPropsTypes = {
  isSmall?: boolean
  className?: string
}

const Logo: React.FC<LogoPropsTypes> = (props) => {
  const classNames = [styles.logo]
  props.className !== '' && classNames.push(props.className)

  return (
    <div className={classNames.join(' ')}>
      Nukle<span>Ball</span>
    </div>
  );
};

Logo.defaultProps = {
  isSmall: false,
  className: ''
}

export default Logo;
