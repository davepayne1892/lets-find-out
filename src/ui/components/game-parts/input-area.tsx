import {
  Box,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import { GameState } from "../../../constants/models";
import { Answer } from "./answers";
import { GameResult } from "./game-results";

export const InputArea = (gameState: GameState) => {
  const [text, setText] = useState("");
  const [guesses, addToGuesses] = useState<string[]>([]);

  const submitOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;
    setText("");
    addToGuesses((guesses: string[]) => [...guesses, text]);
  };

  return (
    <>
      {gameState.gameOver ? (
        <GameResult
          {...{
            game: gameState.game,
            gameOver: gameState.gameOver,
            guesses: guesses,
          }}
        />
      ) : (
        <VStack width={"full"}>
          <Box width={"full"}>
            <InputGroup size="lg" width="100%" variant="filled">
              <Input
                pr="4.5rem"
                type={text}
                value={text && text}
                placeholder="Enter guess"
                onChange={(e) => setText(e.target.value)}
                onKeyPress={submitOnEnter}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleSubmit}
                  type="submit"
                  variant={"ghost"}
                >
                  Submit
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
              gap={6}
              color="gray.400"
              width={"100%"}
            >
              {guesses.map((answer: string) => (
                <Answer {...{ string: answer }} />
              ))}
            </Grid>
          </Box>
        </VStack>
      )}
    </>
  );
};
