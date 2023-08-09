import "../style.css";
import React, {useState} from "react";
import dollar from "../images/dollar.png";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

function Nav() {
    
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        
        <nav className={isNavExpanded ? "collapsible--expanded nav" : "collapsible nav"}>
            <div className="nav__part">
                <Link to="/"><img className="nav__logo" src={dollar} /></Link>
                <LanguageSwitcher/>
            </div>
            <button className="nav__toggler" 
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </button>
            <ul className="list nav__list collapsible__content">
                <li className="nav__item"><Link to="/about">About</Link></li>
                <li className="nav__item"><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;