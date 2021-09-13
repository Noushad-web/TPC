const userSelectedImg = (state = [], action) => {
  if (action.type == 'USER_SELECT_IMG'){
    console.log(action.imgArray)
    return {
      ...state,
      data : action.imgArray
    };
  }
  else{
    return state;
  }
}
export default userSelectedImg;