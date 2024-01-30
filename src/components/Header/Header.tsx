import React from "react";
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";
import {headerLinks } from "../../utils/constants";

function Header() {

  const switchClassName = ({isActive}:{isActive:boolean}): string => (isActive ? `${styles.links_container__link_active} ${styles.links_container__link}` : `${styles.links_container__link}`);

  return (
  <header className={styles.main_container}>
    <ul className={styles.links_container}>
      {headerLinks.map((link, id) => (
        <li 
          className={styles.links_container__item}
          key={id}>
          <NavLink 
            className={switchClassName} 
            to={link.path}
          >
            {link.content}
          </NavLink>
        </li>
      )
      )}
    </ul>
  </header>);
}

export default Header;
