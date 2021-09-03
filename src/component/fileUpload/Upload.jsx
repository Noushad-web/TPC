import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import EachUploadFile from './EachUploadFile';

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

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {      
      acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))

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

  return (
    <section className="uploadContainer">
      <div className='uploadContainer--dropzone' {...getRootProps({ style: dropzone })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {
          files.map((file)=>{
            return (
              <EachUploadFile file={file}/>
            )
          })
        }
      </aside>
    </section>
  )
}
