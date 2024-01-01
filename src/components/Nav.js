"use client";

import React from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NextLink from "next/link";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from '@chakra-ui/next-js'


function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={5}
      py={2}
      position="fixed"
      bg={bg}
      top="0"
      left="0"
      right="0"
      zIndex={1}
    >
      <Box width="100%">
        <Flex align="center" fontSize={16} gap={4} justifyContent="space-between">
          <Flex gap={4} align="center" alignItems="center">
          <IconButton
            aria-label="Toggle Dark/Light Mode"
            icon={colorMode === "light" ? <FaMoon /> : <FiSun />}
            onClick={() => toggleColorMode()}
          />
          <LanguageSwitcher />
          </Flex>
          <Box display={{ base: "none", md: "block" }}>
            <Link href="/about" mr={4} as={NextLink}>
              About
            </Link>
            <Link href="/projects" as={NextLink}>
              Projects
            </Link>
          </Box>
        </Flex>
      </Box>
      <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              display={{ base: "block", md: "none" }}
            />
            <MenuList>
              <MenuItem as={NextLink} mr={4} href="/about">
                About
              </MenuItem>
              <MenuItem as={NextLink} mr={4} href="/projects">
                Projects
              </MenuItem>
            </MenuList>
          </Menu>
    </Flex>
  );
}

export default Nav;
