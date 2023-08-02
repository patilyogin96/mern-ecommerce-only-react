import { ActionTypes } from "../Constants/action-types";
import { api_open } from "../../Utils/network";

export const fetchCategoryFilters = () => {
  return async (dispatch) => {
    try {
      console.log("reached");
      const response = await api_open.get(`api/v1/category/`);

      dispatch({
        type: ActionTypes.FETCH_CATEGORY_FILTERS,
        payload: response,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.FETCH_CATEGORY_FILTERS_FAILURE,
        payload: "eRRO",
      });
    }
  };
};
