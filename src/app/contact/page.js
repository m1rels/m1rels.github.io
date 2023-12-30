'use client'

import styles from "./contact.module.css";
import { Link } from '@chakra-ui/next-js'
import { useLanguage } from '../../LanguageContext';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

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
        <Container maxW="container.xl">
        <Box data-aos="fade-right" className="page">
        <Heading as="h1" size="2xl" className={styles.contact__heading}>{language === 'en' ? "Contact" : "Kontakt"}</Heading>
        <Text className={styles.contact__text}>{language === 'en' ? contact.en.buttonText : contact.deu.buttonText}</Text>
        <Heading as="h2" size="xl" className={styles.contact__link}><Link href="mailto:mirelkorajac@gmail.com">mirelkorajac@gmail.com</Link></Heading>
        </Box>
        </Container>
    )
}
