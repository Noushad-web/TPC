import { combineReducers } from "redux";
import imgData from "./imgData";
import pictureData from "./pictureData";

const rootReducers = combineReducers({
  imgData,
  pictureData,
});
export default rootReducers;