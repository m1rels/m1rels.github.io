import styles from "./button.module.css";
import Image from "next/image";
import Link from "next/link";

function Button({text, image, link, string}) {
    return (
            <Link href={link} className={styles.button}>
                <Image className={styles.icon} src={image} alt={string} />
                <p className={styles.button__text}>{text}</p>
            </Link>
    )
}

export default Button;