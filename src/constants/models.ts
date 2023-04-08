export type Config = {
  topic: string;
  answers: string[];
};

export type Game = {
  letter: string;
  config: Config;
};

export type GameState = {
  game: Game;
  gameOver: boolean;
  guesses: string[];
};

export type GameClock = {
  progress: number;
  minutes: number;
  seconds: number;
};

export type Countdown = {
  progress: number;
  minutes: number;
  seconds: number;
  gameOver: boolean;
};
