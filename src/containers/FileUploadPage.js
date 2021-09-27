import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DirectUpload } from 'activestorage';
import { useSelector } from 'react-redux';
import { setAvatar } from '../actions/userActions';
import styled from 'styled-components';

const UploadCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 400px;
  border: 5px solid grey;
  border-top: 35px solid grey;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const user = useSelector(state => state.currentUser.user);
  const dispatch = useDispatch();
 

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const uploadFile = (file) => {
    const upload = new DirectUpload(
      file, 
      'http://localhost:3001/rails/active_storage/direct_uploads'
    );
    upload.create((err, blob) => {
      if(err) {
        console.log(err);
      }
      else {
        updateUser(blob);
      }
    })
  }

  const updateUser = (blob) => {
    fetch(`http://localhost:3001/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({avatar: blob.signed_id})
    })
    .then(resp => resp.json())
    .then(data => dispatch(setAvatar(data.avatar_url)))
  }
  
  const handleFileUpload = () => {
    uploadFile(file)
  }

  return(
    <Container>
      <UploadCon>
        <button onClick={(e) => handleFileUpload(e)}>Upload File</button>
        <input type="file" onChange={(e) => handleFileChange(e)} />
      </UploadCon>
    </Container>
  )
}
export default FileUploadPage;