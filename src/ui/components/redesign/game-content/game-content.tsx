import { Text, VStack, useBreakpointValue } from "@chakra-ui/react";

import { ProgressBar } from "./progress-bar";
import { InputArea } from "./input-area";

import { useCountdown } from "../../../../utils/useCountdown";
import { game } from "../../../../constants/games/countries";

const alphabet = "abcdefghijklmnoprstuvwy";
const letter = alphabet[Math.floor(Math.random() * alphabet.length)];

export const GameContent = () => {
  const {
    progress: progress,
    minutes: minutes,
    seconds: seconds,
    gameOver: gameOver,
  } = useCountdown(1);

  const guesses: string[] = [""];

  return (
    <VStack spacing="3">
      <Text
        color={"white"}
        variant="navbarItem"
        textTransform="uppercase"
        fontWeight="400"
        letterSpacing="3px"
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      >
        How many {game.topic} can you name that begin with '{letter}'?
      </Text>
      <ProgressBar {...{ progress, minutes, seconds }} />
      <InputArea
        {...{
          game: { letter: letter, config: game },
          guesses: guesses,
          gameOver: gameOver,
        }}
      />
    </VStack>
  );
};
