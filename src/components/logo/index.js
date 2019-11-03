import React from "react"
import classNames from 'classnames';

import Icon from "../../assets/main-logo.svg";
import styles from "./styles.module.css";

const Logo = ({isBlack}) => {
    return <div className={styles.logo}>
        <Icon className={classNames(styles.icon, {[styles.white]: !isBlack})} />
    </div>
};

export default Logo
