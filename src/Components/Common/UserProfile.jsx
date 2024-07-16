import React, { useContext } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AuthContext from "../../Services/context/AuthContext";

export default function UserProfile() {
  const { userData } = useContext(AuthContext);
  return (
    <Flex alignItems="center">
      <Image src="./Images/profile.png" borderRadius="50%" h="50px" w="50px" />
      <Box ms="2">
        <Text color="#fff" textAlign="start">{userData.name}</Text>
        <Text color="#808B9A" textAlign="start">{userData.email}</Text>
      </Box>
    </Flex>
  );
}
