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
            You have one minute to name as many things which match the provided
            criteria as you can. type your guesses into the box and either click
            submit or enter to submit your guess. When the time is up your
            answers will be checked, and you'll be given a score showing how
            many correct answers you've provided (and how many you could have
            gotten.). Good luck!
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
