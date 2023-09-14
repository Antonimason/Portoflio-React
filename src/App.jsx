import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Badge from "./Components/Badge/Badge";
import Card from "./Components/Card-Project/Card";
import Progress from "./Components/Progress-bar/Progress";
import Header from "./Components/Header/Header";
import Cardskill from "./Components/Card-Skills/Cardskill";
import Certificate from "./Components/Certificate-badge/Certificate";
import Forma from "./Components/Form/Form";

//-------------------LANGUAJES----------------------
import global_es from "./Translations/es/Global.json"
import global_en from "./Translations/en/Global.json"

//----------------IMPORT IMAGES-----------------
import Blog from "./Asset/blog.jpg";
import Watch from "./Asset/watch.jpg";
import Calc from "./Asset/calcuadora.jpeg";
import Weather from "./Asset/wheater.jpg";
import Todo from "./Asset/todolista.jpeg";
import Galery from "./Asset/galeria.jpeg";
import antonito from "./Asset/antonito.jpg";
import Calendar from "./Asset/calendar.png";
import antoi from "./Asset/foto-giambra-min.png";
import portfolio from "./Asset/portfolio.png";

//----------------IMPORT REACT ICONS-------------------
import { ImLinkedin2 } from "react-icons/im";
import { RxInstagramLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FcPuzzle, FcIdea, FcAlarmClock, FcApproval } from "react-icons/fc";
import { BiLoaderCircle, BiCheck } from "react-icons/bi"

import html5 from "./Asset/1.png"
import css3 from "./Asset/2.png"
import js from "./Asset/3.ico"
import bootstrap from "./Asset/4.png"
import jquery from "./Asset/5.png"
import reacty from "./Asset/6.ico"
import python from "./Asset/7.ico"
import sql from "./Asset/8.png"
import node from "./Asset/9.png"

