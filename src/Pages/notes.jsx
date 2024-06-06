import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Link,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BasicCard, AddItem } from "../Components";
import { AddWithoutBg } from "../Components/Icons";
import * as Yup from "yup";
import { todaysDate } from "../Services/helpers/todaysDate";

const validationSchema = Yup.object({
  description: Yup.string().required("Required"),
});

const initialValues = {
  description: "",
};

export default function Notes() {
  const [isAdd, setIsAdd] = useState();

  return (
    <Box bg="#0F0F0F" ms="250px" p={10}>
      <Text color="#fff" fontSize="3xl">
        Sticky Notes
      </Text>
      <Text color="#808B9A" fontSize="sm" mt={1}>
        {todaysDate()}
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" mt={10}>
        <GridItem>
          <BasicCard
            bg="#191919"
            p={4}
            color="#fff"
            mr={6}
            mb={6}
            minH="250px"
            h="250px"
          >
            <Text>
              Research potential vacation destinations for summer trip planning,
              considering budget, activities, and accommodations RSVP to the
              company holiday party invitation promptly to secure your spot and
              make arrangements for any necessary attire or transportation
            </Text>
          </BasicCard>
        </GridItem>
        <GridItem>
          <BasicCard
            bg="#191919"
            p={4}
            color="#fff"
            mr={6}
            mb={6}
            minH="250px"
            h="250px"
          >
            <Text>
              Research potential vacation destinations for summer trip planning,
              considering budget, activities, and accommodations RSVP to the
              company holiday party invitation promptly to secure your spot and
              make arrangements for any necessary attire or transportation
            </Text>
          </BasicCard>{" "}
        </GridItem>
        <GridItem>
          <BasicCard
            bg="#191919"
            p={4}
            color="#fff"
            mr={6}
            mb={6}
            minH="250px"
            h="250px"
          >
            <Text>
              Research potential vacation destinations for summer trip planning,
              considering budget, activities, and accommodations RSVP to the
              company holiday party invitation promptly to secure your spot and
              make arrangements for any necessary attire or transportation
              company holiday party invitation promptly to secure your spot and
              make arrangements for any necessary attire or transportation
            </Text>
          </BasicCard>
        </GridItem>
        <GridItem>
          <BasicCard
            bg="#191919"
            p={4}
            color="#fff"
            mr={6}
            minH="250px"
            mb={6}
            h="250px"
          >
            <AddWithoutBg
              m="auto"
              onClick={() => {
                setIsAdd(true);
              }}
            />
          </BasicCard>
        </GridItem>
      </Grid>
      <AddItem
        isOpen={isAdd}
        onClose={() => {
          setIsAdd(false);
        }}
        type="note"
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Box>
  );
}
