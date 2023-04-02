import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Grid,
  GridItem,
  Heading,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Stack,
  Text,
  Progress,
  Flex,
} from "@chakra-ui/react";
import Confetti from "react-confetti";
import { useCountdown } from "../../utils/useCountdown";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function Game() {
  const [progress, minutes, seconds, gameOver] = useCountdown(1);
  const [text, setText] = useState("");
  const [guesses, addToGuesses] = useState<string[]>([]);
  const [messaging, setMessaging] = useState(
    "You submitted no answers. Awkward."
  );

  const topic = useQuery().get("topic");
  const letter = useQuery().get("letter") ?? "a";

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
    setMessaging(
      `You made ${
        guesses.length + 1
      } guesses. Click below to find out how many are correct`
    );
  };

  const handleVerifyGuesses = () => {
    const validGuesses = guesses.filter((guess: string) =>
      guess.startsWith(letter)
    );
    if (validGuesses.length === 0) {
      setMessaging(`Congrats! All of your zero guesses were valid...`);
    } else if (guesses.length === validGuesses.length) {
      setMessaging(
        `You understood the assignment. ${validGuesses.length} valid guesses.`
      );
    } else {
      setMessaging(
        `Of your ${guesses.length} guesses, ${validGuesses.length} began with ${letter}`
      );
    }
    setTimeout(2000);
    guesses.forEach((guess) => {
      // check against datset to see if correct

      // update messaging with correct or not
      setMessaging(`"${guess}" is... correct`);
      // pause before checking next guess
      setTimeout(1000);
    });
  };

  return (
    <>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      >
        <HStack spacing={3}>
          <Text as={"span"} color={"blue.400"}>
            How many
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
            {topic}
          </Text>
          <Text as={"span"} color={"blue.400"}>
            can you name that
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
            begin with {letter.toUpperCase()}?
          </Text>
        </HStack>
      </Heading>
      <Box
        borderColor="gray.200"
        borderWidth="1px"
        rounded="md"
        bg="white"
        p={[1, 8]}
        my="4"
        w="100%"
      >
        <Stack spacing={3}>
          <Flex flexDirection="row" width="100%" alignItems="center">
            <Progress
              value={progress}
              height="24px"
              borderRadius="2xl"
              sx={{
                "& > div": {
                  background:
                    "linear-gradient(90deg, rgba(104, 211, 145, 1) 0%, rgba(66, 153, 225, 1) 49%, rgba(251, 182, 206, 1) 100%)",
                },
              }}
              isAnimated
              w="95%"
              grow={1}
            />
            <Text ml="auto">{`${minutes}:${seconds}`}</Text>
          </Flex>
          <Box>
            <InputGroup size="md" variant="filled">
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
        </Stack>
        <Box>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {guesses.map((guess) => (
              <GridItem w="100%" h="10">
                {" "}
                {guess}
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Modal size="2xl" isOpen={gameOver} isCentered>
        <Confetti colors={["#68D391", "#4299E1", "#FBB6CE"]} />
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Time's up!</ModalHeader>
          <ModalBody>
            <Stack spacing={3}>
              <Text>{messaging}</Text>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"bold"}
                color="white"
                px={6}
                bgGradient="linear(to-r, green.300, blue.400, pink.200)"
                _hover={{ bg: "blue.400" }}
                onClick={handleVerifyGuesses}
              >
                Lets find out
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
