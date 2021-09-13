const unCheckedImg__reducer = ( state = [], action)=>{
  if (action.type === 'UNCHECKED_IMGS') {
    return [...new Set([...state, action.img])]
  }
  else{
    return state;
  }
}

export default unCheckedImg__reducer;