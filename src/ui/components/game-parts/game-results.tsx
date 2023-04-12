import { GameState } from "../../../constants/models";
import Confetti from "react-confetti";

import { Text, Box, Stack, Heading, HStack, Grid } from "@chakra-ui/react";
import { Answer } from "./answers";

export const GameResult = (gameState: GameState) => {
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
      <Confetti colors={["#68D391", "#4299E1", "#FBB6CE"]} recycle={false} />
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
      >
        <HStack spacing={3}>
          <Text as={"span"} color={"blue.400"}>
            Times up!
          </Text>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bgGradient: "linear(to-r, green.300, blue.400, pink.200)",
              zIndex: -1,
            }}
          >
            {" "}
            {`You scored ${correctGuesses.length} / ${validAnswers.length}`}
          </Text>
        </HStack>
      </Heading>

      <Box>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={6}
          color="gray.400"
          width={"100%"}
        >
          {correctGuesses.map((answer: string) => (
            <Answer {...{ string: answer }} />
          ))}
        </Grid>
      </Box>
    </>
  );
};
