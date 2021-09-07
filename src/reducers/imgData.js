const imgData = ( state = 0, action ) =>{
  if (action.type === 'YEAR_DATA'){
    return state = action.yearName
  }else{
    return state
  }
}

export default imgData;