import React, { useCallback } from "react";
import CatsGrid from "../../components/CatsGrid/CatsGrid";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addFavoriteCat, removeFavoriteCat } from "../../store/slices/cat-slice";
import CatsGridSecond from "../../components/CatsGridSecond/CatsGridSecond";

function FavoritePage() {
  const {catsApiData : photos} = useAppSelector(store => store.catsReducer)
  const filteredPhotos = photos.filter((photo:any) => photo.isLicked === true)
  const dispatch = useAppDispatch()
  
  const handleAdd = useCallback((cat:any) => {
    dispatch(addFavoriteCat(cat))
  },[])  

  return (
  <div>
    <CatsGridSecond photos={filteredPhotos} handelClick={handleAdd}/>
  </div>);
}

export default FavoritePage;
