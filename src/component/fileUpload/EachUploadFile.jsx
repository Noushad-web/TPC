import { useState } from "react";

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
  const [picData, setPicData] = useState();

  const selectImg = (e)=>{
    const targeted = e.target;
    if(targeted.tagName === 'IMG'){      
      if(targeted.className !== 'clicked'){
        targeted.classList.add('clicked');
        setPicData((prev) => {
          if (e.target.src) {
            prev--;
          }
        });
      }else{
        targeted.classList.remove('clicked');
        setPicData((prev) => {
          if (e.target.src) {
            prev++
          }
        });
      }
    }
  }
  
  return (
    <div onClick={selectImg} style={thumb} className="draggedItem" id={lastModified} data-id={lastModified} data-src={preview} data-name={name} data-size={size}>
      <div style={thumbInner}>
        <img id={lastModified}  src={preview} style={img} alt={name}/>
      </div>
    </div>
  )
}

export default EachUploadFile
