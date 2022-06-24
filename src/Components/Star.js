import React from "react";

export default function Star(props) {
  let starIcon = props.on ? "star-solid.svg" : "star-regular.svg"

  return (
    <>
    <img 
      src={require(`../Images/${starIcon}`)} 
      alt="star"
      className="card-favourite"
      onClick={props.toggle} 
    />
    </>
  )
}