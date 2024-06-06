import React, { useState } from "react";
import { Box, VStack, Text, Link, Flex, Button } from "@chakra-ui/react";
import { Table, AddItem } from "../Components";
import { Add } from "../Components/Icons";
import * as Yup from "yup";
import { todaysDate } from "../Services/helpers/todaysDate";

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const initialValues = {
  title: "",
  description: "",
};

export default function Dashboard() {
  const [isAdd, setIsAdd] = useState();

  return (
    <Box bg="#0F0F0F" ms="250px" p={10}>
      <Text color="#fff" fontSize="3xl">
        Your Task
      </Text>
      <Text color="#808B9A" fontSize="sm" mt={1}>
        {todaysDate()}
      </Text>
      <Flex mt={10} justifyContent="end">
        <Button type="submit" bg="#39610f" colorScheme="green" mr={6}>
          Show only Pending
        </Button>{" "}
        <Button type="submit" bg="#191919" colorScheme="green">
          Show only Pending
        </Button>
      </Flex>
      <Box mt={5}>
        <Table />
      </Box>
      <Box pos="fixed" bottom="24px" right="24px">
        <Add
          onClick={() => {
            setIsAdd(true);
          }}
        />
      </Box>

      <AddItem
        isOpen={isAdd}
        onClose={() => {
          setIsAdd(false);
        }}
        type="task"
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Box>
  );
}
