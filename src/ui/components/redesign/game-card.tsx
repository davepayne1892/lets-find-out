import { Flex } from "@chakra-ui/react";
import { Game as GameCardProps } from "../../../constants/models";
import { GameContent } from "./game-content/game-content";

export const GameCard = (gameCard: GameCardProps) => (
  <Flex
    w={"80%"}
    h={"75vh"}
    borderWidth="1px"
    borderColor="grayBorder"
    borderStyle="solid"
    borderRadius="15px"
    direction="column"
    justify="flex-start"
    alignItems="center"
    gap="1rem"
    textAlign="center"
    mx="auto"
    pt="3rem"
    _hover={{ bg: "secondaryBgHover" }}
    transition="0.3s"
    backdropFilter="blur(24px)"
    pb={{ base: "2rem", lg: "0" }}
    px={{ base: "2rem", lg: "2rem" }}
    marginLeft={{ base: "none", lg: "15%" }}
    zIndex="0"
  >
    <Flex justify="center" alignItems="flex-start" px="2rem" mb="1rem">
      <GameContent />
    </Flex>
  </Flex>
);
