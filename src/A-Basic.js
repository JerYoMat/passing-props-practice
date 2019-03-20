import React from 'react';

const Hello = (props) => {
  return (
    <span>Hello, {props.name}</span>
  )
}

const BetterLookingHello = ({ name }) => {
  return (
    <span>Hello, {name}</span>
  )
}




export { Hello, BetterLookingHello };
