import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.css";

const Item = ({label, link, isBlack}) => {
    return (
      <Link to={link} className={isBlack ? styles.item_black : styles.item}>
          <span className={isBlack? styles.dash_black : styles.dash} />
          {label}
      </Link>
    )
};

export default Item;
