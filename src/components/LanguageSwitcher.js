import React from "react";
import {
  Button,
} from "@chakra-ui/react";
import { useLanguage } from "../LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <Button onClick={() => handleLanguageChange(language === "en" ?  "de" : "en")}>
        {language === "en" ? "🇩🇪" : "🇬🇧"}
    </Button>
  );
};

export default LanguageSwitcher;
