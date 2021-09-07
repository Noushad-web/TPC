import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yearData } from "../../action";

const TagsWrapper = () => {
  
  const [dataObject, setdataObject] = useState({});
  const imagesData = useSelector((state) => state.pictureData)
  
  const yearTagHandler = (e) => {
    const tags = {
      year: e.target.innerHTML
    };
    setdataObject(() => Object.assign(imagesData.images, { tags }))
    console.log('imagesData is : ', dataObject);
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
        <button className="tagsWrapper--buttons__upload-btn">Finsih and Upload</button>
      </div>

    </aside>
  )
}

export default TagsWrapper;
