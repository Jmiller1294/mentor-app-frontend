import React, { useState } from 'react';
import styled from 'styled-components';

const FormCon = styled.div`
  text-align: left;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  width: 50%;
  background-color: #f8f7f2;
  margin: 30px 0;
  border-radius: 25px;
`
const FormInput = styled.input`
  height: 8%;
  width: 90%;
  margin: 10px 0;
`
const InputLabel = styled.label`
  display: flex;
  flex-direction: flex-start;
  font-weight: bold;
  margin-right: auto;
  margin-left: 35px;
`
const Message = styled.textarea`
  height: 25%;
  width: 90%;
  margin-top: 10px;
`
const SubmitButton = styled.button`
  text-align: center;
  font-size: 16px;
  background-color: #FF9531;
  height: 40px;
  width: 40%;
  margin: 20px 0;
  border-radius: 10px;
`

const ContactForm = () => {

  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value })
  }
  
  const handleClick = (event) => {
    event.preventDefault();
    sendContactInfo();
    setContactInfo({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
  }

  const sendContactInfo = () => {
    fetch('http://localhost:3001/contact_infos', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactInfo)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  
  
  return(
    <FormCon id="contact-form">
      <Form>
        <h2>Contact Us</h2>
        <InputLabel htmlFor="name">Full Name</InputLabel>
        <FormInput 
          type="text" 
          name="name" 
          value={contactInfo.name} 
          onChange={(e) => handleInputChange(e)} 
        />
        <InputLabel htmlFor="phone">Phone Number</InputLabel>
        <FormInput 
          type="text" 
          name="phone" 
          value={contactInfo.phone} 
          onChange={(e) => handleInputChange(e)}
        />
        <InputLabel htmlFor="email">Email</InputLabel>
        <FormInput 
          type="text" 
          name="email" 
          value={contactInfo.email} 
          onChange={(e) => handleInputChange(e)}
        />
        <InputLabel htmlFor="message">Message</InputLabel>
        <Message 
          type="textarea" 
          name="message" 
          value={contactInfo.message} 
          onChange={(e) => handleInputChange(e)}
        />
        <SubmitButton onClick={(e) => handleClick(e)}>Submit</SubmitButton>
      </Form>
    </FormCon>
  )
}
export default ContactForm;