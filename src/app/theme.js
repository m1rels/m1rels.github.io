import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
  }

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-nunito)',
      body: 'var(--font-nunito)',
    },
    config
});
