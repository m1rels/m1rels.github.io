'use client'

import Image from "next/image";
import atom from "../../images/atom.png"
import node from "../../images/node-js.png";
import ux from "../../images/ux.png";
import { Box, Container,SimpleGrid, Heading, Stack, Text } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
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
        title: "Frontend Web Development",
        image: ux,
        en: {
            description: "As a Frontend Web Developer, I possess comprehensive knowledge in key technologies such as HTML, CSS, and JavaScript. With an eye for design and user experience, I craft engaging, functional, and user-friendly web applications. The ability to seamlessly navigate between various frontend technologies empowers me to develop creative solutions and ensure that my projects perform optimally on every screen and in every browser.",
        },
        de: {
            description: "Als Frontend Web Developer verfüge ich über umfassende Kenntnisse in den Schlüsseltechnologien HTML, CSS und JavaScript. Mit einem Auge für Design und Benutzererfahrung erstelle ich ansprechende, funktionale und benutzerfreundliche Webanwendungen. Die Fähigkeit, nahtlos zwischen den verschiedenen Frontend-Technologien zu navigieren, ermöglicht es mir, kreative Lösungen zu entwickeln und sicherzustellen, dass meine Projekte auf jedem Bildschirm und in jedem Browser optimal funktionieren.",
        }
    },
    {
        id: 2,
        title: "React Mastery: Web & Mobile Development",
        image: atom,
        en: {
            description: "Possessing extensive expertise in React, I have not only crafted web applications but also ventured into mobile app development. My skills in React empower me to design intricate user interfaces and build responsive applications for both web and mobile platforms. Leveraging my experience in delivering projects, I ensure that the developed applications are not only functional but also at the forefront of technological excellence.",
        },
        de: {
            description: "Mit umfassender Expertise in React habe ich nicht nur Webanwendungen, sondern auch mobile Apps entwickelt. Meine Fähigkeiten in React ermöglichen es mir, komplexe Benutzeroberflächen zu gestalten und reaktionsfähige Anwendungen sowohl für das Web als auch für mobile Plattformen zu schaffen. Durch meine Erfahrung in der Umsetzung von Projekten kann ich sicherstellen, dass die entwickelten Anwendungen nicht nur funktional, sondern auch auf höchstem technischen Niveau sind.",
        }
        
    },
    {
        id: 3,
        title: "Serverside Developments",
        image: node,
        en: {
            description: "Bringing experience in Server Side Development, I have successfully executed backend projects. I have created databases using Node.js and Express.js, built robust servers to store data, and implemented APIs for efficient information retrieval. My focus is on developing scalable and high-performance server-side solutions that meet the demands of modern applications.",
        },
        de: {
            description: "Mit Erfahrung im Bereich Server Side Development habe ich bereits erfolgreich Backend-Projekte umgesetzt. Ich habe Datenbanken unter Verwendung von Node.js und Express.js erstellt, robuste Server aufgebaut, um Daten zu speichern, und APIs implementiert, um Informationen effizient abzurufen. Mein Fokus liegt auf der Entwicklung skalierbarer und performanter serverseitiger Lösungen, die den Anforderungen moderner Anwendungen gerecht werden.",
        }
    }
]

export default function About() {

    const { language } = useLanguage();

    return(
        <Container maxW="container.xl">
            <Box data-aos="fade-up" mt={0} pb={88}>
            <Box>
                <Heading as="h1" size="2xl" mt={0}>Hello, world! 👋,</Heading>
                <Text>{language === 'en' ? about.en.subheading : about.de.subheading}</Text>
                <Heading as="h2">{language === 'en' ? "About Me" : "Über Mich"}</Heading>
                <Text>{language === 'en' ? about.en.description : about.de.description}</Text>
            </Box>
            <Box>
                <Heading as="h2" size="xl" >{language === 'en' ? "My Skills" : "Meine Fähigkeiten"}</Heading>
                <SimpleGrid minChildWidth={[350, 500, 500, 700, 350, 350]} spacing='40px' columns={1} >
                    {skills.map((card) => 
                        <Stack key={card.id}  >
                            <Stack align="center">
                                <Heading as="h2" size="lg" textAlign="center">{card.title}</Heading>
                                <Box my="30px">
                                    <Image src={card.image} alt=""  />
                                </Box>
                            </Stack>
                            <Stack align="center" justifyContent="center">
                                <Text >{language === 'en' ? card.en.description : card.de.description}</ Text>
                            </Stack>
                        </Stack>
                            )
                    }
                </SimpleGrid>
            </Box>
        </Box>
        </ Container>
    )
}