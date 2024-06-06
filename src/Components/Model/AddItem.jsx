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
} from "@chakra-ui/react";
import React from "react";
import { Formik, Field, Form, FieldProps, FormikHelpers } from "formik";


export default function AddItem({ isOpen, onClose, type ,validationSchema,initialValues}) {
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
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Flex flexDir="column" h="full" w="full">
                    <Box pb="5" pt={5}>
                      {type == "task" && (
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
                           {type == "task" ? "Description" : "Note"}   
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
