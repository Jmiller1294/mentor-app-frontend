import React, { useState } from 'react';
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

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleFileUpload = (event) => {
    fetch('http://localhost:3001/upload', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(file)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return(
    <UploadCon>
      <button onClick={(e) => handleFileUpload(e)}>Upload File</button>
      <input type="file" onChange={(e) => handleFileChange(e)} />
    </UploadCon>
  )
}
export default FileUploadPage;