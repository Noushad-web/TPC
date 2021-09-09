import { combineReducers } from "redux";
import pictureData from "./pictureData";
import tags from './tags';

const rootReducers = combineReducers({  
  pictureData,
  tags
});
export default rootReducers;