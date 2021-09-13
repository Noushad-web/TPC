const initialState = {};
const tags = (state = initialState, action)=>{  
  // console.log('main reducer : ', action)
  if (action.type === 'YEAR_TAG_DATA'){
    // console.log('year-tag is present : ', action.tag)
    return { 
     year : action.tag
    }
  }
  else if (action.type === "RESEMBLE_TAG_DATA"){
    // console.log('resemble-tag in reducers : ', action.tag)
    return {
      resemble : action.tag
    }
  }
  else{
    return state;
  }
  // return state;
}

export default tags;