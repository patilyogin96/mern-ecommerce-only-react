import { ActionTypes } from "../Constants/action-types";
const intialState = {
  category: [],
};

export const categoryReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CATEGORY_FILTERS_SUCCESS:
      return { ...state, category: payload };
    default:
      return state;
  }
};
