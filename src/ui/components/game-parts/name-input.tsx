import {
  Box,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  VStack,
  Text,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import { MultiplayerState } from "../../../constants/models";
import { Answer } from "./answers";

export const NameInput = (gameState: MultiplayerState) => {
  const [text, setText] = useState("");
  const [players, addToPlayers] = useState<string[]>([]);

  const submitOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;
    setText("");
    addToPlayers((players: string[]) => [...players, text]);
  };

  return (
    <>
      {gameState.playersCollected ? (
        <Text>Players Collected</Text>
      ) : (
        <VStack width={"full"}>
          <Box width={"full"}>
            <InputGroup size="lg" width="100%" variant="filled">
              <Input
                pr="4.5rem"
                type={text}
                value={text && text}
                placeholder="Who is playing?"
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
              {players.map((players: string) => (
                <Answer {...{ string: players }} />
              ))}
            </Grid>
          </Box>
        </VStack>
      )}
    </>
  );
};
