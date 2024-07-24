import React from 'react';
import { Box, VStack, Text, Link, Flex } from "@chakra-ui/react";
import { NavToday, NavNote, NavPersonal, NavWork } from "../Icons";
import UserProfile from "./UserProfile";
import { useLocation } from 'react-router-dom';

const Sidebar = ({ onClose }) => {
  let pathname = useLocation().pathname;
  const siderBarItem = [
    {
      tasks: [
        {
          label: "All Tasks",
          icon: (
            <NavToday
              mr="8px"
              color={pathname === "/dashboard" ? "#fff" : "#2C365C"}
            />
          ),
          href: "/dashboard",
        },
        {
          label: "Sticky Notes",
          icon: (
            <NavNote
              h="18px"
              w="18px"
              mr="8px"
              color={pathname === "/notes" ? "#fff" : "#2C365C"}
            />
          ),
          href: "/notes",
        },
      ],
      lists: [
        {
          label: "Personal",
          icon: (
            <NavPersonal
              h="18px"
              w="18px"
              mr="8px"
              color={pathname === "/personal" ? "#fff" : "#2C365C"}
            />
          ),
          href: "/personal",
        },
        {
          label: "Work",
          icon: (
            <NavWork
              h="18px"
              w="18px"
              mr="8px"
              color={pathname === "/work" ? "#fff" : "#2C365C"}
            />
          ),
          href: "/work",
        },
      ],
    },
  ];

  return (
    <Box
      pos={{ base: "fixed", md: "fixed" }}
      left="0"
      top="0"
      h="100vh"
      w="250px"
      bg="#191919"
      p="4"
      textAlign="center"
      pt={0}
    >
      <Flex justifyContent="center" my="10">
        <img src="Images/logo1.png" alt="Logo" />
      </Flex>
      <Box borderBottom="1px solid #2B2B2B" pb="6">
        <UserProfile />
      </Box>
      <VStack as="nav" mt={10}>
        <Text color="#fff" textAlign="start" w="100%">Tasks</Text>
        {siderBarItem[0].tasks.map((item, i) => {
          return (
            <Link
              href={item.href}
              bg={pathname === item.href ? "#292929" : "#191919"}
              color={pathname === item.href ? "#B8B8B8" : "#E5E5E5"}
              w="100%"
              h="50px"
              borderRadius="8px"
              p="4"
              key={i}
              onClick={onClose}
            >
              <Flex>
                {item.icon}
                <Text> {item.label}</Text>
              </Flex>
            </Link>
          );
        })}
        <Text color="#fff" textAlign="start" w="100%" mt={10}>Lists</Text>
        {siderBarItem[0].lists.map((item, i) => {
          return (
            <Link
              href={item.href}
              bg={pathname === item.href ? "#292929" : "#191919"}
              color={pathname === item.href ? "#B8B8B8" : "#E5E5E5"}
              w="100%"
              h="50px"
              borderRadius="8px"
              p="4"
              key={i}
              onClick={onClose}
            >
              <Flex>
                {item.icon}
                <Text> {item.label}</Text>
              </Flex>
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Sidebar;