function App() {
  //------------SELECTION LANGUAJES----------------------
  const [selectionlanguaje, setSelectionlanguaje] = useState("")
  const [languaje, setLanguaje] = useState(global_en)
  useEffect(()=>{selectionlanguaje==="ES" ? setLanguaje(global_es) : setLanguaje(global_en)}, [languaje, selectionlanguaje])


  //------------SELECTION BUTTON ABOUT PAGE ---------------------
  const [pageActive, setPageActive] = useState("about");
  
  const searchCourse = ()=>{
    let courses = languaje.source.About.courses
    let element = [];
    for(let course in courses){
      element.push(<Certificate key={courses[course].title}
      link={courses[course].link} 
      title={courses[course].title} 
      description={courses[course].description} 
      finished={courses[course].finished}/>)
    }
    return element
  }

  //---------SELECTION OF PROJECTS------------------------
  const [projectActive, setProjectActive] = useState("all");
  //-----------SHOWING PROJECTS SELECTED-----------------
  const [showProject, setShowProject] = useState(" ");

  //------------IT WAS CREATED FOR CONTROL DOM IN BUTTONS OF THE PORTFOLIO PAGE---------------
  const projectButton1 = useRef();
  const projectButton2 = useRef();
  const projectButton3 = useRef();
  const aboutButton = useRef();
  const certificateButton = useRef();

  useEffect(() => {

    const Projects = {
      blog:{
          made:"html",
          key:1,
          link:"https://viajerosporelmundo.netlify.app",
          github:"https://github.com/Antonimason/Blog-Viajeros",
          alt:"blog",
          image:Blog,
          title:languaje.source.Projects.blog.title,
          icons:[css3,html5],
          text:languaje.source.Projects.blog.description
      },
      calculator:{
          made:"js",
          key:2,
          link:"https://calculatorantocode9.netlify.app",
          github:"https://github.com/Antonimason/Calculadora-JS",
          alt:"Calculator",
          image:Calc,
          title:languaje.source.Projects.calculator.title,
          icons:[css3,html5,js],
          text:languaje.source.Projects.calculator.description
      },
      watch:{
        made:"js",
        key:3,
        link:"https://watchantocode9.netlify.app",
        github:"https://github.com/Antonimason/Clock-Timer-and-Stopwatch",
        alt:"Watch",
        image:Watch,
        title:languaje.source.Projects.watch.title,
        icons:[css3,html5,js],
        text:languaje.source.Projects.watch.description,
      },
      weather:{
        made:"js",
        key:4,
        link:"https://weatherantocode9.netlify.app",
        github:"https://github.com/Antonimason/Weather",
        alt:"Weather",
        image:Weather,
        title:languaje.source.Projects.wheater.title,
        icons:[css3,html5,js],
        text:languaje.source.Projects.wheater.description
      },
      todolist:{
        made:"js",
        key:5,
        link:"https://todolis-antog9.netlify.app/",
        github:"https://github.com/Antonimason/To-do-List",
        alt:"To do list",
        image:Todo,
        title:languaje.source.Projects.todojs.title,
        icons:[bootstrap,js],
        text:languaje.source.Projects.todojs.description
      },
      gallery:{
        made:"jquery",
        key:6,
        link:"https://fananime-gallery.netlify.app/",
        github:"https://github.com/Antonimason/Gallery",
        alt:"Gallery",
        image:Galery,
        icons:[bootstrap,jquery],
        title:languaje.source.Projects.gallery.title,
        text:languaje.source.Projects.gallery.description
      },
      portfolio:{
        made:"js",
        key:7,
        link:"https://antonimason.netlify.app/",
        github:"https://github.com/Antonimason/Portfolio",
        alt:"Portfolio 1.0",
        image:portfolio,
        title:languaje.source.Projects.portfolio.title,
        icons:[css3,html5,js],
        text:languaje.source.Projects.portfolio.description
      },
      todolistreact:{
        made:"react",
        key:8,
        link:"https://antonimason.github.io/React-TodoList/",
        github:"https://github.com/Antonimason/React-TodoList",
        alt:"TodoList",
        image:Calendar,
        title:languaje.source.Projects.todoreact.title,
        icons:[reacty],
        text:languaje.source.Projects.todoreact.description
      }
    }
    const styles = {
      transparent : "background-color: transparent; border:1px solid #71bef2 #31acff #1172b2 #31acff; padding: 12px 15px",
      color: "background: linear-gradient(45deg,#2ad39f,#b72ac2); border: none; border-radius: 20px; padding: 12px 15px"
    }

    
    if(pageActive === "about") {
      aboutButton.current.style = styles.color;
      certificateButton.current.style = styles.transparent;
    } else if (pageActive === "certificate") {
      aboutButton.current.style = styles.transparent;
      certificateButton.current.style = styles.color;
    }else {return};

    if (projectActive === "all") {
      //--------------CONTROL BORDER OF BUTTON 1 ---------------------------------
      projectButton1.current.style = styles.color
      projectButton2.current.style = styles.transparent
      projectButton3.current.style = styles.transparent
      let projectstorage = [];
      for (const project in Projects){
        projectstorage.push(<Card
          key={Projects[project].key} 
          link={Projects[project].link} 
          github={Projects[project].github} 
          alt={Projects[project].alt} 
          image={Projects[project].image} 
          title={Projects[project].title} 
          icons={Projects[project].icons}
          text={Projects[project].text}/>)
      }
      setShowProject(projectstorage)


      
    }else if (projectActive === "jquery"){
      projectButton2.current.style = styles.color;
      projectButton1.current.style= styles.transparent;
      projectButton3.current.style = styles.transparent;
      let projectstorage = [];
      for (const project in Projects){
        if(Projects[project].made === "jquery") {
          projectstorage.push(<Card
            key={Projects[project].key} 
            link={Projects[project].link} 
            github={Projects[project].github} 
            alt={Projects[project].alt} 
            image={Projects[project].image} 
            title={Projects[project].title} 
            icons={Projects[project].icons}
            text={Projects[project].text}/>)
        }
      }
      setShowProject(projectstorage)

    } else if(projectActive === "react"){
      //---------------------CONTROL OF BUTTON 2----------------------------------
      projectButton3.current.style = styles.color;
      projectButton1.current.style= styles.transparent;
      projectButton2.current.style = styles.transparent;
      let projectstorage = [];
      for (const project in Projects){
        if(Projects[project].made === "react") {
          projectstorage.push(<Card
            key={Projects[project].key} 
            link={Projects[project].link} 
            github={Projects[project].github} 
            alt={Projects[project].alt} 
            image={Projects[project].image} 
            title={Projects[project].title} 
            icons={Projects[project].icons}
            text={Projects[project].text}/>)
        }
      }
      setShowProject(projectstorage)

    }else {
      setShowProject(" There's not Projects to show");
    }
  },[languaje, projectActive, pageActive]);

  return (
    <>
    
      <div className="header-main">
        <Header 
        home = {languaje.source.Header.home}
        about = {languaje.source.Header.about}
        skill = {languaje.source.Header.skill}
        projects = {languaje.source.Header.project}
        contact = {languaje.source.Header.contact}
        github={<FaGithub/>} linkedin={<ImLinkedin2/>} instagram={<RxInstagramLogo/>}/>
      </div>

      <Progress/>
      
      <section id="home">
        <div id="home-container">
          <div className="home-container-img">
            <img className="home-img" src={antoi} alt="Antonio Giambra"/>
          </div>
          <div className="home-text">
            <h1 className="home-title">{languaje.source.Home.name}</h1>
            <h2 className="home-subtitle">{languaje.source.Home.profile}</h2>
            <a className="home-button" href="#about-container" title="Read more">{languaje.source.Home["read-more"]}</a>
          </div>
        </div>
        <div className="home-languaje">
            <a href='#home' className='languaje' title="Spanish" onClick={(e)=>{setSelectionlanguaje("ES")}}>ES</a> 
            <a href='#home' className='languaje' title="English" onClick={(e)=>{setSelectionlanguaje("EN")}}>EN</a>
          </div>
      </section> 

      <section id="about-container">
        <div className="about-items">
          <div className="about-img-container">
            <img className="about-img" src={antonito} loading="lazy" alt="Antonio Giambra 2"/>
          </div>
          <div className="about-left">
            <div className="button-about">
              <button ref={aboutButton} className="port-button" onClick={(e)=>{setPageActive("about")}}>{languaje.source.About.about}</button>
              <button ref={certificateButton} className="port-button" onClick={(e)=>{setPageActive("certificate")}}>{languaje.source.About.resume}</button>
            </div>
            <div className="about-text" style={pageActive==="about" ? {"display":"block"} : {"display": "none"}}>
              <h2 id="about-me" className="together title">{languaje.source.About.aboutMe}</h2>
              <p id="my-resume" className="text">{languaje.source.About.me}</p>
            </div>
            <div className="about-certificate" style={pageActive==="certificate" ? {"display":"flex"} : {"display": "none"}}>
              {searchCourse()}
            </div>
            <a href="https://www.canva.com/design/DAFoth8aIKo/bNzwm6oAoVnQGqEgqqqw1w/view?utm_content=DAFoth8aIKo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noreferrer" title="Curriculum vitae" className="cv">{languaje.source.About.download}</a>
          </div>
        </div>
      </section>

      <section id="skill-container">
        <div className="skill-items">
          <h2 className="together">{languaje.source.Skills.skills}</h2>
          <div>
            <div className="skills-card">
              <h3 className="skill-section">{languaje.source.Skills.Sskills}</h3>
              <Cardskill logo={<FcPuzzle/>} title={languaje.source.Skills.learning.title} description={languaje.source.Skills.learning.description} />
              <Cardskill logo={<FcIdea/>} title={languaje.source.Skills.problem.title} description={languaje.source.Skills.problem.description}/>
              <Cardskill logo={<FcAlarmClock/>} title={languaje.source.Skills.time.title} description={languaje.source.Skills.time.description}/>
              <Cardskill logo={<FcApproval/>} title={languaje.source.Skills.accountability.title} description={languaje.source.Skills.accountability.description}/>
            </div>
          </div>
        
          <div className="skills-badges">
            <h3 className="skill-section">{languaje.source.Skills.Hskills}</h3>
            <Badge img={html5} name="HTML" date="February 2022" />
            <Badge img={css3} name="CSS" date="March 2022" />
            <Badge img={js} name="JavaScript" date="May 2022" />
            <Badge img={bootstrap} name="Bootstrap" date="January 2023" />
            <Badge img={jquery} name="JQuery" date="January 2023" />
            <Badge img={reacty} name="React" date="February 2023" />
            <Badge img={python} name="Python" date="March 2023" />
            <Badge img={sql} name="SQL" />
            <Badge img={node} name="Node.js" />
          </div>
        </div>
      </section>

      <section id="porta-contenedor">
        <div className="porta-items">
          <h3 className="together">{languaje.source.Projects.project}</h3>
          <div className="button-container port1">
            <button ref={projectButton1} className="port-button" onClick={(e) => {setProjectActive("all");}}>{languaje.source.Projects.small}</button>
            <button ref={projectButton2} className="port-button" onClick={(e) => {setProjectActive("jquery");}}>{languaje.source.Projects.jquery}</button>
            <button ref={projectButton3} className="port-button port2" onClick={(e) => {setProjectActive("react");}}>{languaje.source.Projects.react}</button>
          </div>
          {showProject}
        </div>
      </section>

      <footer id="footer">
        <div className="footer-contenedor">
          <h3 className="together">{languaje.source.Footer.together}</h3>

          <Forma languajeActive={languaje} iconLoad ={<BiLoaderCircle/>} iconResult = {<BiCheck/>}/>
          <h4 className="together-text">{languaje.source.Footer.text}</h4>
          <div className="sociales">
            <a
              href="https://www.instagram.com/anto_code9/"
              target="_blank"
              rel="noreferrer"
              id="instagram"
              className="social-box"
              title="Instagram"
            >
              <RxInstagramLogo />
            </a>
            <a
              href="https://www.linkedin.com/in/antonio-giambra-castellanos-293148233/"
              target="_blank"
              rel="noreferrer"
              id="linkedin"
              className="social-box"
              title="Linkedin"
            >
              <ImLinkedin2 />
            </a>
            <a
              href="https://github.com/Antonimason"
              target="_blank"
              rel="noreferrer"
              id="github"
              className="social-box"
              title="Github"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
