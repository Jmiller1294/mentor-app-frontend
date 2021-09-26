import React, { useState } from 'react';
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
    setFile(event.target.files[0])
  }

  const handleFileUpload = (event) => {
    /* console.log(file)
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: 'PATCH',
      body: formData
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) */
  }


  return(
    <UploadCon>
      <button onClick={(e) => handleFileUpload(e)}>Upload File</button>
      <input type="file" onChange={(e) => handleFileChange(e)} />
    </UploadCon>
  )
}
export default FileUploadPage;