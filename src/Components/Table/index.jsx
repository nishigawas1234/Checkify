import React, { useState } from "react";
import {
  Box,
  Grid,
  Flex,
  GridItem,
  Checkbox,
  useDisclosure
} from "@chakra-ui/react";
import { Delete, Edit } from "../Icons";
import AddItem from "../Model/AddItem"; // Adjust the import path as necessary
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Table({ data}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentItem, setCurrentItem] = useState(null);

  const handleEditClick = (item) => {
    setCurrentItem(item);
    onOpen();
  };;


  return (
    <>
      <Box>
        <Grid templateColumns="repeat(8, 1fr)" gap={6} color="#C9C9C9" p={2}>
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={2}>Title</GridItem>
          <GridItem colSpan={4}>Description</GridItem>
          <GridItem colSpan={1}></GridItem>
        </Grid>
        {data?.map(item => (
          <Grid
            templateColumns="repeat(8, 1fr)"
            gap={6}
            color="#C9C9C9"
            bg="#191919"
            mb={2}
            p={2}
            key={item.uuid}
            _disabled={item.isChecked}
          >
            <GridItem colSpan={1}>
              <Flex>
                <Checkbox
                  ml={3}
                  colorScheme="green"
                  isChecked={item.isChecked}
                ></Checkbox>
              </Flex>
            </GridItem>
            <GridItem colSpan={2} color="#FFFFFF" fontSize="md" fontWeight="normal">
              {item.title || "No title"}
            </GridItem>
            <GridItem colSpan={4} color="#808B9A" fontSize="sm" fontWeight="normal">
              {item.description || "No description"}
            </GridItem>
            <GridItem colSpan={1}>
              {/* <Flex>
                <Delete mr={2} />
                <Edit onClick={() => handleEditClick(item)} />
              </Flex> */}
            </GridItem>
          </Grid>
        ))}
      </Box>
      {/* {currentItem && (
        <AddItem
          isOpen={isOpen}
          onClose={onClose}
          type="task"
          initialValues={ {
            description:currentItem.description,
            title:currentItem.title,
          }}
          onSubmit={handleSubmit}
        />
      )} */}
    </>
  );
}
