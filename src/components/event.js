import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import UnfilledHeartIcon from '../assets/unfilled-heart.svg';
import FilledHeartIcon from '../assets/filled-heart.png';


const AddButton = styled.button`
  background-color: orange;
  height: 40px;
  width: 100px;
  border-radius: 25px;
  margin-left: auto;
  margin-top: auto;
`
const FavButton = styled.button`
  background: ${props => props.filled 
    ? `url(${FilledHeartIcon}) no-repeat left`
    : `url(${UnfilledHeartIcon}) no-repeat left`};
  height: 32px;
  width: 32px;
  border: none;
`
const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 80%;
  padding: 15px 15px 10px 15px;
  box-shadow: 5px 10px 18px #888888;
  margin: 5px;

  &:hover {
    -moz-box-shadow: 0 0 10px #777777;
    -webkit-box-shadow: 0 0 10px #777777;
    box-shadow: 0 0 10px #777777;
  }
`
const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
`

const Event = ({ event, rerenderParentCallback }) => {
  const [active, setActive] = useState(false);
  const user = useSelector(state => state.currentUser);
  const favorites = useSelector(state => state.favorites);
  const history = useHistory();

  const matchFavorite = () => {
    if (favorites.includes(event.id)) setActive(true);
  }
  
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
    .then(e => console.log(e.favorite_ids))
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
    .then(res => console.log(res))
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
    rerenderParentCallback();
  }

  useEffect(()=> {
    matchFavorite();
  }, [matchFavorite])

  if(user) {
    return(
      <EventContainer>
        <h3>{event.name}</h3>
        <span style={{color: 'orange'}}>
          {event.date} at {event.time}
        </span>
        <span>Location: {event.location}</span>
        <span>Description: {event.description}</span>
        <span>{event.likes} Likes</span>
        <ButtonCont> 
          {active ? 
            <FavButton 
              filled 
              onClick={(e) => FavButtonClick(e)}
            ></FavButton> 
          : <FavButton onClick={(evt) => FavButtonClick(evt)}></FavButton>}
          <AddButton onClick={newRoute}>Register</AddButton>
        </ButtonCont>
      </EventContainer>
    )
  }
  else {
    return(
      <EventContainer>
        <h3>{event.name}</h3>
        <span style={{color: 'orange'}}>
          {event.date} at {event.time}
        </span>
        <span>Location: {event.location}</span>
        <span>Description: {event.description}</span>
        <span>{event.likes} Likes</span>
      </EventContainer>
    )
  }
}
export default Event;