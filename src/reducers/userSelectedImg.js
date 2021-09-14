const userSelectedImg = (state = [], action) => {
  if (action.type === 'USER_SELECT_IMG'){        
    return { data : action.imgArray };
  } 
  else if (action.type === 'RESET_USER_SELECTED_IMG'){
    return { data : [] }
  }
  else{
    return state;
  }
}
export default userSelectedImg;