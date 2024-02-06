import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { GameContent } from "./game-content";
import { MultiplayerContent } from "./multiplayer";

const randomLetter = () => {
  const alphabet = "abcdefghijklmnoprstuvwy";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const MultiplayerGameModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        rounded={"full"}
        size={"lg"}
        fontWeight={"bold"}
        color="white"
        px={6}
        bgGradient="linear(to-r, green.300, blue.400, pink.200)"
        _hover={{ bg: "pink.400" }}
        onClick={onOpen}
      >
        Play Multiplayer!
      </Button>
      <Modal size="6xl" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <MultiplayerContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
