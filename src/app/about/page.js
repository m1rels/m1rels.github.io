'use client'

import Image from "next/image";
import html from "../../images/html-5.png";
import css from "../../images/css-3.png";
import javascript from "../../images/js.png";
import styles from "./about.module.css";
import { useLanguage } from '../../LanguageContext';

const about =  {
        en: {
            subheading: "I'm Mirel Korajac, a dedicated and ambitious 17-year-old programmer who is deeply immersed in the art of coding and software development.",
            description: "Allow me to introduce myself. My name is Mirel Korajac, and I reside in Germany. I have a strong passion for programming, and my particular fascination lies in crafting websites, apps, and other specialized applications from scratch. Beyond programming, I find immense joy in playing soccer ⚽ – it's a sport I love both on and off the field. I also avidly follow soccer matches, staying updated on the latest in the football world. When I'm not engrossed in coding or kicking a ball around, you can often find me hanging out with my friends 🎉.",
        },
        de: {
            subheading: "Ich bin Mirel Korajac, bin 17 Jahre alt und habe es zu meiner Leidenschaft gemacht, zu coden und bin begeistert von jeder Art von  Software.",
            description: "Erlaubt mir, mich vorzustellen. Ich bin Mirel Korajac und lebe in Deutschland. Die Welt des Programmierens fasziniert mich zutiefst, und insbesondere das Erschaffen von Websites, Apps und anderen spezialisierten Anwendungen begeistert mich. Neben dem Programmieren liebe ich es, Fußball zu spielen ⚽ – eine Sportart, die ich sowohl auf dem Spielfeld als auch abseits davon sehr schätze. Ich verfolge Fußballspiele mit großer Begeisterung und halte mich stets über die neuesten Entwicklungen in der Fußballwelt auf dem Laufenden. Wenn ich nicht gerade im Code vertieft bin oder einen Ball trete, trifft man mich oft dabei an, wie ich Zeit mit meinen Freunden verbringe 🎉.",
        }
    }
    

const skills = [
    {
        id: 1,
        title: "HTML",
        image: html,
        en: {
            description: "HTML is one of my strongest skills, and I take great pleasure in creating well-structured and semantic markup. I am familiar with all the core HTML tags and attributes, and understand how to use them effectively to create clear and accessible content. Whether it's designing a layout from scratch or working with a pre-existing template, I am able to implement HTML code that is both clean and efficient. Additionally, I keep up-to-date with the latest developments in HTML, ensuring that my knowledge is always current and relevant.",
        },
        de: {
            description: "HTML ist eine meiner stärksten Fähigkeiten und es bereitet mir große Freude, gut strukturiertes und semantisches Markup zu erstellen. Ich bin mit allen grundlegenden HTML-Tags und Attributen vertraut und verstehe, wie man sie effektiv einsetzt, um klare und zugängliche Inhalte zu erstellen. Ob es darum geht, ein Layout von Grund auf zu gestalten oder mit einer vorhandenen Vorlage zu arbeiten, ich bin in der Lage, HTML-Code zu implementieren, der sowohl sauber als auch effizient ist. Zusätzlich halte ich mich auf dem Laufenden über die neuesten Entwicklungen in HTML, um sicherzustellen, dass mein Wissen stets aktuell und relevant ist.",
        }
    },
    {
        id: 2,
        title: "CSS",
        image: css,
        en: {
            description: "I am quite proficient in CSS and enjoy designing visually appealing and responsive user interfaces. With my strong understanding of CSS properties and selectors, I am able to create custom styles and layouts that elevate the overall aesthetic of any website or application. Whether it's implementing animations, transitions, or complex grid systems, I take great pride in my ability to bring a designer's vision to life through CSS.",
        },
        de: {
            description: "Ich bin ziemlich versiert in CSS und genieße es, optisch ansprechende und reaktionsfähige Benutzeroberflächen zu entwerfen. Mit meinem starken Verständnis von CSS-Eigenschaften und Selektoren kann ich benutzerdefinierte Stile und Layouts erstellen, die die Gesamtästhetik jeder Website oder Anwendung verbessern. Ob es darum geht, Animationen, Übergänge oder komplexe Raster-Systeme zu implementieren, ich bin sehr stolz auf meine Fähigkeit, die Vision eines Designers durch CSS zum Leben zu erwecken.",
        }
        
    },
    {
        id: 3,
        title: "JavaScript",
        image: javascript,
        en: {
            description: "I have a solid understanding of JavaScript and enjoy working with its dynamic and versatile features. Whether it's creating interactive elements on a website, implementing complex logic, or manipulating the DOM, I am well-versed in a variety of JavaScript frameworks and libraries. I also have experience with front-end frameworks like React and Vue, which allow me to build scalable and efficient web applications. With my strong problem-solving skills and attention to detail, I am able to write clean and optimized JavaScript code that enhances the functionality and user experience of any web project.",
        },
        de: {
            description: "Ich verstehe JavaScript solide und arbeite gerne mit seinen dynamischen und vielseitigen Funktionen. Ob es darum geht, interaktive Elemente auf einer Website zu erstellen, komplexe Logik zu implementieren oder den DOM zu manipulieren, ich bin gut vertraut mit verschiedenen JavaScript-Frameworks und Bibliotheken. Ich habe auch Erfahrung mit Front-End-Frameworks wie React und Vue, die es mir ermöglichen, skalierbare und effiziente Webanwendungen zu erstellen. Mit meinen starken Problemlösungsfähigkeiten und meiner Liebe zum Detail bin ich in der Lage, sauberen und optimierten JavaScript-Code zu schreiben, der die Funktionalität und Benutzererfahrung jedes Webprojekts verbessert.",
        }
    }
]

export default function About() {

    const { language } = useLanguage();

    return(
        <div className="page">
            <div data-aos="fade-up">
            <div className={styles.about__section}>
                <h1>Hello, world! 👋,</h1>
                <p>{language === 'en' ? about.en.subheading : about.de.subheading}</p>
                <h2>{language === 'en' ? "About Me" : "Über Mich"}</h2>
                <p>{language === 'en' ? about.en.description : about.de.description}</p>
            </div>
            <div className={styles.skills__section}>
                <h1 className={styles.skills__heading}>{language === 'en' ? "My skills" : "Meine Fähigkeiten"}</h1>
                <div className={styles.skills__container}>
                    {skills.map((card) => 
                        <div className={styles.card} key={card.id}>
                            <div className={styles.card__header}>
                                <h2>{card.title}</h2>
                                <Image className={styles.card__image} src={card.image} alt="" />
                            </div>
                            <div className={styles.card__content}>
                                <p>{language === 'en' ? card.en.description : card.de.description}</p>
                            </div>
                        </div>
                            )
                    }
                </div>
            </div>
        </div>
        </div>
    )
}