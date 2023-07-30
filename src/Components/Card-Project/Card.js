import "./Card.css";
import React, { useState} from "react";
import { HiOutlineHome } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

function Card(props) {
  let iconBox = [];
  props.icons.map(icon => (iconBox.push(<img src={icon} key={icon+1} alt={props.alt}/>)))
  
  const [clicklink, setClicklink] = useState(false)
  return (
      <div className="card-container">
          <img className="card-img" src={props.image} loading="lazy" alt={props.alt} style={clicklink ? {"filter":"brightness(0.2)"} : {"filter":"brightness(1)"}} onClick={(e)=>{clicklink === false ? setClicklink(true): setClicklink(false)}}/>
          <div className="link-container">
            <a className="link-item" target="_blank" rel="noreferrer" title="Web" onClick={(e)=>{setClicklink(false)}} style={clicklink ? {"display": "flex"} : {"display": "none"}} href={props.link}><HiOutlineHome/></a>
            <a className="link-item" target="_blank" rel="noreferrer" title="github" onClick={(e)=>{setClicklink(false)}} style={clicklink ? {"display": "flex"} : {"display": "none"}} href={props.github}><FaGithub/></a>
          </div>
          <div className="card-text">
            <div className="card-text-container">
              <h3 className="card-title">{props.title}</h3>
              <div className="card-icon">{iconBox}</div>
            </div>
            <div className="card-description-container">
              <p className="card-description">{props.text}</p>
            </div>
          </div>
      </div>
  );
}

export default Card;
