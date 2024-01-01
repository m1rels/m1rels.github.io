import styles from "./LanguageSwitcher.module.css";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useLanguage } from "../LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <Box>
    <Menu>
      <MenuButton as={Button} onClick={() => handleLanguageChange(language === "en" ?  "de" : "en")}>
        {language === "en" ? "🇩🇪" : "🇬🇧"}
      </MenuButton>
    </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
