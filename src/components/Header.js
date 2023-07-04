import React from "react";
import styles from './Header.module.css'
import LogoImage from '../assets/images/logo-unycos.svg'

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <img src={LogoImage} alt="Logo"/>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.li}>Cursos</li>
          <li className={styles.li}>Register</li>
          <li className={styles.li}>Log in</li>
        </ul>
      </div>
    </>
  )
}