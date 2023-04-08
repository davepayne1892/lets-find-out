import { Heading, HStack, Text } from "@chakra-ui/react";
import { Game } from "../../../constants/models";

export const GameHeading = (config: Game) => {
  return (
    <>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      >
        <HStack spacing={3}>
          <Text as={"span"} color={"blue.400"}>
            How many
          </Text>
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
            {config.config.topic}
          </Text>
          <Text as={"span"} color={"blue.400"}>
            can you name that
          </Text>
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
            begin with {config.letter.toUpperCase()}?
          </Text>
        </HStack>
      </Heading>
    </>
  );
};
