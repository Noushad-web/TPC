import React, { useEffect, useState } from 'react';
// import searchPng from '../images/search.png';

const FilterPage = () => {

  const [isData, setIsData] = useState(false);
  let [filterData, setFilterData] = useState([]);
  let filter = []
  let getTheData__from__localStorage = [];


  for (let i = 0; i < localStorage.length; i++) {
    console.log('render');
    getTheData__from__localStorage[i] = JSON.parse(localStorage.getItem(i));
  }


  const searchFormHandler = (e) => {
    e.preventDefault();
    const inputSearchedValue = e.target.search.value.toLowerCase();

    for (let i = 0; i < getTheData__from__localStorage.length; i++) {
      getTheData__from__localStorage[i].map((eachElementObject, index) => {
        const tagObject = eachElementObject.tagObject;
        if (tagObject.year === inputSearchedValue || tagObject.resemble == inputSearchedValue) {
          console.log('[input matched with tag in data]');
          filter[index] = eachElementObject;
        } else {
          setIsData(false);
        }
      });
      console.log(' filter :  ', filter);
      if (filter.length > 1) setIsData(true);
      setFilterData(filter)
    }
  }


  // setFilterData( 
  //   getTheData__from__localStorage.map((id, index) => {
  //   const tagObjectValue =  id[index].tagObject;
  //   console.log(tagObjectValue);
  //     if(tagObjectValue.year === inputSearchedValue || tagObjectValue.resemble === inputSearchedValue){
  //       console.log('[input matched with tag in data]');
  //       setIsData(true);
  //       console.log(id[index]);
  //       return id[index]
  //     }else {
  //       return setIsData(false);
  //     }
  //   })
  // )

  // setFilterData(()=> filtered )

  /*
  const filtered = getTheData__from__localStorage.map((eachImg) => {
        console.log('eachImg :  ', eachImg);
        eachImg.filter(eachData => {
          console.log('eachData : ', eachData);
          const objectValue = eachData.tagObject;
          if (objectValue.year === inputSearchedValue || objectValue.resemble == inputSearchedValue) {
            console.log('[input matched with tag in data]');
            setIsData(true)
            return eachData;
          } else {
            return setIsData(false);
          }
        })
      })
  */

  return (
    <>
      <div className='filter'>
        <div className="filter__search">
          <form action="" onSubmit={searchFormHandler}>
            <input type="search" name="search" placeholder='Search Tags here' />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <hr />

      <section className="data-wrapper">
        {
          (isData) ?
            <div className="data">
              {
                filterData.map(eachData => {
                  return (
                    <div className="data__img">
                      <img src={eachData.src} alt={eachData.name} />
                      <span>Size is : {eachData.size}</span>
                    </div>
                  )
                })
              }
            </div>
            :
            <div className='data__no-data'>
              <h1>Oops!  No Data to show</h1>
            </div>
        }
      </section>
    </>
  )
}

export default FilterPage
