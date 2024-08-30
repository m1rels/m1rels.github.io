"use client";

import styles from "./page.module.css";
import { useLanguage } from "../LanguageContext";
import profile from "../images/me.png";
import ButtonComp from "@/components/Button";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Stack,
  Flex,
  Heading,
  Center,
  Text,
  Card,
  CardBody,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  const { language } = useLanguage();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      minH="80vh"
    >
      <Card p={5} borderRadius={20}>
        <CardBody>
          <Stack align="center" mb={10}>
            <Image
              className={styles.profile}
              src={profile}
              alt="Profile Picture of Mirel Korajac"
              priority={true}
            />
            <Heading as="h1" size="xl" textAlign="center" mt={5} mb={0}>
              {language === "en" ? "Hi, I'm Mirel!" : "Hi, Ich bin Mirel!"}
            </Heading>
          </Stack>
          <Center>
            <Text>
              {language === "en"
                ? "Learn more about me"
                : "Erfahre mehr über mich"}
              <Button variant="link" colorScheme="teal" onClick={onOpen}>
                {language === "en" ? "here" : "hier"}
              </Button>
              !
            </Text>
          </Center>
          <Center>
            <ButtonGroup spacing={5}>
              <Link href="mailto:mirelkorajac@gmail.com" isExternal>
                <ButtonComp text="Email" icon={<MdOutlineEmail size={30} />} />
              </Link>
              <Link href="https://github.com/m1rels">
                <ButtonComp text="Github" icon={<IoLogoGithub size={30} />} />
              </Link>
            </ButtonGroup>
          </Center>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello World 👾!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {language === "en"
                ? "My name is Mirel Korjac and I'm 18 years old. As a proficient programmer with a strong foundation in HTML, CSS, and JavaScript, I bring a deep understanding of web development fundamentals. I have hands-on experience with React, which I’ve used to build dynamic and responsive web applications. Additionally, my expertise extends to React Native, where I’ve successfully developed several cross-platform mobile applications. My skill set allows me to create efficient, user-friendly interfaces that enhance the overall user experience. Whether it’s crafting a web page from scratch or building complex mobile apps, I’m dedicated to delivering high-quality, maintainable code."
                : "Mein Name ist Mirel Korajac und ich bin 18 Jahre alt. Als erfahrener Programmierer mit einer soliden Grundlage in HTML, CSS und JavaScript bringe ich ein umfassendes Verständnis der Webentwicklung mit. Ich habe umfangreiche Praxis mit React, das ich genutzt habe, um dynamische und reaktionsschnelle Webanwendungen zu entwickeln. Zudem habe ich mich auf React Native spezialisiert und erfolgreich mehrere plattformübergreifende mobile Apps realisiert. Dank meines vielseitigen Skillsets kann ich effiziente und benutzerfreundliche Interfaces gestalten, die das Nutzererlebnis deutlich verbessern. Ob beim Erstellen einer Webseite von Grund auf oder beim Entwickeln komplexer mobiler Anwendungen – ich lege großen Wert auf hochwertigen und gut wartbaren Code."}
            </Text>
            <Text>
              {language === "en" ? (
                <>
                  If you&apos;re interested in working together, feel free to send me
                  an <Link href="mailto:mirelkorajac@gmail.com"><Button variant="link" colorScheme="teal" onClick={(e) => e.stopPropagation()}>email</Button></Link>. You can also explore my projects on my{" "}
                  <Link href="https://github.com/m1rels">
                    <Button variant="link" colorScheme="teal">
                    GitHub profile
                    </Button>
                  </Link>
                  .
                </>
              ) : (
                <>
                  Wenn Sie an einer Zusammenarbeit interessiert sind, können Sie
                  mir gerne eine <Link href="mailto:mirelkorajac@gmail.com"><Button variant="link" colorScheme="teal" onClick={(e) => e.stopPropagation()}>E-Mail</Button></Link> senden. Werfen Sie auch einen Blick auf
                  meine Projekte auf meinem{" "}
                  <Link href="https://github.com/m1rels">
                    <Button variant="link" colorScheme="teal">
                    GitHub-Profil
                    </Button>
                  </Link>
                  .
                </>
              )}
            </Text>
          </ModalBody>

          <ModalFooter>
            <ButtonComp text={language === "en" ? "Got It!" : "Alles klar!"} onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
