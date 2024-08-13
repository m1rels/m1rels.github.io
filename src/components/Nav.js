"use client";

import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  CircularProgress,
} from "@chakra-ui/react";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={5}
      py={2}
      position="fixed"
      top="0"
      left="0"
      right="0"
    >
      <Box width="100%">
        <Flex
          align="center"
          fontSize={16}
          gap={4}
          justifyContent="space-between"
        >
          <Flex gap={4} align="center" alignItems="center">
            <IconButton
              aria-label="Toggle Dark/Light Mode"
              icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
              onClick={() => toggleColorMode()}
              variant='ghost'
            />
            <LanguageSwitcher />
          </Flex>
        </Flex>
      </Box>
    </Flex>
    </>
  );
}

export default Nav;
