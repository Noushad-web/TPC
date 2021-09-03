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

  const selectImg = (e)=>{
    
  }
  localStorage.clear();
  const { preview, name, lastModified} = file;
  // const detailsOfImage = { imgName : file.name, imgSrc : file.preview };
  // localStorage.setItem('fileDetails', JSON.stringify(detailsOfImage));

  return (
    <div style={thumb} id={lastModified} className="draggedItem">
      <div style={thumbInner}>
        <img onClick={selectImg}
          src={preview}
          style={img}
          alt={name}
        />
      </div>
    </div>
  )
}

export default EachUploadFile
