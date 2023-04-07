import { GameState } from "../../../constants/models";
import Confetti from "react-confetti";
import { Grid, GridItem, ModalHeader, ModalBody, Text } from "@chakra-ui/react";

export const GameResult = (gameState: GameState) => {
  console.log(gameState);
  const validAnswers = gameState.game.config.answers
    .map((str) => str.toLowerCase())
    .filter((answer: string) => answer.startsWith(gameState.game.letter));

  const validGuesses = [
    ...new Set(
      gameState
        .guesses!.map((str) => str.toLowerCase())
        .filter((guess: string) => guess.startsWith(gameState.game.letter))
    ),
  ];

  const correctGuesses = validGuesses.filter((guess: string) =>
    validAnswers.includes(guess)
  );

  return (
    <>
      <Confetti colors={["#68D391", "#4299E1", "#FBB6CE"]} />
      <ModalHeader>Time's up!</ModalHeader>
      <ModalBody>
        <Text>
          {" "}
          {`You scored ${correctGuesses.length} / ${validAnswers.length}`}
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {correctGuesses.map((guess) => (
            <GridItem w="100%" h="10">
              {" "}
              {guess}
            </GridItem>
          ))}
        </Grid>
      </ModalBody>
    </>
  );
};
