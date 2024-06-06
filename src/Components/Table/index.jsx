import React from "react";
import {
  Box,
  VStack,
  Text,
  Grid,
  Flex,
  GridItem,
  Checkbox,
} from "@chakra-ui/react";
import { Delete, Edit } from "../Icons";

export default function Table() {
  return (
    <Box>
      <Grid templateColumns="repeat(8, 1fr)" gap={6} color="#C9C9C9" p={2}>
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={2}>Title</GridItem>
        <GridItem colSpan={4}>Description</GridItem>
        <GridItem colSpan={1}></GridItem>
      </Grid>
      <Grid
        templateColumns="repeat(8, 1fr)"
        gap={6}
        color="#C9C9C9"
        bg="#191919"
        mb={2}
        p={2}
      >
        <GridItem colSpan={1}>
          {" "}
          <Flex>
            <Checkbox ml={3} colorScheme="green"></Checkbox>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} color="#FFFFFF" fontSize="md" fontWeight="normal">
          Designing Checkify app
        </GridItem>
        <GridItem colSpan={4} color="#808B9A" fontSize="sm" fontWeight="normal">
          had to make design system color system and actual design also
        </GridItem>
        <GridItem colSpan={1}>
          <Flex>
            <Delete mr={2} />
            <Edit />
          </Flex>
        </GridItem>
      </Grid>
      <Grid
        templateColumns="repeat(8, 1fr)"
        gap={6}
        color="#C9C9C9"
        bg="#191919"
        mb={2}
        p={2}
      >
        <GridItem colSpan={1}>
          {" "}
          <Flex>
            <Checkbox ml={3} colorScheme="green"></Checkbox>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} color="#FFFFFF" fontSize="md" fontWeight="normal">
          Designing Checkify app
        </GridItem>
        <GridItem colSpan={4} color="#808B9A" fontSize="sm" fontWeight="normal">
          had to make design system color system and actual design also
        </GridItem>
        <GridItem colSpan={1}>
          <Flex>
            <Delete mr={2} />
            <Edit />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
