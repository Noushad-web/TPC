const initialState = {};
const imgData = ( state = initialState, action) => {

  switch (action.type) {
    case 'YEAR':
      console.log('object : ', action.data)
    break;
  
    default:
      console.log('default')
      break;
  }
}