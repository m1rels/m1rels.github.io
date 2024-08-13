import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from "./button.module.css";
import Image from "next/image";
import Link from "next/link";

function AppButton({text, icon, onClick}) {
    return (
            <Button leftIcon={icon} size="md" colorScheme='teal' onClick={onClick}>{text}</Button>
    )
}

export default AppButton;