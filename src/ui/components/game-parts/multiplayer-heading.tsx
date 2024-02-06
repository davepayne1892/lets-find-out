import { Heading, HStack, Text } from "@chakra-ui/react";

export const MultiplayerGameHeading = ({ topic: topic }) => {
  return (
    <>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
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
            {topic}
          </Text>
          <Text as={"span"} color={"blue.400"}>
            can you name?
          </Text>
        </HStack>
      </Heading>
    </>
  );
};
