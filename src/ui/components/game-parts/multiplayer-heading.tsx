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
            How many {topic} can you name?
          </Text>
        </HStack>
      </Heading>
    </>
  );
};
