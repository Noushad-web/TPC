import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resembleTag, yearTag } from "../../action";

const TagsWrapper = () => {
  
  const dispatch = useDispatch();
  const imagesData = useSelector((state) => state.pictureData);
  let [imgData, setImgData] = useState('');
  const yearTagHandler = (e) => {
    // dispatch(yearTag(e.target.innerHTML))
    const tags = {
      year: e.target.innerHTML
    };
    imgData =[
      ...imagesData.map(element => {
        return Object.assign(element, { tags })
      })
    ]
  }

  const resembleTagHandler = (e) => {
    const innerHTML = e.target.innerHTML;    
    dispatch(resembleTag(innerHTML))
  }

  const uploadHandler = () => {
    console.log('upload', imgData);
    localStorage.clear();
    localStorage.setItem('img-details', JSON.stringify(imgData));
  }

  return (
    <aside className="tagsWrapper">
      <h3 className="tagsWrapper--mainHeadline">Assign Tags</h3>
      
      <hr />
      
      <h4>Year</h4>
      <ul className="tagsWrapper--yearTag">
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2020</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2019</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2018</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2017</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2016</button></li>
      </ul>
      
      <h4>Resembles</h4>
      <ul className="tagsWrapper--yearTag">
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Architecture</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Nature</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Fashion</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={resembleTagHandler}>Health</button></li>        
      </ul>

      <div className="tagsWrapper--buttons">
        <button className="tagsWrapper--buttons__tagsAssigned-btn">Tags assigned</button>
        <Link to='/filter'>
          <button className="tagsWrapper--buttons__upload-btn" onClick ={uploadHandler}>Finsih and Upload</button>
        </Link>
      </div>

    </aside>
  )
}

export default TagsWrapper;
