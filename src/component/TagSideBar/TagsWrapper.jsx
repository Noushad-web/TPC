import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import YearTags from "../allTags/YearTags";
import ResmebleTag from "../allTags/ResmebleTag";

const TagsWrapper = () => {
  
  // taking data from the redux store
  const imagesData = useSelector((state) => state.pictureData);
  const tagData = useSelector((state)=> state.tags)
  const [tagObject, setTagObject] = useState({});
  let [imgData, setImgData ] = useState('');
  
  const uploadHandler = ()=>{
    console.log('upload', imgData);
    localStorage.clear();    
    localStorage.setItem('img-details', JSON.stringify(imgData));    
  }
  
  useEffect(() => {    
    setTagObject(prevState =>({ ...prevState, ...tagData }));
    setImgData(()=>{
      return[
        ...imagesData.map(element => {
          return Object.assign(element, { tagObject })
        })
      ]
    })

    return ()=>{
      setImgData('')
    }
  }, [tagData])


  return (
    <aside className="tagsWrapper">
      <h3 className="tagsWrapper--mainHeadline">Assign Tags</h3>

      <hr />
      
      <YearTags/>
      <ResmebleTag/>
    
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
