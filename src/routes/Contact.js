import "../style.css";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Contact() {

    const translations = {
        en: {
         header: "Contact",
         buttonText: "If you want to contact me, just send an email ;)",
         text: "Here's my email address:"
       },
        deu: {
         header: 'Kontakt',
         buttonText: "Wenn Sie mich kontaktieren möchten, senden Sie mir einfach eine Mail:)",
         text: "Hier ist meine Email Adresse"
       },
     }

    return (
        <div>
        <div data-aos="fade-right">
        <h1 className="Contact__heading">Contact</h1>
        <h3 className="Contact__text">If you want to contact me, just send an email ;)</h3>
        <h2 className="Contact__link"><Link to="mailto:mirelkorajac@gmail.com">mirelkorajac@gmail.com</Link></h2>
        </div>
        </div>
    )
}

AOS.init();