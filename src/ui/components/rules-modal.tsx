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
          <ModalHeader>Rules</ModalHeader>
          <ModalBody>
            {" "}
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
