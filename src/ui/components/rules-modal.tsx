import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

export const RulesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        rounded={"full"}
        size={"lg"}
        fontWeight={"bold"}
        px={6}
        _hover={{ bg: "blue.400" }}
        rightIcon={<QuestionIcon />}
        onClick={onOpen}
      >
        How to play
      </Button>

      <Modal size="4xl" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let's find out the rules!</ModalHeader>
          <ModalBody>
            {" "}
            In the single player version, you have one minute to guess as many
            items in a topic that start with a specific letter. In this mode
            there is no penalty for wrong guesses, so keep trying!
            <br />
            <br />
            In the multiplayer variant the timer is gone, but you're playing
            against your friends. Enter the players, and then take it in turns
            to guess where a wrong guess knocks you out of the game. Last player
            standing wins.
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
