// EditItemModal.js
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

export default function ViewTask({ isOpen, onClose, initialValues, onSubmit }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Item</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <ModalBody>
                <FormControl isInvalid={errors.title && touched.title}>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Field as={Input} id="title" name="title" />
                </FormControl>
                <FormControl isInvalid={errors.description && touched.description} mt={4}>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Field as={Textarea} id="description" name="description" />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} mr={3}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
                  Save
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}
