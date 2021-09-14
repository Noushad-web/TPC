import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkedImg, uncheckedImg } from "../../action";

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const EachUploadFile = ({ file }) => {

  const { preview, name, lastModified, size } = file; //destructuring file
  const [imgObj_checked, setImgObj_checked] = useState([]);
  const [imgObj_unchecked, setImgObj_unchecked] = useState([]);

  const dispatch = useDispatch();
  const selectImg = (e)=>{
    const targeted = e.target;
    const parentElement = e.target.parentElement;

    if(targeted.tagName === 'IMG'){
      const listOfClass = parentElement.className;
      const search = listOfClass.search('clicked');
      if( search > -1){
        parentElement.classList.remove('clicked');
        setImgObj_unchecked(()=>{
          dispatch(uncheckedImg(parentElement))
        })
      } else{
        parentElement.classList.add('clicked');
        setImgObj_checked(()=>{
          dispatch(checkedImg(parentElement))
        })
      }
    }
  }
  
  return (
    <div onClick={selectImg} key={lastModified} className="draggedItem" id={lastModified} data-id={lastModified} data-src={preview} data-name={name} data-size={size}>
        <img id={lastModified}  src={preview} style={img} alt={name}/>
    </div>
  )
}

export default EachUploadFile
