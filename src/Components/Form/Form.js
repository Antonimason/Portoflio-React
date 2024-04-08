// Importing CSS file for styling
import './Form.css'

// Importing necessary modules from React library
import React, { useEffect, useRef, useState } from 'react';
// Importing emailjs library for sending emails
import emailjs from '@emailjs/browser';
// Importing password from JSON file for email service configuration
import password from "./Password.json"

// Form component definition
function Form (props){

  // Props passed to the component
  let languaje = props.languajeActive;

  // Styles for different states of the form
  const styles = {
    result: "background: linear-gradient(90deg,#2ad39f,#0170f0);width: 100%;font-size: 0.93em;",
    load : "width:20%; background-color: grey; font-size:0.93em",
    checked : "width:20%; background-color: rgb(40, 165, 40);font-size:0.93em"
  }

  // References for form and button elements
  const form = useRef();
  const setButton = useRef();

  // State variables for animations and form fields
  const [animationButton, setAnimationButton ] = useState(languaje.source.Footer.send)
  const [animationContent, setAnimationContent ] = useState(styles.result);

  // Effect to update button style when animation content changes
  useEffect(()=>{
    setButton.current.style = animationContent
  },[animationContent]);

  // State variables for form fields
  const [name, setName ] = useState("");
  const [email, setEmail ] = useState("");
  const [message, setMessage ] = useState("");

  // Function to handle form submission and send email
  const sendEmail = (e) => {
    e.preventDefault()
    // Sending form data via emailjs
    emailjs.sendForm(password.service, password.template, form.current, password.id)
      .then((result) => {
        console.log(result);
        // Changing button and content styles for successful submission
        setAnimationButton(props.iconResult);
        setAnimationContent(styles.checked)
            setTimeout(()=>{
              // Resetting button and content styles after delay
              setAnimationButton(languaje.source.Footer.send);
              setAnimationContent(styles.result)
            },2000)
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
            // Form component JSX
            <form ref={form} id="survey-form" onSubmit={(e)=>{
                sendEmail(e); 
                setName("");
                setEmail("");
                setMessage("");
                setAnimationButton(props.iconLoad);
                setAnimationContent(styles.load)
                }}>
                {/* Form input fields */}
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
                {/* Submit button */}
                <button id="button-send" type="submit" ref={setButton}>{animationButton}</button>
            </form>
    )
}

// Exporting Form component
export default Form;
