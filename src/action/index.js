export const picDataFun = data_array_object => {  
  return{
    type : 'PIC_DATA',
    data_array_object
  }
}

// tags actions here
export const yearTag = tag => {
  return {
    type : 'YEAR_TAG_DATA',
    tag
  }
}

export const resembleTag = tag => {  
  return {
    type : 'RESEMBLE_TAG_DATA',
    tag
  }
}

// custom assigning of images
export const checkedImg = img => {
  return {
    type : 'CHECKED_IMGS',
    img
  }
}

export const uncheckedImg = img =>{
  return{
    type : 'UNCHECKED_IMGS',
    img
  }
}

// img data which user select to assign the tags.
export const userSelectedImgAction = imgArray => {
  return{
    type : 'USER_SELECT_IMG',
    imgArray
  }
}

export const resetUserSelectedImgAction = nullArray => {
  return {
    type : 'RESET_USER_SELECTED_IMG',
    nullArray
  }
}