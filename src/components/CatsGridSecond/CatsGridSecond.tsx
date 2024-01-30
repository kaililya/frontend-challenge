import React, { useEffect, useState } from "react";
import styles from './CatsGridSecond.module.css'
import CatsCard from "../CatsCard/CatsCard";
import { useDispatch } from "react-redux";
import { fetchCatsDataThunk } from "../../store/thunks/cats-thunk";
import { useAppDispatch } from "../../hooks/redux-hooks";
import axios from "axios";
import { nanoid } from 'nanoid'
import img from '../../images/image7-25.png'
import { Link } from "react-router-dom";
import { mainPATH } from "../../utils/constants";


function CatsGridSecond({photos ,handelClick}:any) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setInterval(() => {setIsVisible(prev => true)}, 15000)
  },[])

  return (
    <section className={styles.main_container}>
      {isVisible && 
        <a href="https://kaililya.github.io/web-porfolio/" target="_blank">
                <img className={styles.image} src={img} />
        </a>

        }
      <ul className={styles.cards_container}>
        {photos.length === 0 && <h3 className={styles.title}>
          У вас нет любимых котиков... Но это можно иcправить!
        </h3>}
        
        
        {photos?.map((post:any) => (
          <CatsCard key={`${post.id} ${nanoid(12)}`} post={post} handelClick={handelClick} /> 
        ))}
      </ul>
      {photos.length === 0 && (
      <Link to={mainPATH} className={styles.button}>
        Найти любичика
      </Link>)}

    </section>
  );
}

export default CatsGridSecond;



// const [currentPostStart, setCurrentPostStart] = useState(0)
// const { data: posts, isLoading } = postApi.useFetchAllPostsQuery({ limit: 7, start: currentPostStart })
// const [isMyFetching, setIsFetchingDown] = useState(false)
// const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
// useEffect(() => {
//   if (isMyFetching) {
//     setCurrentPostStart(prev => {
//       return prev < 93 ? prev + 1 : prev
//     })
//     setIsFetchingDown(false)
//   }
// }, [isMyFetching])
// useEffect(() => {
//   if (isMyFetchingUp) {
//     setCurrentPostStart(prev => {
//       return prev > 0 ? prev - 1 : prev
//     })
//     setIsMyFetchingUp(false)
//   }
// }, [isMyFetchingUp])
// useEffect(() => {
//   document.addEventListener('scroll', scrollHandler)
//   return () => {
//     document.removeEventListener('scroll', scrollHandler)
//   }
// }, [])
// const scrollHandler = (e: any): void => {
//   if (e.target.documentElement.scrollTop < 50) {
//     setIsMyFetchingUp(true)
//   }
//   if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 50) {
//     setIsFetchingDown(true)
//     window.scrollTo(0, (e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
//   }
// }

// if ()