import React, { useCallback, useEffect, useState } from "react";
import CatsGrid from "../../components/CatsGrid/CatsGrid";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addFavoriteCat, setNeedFetch } from "../../store/slices/cat-slice";
import { fetchCatsDataThunk } from "../../store/thunks/cats-thunk";
import { createSolutionBuilder } from "typescript";

function MainPage() {
  const dispatch = useAppDispatch()

  const handleAdd = (cat:any) => {
    dispatch(addFavoriteCat(cat));
  }

  const {catsApiData: photos,
    currentPage,
    needFetch} = useAppSelector(store => store.catsReducer)



  const scrollHandler = (e:any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      dispatch(setNeedFetch(true))
    }
  }

  useEffect(() => {
    if (needFetch || photos.lenght === 0) {
      dispatch(fetchCatsDataThunk(currentPage))
    }
   
  }, [needFetch])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.removeEventListener('scroll', scrollHandler)

    }
  })
  return (
  <>
    <CatsGrid photos={photos} handelClick={handleAdd} />
  </>);
}

export default MainPage;


//   console.log('fetching');
    //   axios.get(`https://api.thecatapi.com/v1/images/search?limit=12&order=DESC&page=${currentPage}`,
    //   {
    //     headers: {
    //       'x-api-key': 'live_73bzuqzk5yD6C1kvaArBDRBPR7mlX7NaM8i7H87BVNvcESCxWvN6urTWOoc3OST8',
    //     },

    //   }
    //   )
    //   .then(resp => {
    //     setPhotos([...photos,...resp.data])
    //     setCurrentPage(prevState => prevState + 1)
    //   })
    //   .finally(() => {
    //     setFetching(false)
    //   })
    // }

      // console.log(photos[0]);

  // const [photos, setPhotos] = useState<any>([])
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true);
  