const initialState = {};
const tags = (state = initialState, action)=>{  
  console.log('main reducer : ', action)
  if (action.type == 'YEAR_TAG_DATA'){
    console.log('year-tag is present : ', action.tags)
    return { 
     year : action.tags
    }
  }
  else if (action.type == 'RESEMBLE_TAG_DATA'){
    console.log('resemble-tag in reducers : ', action.tags)
    return {
      resemble : action.tags
    }
  }
  else{
    return state
  }
  // return state;
}

export default tags;