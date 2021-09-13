import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import EachUploadFile from './EachUploadFile';
import { picDataFun } from '../../action/index';
import { useDispatch, useSelector } from 'react-redux';
import {checkedImg_reducer } from '../../reducers/checkedImg__reducer';
import store from '../../store';
import { userSelectedImgAction} from '../../action/index';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  maxWidth: '1500px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const dropzone = {
  minHeight: '420px',
  border: '1px dashed gray',  
  margin: 'auto'
}

export default function Previews(props) {

  const eachUploadFileElement = useRef();
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) } ));
      setFiles((prevState) =>
        [...acceptedFiles, ...prevState]
      );
    }
  });

  const selectedImgData = useSelector((state) => (state.checkedImg__reducer));
  const unSelectedImgData = useSelector((state) => (state.unCheckedImg__reducer));
  const finalImgData_to_be_assigned = useSelector((state) => state.userSelectedImg);


  useEffect(()=>{
    let imgDetailsArray__Object = [];
    if(finalImgData_to_be_assigned.data !== undefined){
      console.log('final data to be ready to assign tags : ', finalImgData_to_be_assigned.data);
      const data = finalImgData_to_be_assigned.data;
      console.log(data.length);
      data.forEach((eachImg, index) => {
        const src = eachImg.getAttribute('data-src');
        const name = eachImg.getAttribute('data-name');
        const id = eachImg.getAttribute('data-id');
        const size = eachImg.getAttribute('data-size');
        imgDetailsArray__Object[index] = { id, src, name, size: `${size / 1000} kb` };
      });
      dispatch(picDataFun(imgDetailsArray__Object));
    }
   
  }, [selectedImgData, unSelectedImgData])  


  useEffect(()=>{        
    // filtering data 
    for (let i = 0; i < unSelectedImgData.length; i++) {
      const unSelect = unSelectedImgData[i];
      for (let j = 0; j < selectedImgData.length; j++) {
        const select = selectedImgData[j];
        if(unSelect == select){
          selectedImgData.splice(j, 1)
        }
      }
    }
    dispatch(userSelectedImgAction(selectedImgData));
  }, [unSelectedImgData])

  
  useEffect(()=>{
    dispatch(userSelectedImgAction(selectedImgData));
  }, [selectedImgData])

/* ------------- IMPORTANT code down here helps to prevent memory leak -----------------*/ 
  // useEffect(() => () => {
  //   console.log('revokingUrl');
  //   // Make sure to revoke the data uris to avoid memory leaks
  //   files.forEach(file => {
  //     URL.revokeObjectURL(file.preview);
  //   });
  // }, [files]);


  useEffect(()=>{
    let imgDetailsArray__Object = [];
    const allimages = [...eachUploadFileElement.current.children];
    allimages.forEach((eachImg, index) => {
      // console.log(eachImg.className)
      const src =  eachImg.getAttribute('data-src');
      const name = eachImg.getAttribute('data-name');
      const id = eachImg.getAttribute('data-id');
      const size = eachImg.getAttribute('data-size');
      imgDetailsArray__Object[index] = { id, src, name, size: `${ size / 1000 } kb`};
    })
    
    dispatch(picDataFun(imgDetailsArray__Object));
  }, [files])
  

  return (
    <section className="uploadContainer">
      <div className='uploadContainer--dropzone' {...getRootProps({ style: dropzone })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer} ref={eachUploadFileElement}>
        {
          files.map((file)=>{
            return (
              <EachUploadFile  file={file}/>
            )
          })
        }
      </aside>
      <div className="selectedImg">
        <h1>selected img data is here  : </h1>
        {/* {selectedImgData} */}
      </div>
    </section>
  )
}
