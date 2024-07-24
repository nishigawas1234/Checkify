import React, { useContext } from "react";
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
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "../Api/axios";
import AuthContext from '../Services/context/AuthContext';

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

export default function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const submitLogin = (values) => {
      login(values.username, values.password);
    };

    return (
      <VStack m="auto" h="100%" justifyContent="center" bg="#0f0f0f">
        <VStack
          bg="#191919"
          p={6}
          borderRadius="16px"
          w={{ base: "90%", sm: "80%", md: "60%", lg: "40%", xl: "30%" }}
        >
          <Image src="./Images/logo.png" h="100px" w="100px" />
          <Text color="#fff" fontSize="3xl" fontWeight="medium" mt="4">
            Welcome Back!
          </Text>
          <HStack mt="2" justifyContent="center">
            <Text color="gray.400" fontSize="lg" fontWeight="normal">
              Don’t have an account?
            </Text>
            <Link color="#52930f" fontSize="lg" fontWeight="normal" href="/sign-in">
              Sign up
            </Link>
          </HStack>
          <Box w="full" maxW="md">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                submitLogin(values);
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
                            isInvalid={!!form.errors.username && !!form.touched.username}
                          >
                            <FormLabel htmlFor="username" color="#fff">
                              Email
                            </FormLabel>
                            <Input
                              {...field}
                              id="username"
                              placeholder="abc@gmail.com"
                              type="email"
                              background=""
                            />
                            <FormErrorMessage>
                              {typeof form.errors.username === "string" && form.errors.username}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box pb="2" pos="relative">
                      <Field name="password">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={!!form.errors.password && !!form.touched.password}
                          >
                            <FormLabel htmlFor="password" color="#fff">
                              Password
                            </FormLabel>
                            <Input
                              {...field}
                              id="password"
                              placeholder="****"
                              type="password"
                              background=""
                            />
                            <FormErrorMessage>
                              {typeof form.errors.password === "string" && form.errors.password}
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
                        Login
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
