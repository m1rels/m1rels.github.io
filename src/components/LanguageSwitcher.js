import "../style.css"
import React from 'react';
import { useLanguage } from '../LanguageContext';


const LanguageSwitcher = () => {

    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (event) => {
      const selectedLanguage = event.target.value;
      setLanguage(selectedLanguage);
    };
  

  return (
    <div className="custom-select">
      <select onChange={handleLanguageChange}>
        <option value="en" className="name">ENG &#127468;&#127463;</option>
        <option value="de">DE &#127465;&#127466;</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
