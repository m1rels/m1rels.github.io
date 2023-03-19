import "../style.css";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Contact() {
    return (
        <div>
        <Nav />
        <div data-aos="fade-right">>
        <h1 className="Contact__heading">Contact</h1>
        <h3 className="Contact__text">If you want to contact me, just send an email ;)</h3>
        <h2 className="Contact__link"><Link to="mailto:mirelkorajac@gmail.com">mirelkorajac@gmail.com</Link></h2>
        </div>
        </div>
    )
}

AOS.init();