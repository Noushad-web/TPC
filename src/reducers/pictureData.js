const intitalState = [];
const pictureData = (state = intitalState, action)=> {
  if (action.type === 'PIC_DATA'){
    // console.log('reducers present huzoor : ', action.data_array_object)
    return action.data_array_object
  }else{
    return state
  }
}
export default pictureData;