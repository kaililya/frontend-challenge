import { createSlice } from '@reduxjs/toolkit';
// import { TUser } from '../../types/types';
import type { PayloadAction } from "@reduxjs/toolkit"
import { error } from 'console';

type TInitialStateUser = {
  gettingApiDataRequest: boolean,
  gettingApiDataRequestSuccess: boolean,
  gettingApiDataRequestFailed: boolean,
  favoriteCatsArray: [],
  catsApiData: any;

  currentPage: number,
  needFetch: boolean,
  error: null | string
  
};
const intitialState:TInitialStateUser = {
  catsApiData: [],
  gettingApiDataRequest: false,
  gettingApiDataRequestSuccess: false,
  gettingApiDataRequestFailed: false,
  favoriteCatsArray: [],
  currentPage: 1,
  needFetch: true,
  error: null,
}

export const catsSlice = createSlice({
  name: 'cats',
  initialState: intitialState,
  reducers: {
    gettingApiDataRequest(state) {
      state.gettingApiDataRequest = true; 
      state.gettingApiDataRequestSuccess = false; 
      state.gettingApiDataRequestFailed = false; 
      state.error = null;

    },
    // :PayloadAction<TUser>
    gettingApiDataRequestSuccess(state, action) {
      state.gettingApiDataRequest = false; 
      state.gettingApiDataRequestSuccess = true; 
      state.gettingApiDataRequestFailed = false; 

      // console.log(action.payload);
      // @ts-ignorets
      if (state.catsApiData.length === 0) {
        state.catsApiData = action.payload;
      } else {
        state.catsApiData = [...state.catsApiData, ...action.payload];

      }
  

   
    },
    gettingApiDataRequestFailed(state, action) {
      state.gettingApiDataRequest = false; 
      state.gettingApiDataRequestSuccess = false; 
      state.gettingApiDataRequestFailed = true; 
      state.error = action.payload
    },

    addFavoriteCat(state, action:any) {
      // @ts-ignore
      console.log(action.payload);
      const currentCat = state.catsApiData.find((item:any) => item.id === action.payload.id)
      
      if (!currentCat.isLicked) {
        currentCat.isLicked = true
      } else {
        currentCat.isLicked = false
      }


      // if (state.catsApiData.filter((item) => item.id === action.payload.id).length === 0) {
      //   // @ts-ignore
      //   state.favoriteCatsArray = [...state.favoriteCatsArray, action.payload];
      // } 
      
    },

    removeFavoriteCat(state, action:any) {
      // @ts-ignore
      state.favoriteCatsArray = state.favoriteCatsArray.filter((item) => 
      // @ts-ignore
      item.id !== action.payload.id 
      )
    },
    setCurrenPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    setNeedFetch(state, action) {
      state.needFetch = action.payload;
    }
  },
})

type TSliceActions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never;
}[keyof T]

export type TCatActionTypes = TSliceActions<typeof catsSlice.actions>

export const { 
  gettingApiDataRequestFailed,
  gettingApiDataRequestSuccess,
  gettingApiDataRequest,
  addFavoriteCat,
  removeFavoriteCat,
  setCurrenPage,
  setNeedFetch
 } = catsSlice.actions;

export default catsSlice.reducer