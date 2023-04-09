import { ChakraProvider } from "@chakra-ui/react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { GameModal } from "./ui/components/game-modal";
import { RulesModal } from "./ui/components/rules-modal";

export type GameInfo = {
  letter: string;
  gameId: number;
};

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} color={"blue.400"}>
                  How many things can you name in a thing,
                </Text>
                <br />
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bgGradient: "linear(to-r, green.300, blue.400, pink.200)",
                    zIndex: -1,
                  }}
                >
                  Lets find out!
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                Test your ability to remember how many countries begin with an
                O, or how many animals begin with an M, or how many movies begin
                with a G. The possibilities are... 26.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <GameModal />
                <RulesModal />
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://nestflix.fun/img/jd-salinger-presents-hollywoo-stars-and-celebrities-1280w.jpg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </ChakraProvider>
    </>
  );
};
