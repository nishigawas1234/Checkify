import React from "react";
import {
  Text,
  VStack,
  Box,
  Flex,
  Button,
  Spacer,
  Input,
  HStack,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Image,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const initialValues = {
  username: "",
  password: "",
};

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <VStack m="auto" h="100%" justifyContent="center" bg="#0f0f0f">
      <VStack bg="#191919" p={6} borderRadius="16px" w="30%">
        <Image src="./Images/logo.png" h="100px" w="100px" />
        <Text color="#fff" fontSize="3xl" fontWeight="medium" mt="4">
          Welcome!
        </Text>
        <HStack mt="2" justifyContent="center">
          <Text color="gray.400" fontSize="lg" fontWeight="normal">
           Already have an account?
          </Text>
          <Link color="#52930f" fontSize="lg" fontWeight="normal" href="/login">
            Login
          </Link>
        </HStack>
        <Box w="full" maxW="md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              navigate("/login");
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Flex flexDir="column" h="full" w="full">
                  <Box pb="5" pt={5}>
                    <Field name="username">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.username && !!form.touched.username
                          }
                        >
                          <FormLabel htmlFor="username" color="#fff">
                            Email
                          </FormLabel>
                          <Input
                            {...field}
                            id="username"
                            placeholder="abc@gmail.com"
                            type="email"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.username === "string" &&
                              form.errors.username}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box pb="2" pos="relative">
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.password && !!form.touched.password
                          }
                        >
                          <FormLabel htmlFor="password" color="#fff">
                            Password
                          </FormLabel>
                          <Input
                            {...field}
                            id="password"
                            placeholder="****"
                            type="password"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.password === "string" &&
                              form.errors.password}
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
                      colorScheme="primary"
                      w="full"
                    >
                      Sign in
                    </Button>
                  </Box>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </VStack>
    </VStack>
  );
}
