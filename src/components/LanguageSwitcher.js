import styles from "./LanguageSwitcher.module.css";
import { useLanguage } from '../LanguageContext';

const LanguageSwitcher = () => {

    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (event) => {
      const selectedLanguage = event.target.value;
      setLanguage(selectedLanguage);
    };
  

  return (
    <div className={styles.custom_select}>
      <select onChange={handleLanguageChange}>
        <option value="en" className={styles.name}>ENG &#127468;&#127463;</option>
        <option value="de">DE &#127465;&#127466;</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;