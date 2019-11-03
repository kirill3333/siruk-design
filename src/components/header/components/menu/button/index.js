import React from "react"
import classNames from 'classnames';
import styles from "./styles.module.css";

const MobileButton = ({isActive, onMenuClick}) => {
    return (
      <div className={styles.button} onClick={onMenuClick}>
          <div className={styles.hamburger}>
              <div className={classNames(styles.bar, styles.bar_i, {[styles.animate]: isActive})} />
          </div>
      </div>
    )
};

export default MobileButton