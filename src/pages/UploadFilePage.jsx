import React from 'react'
import UploadFile from '../component/fileUpload/Upload';
import TagsWrapper from '../component/TagSideBar/TagsWrapper';
const UploadFilePage = () => {
  return (
    <div className='d-flex'>
      <UploadFile />
      <TagsWrapper/>
    </div>
  )
}

export default UploadFilePage
