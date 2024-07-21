import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  Text,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Alert,
  AlertIcon,
  Divider,
  AbsoluteCenter,
  Input,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  ModalCloseButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

export default function AddItem({
  isOpen,
  onClose,
  type,
  validationSchema,
  initialValues,
  handleSubmit,
}) {
  const [selectedType, setSelectedType] = useState("");

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
      bg="#191919"
    >
      <ModalOverlay />
      <ModalContent bg="#191919">
        <ModalHeader p="5" fontSize="lg" color={"#fff"} textAlign="center">
          Add your {type}
        </ModalHeader>
        <ModalCloseButton color="#fff" />
        <ModalBody>
          <Box w="full" maxW="md">
            <Formik
              initialValues={{ ...initialValues, type: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                handleSubmit({ ...values, type: selectedType });
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <Flex flexDir="column" h="full" w="full">
                    <Box pb="5" pt={5}>
                      {type === "task" && (
                        <Field name="title">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                !!form.errors.title && !!form.touched.title
                              }
                            >
                              <FormLabel htmlFor="title" color="#fff">
                                Title
                              </FormLabel>
                              <Input
                                {...field}
                                id="title"
                                placeholder="title"
                                type="text"
                                bg=""
                              />
                              <FormErrorMessage>
                                {typeof form.errors.title === "string" &&
                                  form.errors.title}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      )}
                    </Box>
                    <Box pb="2" pos="relative">
                      <Field name="description">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              !!form.errors.description &&
                              !!form.touched.description
                            }
                          >
                            <FormLabel htmlFor="description" color="#fff">
                              {type === "task" ? "Description" : "Note"}
                            </FormLabel>

                            <Textarea
                              {...field}
                              id="description"
                              placeholder="Enter your description here"
                              size="md"
                              resize="vertical" // allows resizing vertically
                              height="150px" // sets a default height, adjust as needed
                              bg=""
                            />
                            <FormErrorMessage>
                              {typeof form.errors.description === "string" &&
                                form.errors.description}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    {type === "task" && (
                      <Box pb="5"  pt={3}>
                        <FormControl>
                          <FormLabel htmlFor="type" color="#fff">
                            Type
                          </FormLabel>
                          <ButtonGroup size="sm" isAttached variant="outline">
                            <Button
                              onClick={() => {
                                setSelectedType("Personal");
                                setFieldValue("type", "Personal");
                              }}
                              isActive={selectedType === "Personal"}
                            >
                              Personal
                            </Button>
                            <Button
                              onClick={() => {
                                setSelectedType("Work");
                                setFieldValue("type", "Work");
                              }}
                              isActive={selectedType === "Work"}
                            >
                              Work
                            </Button>
                          </ButtonGroup>
                        </FormControl>
                      </Box>
                    )}
                    <Spacer />
                    <Box px={0} py={4}>
                      <Button
                        type="submit"
                        bg="#39610f"
                        isLoading={isSubmitting}
                        colorScheme="green"
                        w="full"
                      >
                        Submit
                      </Button>
                    </Box>
                  </Flex>
                </Form>
              )}
            </Formik>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
