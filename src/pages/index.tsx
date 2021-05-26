import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
}
