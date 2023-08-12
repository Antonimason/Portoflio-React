import './Form.css'
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import password from "./Password.json"

function Form (props){

  let languaje = props.languajeActive;
  const styles = {
    result: "background: linear-gradient(90deg,#2ad39f,#0170f0);width: 100%;font-size: 1.2em;",
    load : "width:20%; background-color: grey; font-size:1.2em",
    checked : "width:20%; background-color: rgb(40, 165, 40);font-size:1.2em"
  }

  const form = useRef();
  const setButton = useRef();

  const [animationButton, setAnimationButton ] = useState(languaje.source.Footer.send)
  const [animationContent, setAnimationContent ] = useState(styles.result);
  useEffect(()=>{
    setButton.current.style = animationContent
  },[animationContent]);

  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [message, setMessage ] = useState("");

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(password.service, password.template, form.current, password.id)
      .then((result) => {
        console.log(result);
        setAnimationButton(props.iconResult);
        setAnimationContent(styles.checked)
            setTimeout(()=>{
              setAnimationButton(languaje.source.Footer.send);
              setAnimationContent(styles.result)
            },2000)
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
            <form ref={form} id="survey-form" onSubmit={(e)=>{
                sendEmail(e); 
                setName("");
                setEmail("");
                setMessage("");
                setAnimationButton(props.iconLoad);
                setAnimationContent(styles.load)
                }}>
                <label id="name-label">{languaje.source.Footer.name}</label>
                <input 
                    id="name" 
                    name="user_name"
                    type="text"
                    className="active"
                    autoComplete="off"
                    max="30"
                    value={name} 
                    required={true}
                    onChange={(e)=>setName(e.target.value)}
                    >

                </input>

                <label id="email-label">{languaje.source.Footer.email}</label>
                <input 
                    id="email"
                    className="active"
                    name="user_email"
                    autoComplete="off"
                    type="email"
                    value={email}
                    required={true}
                    onChange={(e)=>setEmail(e.target.value)}
                    >

                </input>

                <label id="message-label">{languaje.source.Footer.message}</label>
                <textarea 
                    name="message" 
                    className="active" 
                    id="message" 
                    max="99"  
                    value={message} 
                    required={true}
                    onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>
                <button id="button-send" type="submit" ref={setButton}>{animationButton}</button>
            </form>
    )
}

export default Form;