import { useState, useEffect } from "react";
import { Countdown } from "../constants/models";

export function useCountdown(mins): Countdown {
  const [secs, decrement] = useState(mins * 60);
  const [progress, increment] = useState(0);
  let [gameOver, setGameOver] = useState<boolean>(false);
  useEffect(() => {
    if (secs > 0) {
      const progressLevel = setInterval(() => {
        increment(progress + 100 / (mins * 60));
        decrement(secs - 1);
      }, 1000);
      return () => clearInterval(progressLevel);
    } else {
      setGameOver(true);
    }
  }, [progress, secs, mins, gameOver]);
  const min = secs / 60;
  const sec = secs % 60;
  const minutes = min < 10 ? "0" + min : min;
  const seconds = sec < 10 ? "0" + sec : sec;
  return {
    progress: progress as number,
    minutes: Math.floor(minutes as number),
    seconds: seconds as number,
    gameOver: gameOver as boolean,
  };
}
