'use client'

import { Link } from "@chakra-ui/next-js";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useLanguage } from '../../LanguageContext';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Box, Container, Heading, Text } from "@chakra-ui/react";

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
        <Box data-aos="fade-right">
        <Heading as="h1" size="2xl">{language === 'en' ? "Contact" : "Kontakt"}</Heading>
        <Text>{language === 'en' ? contact.en.buttonText : contact.deu.buttonText}</Text>
        <Heading as="h2" size="lg"><Link href="mailto:mirelkorajac@gmail.com" isExternal>mirelkorajac@gmail.com <ExternalLinkIcon mx="2px" /></Link></Heading>
        </Box>
        </Container>
    )
}
