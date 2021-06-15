// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { ColorMode } from "@chakra-ui/react";

// 2. Add your color mode config
export interface ChakraConfig {
  initialColorMode: ColorMode;
  useSystemColorMode: boolean;
}

const config: ChakraConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// 3. extend the theme
const theme = extendTheme({ 
  colors: {
    purple: {
      '100': '#8C3E62',
      '200': '#813658',
      '300': '#752F4E',
      '400': '#6A2744',
      '500': '#5F1F3A',
      '600': '#531730',
      '700': '#481026',
      '800': '#3C081C',
      '900': '#310012'
    }
  },
  config,
  fonts: {
    heading: 'Ubuntu',
    body: 'Ubuntu',
  },
 });

export default theme;
