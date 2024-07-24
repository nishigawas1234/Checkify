import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  VStack,
  Text,
  Link,
  Flex,
  Button,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BasicCard, AddItem } from "../Components";
import { AddWithoutBg } from "../Components/Icons";
import * as Yup from "yup";
import { todaysDate } from "../Services/helpers/todaysDate";
import axios from "../Api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from '../Services/context/AuthContext';

const validationSchema = Yup.object({
  description: Yup.string().required("Required"),
});

const initialValues = {
  description: "",
};

export default function Notes() {
  const { userData } = useContext(AuthContext);
  const [isAdd, setIsAdd] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotesData();
  }, [userData]);

  const getNotesData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `/note/getData/${userData.uuid}`
      );
      setData(response.data.notes);
      setIsAdd(false);
    } catch (err) {
      setError(err.message || "An error occurred");
    }
    setLoading(false);
  };

  const handleNoteSubmit = async (values) => {
    try {
      const response = await axios.post(
        `/note/addData/${userData.uuid}`,
        {
          body: values.description,
        }
      );
      setIsAdd(false);
      toast.success("Note added successfully!");
      getNotesData();
    } catch (err) {
      toast.error("Failed to add note. Please try again.");
      setError(err.message || "An error occurred");
    }
  };

  // Responsive grid template columns
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)", // 1 column on small screens
    md: "repeat(2, 1fr)", // 2 columns on medium screens
    lg: "repeat(3, 1fr)"  // 3 columns on large screens
  });

  return (
    <Box bg="#0F0F0F" mt={{base:"70px" , md:"0"}} ms={{ base: 0, md: "0" }} p={{ base: 4, md: 10 }}>
      <Text color="#fff" fontSize={{ base: "xl", md: "3xl" }}>
        Sticky Notes
      </Text>
      <Text color="#808B9A" fontSize={{ base: "xs", md: "sm" }} mt={1}>
        {todaysDate()}
      </Text>
      <Grid
        templateColumns={gridTemplateColumns}
        gap={6}
        mt={10}
      >
        {data?.map((note, i) => (
          <GridItem key={i}>
            <BasicCard
              bg="#191919"
              p={4}
              color="#fff"
              minH="250px"
              h="250px"
            >
              <Text>{note.body}</Text>
            </BasicCard>
          </GridItem>
        ))}
        <GridItem>
          <BasicCard
            bg="#191919"
            p={4}
            color="#fff"
            minH="250px"
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
        handleSubmit={handleNoteSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Box>
  );
}
