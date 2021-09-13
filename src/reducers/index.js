import { combineReducers } from "redux";
import pictureData from "./pictureData";
import tags from './tags';
import checkedImg__reducer from "./checkedImg__reducer";
import unCheckedImg__reducer from './uncheckedImg__reducer';
import userSelectedImg from "./userSelectedImg";

const rootReducers = combineReducers({  
  pictureData,
  tags,
  checkedImg__reducer,
  unCheckedImg__reducer,
  userSelectedImg
});
export default rootReducers;