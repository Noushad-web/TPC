import React, {useState} from 'react';
import { yearTag } from "../../action";
import { useDispatch } from 'react-redux';

const YearTags = () => {

  const dispatch = useDispatch();  
  const yearTagHandler = (e) => {
    const innerHTML = e.target.innerHTML;
    dispatch(yearTag(innerHTML));
  }

  return (
    <div>
      <h4>Year</h4>
      <ul className="tagsWrapper--yearTag">
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2020</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2019</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2018</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2017</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2016</button></li>
      </ul>
    </div>
  )
}

export default YearTags
