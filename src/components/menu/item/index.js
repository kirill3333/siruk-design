import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.css";

const Item = ({label, link}) => {
    return (
      <Link to={link} className={styles.item}>
          <span className={styles.dash} />
          {label}
      </Link>
    )
};

export default Item;
