import "../style.css";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

function Collapsible() {

    const [isCollapsibleExpanded, setIsCollapsibleExpanded] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);

    return (
        <div className={isCollapsibleExpanded ? "collapsible--expanded Collapsible" : "collapsible Collapsible"}>
            <div onClick={() => {
                setIsCollapsibleExpanded(!isCollapsibleExpanded);
            }}>
                <p className="Collapsible__heading">{isEnglish ? "English" : "German"}</p>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff"}} className="toggler" />
            </div>
            <div className="collapsible__content" onClick={() => {
                setIsEnglish(!isEnglish);
            }}>
                <p className="Collapsible__selection">{isEnglish ? "German" : "English"}</p>
            </div>
        </div>
    )
}

export default Collapsible;