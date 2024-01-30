import React, { useEffect, useRef } from "react";
import errorImage from '../../images/404 error image.webp'
import styles from './ErrorPage.module.css'
import { mainPATH } from "../../utils/constants";
import { Link } from "react-router-dom";

function ErrorPage() {


  return (
    <div className={styles.main_container}>
      <img src={errorImage} className={styles.image} />
      <h2  className={styles.title}>Мои лапки не смогли найти эту страницу. Пожалуйста, вернись на главную тыкнув на кнопку ниже</h2>
      <Link to={mainPATH} className={styles.button}>
        Уведить все киски
      </Link>
    </div>);
}

export default ErrorPage;
