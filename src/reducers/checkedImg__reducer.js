
const checkedImg__reducer = (state = [], action) => {

  if (action.type === 'CHECKED_IMGS') {
    // console.log('checkedImg-reducer action : ', [...state, action.img]);
    return [...new Set([...state, action.img])]
  }
  else{
    return state
  }
}

export default checkedImg__reducer
