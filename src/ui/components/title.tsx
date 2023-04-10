import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

export const Title = () => {
  return (
    <Flex>
      <Text fontSize="6xl">How many things of a thing do you know? </Text>
      <Spacer />
      <Text
        bgGradient="linear(to-r, green.300, blue.400, pink.200)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Lets find out!{" "}
      </Text>
    </Flex>
  );
};
