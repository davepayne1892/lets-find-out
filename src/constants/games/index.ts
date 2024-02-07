import { game as countries } from "./countries";
import { game as elements } from "./elements";
import { game as originalPokemon } from "./original-pokemon";
import { game as waysToSayHello } from "./ways-to-say-hello";
import { game as paris2024 } from "./paris-2024";

const games = [
  countries,
  countries,
  originalPokemon,
  elements,
  waysToSayHello,
  paris2024,
  countries,
];

export const gameOfTheDay = games[new Date().getDay()];
