import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function UserProfile() {
  return (
    <Flex alignItems="center">
      <Image src="./Images/profile.png" borderRadius="50%" h="50px" w="50px" />
      <Box ms="2">
        <Text color="#fff">Mohamad Azaruddin</Text>
        <Text color="#808B9A" textAlign="start">azar@gmail.com</Text>
      </Box>
    </Flex>
  );
}
