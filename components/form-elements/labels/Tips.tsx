import styles from "../../../styles/form-elements/labels/tips.module.scss";
const Tips = (props) => {
  return <div className={styles.tips}>{props.content}</div>;
};

export default Tips;
