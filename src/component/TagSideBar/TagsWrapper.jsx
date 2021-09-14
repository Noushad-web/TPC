import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import YearTags from "../allTags/YearTags";
import ResmebleTag from "../allTags/ResmebleTag";
import { resetUserSelectedImgAction } from "../../action";

const TagsWrapper = () => {
  
  // taking data from the redux store
  const imagesData = useSelector((state) => state.pictureData);
  const tagData = useSelector((state)=> state.tags)
  const dispatch = useDispatch();
  const [tagObject, setTagObject] = useState({});
  const finalImgData = useSelector(state => state.userSelectedImg )
  let [imgData, setImgData ] = useState('');
  const [counter, setCounter] = useState(0);

  const uploadHandler = ()=>{
    console.log('upload', imgData);
    localStorage.setItem(counter, JSON.stringify(imgData));
    setCounter(()=> counter + 1);
    const data = finalImgData.data;
    data.forEach( eachElement => {
      eachElement.remove();
    });    
    dispatch(resetUserSelectedImgAction([]));    
  }

  useEffect(()=>{
    // console.log('final image data to be assigned from tagswrapper : ', finalImgData);
  }, [finalImgData])

  useEffect(()=>{    
    if(counter === 0){
      localStorage.clear();
    }
  },[counter])
   
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
        <button className="tagsWrapper--buttons__tagsAssigned-btn" onClick={uploadHandler} >Tags assigned</button>
        <Link to='/filter'>
          <button className="tagsWrapper--buttons__upload-btn" >Finsih and Upload</button>
        </Link>
      </div>

    </aside>
  )
}

export default TagsWrapper;
