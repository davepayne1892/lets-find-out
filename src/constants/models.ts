export type Config = {
  topic: string;
  answers: string[];
};

export type Game = {
  letter: string;
  config: Config;
};

export interface GameState {
  game: Game;
  gameOver: boolean;
  guesses: string[];
}

export interface MultiplayerState extends GameState {
  playersCollected: boolean;
  players: string[];
}

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
