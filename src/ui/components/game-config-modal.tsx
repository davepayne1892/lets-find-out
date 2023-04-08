import { useState } from "react";
import { Link as Router } from "react-router-dom";

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

const randomLetter = () => {
  const alphabet = "abcdefghijklmnoprstuvwy";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const ConfigModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [topic, setTopic] = useState("countries");
  const [letter, setLetter] = useState("");

  const handleRandomLetter = () => {
    setLetter(randomLetter());
  };

  const handleSelectChange = (e) => setTopic(e.target.value);

  return (
    <>
      <Button
        rounded={"full"}
        size={"lg"}
        fontWeight={"bold"}
        color="white"
        px={6}
        bgGradient="linear(to-r, green.300, blue.400, pink.200)"
        _hover={{ bg: "blue.400" }}
        onClick={onOpen}
      >
        Lets find out
      </Button>

      <Modal size="2xl" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Game Options</ModalHeader>
          <ModalBody>
            <Stack spacing={3}>
              <Select
                variant="flushed"
                placeholder="Topic"
                onChange={handleSelectChange}
              >
                <option value="actors">Actors</option>
                <option value="brands">Brands</option>
                <option value="countries">Countries</option>
                <option value="footballers">Footballers</option>
                <option value="movies">Movies</option>
              </Select>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={letter}
                  value={letter && letter}
                  placeholder="First letter"
                  onChange={(e) => setLetter(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    rounded={"full"}
                    size={"sm"}
                    fontWeight={"bold"}
                    color="white"
                    px={6}
                    bgGradient="linear(to-r, green.300, blue.400, pink.200)"
                    _hover={{ bg: "blue.400" }}
                    onClick={handleRandomLetter}
                  ></Button>
                </InputRightElement>
              </InputGroup>
              <Button
                as={Router}
                rounded={"full"}
                size={"lg"}
                fontWeight={"bold"}
                color="white"
                px={6}
                bgGradient="linear(to-r, green.300, blue.400, pink.200)"
                _hover={{ bg: "blue.400" }}
                to={`/game?topic=${topic}&letter=${
                  letter.length > 0 ? letter : randomLetter()
                }`}
              >
                Lets find out
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
