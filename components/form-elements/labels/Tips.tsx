import {ReactElement} from "react";
import ReactTooltip from "react-tooltip";
import styles from "../../../styles/form-elements/labels/tips.module.scss";

type TipsPropsType = {
  content?: string;
  message?: string;
  tipId?: string;
};
const Tips: React.FC<TipsPropsType> = ({
  content,
  message,
  tipId,
}): JSX.Element => {
  return (
    <div className={styles.tips} data-tip data-for={tipId}>
      <div className={styles.tip__content}>{content}</div>
      <ReactTooltip
        id={tipId}
        place="top"
        effect="solid"
        className={styles.tooltip__wrapper}
      >
        {message}
      </ReactTooltip>
    </div>
  );
};

export default Tips;
