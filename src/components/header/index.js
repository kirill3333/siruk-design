import React from "react"
import styles from "./styles.module.css";

const Header = ({ isBlack, children }) => {
    return (
      <div className={isBlack ? styles.header_black : styles.header}>
          {children}
      </div>
    )
};

export default Header