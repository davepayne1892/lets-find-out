import { GameHeading } from "./game-parts/heading";
import { ProgressBar } from "./game-parts/progress-bar";

import { useCountdown } from "../../utils/useCountdown";
import { InputArea } from "./game-parts/input-area";
import { game } from "../../constants/games/countries";

const letter = "b";

export const GameContent = () => {
  const {
    progress: progress,
    minutes: minutes,
    seconds: seconds,
    gameOver: gameOver,
  } = useCountdown(1);

  const guesses: string[] = [""];

  return (
    <>
      <GameHeading {...{ letter: letter, config: game }} />
      <ProgressBar {...{ progress, minutes, seconds }} />
      <InputArea
        {...{
          game: { letter: letter, config: game },
          guesses: guesses,
          gameOver: gameOver,
        }}
      />
    </>
  );
};
