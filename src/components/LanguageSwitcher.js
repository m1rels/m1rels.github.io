import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useLanguage } from "../LanguageContext";
import { ChevronDownIcon } from "@chakra-ui/icons";

const LanguageSwitcher = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return (
    <Select
      value={language}
      onChange={(e) => handleLanguageChange(e.target.value)}
      userSelect="none"
    >
      <option value="en">🇬🇧</option>
      <option value="de">🇩🇪</option>
      {language === "en" ? "🇩🇪" : "🇬🇧"}
    </Select>
  );
};

export default LanguageSwitcher;
