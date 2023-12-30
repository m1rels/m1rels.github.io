import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from "./button.module.css";
import Image from "next/image";
import Link from "next/link";

function AppButton({text, icon}) {
    return (
            <Button leftIcon={icon} size="lg" colorScheme='teal'>{text}</Button>
    )
}

export default AppButton;