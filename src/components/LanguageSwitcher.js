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
    <Box mt={2}>
    <Menu>
      <MenuButton as={Button}>
        {language === "en" ? "ENG 🇬🇧" : "DE 🇩🇪"}
      </MenuButton>
      <MenuList>
        {language === "en" ? (
          <MenuItem value="de" onClick={() => handleLanguageChange("de")}>
            DE 🇩🇪
          </MenuItem>
        ) : (
          <MenuItem value="en" onClick={() => handleLanguageChange("en")}>
            ENG 🇬🇧
          </MenuItem>
        )}
      </MenuList>
    </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
