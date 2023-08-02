import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";

const reducers = combineReducers({
  allCats: categoryReducer,
});

export default reducers;
