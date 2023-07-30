import React, { useState } from 'react'
import './Header.css'
import Hamburger from 'hamburger-react'

function Header(props){

    const [isOpen, setOpen] = useState(false);

    //------------CONTROL DE QUERIES PARA LA HAMBURGUER EN RESPONSIVE----------------
    const hamburguer = <Hamburger className="hamburguer" label="Show menu" name="menu" onToggle={toggled => { toggled ? setOpen(0) : setOpen(-500) }}/>

    const [ showHam, setShowHam ] = useState(window.innerWidth < 1024 ? hamburguer : false)
    
    let mediaX = window.matchMedia('(max-width:1023px)')
    mediaX.addEventListener('change', showIcon)
    function showIcon (){
        mediaX.matches === true ? setShowHam(hamburguer) : setShowHam(false)
    }

    //-------CONTROL DE BG DEL HEADER CUANDO HAGA SCROLL LA PAGINA---------------------
    const [bg, setBg] = useState(" ");
    const changeBg = () =>{
        let hola = parseInt(((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100))
        if (hola === 0) {
            setBg("background: transparent")
        }else { setBg("background: white; margin-bottom: 5px;")}
        
    }
    window.addEventListener('change',changeBg)
    window.onload = showIcon
    return (
        <div className='header-container' style={{bg}}>
            {showHam}
            <div className='header-logo'>Antonimason</div>

            <ul className='nav-container' style={{left: isOpen +'px'}}>
                <li className='nav-list'><a className='nav-path' href='#home' rel="noopener noreferrer" onClick={(e)=>{console.log(hamburguer.isFalse)}} title="home">{props.home}</a></li>
                <li className='nav-list'><a className='nav-path' href='#about-container' rel="noopener noreferrer" title="about">{props.about}</a></li>
                <li className='nav-list'><a className='nav-path' href='#skill-container' rel="noopener noreferrer" title="skills">{props.skill}</a></li>
                <li className='nav-list'><a className='nav-path' href='#porta-contenedor' rel="noopener noreferrer" title="projects">{props.projects}</a></li>
                <li className='nav-list'><a className='nav-path' href='#footer' rel="noopener noreferrer" title="contact">{props.contact}</a></li>
            </ul>

            <div className="sociales-header">
              <a className='sociales-path' href="https://www.instagram.com/anto_code9/" target="_blank" rel="noreferrer" title="instagram">{props.instagram}</a>
              <a className='sociales-path' href="https://www.linkedin.com/in/antonio-giambra-castellanos-293148233/" target="_blank" rel="noreferrer" title="linkedin">{props.linkedin}</a>
              <a className='sociales-path' href="https://github.com/Antonimason" target="_blank" rel="noreferrer" title="github"> {props.github}</a>
            </div>

        </div>
    )
}

export default Header;