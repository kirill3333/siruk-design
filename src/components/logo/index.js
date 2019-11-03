import React from "react"
import Icon from "../../assets/main-logo-white.svg";
import IconBlack from "../../assets/main-logo.svg";
import styles from "./styles.module.css";

const Logo = ({isBlack}) => {
    return <div className={styles.logo}>
        {
            isBlack ? <IconBlack /> : <Icon />
        }
    </div>
};

export default Logo
