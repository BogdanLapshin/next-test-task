import ReactTooltip from "react-tooltip";

import styles from "../../../styles/FormElements/Labels/Tips.module.scss";

type TipsPropsType = {
  content?: string;
  message?: string;
  tipId?: string;
};

const Tips: React.FC<TipsPropsType> = ({
  content,
  message,
  tipId,
}): JSX.Element => (
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

export default Tips;
