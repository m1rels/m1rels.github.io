'use client'

import React, {useState} from "react";
import styles from "./Nav.module.css";
import dollar from "../images/dollar.png";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

function Nav() {
    
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        
        <nav className={isNavExpanded ? `${styles.collapsible_expanded} ${styles.nav}`  : `${styles.collapsible} ${styles.nav}`}>
            <div className={styles.nav__part}>
                <Link href="/">
                <Image className={styles.nav__logo} src={dollar} alt=""  width={70} height={60}/>
                </Link>
                <LanguageSwitcher/>
            </div>
            <button className={styles.nav__toggler} 
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </button>
            <ul className={`${styles.list} ${styles.nav__list} ${styles.collapsible__content}`}>
                <li className={styles.nav__item}><Link href="/about">About</Link></li>
                <li className={styles.nav__item}><Link href="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;