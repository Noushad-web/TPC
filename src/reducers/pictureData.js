const intitalState = {}
const pictureData = (state = intitalState, action)=> {
  if (action.type === 'PIC_DATA'){
    return {
      images : action.dataObject
    }
  }else{
    return state
  }
}
export default pictureData;