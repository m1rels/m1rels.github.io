import "../style.css";
import Button from "../components/Button";
import profile from "../images/me.jpg";
import github from "../images/github.png";
import contact from "../images/email.png";
import Nav from "../components/Nav";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


export default function Home() {

  const translations = {
     en: {
      header: 'Passionate Programmer',
      buttonText: "Contact"
    },
     deu: {
      header: 'Leidenschaftlicher Programmierer',
      buttonText: "Kontakt"
    },
  }

  const [isEnglish, setIsEnglish] = useState(true);

  function LanguageSwitcher() {

    const [isCollapsibleExpanded, setIsCollapsibleExpanded] = useState(false);

    return (
      <div className={isCollapsibleExpanded ? "collapsible--expanded Collapsible" : "collapsible Collapsible"}>
            <div onClick={() => {
                setIsCollapsibleExpanded(!isCollapsibleExpanded);
            }}>
                <p className="Collapsible__heading">{isEnglish ? "English" : "German"}</p>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff"}} className="toggler" />
            </div>
            <div className="collapsible__content" onClick={() => {
                setIsEnglish(!isEnglish)
            }}>
                <p className="Collapsible__selection">{isEnglish ? "German" : "English"}</p>
            </div>
        </div>
    )
  }

  return (
    <div>
      <div data-aos="zoom-in" className="App__section">
      <div className='Header'>
        <img className="Profile" src={profile} alt="Profile of Mirel Korajac"/>
        <h1>Mirel Korajac</h1>
        <h2>{isEnglish ? translations.en.header : translations.deu.header}</h2>
      </div>
      <div className="Button_Container">
        <Button link="https://github.com/m1rels" text="Github" image={github} string="Github Icon"/>
        <Button link="contact" text={isEnglish ? translations.en.buttonText : translations.deu.buttonText} image={contact} string="Email Icon"/>
      </div>
      <LanguageSwitcher />
    </div>
    </div>
  );
}

AOS.init();


