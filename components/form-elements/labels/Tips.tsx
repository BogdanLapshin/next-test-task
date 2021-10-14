import styles from "../../../styles/form-elements/labels/tips.module.scss";
type TipsPropsType = {
  content?: string;
};
const Tips: React.FC<TipsPropsType> = (props) => {
  return <div className={styles.tips}>{props.content}</div>;
};

export default Tips;
