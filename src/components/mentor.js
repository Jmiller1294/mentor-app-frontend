import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createBooking } from '../actions/userActions';


const ListItem = styled.li`
  display: flex;
  height: 270px;
  border: 1px solid #f8f7f2;
  padding: 25px;
  padding-bottom: 30px;
`
const AvatarImage = styled.img`
  height: 50%;
  flex-basis: 7%;
  border-radius: 50%;
  margin-right: 30px;
`
const Header = styled.h2`
  height: 10px;
  display: block;
`
const Bio = styled.p`
  display: block;
`
const InfoContainer = styled.div`
  height: 100px;
  line-height: 1.5;
`
const AddButton = styled.button`
  background-color: orange;
  border-radius: 20px;
  height: 25px;
  width: 120px;
`

const Mentor = ({ mentor }) => {
  const user = useSelector(state => state.currentUser)

  const createBooking = (mentor, userId) => {
    fetch(`http://localhost:3001/users/${userId}/bookings`, {
      method: "POST",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify(mentor)
    })
    .then(resp => resp.json())
    .then(mentor => console.log(mentor))
}
  
  const handleClick = (user) => {
    createBooking(mentor, user.id);
  }

  return (
    <ListItem key={mentor.id}>
      <AvatarImage alt="avatar" src={mentor.avatar}></AvatarImage>
      <InfoContainer>
        <Header>{mentor.name}</Header>
        <Bio>
          {mentor.title} <br></br>
          Industry: {mentor.field} <br></br>
          Email: {mentor.email} <br></br>
          City: {mentor.city} <br></br>
          Age: {mentor.age}
        </Bio>
        {user ? <AddButton onClick={() => handleClick(user)}>Book Mentor</AddButton> : null}
      </InfoContainer>
    </ListItem>
  )
}
export default Mentor;


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseList = function(head) {
    
  let curr = head;
  let prev = null;
  let suc;
  
  while(curr !== null) {
      suc = curr.next;
      curr.next = prev;
      prev = curr;
      curr = suc;
  }
  return prev;
}