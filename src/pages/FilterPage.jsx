import React, { useEffect, useState } from 'react';
import searchPng from '../images/search.png';

const FilterPage = () => {

  const [isData, setIsData] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const getTheData = JSON.parse(localStorage.getItem('img-details'));

  const searchFormHandler = (e) => {
    e.preventDefault();
    const inputSearch = e.target.search;
    setFilterData(getTheData.filter(eachData => {
      
      if (eachData.tags.year === inputSearch.value){
        console.log('matched');
        setIsData(true)
        return eachData;
      }else{
        return setIsData(false);
      }
    }))
  }

  return (
    <>
      <div className='filter'>
        <div className="filter__search">
          <form action="" onSubmit={searchFormHandler}>          
            <input type="search" name="search" placeholder='Search Tags here'/>
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