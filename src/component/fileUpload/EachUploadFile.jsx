import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { picDataFun } from '../../action/index.js';

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 200,
  height: 200,
  padding: 4,
  boxSizing: 'border-box',
};
const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};
const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const EachUploadFile = ({ file }) => {

  const { preview, name, lastModified, size } = file; //destructuring file
  const dispatch = useDispatch();
  const [picData, setPicData] = useState();

  const yearData = useSelector((state) => {
    return state
  })

  useEffect(()=>{
    console.log('dispatching function');
    dispatch(
      picDataFun(
        {
          id: lastModified,
          name: name,
          src: preview,
          size: `${size / 1000}kb`,
        }
      )
    );
  }, [picData])

  const selectImg = (e)=>{
    console.log(e.target);
    setPicData( ()=> e.target );
  }
  
  return (
    <div onClick={selectImg} style={thumb} className="draggedItem">
      <div style={thumbInner}>
        <img id={lastModified} src={preview} style={img} alt={name}/>
      </div>
    </div>
  )
}

export default EachUploadFile
