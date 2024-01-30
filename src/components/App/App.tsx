import React from 'react';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { errorPATH, favoritePATH, mainPATH } from '../../utils/constants';
import MainPage from '../../pages/main-page/MainPage';
import Header from '../Header/Header';
import FavoritePage from '../../pages/favorite-page/FavoritePage';
import ErrorPage from '../../pages/error-page/ErrorPage';

function App() {

  return (
    <div className={styles.main_container}>
      <Header />
      <main className={styles.wrapper}>
        <Routes>
          <Route path={mainPATH} element={<MainPage />} />
          <Route path={favoritePATH} element={<FavoritePage />} />
          <Route path={errorPATH} element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
