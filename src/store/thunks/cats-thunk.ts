import axios from "axios";
import { TAppDispatch } from "../store";
import { mainUrl } from "../../utils/constants";
import { gettingApiDataRequest, gettingApiDataRequestFailed, gettingApiDataRequestSuccess, setCurrenPage, setNeedFetch } from "../slices/cat-slice";

export const fetchCatsDataThunk = (currentPage:number) => async(dispatch: TAppDispatch) => {
  try {
    dispatch(gettingApiDataRequest());
    const response = await axios.get(`${mainUrl}?limit=16&order=DESC&page=${currentPage}`,
    {
      headers: {
        'x-api-key': 'live_73bzuqzk5yD6C1kvaArBDRBPR7mlX7NaM8i7H87BVNvcESCxWvN6urTWOoc3OST8',
      },

    }
    );

    let newArray = response.data.map((obj:any) => ({ ...obj, isLicked: false }));

    dispatch(gettingApiDataRequestSuccess(newArray));
    dispatch(setCurrenPage());
    dispatch(setNeedFetch(false))
  } catch (error) {
    dispatch(gettingApiDataRequestFailed(error));
    dispatch(setNeedFetch(false))

  }
}