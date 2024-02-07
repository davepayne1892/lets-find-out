import { gameOfTheDay as game } from "../../constants/games";
import {
  Box,
  Button,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Player } from "./game-parts/players";

export type PlayerType = {
  name: string;
  isActive: boolean;
  isOut: boolean;
};

const normaliseString = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const normalisedAnswers = game.answers.map((answer) => normaliseString(answer));

export const MultiplayerContent = () => {
  const [text, setText] = useState("");
  const [players, addToPlayers] = useState<PlayerType[]>([]);
  const [guesses, addToGuesses] = useState<string[]>([]);
  const [isStarted, setStarted] = useState<boolean>(false);
  const [isGameover, setGameOver] = useState<boolean>(false);
  const [currentlyActiveIndex, setActivePlayer] = useState<number>(0);
  const toast = useToast();

  const startGame = (e) => {
    if (players.length > 1) {
      e.preventDefault();
      setStarted(true);
      chooseRandomPlayer();
    }
  };

  const endGame = (e) => {
    e.preventDefault();
    setGameOver(true);
  };

  const chooseRandomPlayer = () => {
    const randomPlayerIndex = Math.floor(Math.random() * players.length);
    setActivePlayer(randomPlayerIndex);
    players[randomPlayerIndex].isActive = true;

    console.log("player selected");
  };

  const moveToNextPlayer = () => {
    players[currentlyActiveIndex].isActive = false;

    // Check if only one player remains active (all others are out)
    const availablePlayerCount = players.filter(
      (player) => !player.isOut
    ).length;
    console.log("available players", availablePlayerCount);
    if (availablePlayerCount === 1) {
      console.log("game over");
      setGameOver(true); // Call the endGame function upon only one player remaining
      return; // Early exit to prevent unnecessary operations
    }

    // Find the next non-out player index efficiently using modulo and a conditional loop
    let nextActiveIndex = (currentlyActiveIndex + 1) % players.length;
    while (players[nextActiveIndex].isOut) {
      nextActiveIndex = (nextActiveIndex + 1) % players.length;
    }

    setActivePlayer(nextActiveIndex);
    players[nextActiveIndex].isActive = true;
  };

  const submitOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;
    setText("");
    if (isStarted) {
      handleGuess(text);
    } else {
      addToPlayers((players: PlayerType[]) => [
        ...players,
        { name: text, isActive: false, isOut: false },
      ]);
    }
  };

  const guessIsCorrect = (text: string): boolean => {
    if (normalisedAnswers.includes(normaliseString(text))) {
      console.log("is correct", text);
      return true;
    }
    console.log("is incorrect", text);
    toast({
      title: "Incorrect guess",
      description: `${text} is not correct.`,
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  };

  const guessIsNew = (text: string): boolean => {
    if (guesses.includes(normaliseString(text))) {
      console.log("is not new", text);
      toast({
        title: "Already guessed",
        description: `someone has already guessed ${text}.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }
    console.log("is new", text);
    return true;
  };

  const setPlayerAsOut = () => {
    players[currentlyActiveIndex].isOut = true;
  };

  const handleGuess = (text: string) => {
    if (guessIsNew(text)) {
      if (guessIsCorrect(text)) {
        addToGuesses((guesses: string[]) => [
          ...guesses,
          normaliseString(text),
        ]);
        toast({
          title: "Correct",
          description: `Added ${text} to the list of guessed answers.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setPlayerAsOut();
      }
    } else {
      setPlayerAsOut();
    }
    moveToNextPlayer();
  };

  return (
    <VStack spacing="3">
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
      >
        <Text as={"span"} color={"blue.400"}>
          {isStarted
            ? `How many ${game.topic} can you name`
            : "Who is playing?"}
        </Text>
      </Heading>{" "}
      {!isGameover === true ? (
        <Box width={"full"}>
          <InputGroup size="lg" width="100%" variant="filled">
            <Input
              pr="4.5rem"
              type={text}
              value={text && text}
              placeholder={
                isStarted
                  ? "Make a guess..."
                  : "Enter a name and press lets go when ready..."
              }
              onChange={(e) => setText(e.target.value)}
              onKeyPress={submitOnEnter}
            />
            <InputRightElement width="6rem">
              {isStarted ? (
                <Button variant={"ghost"} onClick={endGame}>
                  Give up
                </Button>
              ) : (
                <Button variant={"ghost"} onClick={startGame}>
                  Lets go
                </Button>
              )}
            </InputRightElement>
          </InputGroup>
        </Box>
      ) : (
        <VStack>
          <Heading
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
            Game Over
          </Heading>
          <Text>
            Correct answers ({guesses.length}/{game.answers.length}):
          </Text>
          {guesses.map((guess: string) => (
            <Text>{guess}</Text>
          ))}
        </VStack>
      )}
      <Box>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
          gap={6}
          color="gray.400"
          width={"100%"}
        >
          {players.map((players: PlayerType) => (
            <Player
              {...{
                string: players.name,
                isActive: players.isActive,
                isOut: players.isOut,
              }}
            />
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};
