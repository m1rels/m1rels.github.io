'use client'

import styles from './page.module.css'
import { useLanguage } from '../LanguageContext';
import { useEffect } from "react";
import Button from "@/components/Button";
import profile from "../images/me.jpg"
import github from "../images/github.png";
import contact from "../images/email.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from 'next/image';

export default function Home() {

  const { language } = useLanguage();

  useEffect(() => {
    AOS.init(); // Initialisiere AOS innerhalb des Effekthakens
  }, []);

  return (
    <div className={styles.app}>
      <div data-aos="zoom-in" className={styles.home}>
      <div className={styles.header}>
        <Image className={styles.profile} src={profile} alt="Profile of Mirel Korajac"/>
        <h1>Mirel Korajac</h1>
        <h2>{language === 'en' ? "Passionate Programmer" : "Leidenschaftlicher Programmierer"}</h2>
      </div>
      <div className={styles.button_container}>
        <Button link="https://github.com/m1rels" text="Github" image={github} string="Github Icon"/>
        <Button link="contact" text={language === 'en' ? "Contact" : "Kontakt"} image={contact} string="Email Icon"/>
      </div>
    </div>
    </div>
  );
}
