import React, { useState } from "react"
import { Link } from "gatsby";
import Logo from "../logo";
import Menu from "./components/menu"
import MobileButton from "./components/menu/button"

import styles from "./styles.module.css";

const Header = ({ isBlack }) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <div className={isBlack ? styles.header_black : styles.header}>
          <MobileButton isActive={isActive} onMenuClick={() => setIsActive(!isActive)} />
          <Link to="/">
              <Logo isBlack />
          </Link>
          <Menu isActive={isActive} isBlack />
      </div>
    )
};

export default Header