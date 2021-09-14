
const checkedImg__reducer = (state = [], action) => {

  if (action.type === 'CHECKED_IMGS') {
    // console.log('checkedImg-reducer action : ', [...state, action.img]);
    return [...new Set([...state, action.img])]
  } 
  else if (action.type === 'RESET_USER_SELECTED_IMG'){
    return []
  }
  else{
    return state
  }
}

export default checkedImg__reducer
