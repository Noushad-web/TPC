import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import EachUploadFile from './EachUploadFile';
import { picDataFun } from '../../action';
import { useDispatch } from 'react-redux';

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
      const src =  eachImg.getAttribute('data-src');
      const name = eachImg.getAttribute('data-name');      
      const id = eachImg.getAttribute('data-id');
      const size = eachImg.getAttribute('data-size');     
      console.log('render');
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
    </section>
  )
}
