export const picDataFun = data_array_object => {
  console.log('action present huzoor : ', data_array_object);
  return{
    type : 'PIC_DATA',
    data_array_object
  }
}