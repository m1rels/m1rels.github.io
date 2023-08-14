'use client'

import styles from "./contact.module.css";
import Link from "next/link";
import { useLanguage } from '../../LanguageContext';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const contact = {
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

export default function Contact() {

 const { language } = useLanguage();
 
 useEffect(() => {
  AOS.init(); // Initialisiere AOS innerhalb des Effekthakens
}, []);

    return (
        <div>
        <div data-aos="fade-right" className="page">
        <h1 className={styles.contact__heading}>{language === 'en' ? "Contact" : "Kontakt"}</h1>
        <h3 className={styles.contact__text}>{language === 'en' ? contact.en.buttonText : contact.deu.buttonText}</h3>
        <h2 className={styles.contact__link}><Link href="mailto:mirelkorajac@gmail.com">mirelkorajac@gmail.com</Link></h2>
        </div>
        </div>
    )
}
