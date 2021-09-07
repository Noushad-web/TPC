export const yearData = (yearName)=>{
  return {
    type : 'YEAR_DATA',
    yearName
  }
}
export const picDataFun = (dataObject) => {
  return{
    type : 'PIC_DATA',
    dataObject
  }
}