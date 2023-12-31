'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { ColorModeScript } from '@chakra-ui/react';

export function Providers({ children }) {
  return <ChakraProvider theme={theme}><ColorModeScript initialColorMode={theme.config.initialColorMode} />{children}</ChakraProvider>
}