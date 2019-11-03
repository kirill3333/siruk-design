import React from "react"
import {graphql, useStaticQuery} from "gatsby";
import classNames from 'classnames';

import Item from './item';
import styles from "./styles.module.css";

const Menu = ({isBlack, isActive}) => {
    const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
              menuLinks {
                link
                name
              }
            }
          }
        }
    `);

    return <div className={classNames(styles.menu, {[styles.open]: isActive})}>
        {
            data.site.siteMetadata.menuLinks.map((link, index) => (
              <Item key={index} link={link.link} label={link.name} isBlack={isBlack} />
            ))
        }
    </div>
};

export default Menu;