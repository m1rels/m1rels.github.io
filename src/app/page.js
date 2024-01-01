"use client";

import styles from "./page.module.css";
import { useLanguage } from "../LanguageContext";
import { useEffect } from "react";
import profile from "../images/me.png";
import Button from "@/components/Button";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ButtonGroup, Stack, Flex, Heading, Center } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js'

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init(); // Initialisiere AOS innerhalb des Effekthakens
  }, []);

  return (
    <Flex align="center" justify="center" direction="column" minH="80vh" data-aos="zoom-in" >
      <Stack align="center" mb={20}>
        <Image 
        className={styles.profile}
        src={profile}
        alt="Profile Picture of Mirel Korajac"
        priority={true}
        />
          <Heading as="h1" size="2xl" textAlign="center">Mirel Korajac</Heading>
          <Heading as="h5" size="xl" textAlign="center">
            {language === "en"
              ? "Passionate Programmer"
              : "Leidenschaftlicher Programmierer"}
          </Heading>
          </Stack>
          <ButtonGroup spacing={5}>
            <Link href="/contact"><Button text="Email" icon={<MdOutlineEmail size={40} />} /></Link>
            <Link href="https://github.com/m1rels"><Button text="Github" icon={<IoLogoGithub size={40} />} /></Link>
          </ButtonGroup>
      </Flex>
  );
}
