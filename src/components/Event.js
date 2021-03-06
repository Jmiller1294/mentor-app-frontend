import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import UnfilledHeartIcon from '../assets/unfilled-heart.svg';
import FilledHeartIcon from '../assets/filled-heart.png';
import Clock from '../assets/clock.svg';
import Pin from '../assets/pin.svg';
import Calender from '../assets/calender.svg';
import breakpoint from '../commons/breakpoints';


const Header = styled.h3`
  margin-bottom: 50px;

  @media only screen and (${breakpoint.device.tablet}){
    margin: 15px 0;
  }
`
const FavButton = styled.button`
  background: ${props => props.filled 
    ? `url(${FilledHeartIcon}) no-repeat left`
    : `url(${UnfilledHeartIcon}) no-repeat left`};
  height: 32px;
  width: 32px;
  border: none;
  margin-bottom: 20px;

  @media only screen and (${breakpoint.device.tablet}){
    margin: 20px
  }
`
const EventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 80%;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 10px;
  margin: 15px;

  &:hover {
    -moz-box-shadow: 0 0 10px #777777;
    -webkit-box-shadow: 0 0 10px #777777;
    box-shadow: 0 0 10px #777777;
  }

  @media only screen and (${breakpoint.device.tablet}){
    width: 300px;
    margin: 15px 0;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
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
  height: 100%;
  padding: 10px;
`
const EventPictureCon = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media only screen and (${breakpoint.device.tablet}){
   width: 100%;
  }
`
const Item = styled.span`
  display: flex;
  line-height: 1.5;
`
const Date = styled.span`
  display: flex;
  line-height: 1.5;
  color: #FF9531;
`
const Likes = styled.span`
  display: flex;
  line-height: 1.5;
  font-weight: bold;
`
const EventImage = styled.img`
  display: flex;
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const Icon = styled.img`
  margin-top: 3px;
  margin-right: 10px; 
  height: 16px;
  width: 16px;
`


const Event = ({ event, rerenderParentCallback, value, image }) => {
  const [active, setActive] = useState(value);
  const user = useSelector(state => state.currentUser);
  const history = useHistory();

  
  const newRoute = () => { 
    let path = `event_info/${event.id}`; 
    history.push({
      pathname: path,
      state: {
        data: {event: event, image: image}
      }
    });
  }

  const addFavorite = (favorite, user) => {
    fetch('https://mentor-app-api.herokuapp.com/favorites' , {
      method: "POST",
      //credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify({...favorite, user_id: user.id })
    })
    .then(resp => resp.json())
  }

  const deleteFavorite = (eventId) => {
    fetch(`https://mentor-app-api.herokuapp.com/${eventId}`, {
      method: "DELETE",
      //credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify(user.user)
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
    fetch(`https://mentor-app-api.herokuapp.com/events/${event.id}` , {
      method: "PATCH",
      //credentials: "include",
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
      addFavorite(event, user.user); 
    }
    setTimeout(() => {
      updateLikes();
    },500)
    setTimeout(() => {
      rerenderParentCallback();
    },700)
    
  }

  useEffect(()=> {
    setActive(value);
  },[value])

  useEffect(() => {

  }, [event])

  
  const handleClick = (event) => {
    event.preventDefault();
    newRoute();
  }

  if(user) {
    return(
      <EventContainer>
        <EventPictureCon onClick={(e) => handleClick(e)}>
          <EventImage src={`https://mentor-app-api.herokuapp.com/${image}`} />
        </EventPictureCon>
        <EventInfo onClick={(e) => handleClick(e)}>
          <Header>{event.name}</Header>
          <Date><Icon src={Calender}/>{event.date} at {event.time}</Date>
          <Item><Icon src={Pin}/>Location: {event.location}</Item>
          <Likes><Icon src={Clock}/>{event.likes} People favorited</Likes>
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
          <EventImage src={`https://mentor-app-api.herokuapp.com/${image}`}/>
        </EventPictureCon>
        <EventInfo>
          <Header>{event.name}</Header>
          <Date><Icon src={Calender}/>{event.date} at {event.time}</Date>
          <Item><Icon src={Pin}/>Location: {event.location}</Item>
          <Likes><Icon src={Clock}/>{event.likes} People favorited</Likes>
        </EventInfo>
      </EventContainer>
    )
  }
}
export default Event;
