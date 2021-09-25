import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import UnfilledHeartIcon from '../assets/unfilled-heart.svg';
import FilledHeartIcon from '../assets/filled-heart.png';


const AddButton = styled.button`
  background-color: orange;
  height: 40px;
  width: 100px;
`
const Header = styled.h3`

`
const FavButton = styled.button`
  background: ${props => props.filled 
    ? `url(${FilledHeartIcon}) no-repeat left`
    : `url(${UnfilledHeartIcon}) no-repeat left`};
  height: 32px;
  width: 32px;
  border: none;
  margin-bottom: 20px;
`
const EventContainer = styled.div`
  display: flex;
  height: 220px;
  width: 100%;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 10px;
  margin: 5px;

  &:hover {
    -moz-box-shadow: 0 0 10px #777777;
    -webkit-box-shadow: 0 0 10px #777777;
    box-shadow: 0 0 10px #777777;
  }
`
const ButtonCont = styled.div`
  display: flex;
  align-items: flex-end;
`
const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
  padding: 10px;
`
const EventPictureCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: red;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const Item = styled.span`
  display: flex;
  line-height: 1.5;
`
const Date = styled.span`
  display: flex;
  line-height: 1.5;
  color: orange;
`
const Likes = styled.span`
  display: flex;
  line-height: 1.5;
  font-weight: bold;
`


const Event = ({ event, rerenderParentCallback,value }) => {
  const [active, setActive] = useState(value);
  const user = useSelector(state => state.currentUser);
  const history = useHistory();

  
  const newRoute = () => { 
    let path = `register`; 
    history.push({
      pathname: path,
      state: {
        data: event
      }
    });
  }

  const addFavorite = (favorite, user) => {
    fetch('http://localhost:3001/favorites' , {
      method: "POST",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify({...favorite, user_id: user.id })
    })
    .then(resp => resp.json())
  }

  const deleteFavorite = (eventId) => {
    fetch(`http://localhost:3001/favorites/${eventId}`, {
      method: "DELETE",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
  }

  const updateLikes = () => {
    let likeCount;
    if(active) {
      likeCount = event.likes - 1;
    }
    else {
      likeCount = event.likes + 1;
    }
    fetch(`http://localhost:3001/events/${event.id}` , {
      method: "PATCH",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify({ likes: likeCount })
    })
    .then(resp => resp.json())
    .catch(err => console.log(err))
  }

  const FavButtonClick = (evt) => {
    evt.preventDefault();
    setActive(!active);
    if(active) {
      console.log('active', event.id);
      deleteFavorite(event.id); 
    }
    else {
      console.log('inactive');
      addFavorite(event, user); 
    }
    setTimeout(() => {
      updateLikes();
    },500)
    setTimeout(() => {
      rerenderParentCallback();
    }, 700);
  }

  useEffect(()=> {
    setActive(value);
  },[value])


  if(user) {
    return(
      <EventContainer>
         <EventPictureCon>

        </EventPictureCon>
        <EventInfo>
          <Header>{event.name}</Header>
          <Date>{event.date} at {event.time}</Date>
          <Item>Location: {event.location}</Item>
          <Item>Description: {event.description}</Item>
          <Likes>{event.likes} Likes</Likes>
        </EventInfo>
        <ButtonCont> 
          {active ? 
            <FavButton 
              filled 
              onClick={(e) => FavButtonClick(e)}
            ></FavButton> 
          : <FavButton onClick={(evt) => FavButtonClick(evt)}></FavButton>}
        </ButtonCont>
      </EventContainer>
    )
  }
  else {
    return(
      <EventContainer>
        <EventPictureCon>

        </EventPictureCon>
        <EventInfo>
          <Header>{event.name}</Header>
          <Date>{event.date} at {event.time}</Date>
          <Item>Location: {event.location}</Item>
          <Item>Description: {event.description}</Item>
          <Likes>{event.likes} Likes</Likes>
        </EventInfo>
      </EventContainer>
    )
  }
}
export default Event;