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
  const [isAdd, setIsAdd] = useState();
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

  return (
    <Box bg="#0F0F0F" ms="250px" p={10}>
      <Text color="#fff" fontSize="3xl">
        Sticky Notes
      </Text>
      <Text color="#808B9A" fontSize="sm" mt={1}>
        {todaysDate()}
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" mt={10}>
        {data?.map((note, i) => {
          return (
            <GridItem key={i}>
              <BasicCard
                bg="#191919"
                p={4}
                color="#fff"
                mr={6}
                mb={6}
                minH="250px"
                h="250px"
              >
                <Text>{note.body}</Text>
              </BasicCard>
            </GridItem>
          );
        })}

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
        handleSubmit={handleNoteSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Box>
  );
}
