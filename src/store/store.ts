import { configureStore,combineReducers } from '@reduxjs/toolkit';
import catsReducer , { TCatActionTypes } from './slices/cat-slice'
import { ThunkAction } from 'redux-thunk';

const rootReducer = combineReducers({
  catsReducer,
  // [postApi.reducerPath]:postApi.reducer


});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
};

// export const setupStore=()=>{
//   return configureStore({
//       reducer:rootReducer,
//       middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(postApi.middleware)
//   })
// }

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];

export type TActions = TCatActionTypes 

export type TAppThunk<TReturn = void> = ThunkAction<TReturn, TRootState, never, TActions>;
