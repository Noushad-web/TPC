export const picDataFun = data_array_object => {
  // console.log('action present huzoor : ', data_array_object);
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
  console.log('resemble tags in action : ', tag)
  return {
    type : 'RESEMBLE_TAG_DATA',
    tag
  }
}
