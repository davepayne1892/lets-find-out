import { GameHeading } from "./game-parts/heading";
import { ProgressBar } from "./game-parts/progress-bar";

import { useCountdown } from "../../utils/useCountdown";
import { InputArea } from "./game-parts/input-area";
import { game } from "../../constants/games/countries";
import { VStack } from "@chakra-ui/react";

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
      <GameHeading {...{ letter: letter, config: game }} />
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
