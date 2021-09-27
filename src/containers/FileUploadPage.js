import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { DirectUpload } from 'activestorage';
import { useSelector } from 'react-redux';
import { setAvatar } from '../actions/userActions';
import styled from 'styled-components';

const UploadCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 400px;
  border: 5px solid grey;
  border-top: 35px solid grey;
`
const Container = styled.div`
  line-height: 2.5;
  display: flex;
  width: 100%;
  height: 700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FileName = styled.span`
  font-size: 15px;
`
const FileInput = styled.input`
  font-size: 20px;
  width: 50%;
`
const UploadBtn = styled.button`
  font-size: 15px;
  height: 50px;
  width: 20%;
`

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [visible, setVisible] = useState(true);
  const user = useSelector(state => state.currentUser.user);
  const dispatch = useDispatch();
  const history = useHistory();
 
  const newRoute = () => { 
    let path = `/accounts`; 
    history.push({
      pathname: path,
      state: {
        
      }
    });
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
    newRoute()
  }

  const handleFileChange = (event) => {
    if(event.target.files[0]) {
      console.log(event.target.files[0])
      setFile(event.target.files[0]);
      setVisible(false);
    }
    else {
      console.log('no file added')
    }
  }

  return(
    <Container>
      <UploadCon>
        <FileName>{file ? file.name : null}</FileName>
        {file ? <UploadBtn onClick={(e) => handleFileUpload(e)}>Upload Image</UploadBtn> : null}
        {visible ? 
          <FileInput type="file" onChange={(e) => handleFileChange(e)}/> 
        : null}
      </UploadCon>
    </Container>
  )
}
export default FileUploadPage;