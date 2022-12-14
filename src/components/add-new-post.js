import {
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useState } from "react";
import db from "../lib/firebase";

const AddNewPost = () => {
  //useDisclosure hook to open/close (make visible) component
  // Default state of isOpen is false, meaning component is not visible
  // onOpen & onClose as callback function to set isOpen to true or false
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [isSaving, setSaving] = useState(false);

  const handleSubmit = async () => {
    setSaving(true);

    const date = new Date();

    await db.collection("posts").add({
      title,
      upVotesCount: 0,
      downVotesCount: 0,
      createdAt: date.toUTCString(),
      updatedAt: date.toUTCString(),
    });

    onClose();
    setTitle("");
    setSaving(false);
  };

  return (
    // <> Fragment -> empty element that allows a function to return multiple things instead of one
    <>
      <Button onClick={onOpen} colorScheme="red">
        Share heroic act
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Share heroic act</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="post-title">
                <FormLabel>You did something selfless today? Then share your heroic deed here!</FormLabel>
                <Textarea
                  type="post-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <HStack spacing={4}>
                <Button onClick={onClose}>Close</Button>
                <Button
                  onClick={handleSubmit}
                  colorScheme="blue"
                  disabled={!title.trim()}
                  isLoading={isSaving}
                >
                  Save
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default AddNewPost;
