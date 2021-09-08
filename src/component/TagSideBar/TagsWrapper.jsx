import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TagsWrapper = () => {
    
  const imagesData = useSelector((state) => state.pictureData);
  let [imgData, setImgData] = useState('');
  const yearTagHandler = (e) => {
    const tags = {
      year: e.target.innerHTML
    };    
    imgData =[ 
      ...imagesData.map(element => {
        return Object.assign(element, { tags })
      })
    ]
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

      <div className="tagsWrapper--buttons">
        <button className="tagsWrapper--buttons__tagsAssigned-btn">Tags assigned</button>
        <button className="tagsWrapper--buttons__upload-btn" onClick = {uploadHandler}>Finsih and Upload</button>
      </div>

    </aside>
  )
}

export default TagsWrapper;
