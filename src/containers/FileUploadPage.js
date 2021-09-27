import React, { useState } from 'react';
import { DirectUpload } from 'activestorage';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UploadCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const user = useSelector(state => state.currentUser);
  const formData = new FormData();
  formData.append("file", file);

  const handleFileChange = (event) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
  }

  const UploadFile = (file, userData) => {
    const upload = new DirectUpload(
      file, 
      'http://localhost:3001/rails/active_storage/direct_uploads'
    );
    upload.create((err, blob) => {
      if(err) {
        console.log(err);
      }
      else {
        console.log('no error')
      }
    })
  }
  

  const handleFileUpload = () => {
    UploadFile(file, user)
  }


  return(
    <UploadCon>
      <button onClick={(e) => handleFileUpload(e)}>Upload File</button>
      <input type="file" onChange={(e) => handleFileChange(e)} />
    </UploadCon>
  )
}
export default FileUploadPage;