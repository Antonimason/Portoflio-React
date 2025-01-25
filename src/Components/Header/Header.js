import React, { useState, useEffect, useMemo } from 'react';
import './Header.css';
import Hamburger from 'hamburger-react';

function Header(props){

    const [isOpen, setOpen] = useState(false);

    //------------CONTROL DE QUERIES PARA LA HAMBURGER EN RESPONSIVE----------------
    const hamburguer = useMemo(() => (
        <Hamburger 
            className="hamburguer" 
            toggled={isOpen} 
            toggle={setOpen} 
        />
    ), [isOpen]);

    const [showHam, setShowHam] = useState(window.innerWidth < 1024 ? hamburguer : false);
    
    useEffect(() => {
        const showIcon = () => {
            setShowHam(window.innerWidth < 1024 ? hamburguer : false);
        };

        window.addEventListener('resize', showIcon);
        return () => window.removeEventListener('resize', showIcon);
    }, [hamburguer]);

    //-------CONTROL DE BG DEL HEADER CUANDO HAGA SCROLL LA PAGINA---------------------
    const [bg, setBg] = useState(" ");

    const changeBg = () => {
        let scrollPosition = parseInt(((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100));
        setBg(scrollPosition === 0 ? "background: transparent" : "background: white; margin-bottom: 5px");
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBg);
        return () => window.removeEventListener('scroll', changeBg);
    }, []);

    //-------CERRAR EL NAVBAR AL HACER CLIC EN UNA OPCIÓN---------------------
    const handleMenuClick = () => {
        setOpen(false);
    };

    return (
        <div className='header-container' style={{ bg }}>
            {showHam}
            <div className='header-logo'>Antonimason</div>

            <ul className='nav-container' style={{ left: isOpen ? '0' : '-500px' }}>
                <li className='nav-list'><a className='nav-path' href='#home' onClick={handleMenuClick} title="home">{props.home}</a></li>
                <li className='nav-list'><a className='nav-path' href='#about-container' onClick={handleMenuClick} title="about">{props.about}</a></li>
                <li className='nav-list'><a className='nav-path' href='#skill-container' onClick={handleMenuClick} title="skills">{props.skill}</a></li>
                <li className='nav-list'><a className='nav-path' href='#porta-contenedor' onClick={handleMenuClick} title="projects">{props.projects}</a></li>
                <li className='nav-list'><a className='nav-path' href='#footer' onClick={handleMenuClick} title="contact">{props.contact}</a></li>
            </ul>

            <div className="sociales-header">
              <a className='sociales-path' href="https://www.instagram.com/anto_code9/" target="_blank" rel="noreferrer" title="instagram">{props.instagram}</a>
              <a className='sociales-path' href="https://www.linkedin.com/in/antonio-giambra-castellanos-293148233/" target="_blank" rel="noreferrer" title="linkedin">{props.linkedin}</a>
              <a className='sociales-path' href="https://github.com/Antonimason" target="_blank" rel="noreferrer" title="github"> {props.github}</a>
              <a className='sociales-path' href="https://open.spotify.com/playlist/4k7WkWOUjsTeU6EAc4JWjC" target="_blank" rel="noreferrer"  title="spotify-icon">{props.spotify}</a>
            </div>
        </div>
    );
}

export default Header;
