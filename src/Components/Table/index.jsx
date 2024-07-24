import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Flex,
  GridItem,
  Checkbox,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../Api/axios";
import AuthContext from "../../Services/context/AuthContext";
import { NavPersonal, NavWork } from "../Icons";

export default function Table({ initialData }) {
  const { userData } = useContext(AuthContext);
  const [data, setData] = useState(initialData);

  const handleCheckboxChange = async (uuid, value) => {
    try {
      await axios.post(`/task/updateTask/${userData.uuid}/${uuid}`, {
        isChecked: value,
      });

      setData((prevData) =>
        prevData.map((item) =>
          item.uuid === uuid ? { ...item, isChecked: value } : item
        )
      );

      toast.success("Task updated");
    } catch (error) {
      toast.error("Failed to update");
    }
  };

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <>
      <Box>
        <Grid
          templateColumns="repeat(8, 1fr)"
          gap={6}
          color="#C9C9C9"
          p={2}
          alignItems="center"
        >
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={2}>Title</GridItem>
          <GridItem colSpan={4}>Description</GridItem>
          <GridItem colSpan={1}>
            Type
          </GridItem>
        </Grid>
        {data?.map((item) => (
          <Grid
            templateColumns="repeat(8, 1fr)"
            gap={6}
            color="#C9C9C9"
            bg="#191919"
            mb={2}
            p={2}
            alignItems="center"
            key={item.uuid}
            cursor="pointer"
            _hover={{ bg: "#232323" }}
            _disabled={item.isChecked}
          >
            <GridItem colSpan={1}>
              <Flex>
                <Checkbox
                  ml={3}
                  colorScheme="green"
                  isChecked={item.isChecked} // Set the checked state based on item.isChecked
                  onChange={(e) => {
                    handleCheckboxChange(item.uuid, e.target.checked);
                  }}
                ></Checkbox>
              </Flex>
            </GridItem>
            <GridItem
              colSpan={2}
              color="#FFFFFF"
              fontSize="md"
              fontWeight="normal"
            >
              {item.title || "No title"}
            </GridItem>
            <GridItem
              colSpan={4}
              color="#808B9A"
              fontSize="sm"
              fontWeight="normal"
            >
              {item.description || "No description"}
            </GridItem>
            <GridItem colSpan={1}>
              {item.isPersonal ? (
                <NavPersonal h="24px" w="24px" mr="8px" color="#fff" />
              ) : (
                <NavWork h="18px" w="18px" mr="8px" color="#fff" />
              )}
            </GridItem>
          </Grid>
        ))}
      </Box>
      <ToastContainer />
    </>
  );
}
