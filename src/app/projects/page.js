'use client'

import styles from "./projects.module.css";
import { useLanguage } from '../../LanguageContext';
import AOS from 'aos';
import Link from 'next/link';
import { useEffect } from "react";
import 'aos/dist/aos.css'; 

const projects = [
    {
        id: 1,
        en: {
        heading: "From Web to App-development",
        description:"I now have a fundamental basis of React Native and built my first mobile app called DoneWithIt. For this I used Expo-CLI.",
        },

        de: {
            heading: "Von Web zu App-Development",
            description:"Jetzt habe ich ein fundamentales Basisverstehen von React Native und habe meine erste mobile App namens DoneWithIt gebaut. Dabei habe ich Expo-CLI verwendet.",
            },

        url: "https://github.com/m1rels/done-with-it-app",
        url_2: "https://github.com/m1rels/done-with-it-backend"

    },
    {
        id: 2,
        en: {
            heading: "Into backend-development",
            description:"When I got quite familiar with the frontend, I took a look at the backend and learned the concept of Node.js. So this is how I came to make Node.js applications with React.",
        },
        de: {
            heading: "Ab in die Backend-Development",
            description:"Als ich mich mit dem Frontend vertraut  gemacht habe, bin ich ins Backend eingestiegen und habe das Konzept von Node.js gelernt. So bin ich dazu gekommen, Node.js Applikationen mit React zu machen.",
        },
        url: "https://github.com/m1rels/formel-1",
        url_2 : "https://github.com/m1rels/formel-1-backend"
    },
    {
        id: 3,
        en: {
            heading: "Starting over with React",
            description:"Now I had a good knowledge about the basic and advanced techniques in HTML, CSS and JavaScript. So I decided to focus on JS-Frameworks like React. As my first react application I built the functionality of a shopping cart for adding and deleting products from your shopping cart.",
        },
        de: {
            heading: "Start mit React",
            description:"Jetzt habe ich ein gutes Verständins über die grundlegenden und fortgeschrittenen Konzepte in HTML, CSS und JavaScript. Also habe ich mich dazu entschlossen, meinen Fokus auf JS-Frameworks wie React zu richten. Als meine erste React-Applikation habe ich die Funktionalität eines Warenkobs, bei dem man sowohl Produkte hinzufügen als auch entfernen kann, nachgebaut.",
        },
        url: "https://github.com/m1rels/shopping-cart",
    },
    {   
        id: 4,
        en: {
            heading: "Complex browser games",
            description:"Later on I went on with writing browser games but with more complexity and logic. If you go to my GitHub profile, you will see a few projects like Memory, Connect Four, Space Invaders etc.",
        },
        de: {
            heading: "Komplexe Browser-Spiele",
            description:"Später habe ich angefangen, etwas komplexere Browser Spiele zu bauen, die etwas mehr Logik enthalteten. Wenn Sie auf GitHub den Code besichitgen wollen, finden Sie eingie Projekte wie Memory, Vier gewinnt, Space Invaders etc.",
        },
        url: "https://github.com/m1rels",
    },
    {
        id: 5,
        en: {
            heading: "js-experiments",
            description:"After I have learned the basics of HTML, CSS and JavaScript, I started writing my very first programs. Mostly it were simple games running in a browser such as rock-paper-scissors or a quiz game.",
        },
        de: {
            heading: "Js-Experimente",
            description:"Nachdem ich die Grundlagem von HTML, CSS und JavaScript gelernt hab, Habe ich angefangen, meine ersten richtigen Programme zu schreiben. Meistens waren es simple Spiele, die im Browser gelaufen sind wie zum Beispiel Schrer-Stein-Papier oder ein Quiz-Spiel.",
        },
        url: "https://github.com/m1rels/js-experiments",
    },
    {
        id: 6,
        en: {
            heading: "Websites with HTML und CSS",
            description:"After I have learned the basics of HTML, CSS and JavaScript, I started writing my first professional, responsive websites.",
        },
        de: {
            heading: "Webseiten mit HTML und CSS",
            description:"Als ich mir die Grundlagen von HTML, CSS und JavaScript angeeignet habe, habe ich angefangen, meine erste professionelle, responsive Webseite zu bauen.",
        },
        url: "https://github.com/m1rels/moshify",
    },
   

]

export default function Blog() {

    const { language } = useLanguage();

    useEffect(() => {
        AOS.init(); // Initialisiere AOS innerhalb des Effekthakens
      }, []);

    return (
        <div className='page'>
            <div data-aos="fade-up">
            <h1>My Projects</h1>
            <div className={styles.project__section}>
            {projects.map((project) => 
                 <ul className={styles.project__item} key={project.id}>
                    <li>
                     <h2>{language === 'en' ? project.en.heading : project.de.heading}</h2>
                     <p>{language === 'en' ? project.en.description : project.de.description}</p>
                     <p className={styles.project__text}> {language === "en" ? "Take a look at the corresponding code:" : "Werfen Sie einen Blick auf den entsprechenden Code:"}</p>
                    <ul>
                        <li className={styles.project__text}><Link href={project.url}>{project.url}</Link></li>
                        {(() => {if (project.url_2) {
                            return <li className={styles.project__text}><Link href={project.url_2}>{project.url_2}</Link></li>
                            } else {
                            return null;
                            }
                        })()}
                     </ul>
                    </li>
                </ul>
            )}
            </div>
        </div>
        </div>
    )
}
