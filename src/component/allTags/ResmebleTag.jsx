import React, { useState } from 'react';
import { resembleTag } from "../../action";
import { useDispatch } from 'react-redux';

const ResmebleTag = () => {

  const dispatch = useDispatch();
  const resembleTagHandler = (e) => {
    const innerHTML = e.target.innerHTML.toLowerCase();    
    dispatch(resembleTag(innerHTML))
  }

  return (
    <div>
      <h4>Resembles</h4>
      <ul className="tagsWrapper--yearTag">
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Architecture</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Nature</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Fashion</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Health</button></li>
      </ul>
    </div>
  )
}

export default ResmebleTag
